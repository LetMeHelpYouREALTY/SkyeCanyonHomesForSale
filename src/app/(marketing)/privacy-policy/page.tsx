import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/privacy-policy';

export const metadata: Metadata = marketingMetadata('/privacy-policy');

export default function PrivacyPolicyPage() {
  return <PageContent />;
}
