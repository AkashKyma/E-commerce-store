import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
            New season essentials
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Design-forward goods for calmer, better daily routines.
            </h1>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              Discover elevated workspace tools, travel companions, and home pieces chosen to feel useful from day one.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Shop Now
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
            {[
              'Fast local checkout flow',
              'Filter by category instantly',
              'Responsive cards and cart',
              'Static product data, zero setup'
            ].map((item) => (
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
