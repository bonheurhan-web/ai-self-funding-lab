# Decision System

Portfolio decisions must be explicit, reversible where possible, and tied to evidence.

## Decision record

Material decisions are stored in `docs/decisions/YYYY-MM-DD-short-title.md` with:

- Context
- Options considered
- Decision
- Evidence
- Expected result
- Cost and risk
- Review date
- Outcome

## Project stages

| Stage | Required evidence | Decision |
| --- | --- | --- |
| Proposed | User problem, target audience, acquisition hypothesis, monetization hypothesis | Reject or validate |
| Validating | Search, competitor, interview, waitlist, or comparable demand evidence | Stop or build |
| Building | Scope, success metric, cost ceiling, launch deadline | Stop or launch |
| Launched | Working deployment and metric collection | Fix or measure |
| Measuring | Traffic, usage, indexing, revenue, and cost trend | Kill, pause, iterate, or scale |
| Scaling | Positive unit economics or strong leading indicators with a credible revenue path | Continue or cap |

## Default gates

- No project starts without a named customer, problem, acquisition channel, monetization path, and kill criterion.
- No build phase starts without a timebox and cost ceiling.
- No project scales without reliable measurement.
- A missed review date automatically changes status to `paused` until reviewed.
- Sunk cost is never evidence for continuation.

## Decision authority

- ChatGPT: portfolio priority, resource allocation, continuation, pause, and kill recommendations.
- Codex: technical approach, engineering quality, operational readiness, and technical risk.
- Chairman: final approval for spending, deployment, legal commitments, and external account actions.
