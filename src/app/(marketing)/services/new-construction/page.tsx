import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/services/new-construction';

export const metadata: Metadata = marketingMetadata('/services/new-construction');

export default function NewConstructionPage() {
  return <PageContent />;
}
