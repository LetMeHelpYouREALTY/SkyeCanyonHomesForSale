'use client';

import { Home, MapPin, Navigation } from 'lucide-react';
import { useEffect, useState } from 'react';
import HeadingImage from '@/components/heading-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

type HeatmapView = 'price' | 'activity' | 'campuses' | 'amenities';

interface HeatmapData {
  neighborhood: string;
  coordinates: { lat: number; lng: number };
  campuses: string[];
  amenities: string[];
  zip: string;
}

interface LocalInsights {
  hotspots: string[];
  inventoryNote: string;
}

function heatmapColor(viewType: HeatmapView): string {
  switch (viewType) {
    case 'price':
      return 'bg-blue-600';
    case 'activity':
      return 'bg-indigo-500';
    case 'campuses':
      return 'bg-sky-500';
    case 'amenities':
      return 'bg-emerald-500';
    default: {
      const _exhaustive: never = viewType;
      return _exhaustive;
    }
  }
}

const sampleHeatmapData: HeatmapData[] = [
  {
    neighborhood: 'Skye Canyon',
    coordinates: { lat: siteConfig.geo.latitude, lng: siteConfig.geo.longitude },
    campuses: [
      'Kenneth Divich Elementary',
      'William & Mary Scherkenbach Elementary',
      'James Bilbray Elementary',
      'Ralph Cadwallader Middle',
      'Edmundo Escobedo Sr Middle',
      'Arbor View High School',
    ],
    amenities: ['Desert Highlands Golf Course', 'Skye Canyon Park', 'Recreation Center'],
    zip: '89166',
  },
  {
    neighborhood: 'Centennial Hills',
    coordinates: { lat: 36.2633, lng: -115.3086 },
    campuses: ['Confirm CCSD locator for the listing address'],
    amenities: ['Shopping Centers', 'Recreation'],
    zip: '89149',
  },
  {
    neighborhood: 'Summerlin West',
    coordinates: { lat: 36.1716, lng: -115.3447 },
    campuses: ['Confirm CCSD locator for the listing address'],
    amenities: ['Parks', 'Shopping', 'Trailheads toward Red Rock Canyon'],
    zip: '89135',
  },
  {
    neighborhood: 'Northwest Las Vegas',
    coordinates: { lat: 36.24, lng: -115.3 },
    campuses: ['Confirm CCSD locator for the listing address'],
    amenities: ['I-215 access', 'Retail corridors'],
    zip: '89131',
  },
];

const sampleInsights: LocalInsights = {
  hotspots: ['Skye Canyon', 'Summerlin West', 'Centennial Hills'],
  inventoryNote:
    '3+ bedroom inventory is the most common listing mix in 89166. Confirm commute time for the specific address.',
};

