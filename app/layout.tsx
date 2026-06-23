import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { CartProvider } from '@/components/cart-provider';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Cascade Store',
  description: 'A category-first storefront with 100 seeded fashion, electronics, men wear, women wear, and decor products.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen bg-sand text-slate-900">
            <Navbar />
            <main className="mx-auto min-h-[calc(100vh-164px)] max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
