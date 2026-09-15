'use client';

import { Home, Phone, Search } from 'lucide-react';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-16">
        <Card className="w-full max-w-2xl mx-4 overflow-hidden">
          <HeadingImage
            {...sectionImages.listings}
            className="w-full h-48 object-cover"
          />
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
              <p className="text-lg text-gray-600 mb-4">
                That page moved. Search Skye Canyon homes or call {siteConfig.phone}.
              </p>
              <p className="text-sm text-gray-500 mb-8">{siteConfig.address.formatted}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={siteConfig.realscoutOnboarding}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search Homes
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={`tel:${siteConfig.phoneTel}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call {siteConfig.phone}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="max-w-5xl mx-auto px-4">
          <GbpLocalSection heading="Still looking? Call the Skye Canyon office" />
        </div>
      </main>
    </>
  );
}
