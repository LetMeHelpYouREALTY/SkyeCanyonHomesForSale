import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageContent from '@/page-components/properties';

export const metadata: Metadata = {
  title: 'Skye Canyon Homes for Sale | Las Vegas NV 89166',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

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
