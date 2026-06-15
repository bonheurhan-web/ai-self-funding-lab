# Create Portfolio Dashboard Before Product Work

## Context

AI Self-Funding Lab needs comparable records for project status, deployment history, traffic, search indexing, revenue, cost, profit, and ROI. Starting product work without this foundation would create inconsistent measurements and weaken later continue, pause, scale, or kill decisions.

## Options considered

1. Start the first product and add measurement later.
2. Build a database-backed dashboard before any product work.
3. Establish a versioned JSON file, JSON Schema, validation command, and documented update rules first.

## Decision

Before launching any product project, establish the Portfolio Dashboard as the minimum viable data infrastructure. Use `dashboard/projects.json` as the initial data layer, validate it with `dashboard/project.schema.json`, and require a passing validation command before changes are accepted.

## Evidence

- The company mission depends on auditable portfolio revenue and cost.
- `docs/METRICS.md` defines metrics that must be comparable across projects.
- JSON supports the current single-writer workflow without database operations or hosting cost.
- JSON Schema provides a portable contract and can be replaced or migrated later without changing metric definitions.

## Expected result

- Every approved project begins with the same required fields.
- Missing data remains distinguishable from confirmed zero.
- Invalid statuses, malformed deployments, and inconsistent financial calculations fail CI.
- Portfolio reporting can be automated from one documented source.

## Cost and risk

- Cost: two small validation dependencies and maintenance of a JSON file.
- Risk: manual merge conflicts and slower queries as the portfolio grows.
- Mitigation: keep one record per project, validate every change, and review migration to a database only when concurrent writes or query volume justify it.

## Review date

2026-06-22, or immediately after the first approved project completes its first reporting window.

## Outcome

Implemented on 2026-06-15. The dashboard starts as an empty array and must pass `npm run validate:dashboard`. Effectiveness will be reviewed after the first approved project supplies real data.
