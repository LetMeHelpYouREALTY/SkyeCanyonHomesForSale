import type { Metadata } from 'next';
import PageContent from '@/page-components/services/first-time-buyer';

export const metadata: Metadata = {
  title: 'First-Time Buyer | Skye Canyon',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function FirstTimeBuyerPage() {
  return <PageContent />;
}
