'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from 'react';
import { CART_STORAGE_KEY, calculateSubtotal } from '@/src/cart';
import type { CartLine } from '@/src/types';

type CartContextValue = {
  cart: CartLine[];
  itemCount: number;
  subtotal: number;
  isReady: boolean;
  addToCart: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

function parseCart(value: string | null): CartLine[] {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as CartLine[];
    return parsed.filter((item) => item.productId && item.quantity > 0);
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [isReady, setIsReady] = useState(false);
  const hasLoaded = useRef(false);

  useEffect(() => {
    const syncCart = () => {
      setCart(parseCart(window.localStorage.getItem(CART_STORAGE_KEY)));
      hasLoaded.current = true;
      setIsReady(true);
    };

    syncCart();

    const handleStorage = (event: StorageEvent) => {
      if (!event.key || event.key === CART_STORAGE_KEY) {
        syncCart();
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  useEffect(() => {
    if (!hasLoaded.current) {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((productId: string, quantity = 1) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.productId === productId);

      if (!existing) {
        return [...currentCart, { productId, quantity }];
      }

      return currentCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setCart((currentCart) => {
      if (quantity <= 0) {
        return currentCart.filter((item) => item.productId !== productId);
      }

      return currentCart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((currentCart) => currentCart.filter((item) => item.productId !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = calculateSubtotal(cart);

    return {
      cart,
      itemCount,
      subtotal,
      isReady,
      addToCart,
      setQuantity,
      removeFromCart,
      clearCart
    };
  }, [addToCart, cart, clearCart, isReady, removeFromCart, setQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
