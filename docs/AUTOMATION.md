# Automation Standard

Automation exists to increase experiment throughput, reduce operating errors, and make company state observable.

## Priority order

1. Verification: lint, tests, builds, link and schema checks.
2. Deployment: repeatable preview and production releases.
3. Measurement: traffic, indexing, revenue, cost, and uptime collection.
4. Reporting: portfolio snapshots and decision prompts.
5. Operations: alerts, backups, dependency maintenance, and routine content updates.

## Rules

- Automate a documented stable process, not an unresolved decision.
- Every automation has an owner, trigger, inputs, outputs, failure signal, and recovery path.
- Automations must be idempotent where possible.
- Dry-run mode is required for destructive, billing, publishing, or bulk-change operations.
- Human approval remains mandatory for spending, account creation, credential changes, production launch, and destructive actions.
- Secrets must be read from approved secret stores and never written to logs or repository files.
- Failures must be visible; silent retries cannot hide a persistent fault.

## Maturity levels

- Level 0: manual and undocumented.
- Level 1: documented checklist.
- Level 2: scripted with manual execution.
- Level 3: automatically triggered with observable results.
- Level 4: automatically recovered within defined limits.

Projects should reach Level 3 for testing, deployment, and metric collection before scaling.

## Automation record

Each material automation must document:

- Name and purpose
- Owner
- Trigger and schedule
- Required permissions
- Inputs and outputs
- Success and failure signals
- Retry policy
- Manual recovery procedure
