import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/skye-canyon-parks';

export const metadata: Metadata = marketingMetadata('/skye-canyon-parks');

export default function SkyeCanyonParksPage() {
  return <PageContent />;
}
