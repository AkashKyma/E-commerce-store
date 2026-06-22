import { ProductsCatalog } from '@/components/products-catalog';
import { categories, products } from '@/src/products';
import type { Product, SortOption } from '@/src/types';

function sortProducts(items: Product[], sort: SortOption) {
  const nextItems = [...items];

  switch (sort) {
    case 'price-asc':
      return nextItems.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return nextItems.sort((a, b) => b.price - a.price);
    case 'newest':
    default:
      return nextItems;
  }
}

export default function ProductsPage({
  searchParams
}: {
  searchParams: { category?: string; sort?: string };
}) {
  const activeCategory = searchParams.category && categories.includes(searchParams.category)
    ? searchParams.category
    : 'All';
  const activeSort: SortOption =
    searchParams.sort === 'price-asc' || searchParams.sort === 'price-desc' ? searchParams.sort : 'newest';

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <ProductsCatalog
      products={sortProducts(filteredProducts, activeSort)}
      categories={categories}
      activeCategory={activeCategory}
      activeSort={activeSort}
    />
  );
}
