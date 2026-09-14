import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/home-simple';

export const metadata: Metadata = marketingMetadata('/home-simple');

export default function HomeSimplePage() {
  return <PageContent />;
}
