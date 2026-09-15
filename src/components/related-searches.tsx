import Link from 'next/link';
import { Home, MapPin, Search } from 'lucide-react';
import HeadingImage from '@/components/heading-image';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';
import { sectionImages, type SectionImage } from '@/data/section-images';

type RelatedSearchType = 'skye-canyon' | 'luxury-homes' | 'las-vegas' | 'general';

interface RelatedSearchItem {
  term: string;
  category: string;
  href: string;
  external?: boolean;
}

interface RelatedSearchesProps {
  searchType: RelatedSearchType;
}

function relatedSearchesFor(searchType: RelatedSearchType): RelatedSearchItem[] {
  const mls = siteConfig.realscoutOnboarding;
  switch (searchType) {
    case 'skye-canyon':
      return [
        { term: 'Skye Canyon new construction', category: 'New Homes', href: '/skye-canyon-communities' },
        { term: 'Desert Highlands Golf Course homes', category: 'Golf Course', href: '/luxury-homes-las-vegas' },
        { term: '24/7 guarded gate Skye Canyon', category: 'Community Access', href: '/skye-canyon-guide' },
        { term: '89166 homes for sale', category: 'Location', href: '/89166-homes-for-sale' },
        { term: 'Skye Canyon parks and recreation', category: 'Community Info', href: '/skye-canyon-parks' },
        { term: 'Northwest Las Vegas real estate', category: 'Area', href: '/northwest-las-vegas' },
      ];
    case 'luxury-homes':
      return [
        { term: 'Search luxury Skye Canyon listings', category: 'Live MLS', href: mls, external: true },
        { term: 'Custom homes Las Vegas 89166', category: 'Home Type', href: '/services/luxury-properties' },
        { term: 'Golf-course homes Skye Canyon', category: 'Amenities', href: '/luxury-homes-las-vegas' },
        { term: '89166 luxury homes for sale', category: 'Location', href: '/89166-homes-for-sale' },
        { term: 'Century Communities new construction', category: 'Construction', href: '/services/new-construction' },
        { term: 'Seller listing consultation', category: 'Sellers', href: '/services/seller-agent' },
      ];
    case 'las-vegas':
      return [
        { term: 'Centennial Hills homes for sale', category: 'Location', href: '/centennial-hills-homes-for-sale' },
        { term: 'Summerlin and northwest Las Vegas', category: 'Community', href: '/las-vegas-real-estate' },
        { term: 'Skye Canyon new home communities', category: 'New Construction', href: '/skye-canyon-communities' },
        { term: 'Northwest Las Vegas market', category: 'Market Trends', href: '/northwest-las-vegas' },
        { term: 'Relocate to Skye Canyon 89166', category: 'Moving', href: '/services/relocation' },
        { term: 'Search Clark County MLS', category: 'Area Search', href: mls, external: true },
      ];
    case 'general':
      return [
        { term: 'Skye Canyon buyer agent', category: 'Services', href: '/services/buyer-agent' },
        { term: 'First-time homebuyer 89166', category: 'Buyers', href: '/services/first-time-buyer' },
        { term: 'Skye Canyon market analysis', category: 'Market Data', href: '/market-analysis' },
        { term: 'Home valuation Skye Canyon', category: 'Property Value', href: '/contact' },
        { term: 'Contact the 89166 office', category: 'Office', href: '/contact' },
        { term: 'Search live MLS listings', category: 'Live MLS', href: mls, external: true },
      ];
    default: {
      const _never: never = searchType;
      return _never;
    }
  }
}

function headingPhotoFor(searchType: RelatedSearchType): SectionImage {
  switch (searchType) {
    case 'skye-canyon':
      return sectionImages.communityMap;
    case 'luxury-homes':
      return sectionImages.luxuryInterior;
    case 'las-vegas':
      return sectionImages.northwest;
    case 'general':
      return sectionImages.listings;
    default: {
      const _never: never = searchType;
      return _never;
    }
  }
}

export default function RelatedSearches({ searchType }: RelatedSearchesProps) {
  const searches = relatedSearchesFor(searchType);
  const photo = headingPhotoFor(searchType);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Continue your Skye Canyon search</h2>
          <p className="text-lg text-gray-600 mb-8">
            Open a related page or live MLS — then call {siteConfig.phone} to tour.
          </p>
          <HeadingImage {...photo} className="w-full h-48 object-cover rounded-xl" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searches.map((search) => (
            <Link
              key={search.term}
              href={search.href}
              {...(search.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow duration-200 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {search.category === 'Location' || search.category === 'Area' ? (
                        <MapPin className="w-5 h-5 text-realscout-blue mt-1" />
                      ) : search.category === 'New Homes' || search.category === 'New Construction' ? (
                        <Home className="w-5 h-5 text-realscout-blue mt-1" />
                      ) : (
                        <Search className="w-5 h-5 text-realscout-blue mt-1" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-realscout-blue transition-colors">
                        {search.term}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{search.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need help with a specific search?
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="text-realscout-blue font-semibold ml-1 hover:underline"
            >
              Call Dr. Jan Duffy at {siteConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
