import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllParkSlugs, getPark } from '@/data/hyperlocal/parks';
import ParkPage from '@/page-components/hyperlocal/park-page';
import { pageSocial } from '@/lib/metadata';
import { hostedImage } from '@/lib/page-images';
import { parkImageKey } from '@/data/topic-images';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllParkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const park = getPark(slug);
  if (!park) {
    return { title: 'Park Not Found' };
  }

  const title = `${park.name} — Skye Canyon Parks Las Vegas NV 89166`;
  const description = `${park.name} in Skye Canyon Las Vegas NV 89166. Homes near parks with Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.`;

  return {
    title,
    description,
    alternates: { canonical: `/skye-canyon-parks/${slug}` },
    ...pageSocial(title, description, `/skye-canyon-parks/${slug}`, hostedImage(parkImageKey(slug))),
  };
}

export default async function SkyeCanyonParkRoute({ params }: PageProps) {
  const { slug } = await params;
  const park = getPark(slug);
  if (!park) {
    notFound();
  }
  return <ParkPage park={park} />;
}
