import type { Metadata } from 'next';
import PageContent from '@/page-components/skye-canyon-guide';

export const metadata: Metadata = {
  title: 'Skye Canyon Guide | Las Vegas NV 89166',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function SkyeCanyonGuidePage() {
  return <PageContent />;
}
