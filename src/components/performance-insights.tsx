import { Award, Home, MapPin, Star } from 'lucide-react';
import HeadingImage from '@/components/heading-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

const performanceStats = [
  {
    icon: Home,
    metric: 'Live MLS',
    label: 'Current 89166 inventory',
    detail: 'Confirm comps before you tour',
  },
  {
    icon: Award,
    metric: siteConfig.opened.label,
    label: 'Google Business Profile',
    detail: `Nevada license ${siteConfig.license}`,
  },
  {
    icon: MapPin,
    metric: '89166',
    label: 'Office at Skye Canyon Park',
    detail: siteConfig.address.street,
  },
  {
    icon: Star,
    metric: 'Google',
    label: 'Business Profile reviews',
    detail: 'Read current reviews on Maps',
  },
];

export default function PerformanceInsights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skye Canyon results you can verify
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Confirm live MLS inventory and Google reviews before you tour. Call {siteConfig.phone}.
          </p>
          <HeadingImage
            {...sectionImages.listings}
            className="w-full h-52 md:h-64 object-cover rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {performanceStats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-realscout-blue" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                <div className="text-gray-900 font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.detail}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={siteConfig.googleReviewUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-realscout-blue hover:bg-realscout-navy text-white">
              Read Google reviews
            </Button>
          </a>
          <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Open Google Maps</Button>
          </a>
          <a href={siteConfig.realscoutOnboarding} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Search live MLS</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
