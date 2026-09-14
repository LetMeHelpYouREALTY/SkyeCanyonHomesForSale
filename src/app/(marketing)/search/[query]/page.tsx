import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/search';

export const metadata: Metadata = marketingMetadata('/search/[query]');

export default function SearchPage() {
  return <PageContent />;
}
