'use client';

import { Calendar, Phone } from 'lucide-react';
import HeadingImage from '@/components/heading-image';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function CallToAction() {
  const _scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-realscout-blue to-realscout-light text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Search Skye Canyon Homes in Las Vegas NV 89166
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Live MLS with {siteConfig.name}. Call {siteConfig.phone} to tour from{' '}
          {siteConfig.address.street}.
        </p>
        <HeadingImage
          {...sectionImages.office}
          className="w-full h-48 object-cover rounded-xl mb-8 opacity-95"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.realscoutOnboarding}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-semibold text-realscout-blue hover:bg-gray-100"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Search Homes
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center justify-center rounded-md border-2 border-white bg-realscout-navy/30 px-8 py-4 font-semibold text-white hover:bg-white hover:text-realscout-blue"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call {siteConfig.phone}
          </a>
        </div>

        <div className="mt-8 text-sm opacity-80">
          <p>{siteConfig.hours.daily.label}</p>
        </div>
      </div>
    </section>
  );
}
