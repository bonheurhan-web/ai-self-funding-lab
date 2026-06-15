# Project Template

Every project starts by copying `projects/_template/` to `projects/<project-name>/`.

## Required project definition

Before development, complete `PROJECT.md` with:

- Customer and problem
- Proposed solution
- Acquisition hypothesis
- Monetization hypothesis
- Primary success metric
- Validation evidence
- Scope and non-goals
- Timebox and cost ceiling
- Kill criteria
- Risks and dependencies
- Owner and next review date

## Required project structure

```text
projects/<project-name>/
  README.md
  PROJECT.md
  docs/
  src/
  tests/
```

Framework-specific files may be added, but these ownership boundaries remain.

## Required operating capabilities

- Reproducible local setup
- Lockfile-based dependency installation
- Lint or static analysis
- Unit tests for business logic
- Production build
- CI on pull requests and the default branch
- Documented deployment and rollback
- Privacy-safe analytics
- Dashboard record before production launch

## Launch checklist

1. Project definition and kill criteria approved.
2. Build, tests, and CI pass.
3. Production URL, owner, and rollback are documented.
4. Analytics, indexing, revenue, and cost measurement are configured.
5. Security and secret handling are reviewed.
6. Dashboard record is added.
7. Production deployment receives Chairman approval.
