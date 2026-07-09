import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBuilderSlugs, getBuilder } from '@/data/hyperlocal/builders';
import BuilderPage from '@/page-components/hyperlocal/builder-page';
import { siteConfig } from '@/config/site.config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBuilderSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const builder = getBuilder(slug);
  if (!builder) {
    return { title: 'Builder Not Found' };
  }

  const title = `${builder.name} Homes Skye Canyon Las Vegas NV`;
  const description = builder.answerSummary;

  return {
    title,
    description,
    alternates: { canonical: `/builders/${slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/builders/${slug}` },
  };
}

export default async function BuilderRoute({ params }: PageProps) {
  const { slug } = await params;
  const builder = getBuilder(slug);
  if (!builder) {
    notFound();
  }
  return <BuilderPage builder={builder} />;
}
