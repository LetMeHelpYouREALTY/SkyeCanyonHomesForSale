import type { Metadata } from 'next';
import { getArea } from '@/data/hyperlocal/areas';
import AreaPage from '@/page-components/hyperlocal/area-page';
import { siteConfig } from '@/config/site.config';

const SLUG = 'centennial-hills';

export const metadata: Metadata = {
  title: 'Centennial Hills Homes for Sale — Las Vegas NV',
  description:
    'Centennial Hills homes for sale in northwest Las Vegas near Skye Canyon 89166. Dr. Jan Duffy, REALTOR® — call (702) 500-1902.',
  alternates: { canonical: '/centennial-hills-homes-for-sale' },
  openGraph: {
    title: 'Centennial Hills Homes for Sale — Las Vegas NV',
    url: `${siteConfig.url}/centennial-hills-homes-for-sale`,
  },
};

export default function CentennialHillsPage() {
  const area = getArea(SLUG)!;
  return <AreaPage area={area} />;
}
