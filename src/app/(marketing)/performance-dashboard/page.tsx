import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/performance-dashboard';

export const metadata: Metadata = marketingMetadata('/performance-dashboard');

export default function PerformanceDashboardPage() {
  return <PageContent />;
}
