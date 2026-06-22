import { products } from '@/src/products';
import type { CartLine, CartProduct } from '@/src/types';

export const CART_STORAGE_KEY = 'pap-444-cart';

export function getDetailedCartItems(cartLines: CartLine[]): CartProduct[] {
  return cartLines
    .map((line) => {
      const product = products.find((item) => item.id === line.productId);

      if (!product) {
        return null;
      }

      return {
        ...product,
        quantity: line.quantity
      };
    })
    .filter((item): item is CartProduct => item !== null);
}

export function calculateSubtotal(cartLines: CartLine[]) {
  return getDetailedCartItems(cartLines).reduce((total, item) => total + item.price * item.quantity, 0);
}
