import type { Metadata } from 'next';
import PageContent from '@/page-components/property-detail';

export const metadata: Metadata = {
  title: 'Property Details | Skye Canyon Las Vegas',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function PropertyDetailPage() {
  return <PageContent />;
}
