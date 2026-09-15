'use client';

import {
  Award,
  Calendar,
  CheckCircle,
  Home,
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  Users,
} from 'lucide-react';
import BackToTop from '@/components/back-to-top';
import Breadcrumb from '@/components/breadcrumb';
import FAQSection from '@/components/faq-section';
import PerformanceInsights from '@/components/performance-insights';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import GoogleReviewCta from '@/components/google-review-cta';
import HeadingImage from '@/components/heading-image';
import HeroSearchCtas from '@/components/hero-search-ctas';
import RelatedSearches from '@/components/related-searches';
import { sectionImages } from '@/data/section-images';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    icon: Home,
    title: 'Live MLS comps',
    description: 'Search current Skye Canyon inventory before you tour',
  },
  {
    icon: Users,
    title: 'Google-reviewed service',
    description: 'Read current client reviews on Google Business Profile',
  },
  {
    icon: TrendingUp,
    title: 'Skye Canyon specialist',
    description: 'Luxury, new construction, and resale in Las Vegas NV 89166',
  },
  {
    icon: Award,
    title: siteConfig.opened.label,
    description: 'Google Business Profile opening date for this 89166 office',
  },
];

export default function About() {
  const _scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">

        <PageHero
          title="Meet Dr. Jan Duffy, REALTOR®"
          subtitle="Skye Canyon REALTOR® for luxury, new construction, and resale in Las Vegas NV 89166. Google Business Profile since 2009."
          {...getHeroImageProps('about')}
          minHeight="md"
        >
          <HeroSearchCtas />
        </PageHero>

        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'About Dr. Duffy' }]} />
        </div>

        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-realscout-blue/10 text-realscout-blue rounded-full px-4 py-2 mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Skye Canyon Specialist</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Skye Canyon Real Estate Specialist
                </h2>
                <p className="text-xl mb-4 text-gray-700 font-medium">
                  Skye Canyon homes for sale in Las Vegas NV 89166
                </p>
                <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                  Dr. Jan Duffy is a Nevada REALTOR® (S.0197614) at {siteConfig.address.formatted}.
                  The Google Business Profile for this office opened in {siteConfig.opened.year}.
                  She represents buyers and sellers on luxury, new construction, and resale homes
                  in Skye Canyon and northwest Las Vegas NV 89166.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact">
                    <Button className="bg-realscout-blue text-white hover:bg-realscout-navy">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Button>
                  </a>
                  <a href={`tel:${siteConfig.phoneTel}`}>
                    <Button
                      variant="outline"
                      className="border-realscout-blue text-realscout-blue hover:bg-realscout-blue hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call {siteConfig.phone}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-realscout-blue to-realscout-navy rounded-2xl p-1 shadow-2xl">
                  <div className="bg-white rounded-xl p-4">
                    <picture>
                      <source srcSet={sectionImages.profile.srcWebp} type="image/webp" />
                      <img
                        src={sectionImages.profile.src}
                        alt={sectionImages.profile.alt}
                        className="rounded-lg w-full max-w-md mx-auto object-cover"
                        width={800}
                        height={800}
                      />
                    </picture>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border-2 border-realscout-blue">
                  <div className="text-realscout-blue text-2xl font-bold">{siteConfig.opened.year}</div>
                  <div className="text-gray-600 text-sm font-medium">Google Business Profile</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Listings */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Skye Canyon MLS Listings
              </h2>
              <p className="text-xl text-gray-600">
                Live MLS inventory for Skye Canyon Las Vegas NV 89166 — confirm addresses on listing.
              </p>
            </div>
            <HeadingImage
              src={sectionImages.listings.src}
              srcWebp={sectionImages.listings.srcWebp}
              alt={sectionImages.listings.alt}
              className="w-full h-52 object-cover rounded-xl mb-8"
            />
            <RealScoutListings className="w-full" variant="all-properties" />
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Track Record
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Delivering results for Skye Canyon buyers and sellers in Las Vegas NV 89166
              </p>
              <HeadingImage
                {...sectionImages.monument}
                className="w-full h-52 md:h-64 object-cover rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="bg-realscout-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-realscout-blue" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Background
              </h2>
              <HeadingImage
                {...sectionImages.clubhouse}
                className="w-full h-52 object-cover rounded-xl mb-8"
              />
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Dr. Jan Duffy is a Skye Canyon REALTOR® with {siteConfig.brokerage}, licensed
                    in Nevada ({siteConfig.license}). The Google Business Profile at this 89166
                    office lists an opening date of {siteConfig.opened.month}/{siteConfig.opened.day}/{siteConfig.opened.year}.
                    Confirm current inventory on live MLS and read reviews on Google Maps.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Specializing in luxury homes, golf course properties, and new construction within 
                    Skye Canyon's guard-gated communities, Dr. Duffy provides comprehensive services 
                    including buyer representation, listing services, investment property analysis, 
                    and market consultation. Her approach combines detailed market research with
                    personalized client service to ensure optimal outcomes for every transaction.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Services include property valuation, market analysis, negotiation strategy,
                    transaction management, and post-closing support. Whether you're buying your
                    first home, selling to upgrade, or building an investment portfolio, Dr. Duffy
                    provides the expertise and guidance you need.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Dr. Duffy's client-focused approach combines comprehensive market knowledge with
                    advanced technology tools to streamline your real estate experience. From
                    initial consultation to closing day, she provides clear communication, strategic
                    guidance, and dedicated support throughout your transaction.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-realscout-blue" />
                        Education & Credentials
                      </h2>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          Skye Canyon Market Specialist
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          Nevada Real Estate License {siteConfig.license}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          Graduate, REALTOR® Institute (GRI)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          {siteConfig.brokerage}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-realscout-blue" />
                        Professional Memberships
                      </h2>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          National Association of REALTORS®
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          Nevada Association of REALTORS®
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          Las Vegas REALTORS® Association
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Insights */}
        <PerformanceInsights />

        <GoogleReviewCta heading="Google reviews for Dr. Jan Duffy" />

        {/* Contact CTA */}
        <section id="contact" className="py-16 bg-realscout-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your Skye Canyon real estate goals
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Call Direct</div>
                  <a href={`tel:${siteConfig.phoneTel}`} className="opacity-90 hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a href={`mailto:${siteConfig.email}`} className="opacity-90 hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Service Area</div>
                  <div className="opacity-90">{siteConfig.address.formatted}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="bg-white text-realscout-blue hover:bg-gray-100">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </a>
              <a
                href={siteConfig.realscoutOnboarding}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-realscout-blue"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Search Homes
                </Button>
              </a>
            </div>
          </div>
        </section>

        <GbpLocalSection heading="Visit the Skye Canyon office" />

        {/* FAQ Section for About Dr. Jan Duffy */}
        <FAQSection
          title="About Dr. Jan Duffy — Skye Canyon REALTOR®"
          pageType="general"
          faqs={[
            {
              question: "What are Dr. Jan Duffy's qualifications as a REALTOR®?",
              answer:
                'Dr. Jan Duffy holds Nevada Real Estate License S.0197614 with Berkshire Hathaway HomeServices Nevada Properties. The Google Business Profile for the Skye Canyon office at 10111 W Skye Canyon Park Dr lists an opening date of September 20, 2009.',
            },
            {
              question: 'Why choose Dr. Jan Duffy for Skye Canyon homes?',
              answer:
                'Dr. Jan Duffy specializes in Skye Canyon properties and works live MLS for luxury, new construction, and resale in zip 89166. Confirm current comps at (702) 500-1902.',
            },
            {
              question: 'What areas does Dr. Jan Duffy serve?',
              answer:
                'While specializing in Skye Canyon (89166), Dr. Jan Duffy also serves Northwest Las Vegas, Henderson, Summerlin, and other luxury communities throughout the Las Vegas valley.',
            },
            {
              question: 'How can I contact Dr. Jan Duffy?',
              answer:
                `Call ${siteConfig.phone} or visit the office at 10111 W Skye Canyon Park Dr, Las Vegas, NV 89166. ${siteConfig.hours.weekdays.label}. ${siteConfig.hours.saturday.label}. ${siteConfig.hours.sunday.label}.`,
            },
            {
              question: 'Does Dr. Jan Duffy work with first-time buyers?',
              answer:
                'Yes. Dr. Jan Duffy works with first-time buyers, luxury purchasers, and buyers relocating to Las Vegas NV 89166. Call (702) 500-1902 to start a live MLS search.',
            },
          ]}
        />

        <RelatedSearches searchType="general" />

        <BackToTop />
      </div>
    </>
  );
}
