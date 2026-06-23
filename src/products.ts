import productsData from '@/data/products.json';
import type { Product } from '@/src/types';

export const products = productsData as Product[];

export const CATEGORY_ORDER = ['Fashion', 'Electronics', 'Men Wear', 'Women Wear', 'Decor Items'] as const;

export const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

export const categories: string[] = CATEGORY_ORDER.filter((category) =>
  products.some((product) => product.category === category)
);

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
