import type { Metadata } from 'next';
import PageContent from '@/page-components/services/new-construction';

export const metadata: Metadata = {
  title: 'New Construction | Skye Canyon',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function NewConstructionPage() {
  return <PageContent />;
}
