import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/contact';

export const metadata: Metadata = marketingMetadata('/contact');

export default function ContactPage() {
  return <PageContent />;
}
