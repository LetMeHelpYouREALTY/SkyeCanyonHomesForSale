import { MapPin, Navigation, Phone, Search, Star } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export default function GbpPresenceBar() {
  return (
    <div className="bg-realscout-navy text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <div className="text-center lg:text-left min-w-0">
          <p className="font-semibold">{siteConfig.businessName}</p>
          <p className="text-white/90">
            {siteConfig.address.formatted}
            <span className="mx-2 text-white/50">·</span>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="whitespace-nowrap underline-offset-2 hover:underline"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <a
            href={siteConfig.realscoutOnboarding}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-realscout-navy px-3 py-1 font-medium hover:bg-blue-50"
          >
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            Search Homes
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-realscout-navy px-3 py-1 font-medium hover:bg-blue-50"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call
          </a>
          <a
            href={siteConfig.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-3 py-1 font-medium hover:bg-white/10"
          >
            <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
            Directions
          </a>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-3 py-1 font-medium hover:bg-white/10"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Google Maps
          </a>
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-3 py-1 font-medium hover:bg-white/10"
          >
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            Reviews
          </a>
        </div>
      </div>
    </div>
  );
}
