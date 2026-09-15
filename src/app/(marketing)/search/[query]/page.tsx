import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import PageContent from '@/page-components/search';

interface SearchQueryPageProps {
  params: Promise<{ query: string }>;
}

export async function generateMetadata({
  params,
}: SearchQueryPageProps): Promise<Metadata> {
  const { query } = await params;
  const decoded = decodeURIComponent(query).trim();
  const canonicalQuery = decoded ? `/search?q=${encodeURIComponent(decoded)}` : '/search';

  return pageMetadata(
    decoded
      ? `Search ${decoded} | Skye Canyon Las Vegas NV 89166`
      : 'Search Skye Canyon Homes | Las Vegas NV 89166 MLS',
    decoded
      ? `Search ${decoded} homes in Skye Canyon and northwest Las Vegas NV 89166. Dr. Jan Duffy, REALTOR®. (702) 500-1902.`
      : 'Search Skye Canyon and northwest Las Vegas homes by price, beds, and zip 89166. Dr. Jan Duffy, REALTOR®. (702) 500-1902.',
    canonicalQuery,
    false,
  );
}

export default async function SearchPage({ params }: SearchQueryPageProps) {
  const { query } = await params;
  return <PageContent query={decodeURIComponent(query)} />;
}
