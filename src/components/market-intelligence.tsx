'use client';

import { useQuery } from '@tanstack/react-query';
import HeadingImage from '@/components/heading-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function MarketIntelligence() {
  const { data: marketInsights } = useQuery({
    queryKey: ['/api/market-insights'],
    queryFn: async () => {
      const response = await fetch('/api/market-insights');
      if (!response.ok) {
        throw new Error('Failed to fetch market insights');
      }
      return response.json();
    },
  });

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

          {marketInsights?.insights && marketInsights.insights.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Latest Market Insights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {marketInsights.insights.slice(0, 4).map(
                  (
                    insight: {
                      imageUrl?: string;
                      title: string;
                      description: string;
                      source: string;
                      link: string;
                    },
                    index: number,
                  ) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                      {insight.imageUrl && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={insight.imageUrl}
                            alt={insight.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2 line-clamp-2">{insight.title}</h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {insight.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{insight.source}</span>
                          <Button
                            variant="link"
                            className="text-blue-600 p-0 h-auto"
                            onClick={() => window.open(insight.link, '_blank', 'noopener,noreferrer')}
                          >
                            Read More →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ),
                )}
              </div>
            </div>
          )}

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
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
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
