import type { Metadata } from 'next';
import PageContent from '@/page-components/las-vegas-real-estate';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate | Dr. Jan Duffy',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function LasVegasRealEstatePage() {
  return <PageContent />;
}
