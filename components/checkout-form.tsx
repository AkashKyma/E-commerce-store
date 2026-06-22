'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { AddressFields } from '@/components/address-fields';
import { CartSummary } from '@/components/cart-summary';
import { PaymentFields } from '@/components/payment-fields';
import { useCart } from '@/components/cart-provider';
import { createMockOrderNumber } from '@/src/utils';

const initialAddress = {
  fullName: '',
  email: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  country: ''
};

const initialPayment = {
  cardNumber: '',
  expiry: '',
  cvv: ''
};

export function CheckoutForm() {
  const router = useRouter();
  const { subtotal, clearCart, itemCount, isReady } = useCart();
  const [address, setAddress] = useState(initialAddress);
  const [payment, setPayment] = useState(initialPayment);

  const isCartEmpty = useMemo(() => itemCount === 0, [itemCount]);

  const handleAddressChange = (name: string, value: string) => {
    setAddress((current) => ({ ...current, [name]: value }));
  };

  const handlePaymentChange = (name: string, value: string) => {
    setPayment((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isCartEmpty) {
      router.push('/products');
      return;
    }

    const orderNumber = createMockOrderNumber();
    clearCart();
    router.push(`/order-success?order=${orderNumber}`);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <div className="space-y-6">
        <AddressFields values={address} onChange={handleAddressChange} />
        <PaymentFields values={payment} onChange={handlePaymentChange} />
      </div>

      <div className="space-y-4 lg:sticky lg:top-28">
        <CartSummary subtotal={subtotal} ctaHref="#place-order" ctaLabel="Review order" />
        <button
          id="place-order"
          type="submit"
          disabled={!isReady || isCartEmpty}
          className="inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Place Order
        </button>
        <p className="text-sm text-slate-500">
          {isCartEmpty
            ? 'Add a product to your cart before placing an order.'
            : 'No real charge is made. These payment inputs are ready to swap for Stripe Elements later.'}
        </p>
      </div>
    </form>
  );
}
