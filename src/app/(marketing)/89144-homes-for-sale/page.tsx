import type { Metadata } from 'next';
import { getZipArea } from '@/data/hyperlocal/zip-areas';
import ZipPage from '@/page-components/hyperlocal/zip-page';
import { pageMetadata } from '@/lib/metadata';

const ZIP = '89144';

export const metadata: Metadata = pageMetadata(
  '89144 Homes for Sale — Northwest Las Vegas NV',
  'Browse homes for sale in zip 89144 northwest Las Vegas near Skye Canyon. Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.',
  '/89144-homes-for-sale',
);

export default function Zip89144Page() {
  const zipArea = getZipArea(ZIP)!;
  return <ZipPage zipArea={zipArea} />;
}
