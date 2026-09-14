import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/services/luxury-properties';

export const metadata: Metadata = marketingMetadata('/services/luxury-properties');

export default function LuxuryPropertiesPage() {
  return <PageContent />;
}
