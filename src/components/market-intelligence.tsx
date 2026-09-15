'use client';

import HeadingImage from '@/components/heading-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function MarketIntelligence() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skye Canyon Market Intelligence</h2>
          <p className="text-xl text-gray-600">
            Use live MLS and Google Maps — not a stale median — before you tour 89166.
          </p>
        </div>
        <HeadingImage
          {...sectionImages.market}
          className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
        />

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Live inventory</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">MLS</p>
                <p className="text-sm text-gray-600">
                  List prices and days on market change weekly. Search current Skye Canyon homes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Office pin</h3>
                <p className="text-lg font-bold text-purple-600 mb-2">{siteConfig.address.zip}</p>
                <p className="text-sm text-gray-600">{siteConfig.address.formatted}</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Named campuses</h3>
                <p className="text-lg font-bold text-green-600 mb-2">CCSD locator</p>
                <p className="text-sm text-gray-600">
                  Divich, Scherkenbach, Bilbray, Cadwallader, Escobedo, Arbor View — confirm the
                  listing address.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Get a live Skye Canyon comp pull</h3>
              <p className="mb-4">
                Dr. Jan Duffy will walk current MLS inventory, builder incentives, and the Google
                Maps pin at {siteConfig.address.street}.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <a href="/contact">Schedule a consultation</a>
                </Button>
                <Button
                  asChild
                  className="border border-white bg-transparent text-white hover:bg-white/15 hover:text-white"
                >
                  <a
                    href={siteConfig.realscoutOnboarding}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Search live MLS
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
