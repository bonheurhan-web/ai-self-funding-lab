# Dashboard

This directory is the canonical machine-readable portfolio state.

- `project.schema.json` defines the data contract.
- `projects.json` contains current project snapshots.
- `project.example.json` demonstrates one valid record.
- `validate.mjs` checks required fields, types, status values, and financial calculations.

Run:

```bash
node dashboard/validate.mjs
```

Dashboard changes must be factual, traceable to a source, and committed separately from product code when practical.
