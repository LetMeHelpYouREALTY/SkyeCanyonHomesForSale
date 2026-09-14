import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/components/static-maps-demo';

export const metadata: Metadata = marketingMetadata('/demo/maps');

export default function StaticMapsDemoPage() {
  return <PageContent />;
}
