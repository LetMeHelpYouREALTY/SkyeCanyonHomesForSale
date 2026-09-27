import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/nearby-amenities';

export const metadata: Metadata = marketingMetadata('/amenities');

export default function NearbyAmenitiesPage() {
  return <PageContent />;
}
