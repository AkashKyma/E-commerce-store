import { notFound } from 'next/navigation';
import { buildProductIllustration } from '@/src/product-illustrations';
import { getProductById } from '@/src/products';

export function GET(_request: Request, { params }: { params: { slug: string } }) {
  const product = getProductById(params.slug);

  if (!product) {
    notFound();
  }

  return new Response(buildProductIllustration(product), {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
