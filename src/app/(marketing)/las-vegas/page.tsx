import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/las-vegas-real-estate';

export const metadata: Metadata = marketingMetadata('/las-vegas');

export default function LasVegasRealEstatePage() {
  return <PageContent />;
}
