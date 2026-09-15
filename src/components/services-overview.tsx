import { ArrowRight, Building, Crown, Home, MapPin, TrendingUp, Truck, Users } from 'lucide-react';
import Link from 'next/link';
import HeadingImage from '@/components/heading-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

const services = [
  {
    id: 'buyer-agent',
    title: 'Expert Buyer Agent Services',
    description:
      '15+ years exclusive Skye Canyon specialization with direct builder relationships and off-market access.',
    icon: Home,
    highlight: 'Average client saves $15K+',
    link: '/services/buyer-agent',
    color: 'text-blue-600',
  },
  {
    id: 'first-time-buyer',
    title: 'First-Time Home Buyer Services',
    description:
      'Specialized guidance for new buyers through HOA requirements, builder incentives, and community amenities.',
    icon: Users,
    highlight: '200+ first-time buyers helped',
    link: '/services/first-time-buyer',
    color: 'text-green-600',
  },
  {
    id: 'luxury-properties',
    title: 'Luxury Property Buying & Sales',
    description:
      'Certified Luxury Home Marketing Specialist with $50M+ in transactions since 2009.',
    icon: Crown,
    highlight: '98% of list price results',
    link: '/services/luxury-properties',
    color: 'text-purple-600',
  },
  {
    id: 'new-construction',
    title: 'New Construction Sales & Leasing',
    description:
      'Direct partnerships with Toll Brothers, Lennar, DR Horton, and all active Skye Canyon builders.',
    icon: Building,
    highlight: 'Only exclusive Skye Canyon focus',
    link: '/services/new-construction',
    color: 'text-orange-600',
  },
  {
    id: 'relocation',
    title: 'Relocation Assistance',
    description:
      "Comprehensive relocation services for buyers moving to Las Vegas' premier guard-gated community.",
    icon: Truck,
    highlight: 'Full-service relocation support',
    link: '/services/relocation',
    color: 'text-teal-600',
  },
  {
    id: 'seller-agent',
    title: "Seller's Agent Services",
    description:
      'Expert listing and marketing services with proven results in the competitive Skye Canyon market.',
    icon: TrendingUp,
    highlight: 'Premium marketing package',
    link: '/services/seller-agent',
    color: 'text-red-600',
  },
];

const servicePhotos: Record<string, (typeof sectionImages)[keyof typeof sectionImages]> = {
  'buyer-agent': sectionImages.listings,
  'first-time-buyer': sectionImages.guide,
  'luxury-properties': sectionImages.luxuryInterior,
  'new-construction': sectionImages.newConstruction,
  relocation: sectionImages.northwest,
  'seller-agent': sectionImages.valuation,
};

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-realscout-blue/10 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-5 h-5 mr-2 text-realscout-blue" />
            <span className="font-medium text-realscout-blue">
              Skye Canyon Specialized Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Real Estate Services in Skye Canyon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Buyer, seller, new construction, and relocation help for Skye Canyon and northwest Las
            Vegas NV 89166 — 15+ years on this zip code.
          </p>
          <HeadingImage
            {...sectionImages.clubhouse}
            alt="Skye Canyon clubhouse where buyers meet Dr. Jan Duffy Las Vegas NV 89166"
            className="w-full h-48 md:h-64 object-cover rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow group overflow-hidden">
              <HeadingImage
                {...(servicePhotos[service.id] ?? sectionImages.office)}
                alt={`${service.title} in Skye Canyon Las Vegas NV 89166`}
                className="w-full h-36 object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors`}
                  >
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Specialized
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="bg-realscout-blue/5 p-3 rounded-lg">
                  <p className="text-sm font-medium text-realscout-blue">✓ {service.highlight}</p>
                </div>
                <Button asChild className="w-full bg-realscout-blue hover:bg-realscout-navy text-white group">
                  <Link href={service.link}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience specialized Skye Canyon service?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button className="bg-realscout-blue hover:bg-realscout-navy text-white">
                Schedule a Consultation
              </Button>
            </a>
            <a href={`tel:${siteConfig.phoneTel}`}>
              <Button
                variant="outline"
                className="border-realscout-blue text-realscout-blue hover:bg-realscout-blue hover:text-white"
              >
                Call {siteConfig.phone}
              </Button>
            </a>
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Open Google Maps</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
