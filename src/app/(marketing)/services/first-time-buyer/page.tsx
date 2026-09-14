import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/services/first-time-buyer';

export const metadata: Metadata = marketingMetadata('/services/first-time-buyer');

export default function FirstTimeBuyerPage() {
  return <PageContent />;
}
