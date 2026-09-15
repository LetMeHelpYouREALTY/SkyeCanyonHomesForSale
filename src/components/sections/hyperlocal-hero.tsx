import type { ReactNode } from 'react';
import HeroSearchCtas from '@/components/hero-search-ctas';
import PageHero from '@/components/sections/page-hero';

interface HyperlocalHeroProps {
  headline: string;
  answerSummary: string;
  badges?: string[];
  image: string;
  imageAlt: string;
  imageMobile?: string;
  imageWebp?: string;
  imageMobileWebp?: string;
  children?: ReactNode;
}

export default function HyperlocalHero({
  headline,
  answerSummary,
  badges = [],
  image,
  imageAlt,
  imageMobile = image.replace(/\.jpg$/, '-mobile.jpg'),
  imageWebp = image.replace(/\.jpg$/, '.webp'),
  imageMobileWebp = image.replace(/\.jpg$/, '-mobile.webp'),
  children,
}: HyperlocalHeroProps) {
  return (
    <PageHero
      title={headline}
      subtitle={answerSummary}
      image={image}
      imageAlt={imageAlt}
      imageMobile={imageMobile}
      imageWebp={imageWebp}
      imageMobileWebp={imageMobileWebp}
      badges={badges}
      minHeight="md"
    >
      {children ?? <HeroSearchCtas />}
    </PageHero>
  );
}
