import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import PageContent from '@/page-components/property-detail';

export const metadata: Metadata = pageMetadata(
  'Skye Canyon Homes for Sale | Live MLS Las Vegas NV 89166',
  'Browse live Skye Canyon MLS listings in Las Vegas NV 89166. Luxury, golf-course, and new construction with Dr. Jan Duffy.',
  '/properties',
  false,
);

export default function PropertyDetailPage() {
  return <PageContent />;
}
