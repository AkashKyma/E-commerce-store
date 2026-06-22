'use client';

import Link from 'next/link';
import { CartItem } from '@/components/cart-item';
import { CartSummary } from '@/components/cart-summary';
import { useCart } from '@/components/cart-provider';
import { getDetailedCartItems } from '@/src/cart';

export default function CartPage() {
  const { cart, isReady, setQuantity, removeFromCart, subtotal } = useCart();
  const items = getDetailedCartItems(cart);

  if (!isReady) {
    return <p className="text-sm text-slate-500">Loading cart…</p>;
  }

  if (items.length === 0) {
    return (
      <section className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Your cart is empty</h1>
        <p className="mt-3 text-slate-600">Add something you love and it will show up here.</p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Shop products
        </Link>
      </section>
    );
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <div className="space-y-5">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Shopping cart</h1>
          <p className="mt-2 text-sm text-slate-500">Review, adjust quantities, or remove products before checkout.</p>
        </div>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={(quantity) => setQuantity(item.id, quantity)}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
      </div>

      <div className="lg:sticky lg:top-28">
        <CartSummary subtotal={subtotal} />
      </div>
    </section>
  );
}
