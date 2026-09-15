'use client';

import { MapPin, Navigation, Phone, Search, Star } from 'lucide-react';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import PropertyMapImage from '@/components/property-map-image';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';
import { mapsStaticAPI } from '@/lib/maps-static-api';

export default function StaticMapsDemo() {
  const officeCoords = {
    lat: siteConfig.geo.latitude,
    lng: siteConfig.geo.longitude,
  };

  const neighborhoodMap = mapsStaticAPI.generateNeighborhoodMap(officeCoords, {
    size: '800x600',
    zoom: 14,
  });

  const directionsMap = mapsStaticAPI.generateDirectionsMap(
    { lat: 36.1147, lng: -115.1728 },
    officeCoords,
    { size: '800x600' },
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Google Maps for Skye Canyon Homes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Pin the office at {siteConfig.address.formatted}. Search live MLS for current homes — this
          page does not publish placeholder addresses or prices.
        </p>
        <HeadingImage
          {...sectionImages.office}
          className="w-full h-56 md:h-72 object-cover rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Office pin</h2>
          <PropertyMapImage
            property={{
              address: siteConfig.address.formatted,
              coordinates: officeCoords,
              propertyType: 'standard',
            }}
            size="large"
            showTitle={true}
            interactive={true}
            onMapClick={() => window.open(siteConfig.googleMapsUrl, '_blank', 'noopener,noreferrer')}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Get there from the Strip</h2>
          <p className="text-gray-600">
            Typical drive is about 25–30 minutes via I-215 to {siteConfig.address.street}.
          </p>
          <img
            src={directionsMap}
            alt={`Driving route to ${siteConfig.address.formatted}`}
            className="w-full h-64 object-cover rounded-lg border"
          />
          <img
            src={neighborhoodMap}
            alt={`Neighborhood map around ${siteConfig.address.formatted}`}
            className="w-full h-48 object-cover rounded-lg border"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {siteConfig.phone}
        </a>
        <a
          href={siteConfig.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Get directions
        </a>
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Open Google Maps
        </a>
        <a
          href={siteConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
        >
          <Star className="h-4 w-4" aria-hidden="true" />
          Reviews
        </a>
        <a
          href={siteConfig.realscoutOnboarding}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search Homes
        </a>
      </div>

      <GbpLocalSection heading="Get directions to the Skye Canyon office" />
    </div>
  );
}
