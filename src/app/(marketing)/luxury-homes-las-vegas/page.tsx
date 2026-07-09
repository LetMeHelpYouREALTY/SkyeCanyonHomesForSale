import type { Metadata } from 'next';
import PageContent from '@/page-components/luxury-homes-las-vegas';

export const metadata: Metadata = {
  title: 'Luxury Homes Las Vegas | Skye Canyon',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function LuxuryHomesLasVegasPage() {
  return <PageContent />;
}
