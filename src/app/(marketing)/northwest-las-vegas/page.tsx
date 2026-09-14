import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/northwest-las-vegas';

export const metadata: Metadata = marketingMetadata('/northwest-las-vegas');

export default function NorthwestLasVegasPage() {
  return <PageContent />;
}
