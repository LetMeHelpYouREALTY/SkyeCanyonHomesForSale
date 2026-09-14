import type { Metadata } from 'next';
import { marketingMetadata } from '@/lib/page-seo';
import PageContent from '@/page-components/skye-canyon-schools';

export const metadata: Metadata = marketingMetadata('/skye-canyon-schools');

export default function SkyeCanyonSchoolsPage() {
  return <PageContent />;
}
