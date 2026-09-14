import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/services/seller-agent';

export const metadata: Metadata = marketingMetadata('/services/seller-agent');

export default function SellerAgentPage() {
  return <PageContent />;
}
