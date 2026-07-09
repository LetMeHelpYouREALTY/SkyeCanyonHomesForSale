import type { Metadata } from 'next';
import PageContent from '@/page-components/performance-dashboard';

export const metadata: Metadata = {
  title: 'Performance Dashboard',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function PerformanceDashboardPage() {
  return <PageContent />;
}
