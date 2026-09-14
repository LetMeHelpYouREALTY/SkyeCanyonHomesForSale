import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/lead-dashboard';

export const metadata: Metadata = marketingMetadata('/lead-dashboard');

export default function LeadDashboardPage() {
  return <PageContent />;
}
