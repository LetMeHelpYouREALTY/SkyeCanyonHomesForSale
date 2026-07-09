import type { Metadata } from 'next';
import PageContent from '@/page-components/contact';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Skye Canyon REALTOR®',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function ContactPage() {
  return <PageContent />;
}
