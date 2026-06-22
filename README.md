# E-commerce Store

A Next.js 14 storefront with a seeded product catalog, category browsing, product detail pages, and cart/checkout flows.

## PAP-445 overview

This ticket fixes the missing product image problem and makes the catalog feel complete enough for demo and QA use.

What was built for PAP-445:
- product imagery now resolves from local `/public/products` assets instead of fragile remote placeholders
- catalog seed expanded to **50 products**
- products are evenly distributed across these categories:
  - Workspace
  - Home
  - Audio
  - Travel
  - Wellness
- featured inventory expanded so the homepage has richer merchandising
- SVG product art is rendered safely in both product cards and product detail views

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Setup

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm run start
```

## What to verify

For PAP-445, release validation should confirm:
- homepage featured products show visible images
- `/products` lists **50 seeded products**
- category filters still work across all five product groups
- product detail pages show the same local product artwork reliably
- no primary catalog image depends on `placehold.co`

## Project structure

```text
app/                  Next.js App Router pages
components/           storefront UI components
data/products.json    seeded product catalog (50 items)
public/products/      local product artwork used by the catalog
docs/                 implementation notes and handoff docs
```

## Notes for deployment / PR review

- Install dependencies with `npm install` before running the app.
- If reviewing visually, spot-check the homepage, catalog page, and a few product detail pages.
- The seeded catalog is intentionally large enough to exercise product-grid and filtering behavior.
