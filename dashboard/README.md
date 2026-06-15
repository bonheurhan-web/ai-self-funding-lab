# Portfolio Dashboard

`projects.json` is the canonical, machine-readable list of projects and their latest metric snapshots. It intentionally uses a JSON file instead of a database until portfolio scale or concurrent writes justify more infrastructure.

The file must validate against `project.schema.json`.

## Validate

From the repository root:

```bash
npm install
npm run validate:dashboard
```

Validation checks the JSON Schema, unique project names, data-window ordering, and financial calculations. Failure returns a non-zero exit code.

## Fields

| Field | Definition |
| --- | --- |
| `project_name` | Unique, stable project slug in `kebab-case` |
| `status` | One of `proposed`, `validating`, `building`, `launched`, `measuring`, `scaling`, `paused`, or `killed` |
| `created_at` | Project creation time as a UTC ISO 8601 timestamp |
| `deployments` | Known preview and production deployments, including URL, revision, result, and time |
| `indexed_pages` | Search-engine indexed pages measured at the end of the data window |
| `visitors` | Unique visitors during the data window |
| `revenue` | Gross recognized revenue in USD during the data window |
| `cost` | Direct attributable cost in USD during the same data window |
| `profit` | `revenue - cost`, rounded to two decimal places |
| `roi` | `(profit / cost) x 100`, rounded to two decimal places |
| `data_window` | Start, end, and timezone shared by visitors and financial metrics |

## Missing data

All required keys must be present.

- Use `null` when a metric has not been measured or its source is unavailable.
- Use `0` only when the source was checked and the measured value is confirmed to be zero.
- Use `[]` for `deployments` when it is confirmed that no deployment exists.
- Use `data_window: null` before any windowed metrics are recorded.
- Never replace missing data with zero during import or reporting.

If either `revenue` or `cost` is `null`, both `profit` and `roi` must be `null`.

## Financial rules

- Monetary values are JSON numbers denominated in USD.
- Store monetary values with no more than two meaningful decimal places.
- `profit = revenue - cost`.
- `roi = (profit / cost) x 100`.
- When `cost` is zero, `roi` must be `null` because percentage ROI is undefined.
- Revenue, cost, profit, and ROI must use the same data window.
- Refunds reduce revenue. Taxes collected for authorities are excluded.
- Shared company costs must use a documented allocation rule or remain company overhead.

## Data windows

`data_window` records:

```json
{
  "start": "2026-06-01T00:00:00Z",
  "end": "2026-07-01T00:00:00Z",
  "timezone": "UTC"
}
```

Use half-open reporting windows: `start` is inclusive and `end` is exclusive. Visitors, revenue, cost, profit, and ROI must cover that exact window. `indexed_pages` is a snapshot taken at or near `end`.

## Updating project data

1. Add or edit one project object in `projects.json`.
2. Preserve `project_name` after creation.
3. Update all related financial fields and `data_window` together.
4. Keep raw source exports in `metrics/YYYY-MM/<project_name>/`.
5. Run `npm run validate:dashboard`.
6. Commit dashboard updates separately from product code when practical.

An empty `[]` means no project has yet passed the governance step required for dashboard registration.
