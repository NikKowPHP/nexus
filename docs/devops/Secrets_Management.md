# Secrets Management Protocol

## Overview
This document outlines the process for managing sensitive credentials and environment variables across different environments (development, staging, production).

## Secret Storage
- Production secrets: Stored in AWS Secrets Manager
- Staging secrets: Stored in AWS Secrets Manager with restricted access
- Development secrets: Stored in `.env.local` (never committed to version control)

## Access Control
- Production secrets: Accessible only to CI/CD pipeline and authorized DevOps personnel
- Staging secrets: Accessible to developers and QA team
- Development secrets: Accessible to all developers

## Rotation Policy
1. Database credentials: Rotated every 90 days
2. API keys: Rotated every 180 days or when compromised
3. JWT secrets: Rotated every year

## Implementation
```bash
# Example AWS CLI command to create a secret
aws secretsmanager create-secret \
  --name "prod/database" \
  --description "Production database credentials" \
  --secret-string '{"username":"prod_user","password":"prod_password"}'
```

## Emergency Procedures
1. If secrets are compromised:
   - Immediately rotate all affected secrets
   - Audit access logs
   - Notify security team