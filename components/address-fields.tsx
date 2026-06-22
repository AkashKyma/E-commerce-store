type AddressFieldsProps = {
  values: {
    fullName: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  onChange: (name: string, value: string) => void;
};

const inputClassName =
  'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-700';

export function AddressFields({ values, onChange }: AddressFieldsProps) {
  return (
    <section className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Shipping address</h2>
        <p className="mt-1 text-sm text-slate-500">Enter where the order should be delivered.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Full name
          <input
            required
            name="fullName"
            value={values.fullName}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Email
          <input
            required
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Address line 1
          <input
            required
            name="address1"
            value={values.address1}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Address line 2 (optional)
          <input
            name="address2"
            value={values.address2}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          City
          <input
            required
            name="city"
            value={values.city}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          State
          <input
            required
            name="state"
            value={values.state}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          ZIP
          <input
            required
            name="zip"
            value={values.zip}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Country
          <input
            required
            name="country"
            value={values.country}
            onChange={(event) => onChange(event.target.name, event.target.value)}
            className={inputClassName}
          />
        </label>
      </div>
    </section>
  );
}
