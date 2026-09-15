import type { Metadata } from 'next';
import { getZipArea } from '@/data/hyperlocal/zip-areas';
import ZipPage from '@/page-components/hyperlocal/zip-page';
import { pageMetadata } from '@/lib/metadata';

const ZIP = '89166';

export const metadata: Metadata = pageMetadata(
  '89166 Homes for Sale — Skye Canyon Las Vegas NV',
  'Search homes for sale in zip 89166 Skye Canyon, Las Vegas. Live MLS with Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.',
  '/89166-homes-for-sale',
);

export default function Zip89166Page() {
  const zipArea = getZipArea(ZIP)!;
  return <ZipPage zipArea={zipArea} />;
}
