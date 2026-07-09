import type { Metadata } from 'next';
import { getZipArea } from '@/data/hyperlocal/zip-areas';
import ZipPage from '@/page-components/hyperlocal/zip-page';
import { siteConfig } from '@/config/site.config';

const ZIP = '89166';

export const metadata: Metadata = {
  title: '89166 Homes for Sale — Skye Canyon Las Vegas NV',
  description:
    'Search homes for sale in zip code 89166 Skye Canyon Las Vegas. Dr. Jan Duffy, REALTOR® specializes in new construction, resale, and luxury properties.',
  alternates: { canonical: '/89166-homes-for-sale' },
  openGraph: {
    title: '89166 Homes for Sale — Skye Canyon Las Vegas NV',
    url: `${siteConfig.url}/89166-homes-for-sale`,
  },
};

export default function Zip89166Page() {
  const zipArea = getZipArea(ZIP)!;
  return <ZipPage zipArea={zipArea} />;
}
