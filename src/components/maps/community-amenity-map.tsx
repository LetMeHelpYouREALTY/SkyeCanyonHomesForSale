'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import {
  amenityCategories,
  communityMapConfig,
  getAmenityCategory,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  type AmenityCategoryId,
} from '@/config/community-map.config';
import {
  curatedAmenities,
  curatedByCategory,
  directionsUrlForAddress,
  type CuratedAmenity,
} from '@/data/hyperlocal/curated-amenities';
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps/google-maps-loader';
import { searchCategory } from '@/lib/google-maps/search-category';
import { cn } from '@/lib/utils';

export interface MapPlaceResult {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
  directionsUrl: string;
}

interface CommunityAmenityMapProps {
  /** Smaller height on homepage preview */
  variant?: 'full' | 'compact';
  className?: string;
  /** Initial category filter */
  defaultCategory?: AmenityCategoryId;
}

const MAP_MIN_HEIGHT = {
  full: 'min-h-[28rem]',
  compact: 'min-h-[22rem]',
} as const;

function buildInfoWindowContent(place: MapPlaceResult): HTMLElement {
  const wrap = document.createElement('div');
  wrap.style.maxWidth = '220px';
  wrap.style.padding = '4px 0';

  const title = document.createElement('strong');
  title.style.fontSize = '14px';
  title.textContent = place.name;
  wrap.appendChild(title);

  if (place.address) {
    const addr = document.createElement('p');
    addr.style.margin = '4px 0';
    addr.style.fontSize = '13px';
    addr.style.color = '#374151';
    addr.textContent = place.address;
    wrap.appendChild(addr);
  }

  const link = document.createElement('a');
  link.href = place.directionsUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.style.display = 'inline-block';
  link.style.marginTop = '8px';
  link.style.color = '#2563eb';
  link.style.fontSize = '13px';
  link.style.fontWeight = '600';
  link.textContent = 'Directions';
  wrap.appendChild(link);

  return wrap;
}

function curatedToMapPlace(item: CuratedAmenity): MapPlaceResult | null {
  if (!item.geo) {
    return null;
  }
  return {
    id: item.id,
    name: item.name,
    address: item.address,
    lat: item.geo.latitude,
    lng: item.geo.longitude,
    directionsUrl: directionsUrlForAddress(item.address),
  };
}

function curatedPlacesForCategory(categoryId: AmenityCategoryId): MapPlaceResult[] {
  return curatedByCategory(categoryId)
    .map(curatedToMapPlace)
    .filter((p): p is MapPlaceResult => p !== null);
}

function placeInstanceToResult(
  p: google.maps.places.Place,
  categoryId: AmenityCategoryId,
  index: number,
): MapPlaceResult | null {
  const loc = p.location;
  if (!loc) {
    return null;
  }
  const latLng = loc as google.maps.LatLng;
  const lat = latLng.lat();
  const lng = latLng.lng();
  const rawName = p.displayName;
  const name =
    typeof rawName === 'string' ? rawName : (rawName as { text?: string } | undefined)?.text ?? 'Place';
  const address = p.formattedAddress ?? undefined;
  const directionsUrl =
    p.googleMapsURI ?? directionsUrlForAddress(address ?? `${lat},${lng}`);
  return {
    id: `${categoryId}-${index}`,
    name,
    address,
    lat,
    lng,
    directionsUrl,
  };
}

