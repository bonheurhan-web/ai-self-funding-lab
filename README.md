# Micro Dev Tools

Fast, private developer utilities built with Next.js, TypeScript, and Tailwind CSS. The site statically exports 10 SEO-ready tool pages for Cloudflare Pages.

## Included tools

- UUID v4 Generator
- ULID Generator
- Base64 Encoder and Decoder
- URL Encoder and Decoder
- JSON Formatter and Validator
- Unix Timestamp Converter
- SHA256 Hash Generator

Every tool page includes a title, meta description, canonical URL, H1, instructions, three examples, three FAQs, related tools, and `SoftwareApplication` JSON-LD.

## Local development

Requirements: Node.js 24+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

`npm run build` creates the static site in `out/`.

## Site URL

The default canonical origin is `https://devtoolkit.cc`. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before building if a different domain is registered:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com npm run build
```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages** and select **Create application**.
3. Choose **Pages**, then **Import an existing Git repository**.
4. Select this repository and use:
   - Framework preset: `Next.js (Static HTML Export)`
   - Production branch: `main`
   - Build command: `npx next build`
   - Build output directory: `out`
5. Add `NEXT_PUBLIC_SITE_URL` as a production environment variable with the final domain.
6. Deploy. Cloudflare will provide a temporary `*.pages.dev` URL.
7. In the Pages project, open **Custom domains**, add the registered domain, and follow the DNS instructions.

Cloudflare rebuilds production after pushes to `main` and creates preview deployments for pull requests.

## Continuous integration

GitHub Actions runs lint, unit tests, and the production build on pushes to `main` and on pull requests.
