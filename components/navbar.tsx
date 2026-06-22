'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart-provider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/cart', label: 'Cart' }
];

export function Navbar() {
  const { itemCount, isReady } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            CS
          </span>
          <div>
            <p className="text-lg font-semibold text-slate-900">Cascade Store</p>
            <p className="text-xs text-slate-500">Thoughtful everyday gear</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/cart"
          className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
        >
          <span aria-hidden="true">🛒</span>
          <span>Cart</span>
          <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-teal-700 px-2 py-0.5 text-xs font-semibold text-white">
            {isReady ? itemCount : 0}
          </span>
        </Link>
      </div>

      <nav className="border-t border-slate-100 px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-around text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
