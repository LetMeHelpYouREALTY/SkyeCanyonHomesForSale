import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import PageContent from '@/page-components/search';

export const metadata: Metadata = pageMetadata(
  'Search Skye Canyon Homes | Las Vegas NV 89166 MLS',
  'Search Skye Canyon and northwest Las Vegas homes by price, beds, and zip 89166. Dr. Jan Duffy, REALTOR®. (702) 500-1902.',
  '/search',
  false,
);

export default function SearchPage() {
  return <PageContent />;
}
