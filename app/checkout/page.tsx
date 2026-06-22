import { CheckoutForm } from '@/components/checkout-form';

export default function CheckoutPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Checkout</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Complete your order</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-500">
          Shipping and payment fields are ready for a future Stripe integration. For now, submitting the form creates a mock order and clears the cart.
        </p>
      </div>
      <CheckoutForm />
    </section>
  );
}
