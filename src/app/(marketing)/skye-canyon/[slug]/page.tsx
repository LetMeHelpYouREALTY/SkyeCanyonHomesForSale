import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSubdivisionSlugs, getSubdivision } from '@/data/hyperlocal/subdivisions';
import SubdivisionPage from '@/page-components/hyperlocal/subdivision-page';
import { pageSocial } from '@/lib/metadata';

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
  const description = `${subdivision.name} ${subdivision.builder} homes in Skye Canyon Las Vegas NV ${subdivision.zip}. Live MLS with Dr. Jan Duffy. Call (702) 500-1902.`;

  return {
    title,
    description,
    alternates: { canonical: `/skye-canyon/${slug}` },
    ...pageSocial(title, description, `/skye-canyon/${slug}`),
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
