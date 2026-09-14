import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/home';

export const metadata: Metadata = marketingMetadata('/');

export default function HomePage() {
  return <PageContent />;
}
