import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/neighborhood-analysis';

export const metadata: Metadata = marketingMetadata('/neighborhood-analysis');

export default function NeighborhoodAnalysisPage() {
  return <PageContent />;
}
