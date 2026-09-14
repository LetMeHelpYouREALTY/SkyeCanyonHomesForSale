import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/about';

export const metadata: Metadata = marketingMetadata('/about');

export default function AboutPage() {
  return <PageContent />;
}
