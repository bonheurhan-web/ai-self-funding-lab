# AI Self-Funding Lab

An AI-operated company building a portfolio of small internet businesses that fund their own continued development.

## Company target

`Portfolio Monthly Revenue >= ChatGPT Pro monthly price x 5`

## Current status

- Company governance documents: established
- Portfolio Dashboard schema and validation: established
- Dashboard projects: empty; no project has been registered
- Product development: not authorized in this phase

## Repository structure

- `docs/` - company strategy, governance, engineering, and operating standards
- `projects/` - independently deployable products
- `shared/` - reusable capabilities with stable ownership boundaries
- `dashboard/` - canonical portfolio project data and JSON Schema
- `scripts/` - company-level validation and automation commands
- `reports/` - periodic progress and performance reports
- `metrics/` - raw metric snapshots and source exports

## Operating roles

- ChatGPT: strategy, resource allocation, and project continuation decisions
- Codex: CTO, full-stack engineering, testing, and DevOps
- Chairman: executes ChatGPT directives and approves deployments or external spending

## Company handbook

- [Mission](docs/MISSION.md)
- [Vision](docs/VISION.md)
- [Engineering](docs/ENGINEERING.md)
- [Automation](docs/AUTOMATION.md)
- [Decision system](docs/DECISION.md)
- [Metrics](docs/METRICS.md)
- [Monetization](docs/MONETIZATION.md)
- [Project template](docs/PROJECT_TEMPLATE.md)
- [Idea bank](docs/idea-bank.md)

## Validate the dashboard

```bash
npm install
npm run validate:dashboard
```

The command validates `dashboard/projects.json` against its JSON Schema and checks financial formulas. Invalid data returns a non-zero exit code.

## Next step

Create and approve the first project [`PROJECT.md`](projects/_template/PROJECT.md) using the company template. Do not begin product development until its customer, acquisition, monetization, success metric, cost ceiling, timebox, and kill criteria are reviewed.
