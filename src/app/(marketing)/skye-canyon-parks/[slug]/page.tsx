import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllParkSlugs, getPark } from '@/data/hyperlocal/parks';
import ParkPage from '@/page-components/hyperlocal/park-page';
import { siteConfig } from '@/config/site.config';

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
  const description = park.answerSummary;

  return {
    title,
    description,
    alternates: { canonical: `/skye-canyon-parks/${slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/skye-canyon-parks/${slug}` },
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
