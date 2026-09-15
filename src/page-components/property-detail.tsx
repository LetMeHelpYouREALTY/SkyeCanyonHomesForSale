'use client';

import type { Property } from '@shared/schema';
import { useQuery } from '@tanstack/react-query';
import {
  Bath,
  Bed,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Search,
  Share2,
  Square,
} from 'lucide-react';
import { useParams } from 'next/navigation';
import RealScoutListings from '@/components/realscout-listings';
import RelatedSearches from '@/components/related-searches';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function PropertyDetail() {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const {
    data: property,
    isLoading,
    error,
  } = useQuery<Property>({
    queryKey: ['/api/properties', id],
    enabled: !!id,
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatSqft = (sqft: number) => {
    return new Intl.NumberFormat('en-US').format(sqft);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-96 bg-gray-300 rounded-lg mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-64 bg-gray-300 rounded"></div>
              </div>
              <div className="h-64 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
            <p className="text-gray-600 mb-6">The property you're looking for doesn't exist.</p>
            <HeadingImage
              {...sectionImages.listings}
              className="w-full h-56 object-cover rounded-xl mb-6"
            />
            <a
              href={siteConfig.realscoutOnboarding}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold"
            >
              Search Homes
            </a>
            <GbpLocalSection heading="Call the office about this listing" />
          </div>
        </div>
      </div>
    );
  }

  const shareListing = () => {
    const url = window.location.href;
    if (navigator.share) {
      void navigator.share({ title: `Skye Canyon listing — ${property.address}`, url });
      return;
    }
    void navigator.clipboard.writeText(url);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">

      {/* Hero Image */}
      <div className="relative h-96 lg:h-[500px]">
        <img
          src={property.imageUrl || sectionImages.listings.src}
          alt={`Property at ${property.address}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex justify-between items-end">
            <div className="text-white">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{formatPrice(property.price)}</h1>
              <p className="text-xl flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {property.address}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                asChild
              >
                <a
                  href={siteConfig.realscoutOnboarding}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Homes
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={shareListing}
                aria-label="Share this listing"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Details */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Property Details</CardTitle>
                    {property.featured && (
                      <Badge className="mt-2 bg-blue-100 text-blue-800">Featured Property</Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {property.status === 'active' ? 'Active' : property.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <Bed className="w-8 h-8 text-realscout-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold">{property.bedrooms}</div>
                    <div className="text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-8 h-8 text-realscout-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold">{property.bathrooms}</div>
                    <div className="text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="w-8 h-8 text-realscout-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold">{formatSqft(property.sqft)}</div>
                    <div className="text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-realscout-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold">MLS</div>
                    <div className="text-gray-600">Confirm year built</div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Skye Canyon community context</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Confirm beds, baths, garage, and views on the live MLS sheet for this address.
                  Skye Canyon in Las Vegas NV 89166 includes a 24/7 guarded gate, Desert Highlands
                  Golf Course, and recreation amenities near {siteConfig.address.street}.
                </p>
                <a
                  href={siteConfig.realscoutOnboarding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-semibold text-realscout-blue hover:text-realscout-navy"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Homes
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Contact Agent */}
            <Card className="mb-8 sticky top-4">
              <CardHeader>
                <CardTitle>Contact Dr. Jan Duffy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <img
                    src={sectionImages.profile.src}
                    alt={sectionImages.profile.alt}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg">Dr. Jan Duffy</h3>
                  <p className="text-gray-600">REALTOR® | Skye Canyon Specialist</p>
                </div>

                <div className="space-y-3">
                  <Button asChild className="w-full bg-realscout-blue text-white hover:bg-realscout-navy">
                    <a href="tel:+17025001902">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (702) 500-1902
                    </a>
                  </Button>
                  <Button asChild
                    variant="outline"
                    className="w-full border-realscout-blue text-realscout-blue hover:bg-realscout-blue hover:text-white"
                  >
                    <a href="mailto:DrDuffy@SkyeCanyonHomesForSale.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <a
                    href="/contact"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Showing
                    </Button>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600 text-center">
                    {siteConfig.hours.weekdays.label}. {siteConfig.hours.saturday.label}.{' '}
                    {siteConfig.hours.sunday.label}. Consultations outside posted hours by appointment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Property Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Property Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="font-medium">Single Family</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lot Size:</span>
                    <span className="font-medium">Confirm on listing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HOA Fees:</span>
                    <span className="font-medium">Confirm on listing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Tax:</span>
                    <span className="font-medium">Confirm on listing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">MLS #:</span>
                    <span className="font-medium">Confirm on live MLS</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Similar Skye Canyon Properties
            </h2>
            <p className="text-xl text-gray-600">Other listings you might be interested in</p>
          </div>
          <HeadingImage
            {...sectionImages.listings}
            className="w-full h-56 object-cover rounded-xl mb-10"
          />
          <RealScoutListings className="w-full" variant="all-properties" />
        </div>
      </section>

      <GbpLocalSection heading="Tour this listing with Dr. Jan Duffy" />
      <RelatedSearches searchType="general" />

      </div>
    </>
  );
}
