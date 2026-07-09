import type { Metadata } from 'next';
import PageContent from '@/page-components/terms-of-service';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function TermsOfServicePage() {
  return <PageContent />;
}
