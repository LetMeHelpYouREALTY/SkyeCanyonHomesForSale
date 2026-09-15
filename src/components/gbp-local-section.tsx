import { Clock, MapPin, Navigation, Phone, Search, Star } from 'lucide-react';
import GoogleMapEmbed from '@/components/google-map-embed';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

interface GbpLocalSectionProps {
  heading?: string;
}

export default function GbpLocalSection({
  heading = 'Visit Dr. Jan Duffy in Skye Canyon',
}: GbpLocalSectionProps) {
  const office = sectionImages.monument;

  return (
    <section className="py-16 bg-white" id="visit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{heading}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {siteConfig.businessName} · {siteConfig.address.formatted} · {siteConfig.phone}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
          <picture>
            <source srcSet={office.srcWebp} type="image/webp" />
            <img
              src={office.src}
              alt={office.alt}
              className="w-full h-80 object-cover object-bottom rounded-xl"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
            />
          </picture>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office details</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{siteConfig.address.formatted}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-blue-700">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    {siteConfig.hours.weekdays.label}
                    <br />
                    {siteConfig.hours.saturday.label}
                    <br />
                    {siteConfig.hours.sunday.label}
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={siteConfig.realscoutOnboarding}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Search Homes
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Directions
              </a>
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                <Star className="h-4 w-4" aria-hidden="true" />
                Reviews
              </a>
            </div>
          </div>
        </div>

        <GoogleMapEmbed className="min-h-[360px]" />
      </div>
    </section>
  );
}
