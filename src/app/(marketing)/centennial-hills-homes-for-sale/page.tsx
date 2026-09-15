import type { Metadata } from 'next';
import { getArea } from '@/data/hyperlocal/areas';
import AreaPage from '@/page-components/hyperlocal/area-page';
import { pageMetadata } from '@/lib/metadata';

const SLUG = 'centennial-hills';

export const metadata: Metadata = pageMetadata(
  'Centennial Hills Homes for Sale — Las Vegas NV',
  'Centennial Hills homes for sale in northwest Las Vegas near Skye Canyon 89166. Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.',
  '/centennial-hills-homes-for-sale',
);

export default function CentennialHillsPage() {
  const area = getArea(SLUG)!;
  return <AreaPage area={area} />;
}
