import PageHero from '@/components/sections/page-hero';

interface HyperlocalHeroProps {
  headline: string;
  answerSummary: string;
  badges?: string[];
  image: string;
  imageAlt: string;
  imageMobile?: string;
}

export default function HyperlocalHero({
  headline,
  answerSummary,
  badges = [],
  image,
  imageAlt,
  imageMobile,
}: HyperlocalHeroProps) {
  return (
    <PageHero
      title={headline}
      subtitle={answerSummary}
      image={image}
      imageAlt={imageAlt}
      imageMobile={imageMobile}
      badges={badges}
      minHeight="md"
    />
  );
}
