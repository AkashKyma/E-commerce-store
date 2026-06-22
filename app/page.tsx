import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ProductGrid } from '@/components/product-grid';
import { featuredProducts } from '@/src/products';

export default function HomePage() {
  return (
    <div className="space-y-14">
      <HeroSection />

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Featured Products</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Four customer favorites, ready to ship.</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-slate-700 transition hover:text-slate-900">
            Browse the full catalog →
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>
    </div>
  );
}
