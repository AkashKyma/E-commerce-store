import Link from 'next/link';

const highlights = ['100 seeded products', 'Real product images', 'Shop by category', 'Fast cart and checkout flow'];

export function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
            Fashion, electronics, and decor picks
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Shop 100 curated products across fashion, electronics, men wear, women wear, and decor.
            </h1>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              Browse a fuller catalog with real product photos, sharper category filters, and best-selling picks ready to add to cart.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Shop All Products
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              View Cart
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
