# Metrics Standard

The canonical portfolio dataset is `dashboard/projects.json`, validated by `dashboard/project.schema.json`.

## Required project fields

| Field | Definition |
| --- | --- |
| `project_name` | Unique stable project slug |
| `status` | Current portfolio stage or terminal state |
| `created_at` | UTC ISO 8601 project creation timestamp |
| `deployments` | Deployment history with environment, URL, revision, status, and timestamp |
| `indexed_pages` | Search-engine indexed pages at snapshot time |
| `visitors` | Unique visitors during the reporting period |
| `revenue` | Gross recognized revenue in USD during the reporting period |
| `cost` | Direct attributable cost in USD during the reporting period |
| `profit` | `revenue - cost` |
| `roi` | `(profit / cost) x 100`; `null` when cost is zero |

## Reporting rules

- Monetary values use USD and two decimal places.
- Visitor and indexing windows must be stated in the report.
- Revenue and cost use the same reporting period.
- Refunds reduce revenue; taxes collected for authorities are excluded.
- Shared costs are allocated using a documented rule or reported separately as company overhead.
- Missing data is `null`, never silently converted to zero.
- Dashboard values are snapshots; raw source exports belong in `metrics/`.

## Company metrics

- Portfolio monthly revenue
- Portfolio monthly cost
- Portfolio monthly profit
- Portfolio ROI
- Active, launched, profitable, paused, and killed project counts
- Median time from creation to first deployment
- Median time from deployment to first revenue
- Revenue concentration by project
- Target coverage: portfolio monthly revenue divided by current ChatGPT Pro monthly price
