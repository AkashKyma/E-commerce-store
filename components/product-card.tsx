import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/src/types';
import { formatCurrency } from '@/src/utils';

export function ProductCard({ product }: { product: Product }) {
  const isSvgImage = product.image.endsWith('.svg');

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized={isSvgImage}
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </div>
        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {product.category}
            </span>
            <span className="text-lg font-semibold text-slate-900">{formatCurrency(product.price)}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-slate-600">{product.description}</p>
          </div>
          <div className="flex items-center justify-between pt-2 text-sm font-medium text-slate-700">
            <span>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span>
            <span className="text-teal-700">View details →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
