import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/seo-management';

export const metadata: Metadata = marketingMetadata('/seo-management');

export default function SeoManagementPage() {
  return <PageContent />;
}
