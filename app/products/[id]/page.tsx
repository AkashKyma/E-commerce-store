import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/product-detail';
import { products, getProductById } from '@/src/products';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href="/products" className="inline-flex text-sm font-medium text-slate-600 transition hover:text-slate-900">
        ← Back to products
      </Link>
      <ProductDetail product={product} />
    </div>
  );
}