export default function NeighborhoodHeatmap() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
  const [heatmapData, setHeatmapData] = useState<HeatmapData[]>([]);
  const [localInsights, setLocalInsights] = useState<LocalInsights | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState<HeatmapView>('price');

  useEffect(() => {
    async function fetchHeatmapData() {
      try {
        const response = await fetch('/api/neighborhood-heatmap');
        if (!response.ok) {
          throw new Error('heatmap unavailable');
        }
        const data = await response.json();
        const incoming = data.neighborhoods as HeatmapData[] | undefined;
        if (Array.isArray(incoming) && incoming[0]?.campuses && incoming[0]?.zip) {
          setHeatmapData(
            incoming.map((n) => ({
              neighborhood: n.neighborhood,
              coordinates: n.coordinates,
              campuses: n.campuses,
              amenities: n.amenities,
              zip: n.zip,
            })),
          );
        } else {
          setHeatmapData(sampleHeatmapData);
        }
        setLocalInsights(
          Array.isArray(data.insights?.hotspots) && data.insights?.inventoryNote
            ? {
                hotspots: data.insights.hotspots,
                inventoryNote: data.insights.inventoryNote,
              }
            : sampleInsights,
        );
      } catch (_error) {
        setHeatmapData(sampleHeatmapData);
        setLocalInsights(sampleInsights);
      } finally {
        setIsLoading(false);
      }
    }
    fetchHeatmapData();
  }, []);

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Loading Neighborhood Heat Map...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <HeadingImage
        {...sectionImages.northwest}
        className="w-full h-48 md:h-64 object-cover rounded-xl"
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-6 h-6" />
            <span>Neighborhood Heat Map & Local Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeView}
            onValueChange={(value) => setActiveView(value as HeatmapView)}
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="price">Live MLS</TabsTrigger>
              <TabsTrigger value="activity">Compare areas</TabsTrigger>
              <TabsTrigger value="campuses">Campuses</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
            </TabsList>

            <TabsContent value="price" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {heatmapData.map((neighborhood) => (
                  <Card
                    key={neighborhood.neighborhood}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedNeighborhood === neighborhood.neighborhood ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedNeighborhood(neighborhood.neighborhood)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{neighborhood.neighborhood}</h3>
                        <div
                          className={`w-4 h-4 rounded-full ${heatmapColor(activeView)}`}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">ZIP {neighborhood.zip}</p>
                      <a
                        href={siteConfig.realscoutOnboarding}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-700 hover:text-blue-900"
                      >
                        Search live MLS
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {heatmapData.map((neighborhood) => (
                  <Card
                    key={neighborhood.neighborhood}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedNeighborhood === neighborhood.neighborhood ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedNeighborhood(neighborhood.neighborhood)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{neighborhood.neighborhood}</h3>
                        <Badge variant="secondary">ZIP {neighborhood.zip}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Confirm days on market and sale comps on live MLS for this zip.
                      </p>
                      <a
                        href={siteConfig.realscoutOnboarding}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-700 hover:text-blue-900"
                      >
                        Open RealScout
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="campuses" className="space-y-4">
              <p className="text-sm text-gray-600">
                Campus names only — confirm Clark County School District zoning for the listing
                address before you write an offer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {heatmapData.map((neighborhood) => (
                  <Card
                    key={neighborhood.neighborhood}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedNeighborhood === neighborhood.neighborhood ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedNeighborhood(neighborhood.neighborhood)}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{neighborhood.neighborhood}</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {neighborhood.campuses.map((campus) => (
                          <li key={campus}>{campus}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {heatmapData.map((neighborhood) => (
                  <Card
                    key={neighborhood.neighborhood}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedNeighborhood === neighborhood.neighborhood ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedNeighborhood(neighborhood.neighborhood)}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{neighborhood.neighborhood}</h3>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.amenities.map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {localInsights && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Home className="w-6 h-6" />
              <span>Local Market Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Live comps</span>
                    <Navigation className="w-4 h-4 text-blue-600" />
                  </div>
                  <a
                    href={siteConfig.realscoutOnboarding}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-blue-700 hover:text-blue-900"
                  >
                    Search MLS
                  </a>
                  <div className="text-xs text-gray-500 mt-1">No stale medians on this map</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Office pin</span>
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium">{siteConfig.address.formatted}</div>
                  <div className="text-xs text-gray-500 mt-1">Matches Google Business Profile</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Active areas</span>
                    <Home className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-lg font-bold">{localInsights.hotspots.length}</div>
                  <div className="text-xs text-gray-500">{localInsights.inventoryNote}</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Compare these areas:</h4>
              <div className="flex flex-wrap gap-2">
                {localInsights.hotspots.map((hotspot) => (
                  <Badge key={hotspot} variant="outline">
                    {hotspot}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedNeighborhood && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedNeighborhood} — listing snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const neighborhood = heatmapData.find((n) => n.neighborhood === selectedNeighborhood);
              if (!neighborhood) {
                return null;
              }

              return (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Location</h4>
                      <div className="text-sm space-y-1">
                        <div>ZIP: {neighborhood.zip}</div>
                        <a
                          href={siteConfig.realscoutOnboarding}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900"
                        >
                          Search live MLS
                        </a>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Campuses</h4>
                      <div className="text-sm space-y-1">
                        {neighborhood.campuses.map((campus) => (
                          <div key={campus}>{campus}</div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Amenities</h4>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.amenities.map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={() => setSelectedNeighborhood(null)} variant="outline">
                      Close Details
                    </Button>
                    <Button asChild>
                      <a
                        href={siteConfig.realscoutOnboarding}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View listings in {selectedNeighborhood}
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })()}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
