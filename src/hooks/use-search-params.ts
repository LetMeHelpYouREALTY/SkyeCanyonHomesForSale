'use client';

import { usePathname, useSearchParams as useNextSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export function useSearchParams() {
  const pathname = usePathname();
  const nextParams = useNextSearchParams();

  return useMemo(() => {
    const params: Record<string, string> = {};
    nextParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [pathname, nextParams]);
}

export function useSearchParam(key: string): string | null {
  const searchParams = useSearchParams();
  return searchParams[key] ?? null;
}
