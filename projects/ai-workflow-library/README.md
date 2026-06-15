# AI Workflow Library

Minimal static presale page for the first AI Self-Funding Lab revenue experiment. English is the
primary page language, with Chinese explanations where they help Chairman review.

## Current scope

- One static homepage
- Five asset summary pages
- Free download, PayPal support, PayPal purchase, and affiliate placeholders
- No database, login, subscription, automatic delivery, or production deployment

PayPal is registered and awaiting review. Real payment URLs must not be added until Chairman confirms
they work and separately approves their use. Production deployment also requires Chairman approval.

## Local development

From the repository root:

```sh
npm install
npm run dev
```

The development server prints the local preview URL.

## Validation

```sh
npm run validate:dashboard
npm run build
npm run test
```

`npm run build` performs Astro's static checks before generating the site. `npm run test` rebuilds
the site and verifies all six expected pages, internal links, required disclosures, payment pending
copy, and the absence of a real PayPal URL.

## Environment variables

Copy `.env.example` to a local `.env` only when testing approved values. Keep all example values
empty. Never commit real account details or URLs without explicit approval.
