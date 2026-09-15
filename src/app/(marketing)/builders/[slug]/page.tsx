import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBuilderSlugs, getBuilder } from '@/data/hyperlocal/builders';
import BuilderPage from '@/page-components/hyperlocal/builder-page';
import { pageSocial } from '@/lib/metadata';
import { hostedImage } from '@/lib/page-images';

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
  const description = `${builder.name} homes in Skye Canyon Las Vegas NV 89166. Live MLS with Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.`;

  return {
    title,
    description,
    alternates: { canonical: `/builders/${slug}` },
    ...pageSocial(
      title,
      description,
      `/builders/${slug}`,
      hostedImage('sections/new-construction.jpg'),
    ),
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
