import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/skye-canyon-guide';

export const metadata: Metadata = marketingMetadata('/skye-canyon-guide');

export default function SkyeCanyonGuidePage() {
  return <PageContent />;
}
