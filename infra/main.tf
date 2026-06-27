terraform {
  required_version = ">= 1.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket         = "bc-recruitment-tfstate"
    key            = "terraform.tfstate"
    region         = "eu-west-2"
    encrypt        = true
    dynamodb_table = "bc-recruitment-tfstate-lock"
  }
}

provider "aws" {
  region  = var.region
  profile = var.aws_profile
}

# ── Data sources: existing VPC ──
data "aws_vpc" "default" {
  id = var.vpc_id
}

data "aws_subnets" "public" {
  filter {
    name   = "vpc-id"
    values = [var.vpc_id]
  }
  filter {
    name   = "map-public-ip-on-launch"
    values = ["true"]
  }
}

# ── ECR ──
resource "aws_ecr_repository" "app" {
  name                 = "bc-recruitment"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
}

# ── EFS for SQLite persistence ──
resource "aws_efs_file_system" "data" {
  creation_token   = "bc-recruitment-data"
  performance_mode = "generalPurpose"
  encrypted        = true

  tags = { Name = "bc-recruitment-data" }
}

resource "aws_security_group" "efs" {
  name        = "bc-recruitment-efs"
  description = "Allow NFS from ECS tasks"
  vpc_id      = var.vpc_id

  ingress {
    from_port       = 2049
    to_port         = 2049
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs.id]
  }

  tags = { Name = "bc-recruitment-efs" }
}

resource "aws_efs_mount_target" "data" {
  for_each        = toset(data.aws_subnets.public.ids)
  file_system_id  = aws_efs_file_system.data.id
  subnet_id       = each.value
  security_groups = [aws_security_group.efs.id]
}

resource "aws_efs_access_point" "data" {
  file_system_id = aws_efs_file_system.data.id
  posix_user {
    uid = 1000
    gid = 1000
  }
  root_directory {
    path = "/data"
    creation_info {
      owner_uid   = 1000
      owner_gid   = 1000
      permissions = "755"
    }
  }
}

# ── Security Groups ──
resource "aws_security_group" "alb" {
  name        = "bc-recruitment-alb"
  description = "Allow HTTP/HTTPS from internet"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "bc-recruitment-alb" }
}

resource "aws_security_group" "ecs" {
  name        = "bc-recruitment-ecs"
  description = "Allow traffic from ALB on port 3000"
  vpc_id      = var.vpc_id

  ingress {
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "bc-recruitment-ecs" }
}

# ── ALB ──
resource "aws_lb" "app" {
  name               = "bc-recruitment"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = data.aws_subnets.public.ids

  tags = { Name = "bc-recruitment" }
}

resource "aws_lb_target_group" "app" {
  name        = "bc-recruitment"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"

  health_check {
    path                = "/"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 3
    matcher             = "200"
  }

  tags = { Name = "bc-recruitment" }
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.app.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"
    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

# ── HTTPS (imported cert — Cloudflare terminates SSL at edge) ──
resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.app.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn   = "arn:aws:acm:eu-west-2:486208157703:certificate/93f1329e-b316-4b3d-8f76-45154eab338f"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.app.arn
  }
}

# ── Redirect rules: all domains → https://bcfinancialsearch.co.uk ──
resource "aws_lb_listener_rule" "redirect_com" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 1

  action {
    type = "redirect"
    redirect {
      host        = "bcfinancialsearch.co.uk"
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }

  condition {
    host_header {
      values = ["bcfinancialsearch.com"]
    }
  }
}

resource "aws_lb_listener_rule" "redirect_www_couk" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 2

  action {
    type = "redirect"
    redirect {
      host        = "bcfinancialsearch.co.uk"
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }

  condition {
    host_header {
      values = ["www.bcfinancialsearch.co.uk"]
    }
  }
}

resource "aws_lb_listener_rule" "redirect_www_com" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 3

  action {
    type = "redirect"
    redirect {
      host        = "bcfinancialsearch.co.uk"
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }

  condition {
    host_header {
      values = ["www.bcfinancialsearch.com"]
    }
  }
}

# ── IAM ──
resource "aws_iam_role" "execution" {
  name = "bc-recruitment-execution"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "execution" {
  role       = aws_iam_role.execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role" "task" {
  name = "bc-recruitment-task"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy" "task_efs" {
  name = "bc-recruitment-efs"
  role = aws_iam_role.task.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "elasticfilesystem:ClientMount",
          "elasticfilesystem:ClientWrite",
        ]
        Resource = aws_efs_file_system.data.arn
      }
    ]
  })
}

# ── CloudWatch Logs ──
resource "aws_cloudwatch_log_group" "app" {
  name              = "/ecs/bc-recruitment"
  retention_in_days = 14
}

# ── ECS ──
resource "aws_ecs_cluster" "app" {
  name = "bc-recruitment"
}

resource "aws_ecs_task_definition" "app" {
  family                   = "bc-recruitment"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024
  execution_role_arn       = aws_iam_role.execution.arn
  task_role_arn            = aws_iam_role.task.arn
  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture        = "ARM64"
  }

  container_definitions = jsonencode([{
    name  = "app"
    image = "${aws_ecr_repository.app.repository_url}:latest"
    portMappings = [{
      containerPort = 3000
      protocol      = "tcp"
    }]

    environment = [
      { name = "DATABASE_URL", value = "file:/data/dev.db" },
      { name = "ADMIN_PASSWORD", value = var.admin_password },
      { name = "ADMIN_TOKEN", value = var.admin_token },
      { name = "NODE_ENV", value = "production" },
    ]

    mountPoints = [{
      sourceVolume  = "data"
      containerPath = "/data"
    }]

    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = aws_cloudwatch_log_group.app.name
        "awslogs-region"        = var.region
        "awslogs-stream-prefix" = "app"
      }
    }
  }])

  volume {
    name = "data"
    efs_volume_configuration {
      file_system_id     = aws_efs_file_system.data.id
      transit_encryption = "ENABLED"
      authorization_config {
        access_point_id = aws_efs_access_point.data.id
      }
    }
  }
}

resource "aws_ecs_service" "app" {
  name            = "bc-recruitment"
  cluster         = aws_ecs_cluster.app.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = data.aws_subnets.public.ids
    security_groups  = [aws_security_group.ecs.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.app.arn
    container_name   = "app"
    container_port   = 3000
  }

  depends_on = [aws_lb_listener.http]
}
