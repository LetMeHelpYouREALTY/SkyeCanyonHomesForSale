'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import CommunityAmenityMap from '@/components/maps/community-amenity-map';
import { communityMapConfig } from '@/config/community-map.config';

interface NearbyAmenitiesSectionProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export default function NearbyAmenitiesSection({
  variant = 'compact',
  className = '',
}: NearbyAmenitiesSectionProps) {
  const title =
    variant === 'compact'
      ? `Life Near ${communityMapConfig.communityName}`
      : `What's Nearby in ${communityMapConfig.communityName}`;

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="nearby-amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-realscout-blue mb-2">
            Hyperlocal map
          </p>
          <h2 id="nearby-amenities-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            Explore grocery, parks, golf, healthcare, and schools around{' '}
            {communityMapConfig.communityName}, {communityMapConfig.city} NV{' '}
            {communityMapConfig.zip}. Filter the map, then open the full amenities guide for drive-time
            context.
          </p>
        </div>

        <CommunityAmenityMap variant={variant} defaultCategory="parks" />

        <div className="mt-8 text-center">
          <Link
            href="/amenities"
            className="inline-flex items-center gap-2 rounded-lg bg-realscout-blue px-6 py-3 text-white font-semibold hover:bg-realscout-navy transition-colors"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Nearby Amenities in {communityMapConfig.communityName}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
