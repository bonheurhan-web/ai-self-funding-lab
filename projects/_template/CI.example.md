# CI Contract

Create a root-level GitHub Actions job for this project with a path filter covering:

- This project directory
- Shared modules consumed by the project
- The workflow file

The job must:

1. Install dependencies from a lockfile.
2. Run lint or static analysis.
3. Run unit tests.
4. Run the production build.
5. Run relevant integration or end-to-end tests.

Do not copy credentials into workflow files. Use protected environments for production deployment.