export default function CommunityAmenityMap({
  variant = 'full',
  className,
  defaultCategory = 'parks',
}: CommunityAmenityMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | google.maps.marker.AdvancedMarkerElement | null>(
    null,
  );
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [mode, setMode] = useState<'idle' | 'loading' | 'interactive' | 'fallback'>('idle');
  const [places, setPlaces] = useState<MapPlaceResult[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const listId = useId();

  const enterFallback = useCallback((message?: string) => {
    mapRef.current = null;
    setMode('fallback');
    setPlaces([]);
    if (message) {
      setLoadError(message);
    }
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  }, []);

  const showCommunityMarker = useCallback(
    async (map: google.maps.Map) => {
      const center = communityMapConfig.center;
      const title = communityMapConfig.communityMarkerLabel;

      if (communityMarkerRef.current) {
        const existing = communityMarkerRef.current;
        if (existing instanceof google.maps.Marker) {
          existing.setMap(null);
        } else {
          existing.map = null;
        }
      }

      if (mapId) {
        try {
          const { AdvancedMarkerElement, PinElement } = (await google.maps.importLibrary(
            'marker',
          )) as google.maps.MarkerLibrary;
          const pin = new PinElement({
            background: '#1d4ed8',
            glyph: 'S',
          });
          const marker = new AdvancedMarkerElement({
            map,
            position: center,
            title,
            content: pin.element,
          });
          marker.addListener('click', () => {
            const content = buildInfoWindowContent({
              id: 'skye-canyon',
              name: title,
              address: communityMapConfig.communityAddress,
              lat: center.lat,
              lng: center.lng,
              directionsUrl: directionsUrlForAddress(communityMapConfig.communityAddress),
            });
            const iw = new google.maps.InfoWindow({ content });
            infoWindowRef.current = iw;
            iw.open({ map });
          });
          communityMarkerRef.current = marker;
          return;
        } catch {
          /* classic marker */
        }
      }

      const marker = new google.maps.Marker({
        map,
        position: center,
        title,
        label: { text: 'S', color: '#ffffff', fontWeight: '700' },
      });
      marker.addListener('click', () => {
        const content = buildInfoWindowContent({
          id: 'skye-canyon',
          name: title,
          address: communityMapConfig.communityAddress,
          lat: center.lat,
          lng: center.lng,
          directionsUrl: directionsUrlForAddress(communityMapConfig.communityAddress),
        });
        const iw = new google.maps.InfoWindow({ content });
        infoWindowRef.current = iw;
        iw.open({ map, anchor: marker });
      });
      communityMarkerRef.current = marker;
    },
    [mapId],
  );

  const renderMarkers = useCallback(
    (map: google.maps.Map, results: MapPlaceResult[]) => {
      clearMarkers();
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(communityMapConfig.center);

      results.forEach((place) => {
        bounds.extend({ lat: place.lat, lng: place.lng });
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener('click', () => {
          const iw = new google.maps.InfoWindow({ content: buildInfoWindowContent(place) });
          infoWindowRef.current = iw;
          iw.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      });

      if (results.length > 0) {
        map.fitBounds(bounds);
      } else {
        map.setCenter(communityMapConfig.center);
        map.setZoom(13);
      }
    },
    [clearMarkers],
  );

  const resolvePlacesForCategory = useCallback(
    async (categoryId: AmenityCategoryId): Promise<MapPlaceResult[]> => {
      const category = getAmenityCategory(categoryId);
      const center = communityMapConfig.center;
      const fallback = curatedPlacesForCategory(categoryId);

      try {
        const nearby = await searchCategory(center, categoryId, category.primaryTypes);
        const mapped = nearby
          .map((p, index) => placeInstanceToResult(p, categoryId, index))
          .filter((p): p is MapPlaceResult => p !== null);
        if (mapped.length > 0) {
          return mapped;
        }
        return fallback;
      } catch {
        return fallback;
      }
    },
    [],
  );

  const initializeInteractiveMap = useCallback(async () => {
    if (!apiKey || !mapDivRef.current) {
      enterFallback();
      return;
    }

    if (mapsAuthFailed) {
      enterFallback('Interactive map unavailable — showing directory and embed.');
      return;
    }

    setMode('loading');
    setLoadError(null);

    try {
      await loadGoogleMaps(apiKey);
      if (mapsAuthFailed) {
        enterFallback('Interactive map unavailable — showing directory and embed.');
        return;
      }

      const map = new google.maps.Map(mapDivRef.current, {
        center: communityMapConfig.center,
        zoom: 13,
        mapId,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      });
      mapRef.current = map;
      await showCommunityMarker(map);
      const results = await resolvePlacesForCategory(activeCategory);
      setPlaces(results);
      renderMarkers(map, results);
      setMode('interactive');
    } catch {
      enterFallback('Interactive map unavailable — showing directory and embed.');
    }
  }, [activeCategory, apiKey, enterFallback, mapId, renderMarkers, resolvePlacesForCategory, showCommunityMarker]);

  useEffect(() => {
    const onAuthFail = () => {
      enterFallback('Interactive map unavailable — showing directory and embed.');
    };
    window.addEventListener('gmaps:auth-failure', onAuthFail);
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFail);
  }, [enterFallback]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    if (!apiKey || mapsAuthFailed) {
      setMode('fallback');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible && mode === 'idle') {
          void initializeInteractiveMap();
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [apiKey, initializeInteractiveMap, mode]);

  useEffect(() => {
    if (mode !== 'interactive' || !mapRef.current) {
      return;
    }

    let cancelled = false;
    void (async () => {
      const results = await resolvePlacesForCategory(activeCategory);
      if (!cancelled && mapRef.current) {
        setPlaces(results);
        renderMarkers(mapRef.current, results);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [activeCategory, mode, renderMarkers, resolvePlacesForCategory]);

  const staticList = curatedByCategory(activeCategory);
  const showFallbackEmbed = mode === 'fallback' || !apiKey || mapsAuthFailed;
  const listItems =
    mode === 'interactive' && places.length > 0
      ? places
      : staticList.map((item) => ({
          id: item.id,
          name: item.name,
          address: item.address,
          directionsUrl: directionsUrlForAddress(item.address),
          note: item.note,
        }));

  return (
    <div ref={containerRef} className={cn('w-full', className)}>
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2 mb-4"
      >
        {amenityCategories.map((cat) => {
          const selected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={listId}
              aria-label={cat.ariaLabel}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm font-medium transition-colors border',
                selected
                  ? 'bg-realscout-blue text-white border-realscout-blue'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-realscout-blue hover:text-realscout-blue',
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        className={cn(
          'relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm',
          MAP_MIN_HEIGHT[variant],
        )}
      >
        {showFallbackEmbed ? (
          <iframe
            title={`Map of ${communityMapConfig.communityName}, ${communityMapConfig.city}`}
            src={communityMapConfig.fallbackEmbedUrl}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div ref={mapDivRef} className="absolute inset-0 h-full w-full" aria-label="Interactive amenity map" />
        )}
        {mode === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70">
            <p className="text-sm text-gray-600">Loading map…</p>
          </div>
        )}
      </div>

      {loadError && (
        <p className="mt-2 text-sm text-gray-600" role="status">
          {loadError}
        </p>
      )}

      <div id={listId} className="mt-6" role="tabpanel">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {getAmenityCategory(activeCategory).label} near {communityMapConfig.communityName}
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {listItems.map((place) => (
            <li
              key={place.id}
              className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <MapPin className="h-5 w-5 shrink-0 text-realscout-blue" aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-medium text-gray-900">{place.name}</p>
                {place.address && <p className="text-sm text-gray-600 mt-0.5">{place.address}</p>}
                {'note' in place && place.note && (
                  <p className="text-sm text-gray-600 mt-1">{place.note}</p>
                )}
                <a
                  href={place.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-realscout-blue hover:text-realscout-navy"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  Directions
                </a>
              </div>
            </li>
          ))}
        </ul>
        {staticList.length === 0 && places.length === 0 && (
          <p className="text-sm text-gray-600">
            Browse other categories or open the full{' '}
            <a href="/amenities" className="text-realscout-blue font-medium hover:underline">
              Nearby Amenities
            </a>{' '}
            page for verified places around Skye Canyon.
          </p>
        )}
      </div>

      {!showFallbackEmbed && (
        <p className="sr-only">
          Curated directory:{' '}
          {curatedAmenities.map((a) => `${a.name}, ${a.address}`).join('; ')}
        </p>
      )}
    </div>
  );
}
