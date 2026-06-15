# Shared Deployment

Reusable deployment conventions, environment definitions, health checks, rollback procedures, and provider configuration belong here.

Each project still owns its production target and deployment file. Shared deployment assets must not require all projects to release together.

Production deployment requires:

- Passing CI
- Explicit environment variables
- Documented rollback
- Least-privilege credentials
- Chairman approval for first launch or material infrastructure spending
