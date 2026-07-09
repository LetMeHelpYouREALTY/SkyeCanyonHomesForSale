import type { Metadata } from 'next';
import { getZipArea } from '@/data/hyperlocal/zip-areas';
import ZipPage from '@/page-components/hyperlocal/zip-page';
import { siteConfig } from '@/config/site.config';

const ZIP = '89144';

export const metadata: Metadata = {
  title: '89144 Homes for Sale — Northwest Las Vegas NV',
  description:
    'Browse homes for sale in zip code 89144 northwest Las Vegas near Skye Canyon. Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
  alternates: { canonical: '/89144-homes-for-sale' },
  openGraph: {
    title: '89144 Homes for Sale — Northwest Las Vegas NV',
    url: `${siteConfig.url}/89144-homes-for-sale`,
  },
};

export default function Zip89144Page() {
  const zipArea = getZipArea(ZIP)!;
  return <ZipPage zipArea={zipArea} />;
}
