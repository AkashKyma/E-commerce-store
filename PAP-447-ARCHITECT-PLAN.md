# PAP-447 Architect Plan

## Ticket
**PAP-447 — "Its Good But i Want catagories the Products"**

User ask:
- Add product categories around **Fashion, Electronics, Men wear, Womens, Decor Items**
- Seed **100 products**
- Use **actual product images**, **not random** images
- This phase is **plan/design only**

## Current stack
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Catalog source:** static `data/products.json`
- **Rendering:** server components + small client filters/cart
- **Image approach today:** product records point at `/product-images/[slug]`, and that route generates **SVG illustrations**, not real product photos

## Current relevant files
- `data/products.json` — seeded catalog (currently 55 products)
- `src/types.ts` — `Product` type
- `src/products.ts` — product helpers and category list
- `app/products/page.tsx` — category filtering + sorting logic
- `components/filter-sidebar.tsx` — category selector UI
- `components/products-catalog.tsx` — catalog wrapper + counts
- `components/product-card.tsx` — category badge + image usage
- `components/product-detail.tsx` — image/category detail view
- `app/product-images/[slug]/route.ts` — generated SVG image endpoint
- `src/product-illustrations.ts` — category theme map for generated art
- `components/hero-section.tsx` — homepage copy still reflects old lifestyle catalog

## Scope analysis
The request is not just "show categories". The catalog already supports categories technically, but the current seeded dataset and homepage positioning are built around the wrong taxonomy.

The real change needed is:
1. **Replace the existing catalog taxonomy** with commerce categories the user requested
2. **Expand seed data from 55 to 100 products**
3. **Replace generated illustrations with actual product photos**
4. **Update homepage/catalog copy** so the storefront matches the new assortment

## Recommended category model
Use these exact top-level catalog categories for filter UX:
- **Fashion**
- **Electronics**
- **Men Wear**
- **Women Wear**
- **Decor Items**

### Why this model
- It matches the user wording closely
- It avoids introducing nested taxonomy work the current UI does not support
- It keeps implementation low-risk because current filtering expects a single `category: string`

### Product distribution target (100 total)
Recommended balanced seed:
- Fashion: **20**
- Electronics: **20**
- Men Wear: **20**
- Women Wear: **20**
- Decor Items: **20**

This gives clean filter counts and simple QA.

## Image/data strategy
### Problem with current approach
Current product images are generated SVGs from `app/product-images/[slug]/route.ts`. That directly conflicts with the ticket requirement for **actual product images**.

### Recommended implementation approach
Use **deterministic product photo URLs or downloaded local product assets** tied to each seeded item.

Best implementation path for Grunt:
1. Build a new 100-item catalog in `data/products.json`
2. For each product, assign a **real product photo**
3. Prefer **local image assets under `public/products/`** for release stability
4. If sourcing from an external catalog/API during seeding, **download the selected images into the repo** rather than keeping runtime dependency on third-party hosts

### Why local assets are preferred
- No runtime dependency on external image servers
- No broken-image regressions from third-party URLs
- Deterministic builds and screenshots
- Satisfies “do not use random” more clearly than generated placeholders

### Acceptable source rule
Images must be:
- product-specific
- deterministic
- reusable for the same seeded record every run

Images must **not** be:
- random-image endpoints
- lorem picsum / random Unsplash / abstract placeholders
- the existing generated SVG illustration route

## Data model changes
### Current `Product` type
Current fields already cover most needs:
- `id`
- `name`
- `description`
- `price`
- `category`
- `image`
- `stock`
- `featured`

### Recommendation
Keep the current type shape unchanged for minimal blast radius.

Optional improvement for Grunt if helpful (not required):
- add `imageAlt?: string`
- add `subcategory?: string`

But for this ticket, **no schema expansion is required** if time is tight.

## Pages/components impacted
### 1) `data/products.json`
Replace current 55-item lifestyle catalog with a 100-item seed using the new categories and real product photos.

### 2) `src/products.ts`
No structural rewrite needed.
Expected effect:
- `categories` auto-derives the new five categories
- `featuredProducts` can continue to slice featured items

### 3) `app/products/page.tsx`
Logic likely remains valid.
Potential minor cleanup only if Grunt wants explicit category ordering instead of alphabetical sort.

