import type { Metadata } from 'next';
import PageContent from '@/page-components/seo-management';

export const metadata: Metadata = {
  title: 'SEO Management',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function SeoManagementPage() {
  return <PageContent />;
}
