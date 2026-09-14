import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/followup-boss-status';

export const metadata: Metadata = marketingMetadata('/followup-boss-status');

export default function FollowupBossStatusPage() {
  return <PageContent />;
}
