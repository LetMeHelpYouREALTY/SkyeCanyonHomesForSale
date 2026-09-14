import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/services/relocation';

export const metadata: Metadata = marketingMetadata('/services/relocation');

export default function RelocationPage() {
  return <PageContent />;
}
