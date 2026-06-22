'use client';

import { useRouter } from 'next/navigation';
import type { SortOption } from '@/src/types';

const sortOptions: Array<{ label: string; value: SortOption }> = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' }
];

export function SortDropdown({
  activeSort,
  activeCategory
}: {
  activeSort: SortOption;
  activeCategory: string;
}) {
  const router = useRouter();

  const updateSort = (value: SortOption) => {
    const params = new URLSearchParams();

    if (activeCategory !== 'All') {
      params.set('category', activeCategory);
    }

    if (value !== 'newest') {
      params.set('sort', value);
    }

    const query = params.toString();
    router.push(query ? `/products?${query}` : '/products');
  };

  return (
    <label className="flex items-center gap-3 text-sm font-medium text-slate-600">
      <span>Sort by</span>
      <select
        value={activeSort}
        onChange={(event) => updateSort(event.target.value as SortOption)}
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-teal-700"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
