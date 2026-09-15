'use client';

import { Calendar, Phone } from 'lucide-react';
import HeadingImage from '@/components/heading-image';
import { Button } from '@/components/ui/button';
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
            href="https://drjanduffy.realscout.com/onboarding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-realscout-blue px-8 py-4 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Search Homes
            </Button>
          </a>
          <a href={`tel:${siteConfig.phoneTel}`}>
            <Button
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-realscout-blue"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {siteConfig.phone}
            </Button>
          </a>
        </div>

        <div className="mt-8 text-sm opacity-80">
          <p>
            {siteConfig.hours.weekdays.label} · {siteConfig.hours.saturday.label} ·{' '}
            {siteConfig.hours.sunday.label}
          </p>
        </div>
      </div>
    </section>
  );
}
