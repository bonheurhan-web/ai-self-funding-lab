# Project Template

Every project starts by copying `projects/_template/` to `projects/<project-name>/`.

## Required project definition

Before development, complete `PROJECT.md` with:

- Customer and problem
- Proposed solution
- Acquisition hypothesis
- Monetization hypothesis
- Phase 1 monetization method permitted by [`MONETIZATION.md`](MONETIZATION.md)
- Demand evidence required before monetization implementation
- Revenue verification source
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

## Monetization gate

- No payment API may be built before evidence of demand.
- Static PayPal links are the default direct-payment method in Phase 1.
- Stripe, card checkout, subscriptions, merchant-of-record systems, cryptocurrency, and payment systems requiring overseas company setup require explicit Chairman approval.
- The first monetization milestone is verified revenue in PayPal, Google AdSense, or an approved affiliate dashboard, not bank withdrawal.

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
8. Monetization method complies with `docs/MONETIZATION.md`.
