import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/search';

export const metadata: Metadata = marketingMetadata('/search');

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  return <PageContent query={q} />;
}
