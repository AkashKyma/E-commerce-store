type PaymentFieldsProps = {
  values: {
    cardNumber: string;
    expiry: string;
    cvv: string;
  };
  onChange: (name: string, value: string) => void;
};

const inputClassName =
  'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-700';

export function PaymentFields({ values, onChange }: PaymentFieldsProps) {
  return (
    <section className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Payment</h2>
        <p className="mt-1 text-sm text-slate-500">Stripe-ready placeholder fields for a future card integration.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Card number
          <input
            required
            inputMode="numeric"
            autoComplete="cc-number"
            name="cardNumber"
            placeholder="4242 4242 4242 4242"
            value={values.cardNumber}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Expiry date
          <input
            required
            autoComplete="cc-exp"
            name="expiry"
            placeholder="MM/YY"
            value={values.expiry}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          CVV
          <input
            required
            inputMode="numeric"
            autoComplete="cc-csc"
            name="cvv"
            placeholder="123"
            value={values.cvv}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
      </div>
    </section>
  );
}
