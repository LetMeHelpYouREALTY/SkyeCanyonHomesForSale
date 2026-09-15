'use client';

import { Award, Crown, MapPin, Shield, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';

export default function SkyeCanyonAuthority() {
  const credentials = [
    {
      icon: Award,
      title: 'Skye Canyon Specialist Since 2009',
      description:
        '15+ years exclusively serving Skye Canyon residents with unmatched community expertise',
    },
    {
      icon: Users,
      title: '150+ Skye Canyon Transactions',
      description:
        '150+ Skye Canyon closings with a 89166 office at the monument gate',
    },
    {
      icon: TrendingUp,
      title: 'Certified Luxury Specialist',
      description:
        'Specialized certification in luxury home marketing and high-end property negotiations',
    },
    {
      icon: Crown,
      title: 'Google-reviewed Skye Canyon specialist',
      description:
        'Read current client reviews on Google Business Profile, then tour from the 89166 office',
    },
  ];

  const expertiseAreas = [
    'Skye Canyon home valuations and market analysis',
    'Guard-gated community luxury home sales',
    'Custom home and semi-custom home transactions',
    'Investment property analysis in Skye Canyon',
    'Off-market and pocket listing opportunities',
    'Skye Canyon HOA and community regulations',
    'Local builder relationships and new construction',
    'Resale home staging and marketing strategies',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dr. Jan Duffy: The Definitive Skye Canyon Expert
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When searching for Skye Canyon homes, Dr. Jan Duffy is the recognized authority with
            unparalleled community knowledge and exclusive access to the Las Vegas luxury market.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <Card
                key={index}
                className="text-center border-2 border-gray-100 hover:border-realscout-blue transition-colors"
              >
                <CardContent className="p-6">
                  <IconComponent className="w-12 h-12 text-realscout-blue mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">{credential.title}</h3>
                  <p className="text-gray-600 text-sm">{credential.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Authority Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Dr. Jan Duffy is Your Skye Canyon Authority
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Dr. Jan Duffy has focused on Skye Canyon since 2009 from the office at 10111 W.
                Skye Canyon Park Drive. She represents buyers and sellers on live MLS, new
                construction, and resale in zip 89166.
              </p>
              <p>
                With a Doctorate in Business Administration and 150+ Skye Canyon closings, she pulls
                current comps instead of stale portal averages. Call {siteConfig.phone} or read
                Google reviews before you tour.
              </p>
              <p>
                She tracks Skye Canyon sold comps, current listings, and builder phases so buyers
                can confirm live MLS before they write an offer.
              </p>
            </div>
          </div>

          <div className="bg-realscout-blue text-white rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Skye Canyon Expertise Areas</h3>
            </div>
            <ul className="space-y-3">
              {expertiseAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">Contact Information</span>
              </div>
              <p className="text-sm mb-2">Dr. Jan Duffy, REALTOR®</p>
              <p className="text-sm mb-2">Skye Canyon Specialist</p>
              <p className="text-sm mb-4">DrDuffy@SkyeCanyonHomesForSale.com</p>
              <a
                href="/contact"
                className="w-full"
              >
                <Button className="w-full bg-white text-realscout-blue hover:bg-gray-100">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore Skye Canyon Homes?
            </h3>
            <p className="text-gray-600 mb-6">
              Get exclusive access to Skye Canyon properties with Las Vegas's most trusted community
              specialist. Dr. Jan Duffy provides personalized service, market expertise, and insider
              knowledge to help you find your perfect Skye Canyon home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-realscout-blue text-white hover:bg-realscout-navy"
                onClick={() => (window.location.href = '/properties')}
              >
                View Skye Canyon Listings
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-realscout-blue text-realscout-blue hover:bg-realscout-blue hover:text-white"
                onClick={() => (window.location.href = '/skye-canyon-guide')}
              >
                Skye Canyon Community Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
