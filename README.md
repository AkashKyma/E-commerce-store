# PAP-444 — E-commerce Store

A complete client-side e-commerce storefront built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

This implementation provides a polished shopping flow backed by a static product catalog:

- Home page with a hero banner and featured products
- Product catalog with category filtering and sorting
- Product detail pages with quantity selection and add-to-cart flow
- localStorage-backed shopping cart with live navbar item count
- Checkout form with shipping and Stripe-ready payment UI fields
- Order success page with a mock order number
- Responsive layouts for mobile and desktop screens

## What was built

Ticket **PAP-444** delivers a full storefront experience using local static data from `data/products.json`.

### Included routes

- `/` — hero banner and exactly 4 featured products
- `/products` — full catalog with filters and sorting
- `/products/[id]` — product detail view with add-to-cart
- `/cart` — cart management, quantity updates, and pricing summary
- `/checkout` — shipping and payment form UI
- `/order-success` — confirmation page with generated order number

### Included UI/components

- Navbar with live cart badge
- HeroSection
- ProductCard / ProductGrid
- FilterSidebar
- SortDropdown
- QuantitySelector
- CartItem / CartSummary
- CheckoutForm
- AddressFields
- PaymentFields
- Toast / inline success feedback
- OrderSuccessBanner
- Footer

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Project structure

```text
app/
  cart/
  checkout/
  order-success/
  products/
components/
data/
  products.json
src/
```

## Setup

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open <http://localhost:3000>

### Create a production build

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Data model

Product data is provided by the static JSON file at:

- `data/products.json`

Each product includes:

- `id`
- `name`
- `description`
- `price`
- `category`
- `image`
- `stock`
- `featured`

No external API keys or third-party backend services are required.

## Storefront behavior

### Featured products

The home page highlights 4 featured products from the static catalog.

### Catalog filtering and sorting

The products page supports:

- Filtering by unique category values
- Sorting by:
  - price low to high
  - price high to low
  - newest

Filter state is reflected in the URL query string.

### Cart

The cart is persisted in `localStorage`, enabling:

- add to cart from product detail pages
- live cart count in the navbar
- increment/decrement quantity controls
- remove item actions
- subtotal, 8% estimated tax, and total calculations

### Checkout

The checkout flow includes:

- shipping address fields
- payment UI fields styled for future Stripe Elements integration
- cart clearing on successful submit
- redirect to `/order-success`

## Release readiness notes

- Uses static product data only
- No environment variables required
- No external payment processing is performed
- Checkout payment fields are UI placeholders designed for Stripe-ready enhancement later

## Ticket reference

- Ticket: `PAP-444`
- Implementation commit verified: `feat(pap-444): implement E-commerce Store`
