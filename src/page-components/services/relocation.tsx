'use client';

import PageHero from '@/components/sections/page-hero';
import { getHeroImage } from '@/data/hero-images';

export default function RelocationServices() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">

      <PageHero
        title="Skye Canyon Relocation Expert"
        subtitle="Relocation services for families and professionals moving to northwest Las Vegas and Skye Canyon NV 89166."
        image={getHeroImage('relocation').src}
        imageAlt={getHeroImage('relocation').alt}
      >
        <a
          href="tel:+17025001902"
          className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
        >
          Call (702) 500-1902
        </a>
      </PageHero>

      </div>
    </>
  );
}
