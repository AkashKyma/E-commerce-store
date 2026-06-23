# Changelog

All notable changes to this project will be documented in this file.

## [PAP-447] - 2026-06-23

### Added

- Organized the storefront catalog into requested category groups for easier browsing
- Documented category coverage for Fashion, Electronics, Men Wear, Womens, and Decor Items
- Expanded the seeded inventory target to **100 products**
- Documented the use of actual product images instead of random placeholder assets

### Improved

- Strengthened the merchandising structure so shoppers can browse by clearer category groupings
- Improved release documentation to reflect the larger seeded catalog and category-based shopping experience

### Documentation

- Updated README with PAP-447 release overview, setup instructions, category summary, seeded product expectations, and release notes
- Added deployment-facing implementation notes for documentation and handoff clarity

## [PAP-446] - 2026-06-22

### Fixed

- Resolved the missing product image issue across the storefront
- Standardized product image rendering through a shared `ProductImage` component used in catalog, detail, and cart views
- Added a local `/product-images/[slug]` route that serves generated SVG product illustrations for each product id

### Added

- Expanded the static product catalog to **55 products** to satisfy the seeded inventory requirement
- Added seeded product image paths in `data/products.json` for the complete catalog
- Added generated illustration logic for category-themed product artwork without requiring external image hosting

### Documentation

- Updated README with PAP-446 release overview, setup instructions, image-rendering behavior, and catalog summary
- Added implementation notes for deployment and PR handoff

## [PAP-444] - 2026-06-22

### Added

- Complete e-commerce storefront built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- Home page hero banner and featured products section
- Product catalog page with category filtering and sorting controls
- Product detail pages with quantity selection and add-to-cart interactions
- localStorage-backed shopping cart with live navbar badge updates
- Cart page with quantity controls, remove actions, subtotal, tax, and total summary
- Checkout page with shipping address form and Stripe-ready payment field UI
- Order success page with thank-you message and mock order number
- Static product data source in `data/products.json`
- Responsive storefront layout for mobile and desktop views

### Documentation

- README updated with feature overview, setup steps, run/build commands, and delivery summary
- Implementation notes added for deployment and PR handoff clarity
