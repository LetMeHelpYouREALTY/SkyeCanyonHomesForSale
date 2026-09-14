import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import { Suspense } from 'react';
import PageContent from '@/page-components/properties';

export const metadata: Metadata = marketingMetadata('/properties');

function PropertiesFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-600">Loading properties...</p>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<PropertiesFallback />}>
      <PageContent />
    </Suspense>
  );
}