### 4) `components/filter-sidebar.tsx`
UI logic can stay as-is.
Possible small improvement:
- preserve a business-defined category order instead of computed alphabetical order

### 5) `components/products-catalog.tsx`
No architecture change required.
Only user-facing text may need light copy adjustments.

### 6) `components/product-card.tsx`
No logic change required if `image` points to real photos.
Category badge will automatically reflect new category labels.

### 7) `components/product-detail.tsx`
No architecture change required beyond consuming the new real image paths.

### 8) `components/hero-section.tsx`
Needs copy refresh so the homepage matches the new assortment.
Current copy references workspace/travel/home goods.
Recommended new positioning:
- fashion-forward essentials
- electronics picks
- men/women wear
- decor items

### 9) `app/product-images/[slug]/route.ts`
### 10) `src/product-illustrations.ts`
These become legacy once real images are used.

Recommended handling:
- stop using generated SVG images for seeded products
- leave removal/refactor decision to Grunt based on how invasive cleanup is

Low-risk option:
- keep route/files in repo temporarily
- update all product `image` fields to point at local assets like `/products/<slug>.jpg`

Cleaner option:
- remove generated image route and illustration helper if no longer referenced anywhere

## Concrete implementation plan for Grunt
### Phase 1 — Replace seed catalog
- Rewrite `data/products.json` to contain **exactly 100 products**
- Ensure every item has:
  - unique `id`
  - category from the approved list
  - real `image` path
  - realistic `name`, `description`, `price`, `stock`
- Mark 8–12 products as `featured: true` so homepage still has solid variety

### Phase 2 — Add/store real product images
- Create `public/products/` structure for product photos
- Save deterministic product images there
- Update each `image` field to local file path
- Confirm all 100 records resolve to valid files

### Phase 3 — Align UI copy
- Update homepage hero copy to reflect the new catalog
- Optionally tweak any supporting copy mentioning old lifestyle categories

### Phase 4 — Optional cleanup
- Remove or deprecate generated image route usage
- Remove unused illustration code only if safe and quick

### Phase 5 — Validate catalog behavior
- Category filter works for all 5 requested categories
- Featured section renders correctly
- Product detail pages load correct product photo
- Cart still shows image + product info
- No broken images across `/`, `/products`, `/products/[id]`, `/cart`

## Recommended file touch list for implementation
High-confidence files:
- `data/products.json`
- `components/hero-section.tsx`
- `src/products.ts` (only if category ordering is made explicit)
- `app/product-images/[slug]/route.ts` (if retired or left unused)
- `src/product-illustrations.ts` (if retired)
- `public/products/*` (new real product image assets)

Possible supporting files:
- `README.md` (catalog/image strategy summary)
- `components/products-catalog.tsx` (minor copy only)

## QA checklist for Pedant
- Home page loads without runtime errors
- Featured products show real images, not SVG illustrations
- `/products` shows **100 total products**
- Filter buttons show these categories:
  - Fashion
  - Electronics
  - Men Wear
  - Women Wear
  - Decor Items
- Each category filter returns matching products only
- Product detail pages render the correct image and category badge
- Cart page image thumbnails still render correctly
- No image URLs are random or generated placeholders
- No dead references to removed image route remain
- Build passes after dependencies are installed

## Risks / watchouts
1. **Image sourcing risk**
   - Finding 100 real, deterministic product images is the largest part of the ticket
   - Mitigation: use a curated source once, download assets locally, then commit them

2. **Taxonomy overlap risk**
   - “Fashion” overlaps with “Men Wear” and “Women Wear” conceptually
   - Mitigation: keep them as explicit flat categories for this ticket, no nested faceting

3. **Repo size risk**
   - 100 local images can bloat the repo
   - Mitigation: optimize/compress images before commit and keep dimensions reasonable

4. **Legacy image code risk**
   - The generated image route may become dead code
   - Mitigation: either leave it unused for now or remove only after grep confirms no references

## Definition of done for implementation role
- Catalog contains **100 seeded products**
- Categories are updated to the requested commerce categories
- Product images are **real**, deterministic, and visible everywhere
- Homepage/catalog wording matches the new assortment
- No PR created by non-scribe roles

## Architect handoff summary
This is a **data-first ticket** with very limited UI logic changes. The existing catalog/filter architecture already supports categories; the main work is replacing the seeded dataset and image strategy so the storefront reflects the requested taxonomy and uses real product photos.
