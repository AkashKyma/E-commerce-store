import Link from 'next/link';

export function OrderSuccessBanner({ orderNumber }: { orderNumber: string }) {
  return (
    <section className="mx-auto max-w-2xl rounded-[2rem] border border-emerald-200 bg-white p-8 text-center shadow-soft sm:p-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
        ✓
      </div>
      <h1 className="mt-6 text-3xl font-semibold text-slate-900">Thank you for your order!</h1>
      <p className="mt-3 text-base text-slate-600">
        Your order has been received and is now queued for our pretend fulfillment team.
      </p>
      <div className="mt-8 rounded-2xl bg-slate-50 p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Order number</p>
        <p className="mt-2 text-2xl font-semibold text-slate-900">{orderNumber}</p>
      </div>
      <Link
        href="/products"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Continue Shopping
      </Link>
    </section>
  );
}
