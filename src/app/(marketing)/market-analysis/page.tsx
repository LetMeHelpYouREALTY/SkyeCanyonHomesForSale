import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/market-analysis';

export const metadata: Metadata = marketingMetadata('/market-analysis');

export default function MarketAnalysisPage() {
  return <PageContent />;
}
