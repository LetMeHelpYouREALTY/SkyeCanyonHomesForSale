'use client';

import { Mail, MapPin, Navigation, Phone, Star } from 'lucide-react';
import { CalendlyInline } from '@/components/calendly-widget';
import GbpLocalSection from '@/components/gbp-local-section';
import GoogleReviewCta from '@/components/google-review-cta';
import HeadingImage from '@/components/heading-image';
import HomebotWidget from '@/components/homebot-widget';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import { sectionImages } from '@/data/section-images';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';

export default function Contact() {

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <PageHero
          title="Contact Dr. Jan Duffy"
          subtitle="Call, get directions, or book a consult at 10111 W. Skye Canyon Park Drive, Las Vegas, NV 89166."
          {...getHeroImageProps('contact')}
        />

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Schedule a Consultation - Calendly Inline */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Schedule a Consultation</h2>
                <p className="text-gray-600 mb-6">
                  Pick a time that works for you. Dr. Jan Duffy will personally review your real estate needs.
                </p>
                <CalendlyInline />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <HeadingImage
                      {...sectionImages.profile}
                      className="w-full h-56 object-cover object-top rounded-xl mb-6"
                    />
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold">Phone</h3>
                          <p className="text-gray-600">{siteConfig.phone}</p>
                          <p className="text-sm text-gray-500">
                            Available 9 AM - 6 PM, Monday - Friday
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p className="text-gray-600">{siteConfig.email}</p>
                          <p className="text-sm text-gray-500">
                            Response within 2 hours during business hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold">Office Location</h3>
                          <p className="text-gray-600">{siteConfig.address.street}</p>
                          <p className="text-gray-600">
                            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                          </p>
                          <p className="text-sm text-gray-500">By appointment only</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Why Choose Dr. Jan Duffy?</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        15+ years Skye Canyon market expertise
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Luxury home specialist with proven results
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Personalized service and market insights
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Nevada Real Estate License #S.0197614
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">What's Your Home Worth?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get an instant AI-powered valuation for your Skye Canyon property.
                    </p>
                    <HomebotWidget id="homebot_contact" className="w-full min-h-[200px]" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Monday - Friday</h3>
                <p className="text-gray-600">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Saturday</h3>
                <p className="text-gray-600">9:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sunday</h3>
                <p className="text-gray-600">11:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Directions
              </a>
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                <Star className="h-4 w-4" aria-hidden="true" />
                Google Reviews
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Consultations outside posted hours are available by appointment.
            </p>
          </div>
        </section>

        <GoogleReviewCta heading="Scan or click to review Dr. Jan Duffy on Google" />
        <GbpLocalSection heading="Map, hours, and Google reviews" />
      </main>

    </>
  );
}
