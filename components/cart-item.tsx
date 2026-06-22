import Image from 'next/image';
import { QuantitySelector } from '@/components/quantity-selector';
import type { CartProduct } from '@/src/types';
import { formatCurrency } from '@/src/utils';

type CartItemProps = {
  item: CartProduct;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
};

export function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  return (
    <article className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row">
      <div className="relative h-28 overflow-hidden rounded-2xl bg-slate-100 sm:w-28">
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="112px" />
      </div>

      <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-900">{item.name}</p>
          <p className="text-sm text-slate-500">{item.category}</p>
          <p className="text-sm font-medium text-slate-700">Unit price: {formatCurrency(item.price)}</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <QuantitySelector quantity={item.quantity} onChange={onQuantityChange} max={Math.max(item.stock, 1)} />
          <div className="text-right">
            <p className="text-base font-semibold text-slate-900">{formatCurrency(item.price * item.quantity)}</p>
            <button
              type="button"
              onClick={onRemove}
              className="mt-2 text-sm font-medium text-rose-600 transition hover:text-rose-700"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
