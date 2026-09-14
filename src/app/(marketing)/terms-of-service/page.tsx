import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/terms-of-service';

export const metadata: Metadata = marketingMetadata('/terms-of-service');

export default function TermsOfServicePage() {
  return <PageContent />;
}
