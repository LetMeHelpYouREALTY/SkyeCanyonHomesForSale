import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/luxury-homes-las-vegas';

export const metadata: Metadata = marketingMetadata('/luxury-homes-las-vegas');

export default function LuxuryHomesLasVegasPage() {
  return <PageContent />;
}
