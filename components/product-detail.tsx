'use client';

import { useEffect, useState } from 'react';
import { ProductImage } from '@/components/product-image';
import { useCart } from '@/components/cart-provider';
import { QuantitySelector } from '@/components/quantity-selector';
import { Toast } from '@/components/toast';
import type { Product } from '@/src/types';
import { formatCurrency } from '@/src/utils';

export function ProductDetail({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timeout = window.setTimeout(() => setShowToast(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [showToast]);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setShowToast(true);
  };

  const isInStock = product.stock > 0;

  return (
    <>
      <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="aspect-square overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <ProductImage src={product.image} alt={product.name} className="h-full w-full object-cover" priority />
        </div>

        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            {product.category}
          </span>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{product.name}</h1>
            <p className="text-2xl font-semibold text-teal-700">{formatCurrency(product.price)}</p>
            <p className="text-base leading-7 text-slate-600">{product.description}</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Stock status</p>
            <p className="mt-1">{isInStock ? `${product.stock} units available` : 'Currently out of stock'}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <QuantitySelector quantity={quantity} onChange={setQuantity} max={Math.max(1, product.stock)} />
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!isInStock}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <Toast message={`${product.name} added to cart`} visible={showToast} />
    </>
  );
}
