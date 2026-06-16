# AI Workflow Library Operations

This document defines daily operations for `ai-workflow-library` after preview deployment. The goal
is to observe real user behavior while keeping the product stable and low-risk.

## Daily responsibilities

Check these items every day:

- Preview page is accessible
- All 6 pages are accessible
- Internal links are working
- PayPal remains a placeholder
- No real payment link has been added by mistake
- Build and test status are passing
- `dashboard/projects.json` status is correct
- New data that should be recorded
- Risks or unusual behavior

## Daily report schedule

Daily reports are produced at 22:30 Beijing time.

Report path:

`reports/daily/YYYY-MM-DD-ai-workflow-library.md`

A report must be created even when there is no traffic, click, or revenue data. In that case, record
`No data yet`.

Daily reports must include:

- Date
- Project status
- Page access status
- Build status
- Test status
- Payment status
- Data status
- Visit data
- PayPal click data
- Revenue data
- Issues found
- Actions allowed today
- Items requiring Chairman approval
- Recommendation for tomorrow

## Immediate incident reports

Do not wait for the daily report if any of these events happen:

- Page is not accessible
- Build fails
- Test fails
- PayPal link behaves incorrectly
- A real payment link is added by mistake
- Page contains guaranteed-income language
- Someone clicks a payment entry
- First revenue is generated

Incident report path:

`reports/incidents/YYYY-MM-DD-short-title.md`

Incident reports must include:

- Event time
- Event type
- Impact scope
- Current status
- Actions taken
- Whether Chairman approval is required
- Recommended next step

## Codex permission boundary

Codex may do these autonomously:

- Fix spelling errors
- Fix clearly broken links
- Update daily reports
- Update incident reports
- Update checklists
- Run tests
- Run builds
- Update non-financial status fields in `dashboard/projects.json`

Codex must not do these autonomously:

- Production deployment
- Add a real PayPal link
- Publish to Xiaohongshu or any community
- Buy a domain
- Integrate Stripe
- Add a database
- Add a login system
- Add automatic delivery
- Change the price
- Change the business model
- Start a second project

## Exception handling

If any of these are found:

- Page cannot be opened
- Build fails
- Test fails
- Payment link behaves incorrectly
- Real payment link appears
- Page contains guaranteed-income language
- Project status does not match actual state

Then:

- Record it in the daily report or an incident report
- Do not expand the scope of changes
- Apply a small fix only when the fix is obvious and low-risk
- Wait for Chairman approval when the issue involves payment, deployment, business model, or user-facing risk
