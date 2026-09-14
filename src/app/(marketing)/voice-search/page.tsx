import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/voice-search';

export const metadata: Metadata = marketingMetadata('/voice-search');

export default function VoiceSearchPage() {
  return <PageContent />;
}
