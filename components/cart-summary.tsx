import Link from 'next/link';
import { formatCurrency } from '@/src/utils';

type CartSummaryProps = {
  subtotal: number;
  ctaHref?: string;
  ctaLabel?: string;
};

export function CartSummary({
  subtotal,
  ctaHref = '/checkout',
  ctaLabel = 'Proceed to Checkout'
}: CartSummaryProps) {
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
      <div className="mt-6 space-y-4 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-slate-900">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Estimated tax (8%)</span>
          <span className="font-medium text-slate-900">{formatCurrency(tax)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-base font-semibold text-slate-900">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        {ctaLabel}
      </Link>
    </aside>
  );
}
