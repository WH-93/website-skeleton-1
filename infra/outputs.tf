output "alb_dns" {
  description = "ALB DNS name — point your domain here"
  value       = aws_lb.app.dns_name
}

output "ecr_repo" {
  description = "ECR repository URL"
  value       = aws_ecr_repository.app.repository_url
}
