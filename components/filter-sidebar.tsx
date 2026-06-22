'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import type { SortOption } from '@/src/types';
import { cn } from '@/src/utils';

export function FilterSidebar({
  categories,
  activeCategory,
  activeSort
}: {
  categories: string[];
  activeCategory: string;
  activeSort: SortOption;
}) {
  const router = useRouter();

  const options = useMemo(() => ['All', ...categories], [categories]);

  const updateCategory = (category: string) => {
    const params = new URLSearchParams();

    if (category !== 'All') {
      params.set('category', category);
    }

    if (activeSort !== 'newest') {
      params.set('sort', activeSort);
    }

    const query = params.toString();
    router.push(query ? `/products?${query}` : '/products');
  };

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Filter by category</p>
        <div className="flex flex-wrap gap-2 lg:flex-col">
          {options.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => updateCategory(category)}
                className={cn(
                  'rounded-full border px-4 py-2 text-left text-sm font-medium transition lg:w-full',
                  isActive
                    ? 'border-teal-700 bg-teal-50 text-teal-800'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
