import { cn } from '@/src/utils';

type QuantitySelectorProps = {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
};

export function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
  className
}: QuantitySelectorProps) {
  const safeQuantity = Number.isNaN(quantity) ? min : quantity;

  return (
    <div className={cn('inline-flex items-center rounded-full border border-slate-200 bg-white', className)}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, safeQuantity - 1))}
        className="h-11 w-11 rounded-full text-lg text-slate-700 transition hover:bg-slate-50"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-12 text-center text-sm font-semibold text-slate-900">{safeQuantity}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, safeQuantity + 1))}
        className="h-11 w-11 rounded-full text-lg text-slate-700 transition hover:bg-slate-50"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
