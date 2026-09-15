import type { Metadata } from 'next';
import { getZipArea } from '@/data/hyperlocal/zip-areas';
import ZipPage from '@/page-components/hyperlocal/zip-page';
import { pageMetadata } from '@/lib/metadata';

const ZIP = '89149';

export const metadata: Metadata = pageMetadata(
  '89149 Homes for Sale — Centennial Hills Las Vegas NV',
  'Homes for sale in zip 89149 Centennial Hills, near Skye Canyon 89166. Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.',
  '/89149-homes-for-sale',
);

export default function Zip89149Page() {
  const zipArea = getZipArea(ZIP)!;
  return <ZipPage zipArea={zipArea} />;
}
