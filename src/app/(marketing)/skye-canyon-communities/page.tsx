import type { Metadata } from 'next';
import PageContent from '@/page-components/skye-canyon-communities';

export const metadata: Metadata = {
  title: 'Skye Canyon Communities',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function SkyeCanyonCommunitiesPage() {
  return <PageContent />;
}
