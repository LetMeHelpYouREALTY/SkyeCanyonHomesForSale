interface RealScoutListingsProps {
  className?: string;
  priceMin?: string;
  priceMax?: string;
  propertyTypes?: string;
  sortOrder?: string;
  variant?:
    | 'homepage'
    | 'luxury'
    | 'entry-level'
    | 'mid-range'
    | 'new-construction'
    | 'all-properties';
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': any;
    }
  }
}

export default function RealScoutListings({
  className = '',
  priceMin,
  priceMax,
  propertyTypes,
  sortOrder,
  variant = 'homepage',
}: RealScoutListingsProps) {
  // Define price ranges and configurations based on variant
  const getWidgetConfig = () => {
    switch (variant) {
      case 'luxury':
        return {
          priceMin: priceMin || '800000',
          priceMax: priceMax || undefined,
          propertyTypes: propertyTypes || 'SFR,MF,TC',
          sortOrder: sortOrder || 'PRICE_HIGH_TO_LOW',
          title: 'Luxury Skye Canyon Homes',
          description: 'Search higher-priced Skye Canyon MLS listings',
        };
      case 'entry-level':
        return {
          priceMin: priceMin || '500000',
          priceMax: priceMax || '650000',
          propertyTypes: propertyTypes || 'SFR,TC,MOBILE',
          sortOrder: sortOrder || 'PRICE_LOW_TO_HIGH',
          title: 'Starter Homes in Skye Canyon',
          description: 'Search this Skye Canyon price band on live MLS',
        };
      case 'mid-range':
        return {
          priceMin: priceMin || '650000',
          priceMax: priceMax || '800000',
          propertyTypes: propertyTypes || 'SFR,MF,TC',
          sortOrder: sortOrder || 'STATUS_AND_SIGNIFICANT_CHANGE',
          title: 'Mid-Range Skye Canyon Properties',
          description: 'Search this Skye Canyon price band on live MLS',
        };
      case 'new-construction':
        return {
          priceMin: priceMin || '600000',
          priceMax: priceMax || undefined,
          propertyTypes: propertyTypes || 'SFR,MF',
          sortOrder: sortOrder || 'NEWEST',
          title: 'New Construction Homes',
          description: 'Search new Skye Canyon builder and resale inventory',
        };
      case 'all-properties':
        return {
          priceMin: priceMin || '400000',
          priceMax: priceMax || undefined,
          propertyTypes: propertyTypes || 'SFR,MF,TC,MOBILE',
          sortOrder: sortOrder || 'STATUS_AND_SIGNIFICANT_CHANGE',
          title: 'All Available Properties',
          description: 'Complete live MLS inventory for Skye Canyon 89166',
        };
      default: // homepage
        return {
          priceMin: priceMin || '550000',
          priceMax: priceMax || undefined,
          propertyTypes: propertyTypes || 'SFR,MF,TC,MOBILE',
          sortOrder: sortOrder || 'STATUS_AND_SIGNIFICANT_CHANGE',
          title: 'Featured Skye Canyon Homes',
          description: 'Current live MLS listings in Las Vegas NV 89166',
        };
    }
  };

  const config = getWidgetConfig();
  return (
    <div
      className={`${className} realscout-container bg-white rounded-lg shadow-lg overflow-hidden`}
    >
      {/* Enhanced Header with Strong CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <h3 className="text-2xl font-bold mb-2">{config.title}</h3>
        <p className="text-blue-100 mb-4">{config.description}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://drjanduffy.realscout.com/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
          >
            Search All Homes
          </a>
          <a
            href="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 border border-blue-400 transition-colors text-center"
          >
            Get Home Valuation
          </a>
        </div>
      </div>

      {/* Widget Container */}
      <div className="p-6">
        <realscout-office-listings
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          sort-order={config.sortOrder}
          listing-status="For Sale"
          property-types={config.propertyTypes}
          price-min={config.priceMin}
          {...(config.priceMax && { 'price-max': config.priceMax })}
        ></realscout-office-listings>
      </div>

      {/* Bottom CTA for Widget Interaction */}
      <div className="bg-gray-50 border-t p-6 text-center">
        <p className="text-gray-700 mb-4 font-medium">
          Ready to explore more properties or get your home's value?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://drjanduffy.realscout.com/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            View All Available Homes
          </a>
          <a
            href="/contact"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
          >
            Get Home Valuation
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Click any property above to start your search or get detailed property information
        </p>
      </div>

      <noscript>
        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Current Listings</h3>
          <p className="text-gray-600 mb-4">
            Please enable JavaScript to view our current property listings.
          </p>
          <p className="text-sm text-gray-500">
            For property searches and home valuations, contact Dr. Jan Duffy at (702) 500-1902
          </p>
        </div>
      </noscript>
    </div>
  );
}
