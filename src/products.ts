import productsData from '@/data/products.json';
import type { Product } from '@/src/types';

export const products = productsData as Product[];

export const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

export const categories = Array.from(new Set(products.map((product) => product.category))).sort();

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
