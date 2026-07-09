'use client';

import { usePathname } from 'next/navigation';

interface CanonicalUrlProps {
  path?: string;
}

export default function CanonicalUrl({ path }: CanonicalUrlProps) {
  const [location] = usePathname();
  
  // Use provided path or current location
  const currentPath = path || location;
  
  // Ensure HTTPS canonical URL
  const canonicalUrl = `https://skyecanyonhomesforsale.com${currentPath === '/' ? '' : currentPath}`;
  
  return null;
}
