import type { Metadata } from 'next';
import PageContent from '@/page-components/services/luxury-properties';

export const metadata: Metadata = {
  title: 'Luxury Properties | Skye Canyon',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function LuxuryPropertiesPage() {
  return <PageContent />;
}
