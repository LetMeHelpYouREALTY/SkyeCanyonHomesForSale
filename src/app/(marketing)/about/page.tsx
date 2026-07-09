import type { Metadata } from 'next';
import PageContent from '@/page-components/about';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Skye Canyon Real Estate Expert',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function AboutPage() {
  return <PageContent />;
}
