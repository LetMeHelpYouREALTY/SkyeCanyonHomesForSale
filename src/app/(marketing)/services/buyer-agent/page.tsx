import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/services/buyer-agent';

export const metadata: Metadata = marketingMetadata('/services/buyer-agent');

export default function BuyerAgentPage() {
  return <PageContent />;
}
