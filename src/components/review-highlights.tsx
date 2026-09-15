import { ExternalLink, Star } from 'lucide-react';
import HeadingImage from '@/components/heading-image';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function ReviewHighlights() {
  const office = sectionImages.monument;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Google reviews for Skye Canyon buyers</h2>
          <p className="text-xl text-gray-600 mb-8">
            Read current Google Business Profile reviews, then call {siteConfig.phone} to tour.
          </p>
        </div>
        <HeadingImage
          src={office.src}
          srcWebp={office.srcWebp}
          alt={office.alt}
          className="w-full h-56 md:h-72 object-cover rounded-xl mb-8"
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={siteConfig.googleReviewUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-realscout-blue hover:bg-realscout-navy text-white">
              <Star className="w-4 h-4 mr-2" />
              View Google Reviews
            </Button>
          </a>
          <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Google Maps
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
