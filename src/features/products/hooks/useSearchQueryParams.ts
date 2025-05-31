'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useSearchQueryParams(name: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function setQuery(value: string | null) {
    const params = new URLSearchParams(searchParams);

    if (!value) params.delete(name);
    if (value) params.set(name, value);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const readQuery = searchParams.get(name);

  return { setQuery, readQuery };
}
