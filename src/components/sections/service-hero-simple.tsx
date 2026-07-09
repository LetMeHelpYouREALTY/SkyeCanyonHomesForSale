'use client';

import PageHero from '@/components/sections/page-hero';
import { getHeroImage } from '@/data/hero-images';

interface ServiceHeroSimpleProps {
  heroKey: string;
  title: string;
  subtitle: string;
}

export default function ServiceHeroSimple({ heroKey, title, subtitle }: ServiceHeroSimpleProps) {
  const hero = getHeroImage(heroKey);
  return (
    <PageHero title={title} subtitle={subtitle} image={hero.src} imageAlt={hero.alt} minHeight="sm">
      <a
        href="tel:+17025001902"
        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
      >
        Call (702) 500-1902
      </a>
    </PageHero>
  );
}
