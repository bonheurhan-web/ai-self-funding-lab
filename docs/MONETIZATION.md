# Monetization Policy

## Current operating constraint

Under the current mainland China operating setup, the Chairman has:

- A mainland China PayPal account
- A Google account
- A mainland China bank card or Visa card

Phase 1 monetization must therefore prioritize low-friction methods that work with the available accounts and do not require overseas company formation.

## Allowed in Phase 1

1. PayPal support links
2. PayPal payment links for digital downloads
3. Affiliate links that can pay out through PayPal or bank transfer
4. Google AdSense placeholders, activated only after eligible traffic and site approval

## Disallowed without explicit Chairman approval

1. Stripe integrations
2. Credit card checkout
3. Subscription billing
4. Complex merchant-of-record integrations
5. Cryptocurrency payments
6. Any payment system requiring overseas company setup

## Implementation rule

Do not build payment APIs before there is evidence of demand. Use static PayPal links first when direct payment is justified.

Payment credentials, account identifiers, and private payment data must never be committed to the repository or exposed in client-side code.

## First monetization milestone

The first milestone is not withdrawal to a bank account. It is verified revenue appearing in at least one approved source:

- PayPal
- Google AdSense
- An affiliate dashboard

Revenue must be recorded using the source dashboard and reporting rules defined in [`METRICS.md`](METRICS.md).

## Project requirement

Every project proposal must identify:

- The selected Phase 1 monetization method
- Why it is compatible with the current operating setup
- The demand evidence required before implementation
- The dashboard source that will verify first revenue
- Any action requiring explicit Chairman approval
