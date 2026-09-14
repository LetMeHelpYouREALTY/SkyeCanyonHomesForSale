import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/skye-canyon-communities';

export const metadata: Metadata = marketingMetadata('/skye-canyon-communities');

export default function SkyeCanyonCommunitiesPage() {
  return <PageContent />;
}
