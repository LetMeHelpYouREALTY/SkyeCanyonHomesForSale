import type { Metadata } from 'next';
import { getZipArea } from '@/data/hyperlocal/zip-areas';
import ZipPage from '@/page-components/hyperlocal/zip-page';
import { siteConfig } from '@/config/site.config';

const ZIP = '89149';

export const metadata: Metadata = {
  title: '89149 Homes for Sale — Centennial Hills Las Vegas NV',
  description:
    'Homes for sale in zip code 89149 Centennial Hills northwest Las Vegas. Compare with Skye Canyon 89166. Dr. Jan Duffy, REALTOR®.',
  alternates: { canonical: '/89149-homes-for-sale' },
  openGraph: {
    title: '89149 Homes for Sale — Centennial Hills Las Vegas NV',
    url: `${siteConfig.url}/89149-homes-for-sale`,
  },
};

export default function Zip89149Page() {
  const zipArea = getZipArea(ZIP)!;
  return <ZipPage zipArea={zipArea} />;
}
