variable "region" {
  description = "AWS region"
  type        = string
  default     = "eu-west-2"
}

variable "aws_profile" {
  description = "AWS CLI profile for the creative account"
  type        = string
  default     = "creative"
}

variable "vpc_id" {
  description = "Existing VPC ID to deploy into"
  type        = string
}

variable "admin_password" {
  description = "Admin login password"
  type        = string
  sensitive   = true
}

variable "admin_token" {
  description = "Admin session token"
  type        = string
  sensitive   = true
}
