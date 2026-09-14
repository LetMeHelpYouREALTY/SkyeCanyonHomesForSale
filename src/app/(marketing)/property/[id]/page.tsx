import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/property-detail';

export const metadata: Metadata = marketingMetadata('/property/[id]');

export default function PropertyDetailPage() {
  return <PageContent />;
}
