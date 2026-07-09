import type { Metadata } from 'next';
import PageContent from '@/page-components/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function PrivacyPolicyPage() {
  return <PageContent />;
}
