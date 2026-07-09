import type { Metadata } from 'next';
import PageContent from '@/page-components/skye-canyon-schools';

export const metadata: Metadata = {
  title: 'Skye Canyon Schools | Las Vegas NV',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function SkyeCanyonSchoolsPage() {
  return <PageContent />;
}
