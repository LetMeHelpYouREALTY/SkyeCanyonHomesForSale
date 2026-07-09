import type { Metadata } from 'next';
import PageContent from '@/components/static-maps-demo';

export const metadata: Metadata = {
  title: 'Maps Demo',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function StaticMapsDemoPage() {
  return <PageContent />;
}
