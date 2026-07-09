import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSubdivisionSlugs, getSubdivision } from '@/data/hyperlocal/subdivisions';
import SubdivisionPage from '@/page-components/hyperlocal/subdivision-page';
import { siteConfig } from '@/config/site.config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSubdivisionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subdivision = getSubdivision(slug);
  if (!subdivision) {
    return { title: 'Community Not Found' };
  }

  const title = `${subdivision.name} Homes for Sale Skye Canyon NV ${subdivision.zip}`;
  const description = subdivision.answerSummary;

  return {
    title,
    description,
    alternates: { canonical: `/skye-canyon/${slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/skye-canyon/${slug}` },
  };
}

export default async function SkyeCanyonSubdivisionRoute({ params }: PageProps) {
  const { slug } = await params;
  const subdivision = getSubdivision(slug);
  if (!subdivision) {
    notFound();
  }
  return <SubdivisionPage subdivision={subdivision} />;
}
