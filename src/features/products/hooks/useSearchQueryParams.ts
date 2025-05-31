'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useSearchQueryParams(name: string) {
  const [query, setQuery] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(
    function () {
      if (query) {
        const params = new URLSearchParams(searchParams);
        params.set(name, query);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [name, pathname, query, router, searchParams]
  );

  const readQuery = searchParams.get(name);

  return { setQuery, readQuery };
}
