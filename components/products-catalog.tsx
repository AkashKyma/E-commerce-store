import { FilterSidebar } from '@/components/filter-sidebar';
import { ProductGrid } from '@/components/product-grid';
import { SortDropdown } from '@/components/sort-dropdown';
import type { Product, SortOption } from '@/src/types';

export function ProductsCatalog({
  products,
  categories,
  activeCategory,
  activeSort
}: {
  products: Product[];
  categories: string[];
  activeCategory: string;
  activeSort: SortOption;
}) {
  return (
    <section className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <FilterSidebar categories={categories} activeCategory={activeCategory} activeSort={activeSort} />
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">All products</h1>
            <p className="mt-2 text-sm text-slate-500">
              Showing {products.length} product{products.length === 1 ? '' : 's'}
              {activeCategory !== 'All' ? ` in ${activeCategory}` : ' across 5 categories'}.
            </p>
          </div>
          <SortDropdown activeSort={activeSort} activeCategory={activeCategory} />
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
