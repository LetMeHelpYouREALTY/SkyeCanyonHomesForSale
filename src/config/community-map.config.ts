import { siteConfig } from '@/config/site.config';

/**
 * Hyperlocal map center for Skye Canyon — aligned with GBP office / Skye Canyon Park hub
 * (10111 W Skye Canyon Park Dr, Las Vegas, NV 89166) in siteConfig.geo.
 */
export const communityMapConfig = {
  communityName: 'Skye Canyon',
  city: siteConfig.address.city,
  state: siteConfig.address.state,
  zip: siteConfig.address.zip,
  center: {
    lat: siteConfig.geo.latitude,
    lng: siteConfig.geo.longitude,
  },
  /** Default search radius for Places nearby queries (meters). */
  searchRadiusMeters: 8000,
  communityMarkerLabel: 'Skye Canyon',
  communityAddress: siteConfig.address.formatted,
  /** Keyless embed when Maps JS API is unavailable. */
  fallbackEmbedUrl: `https://www.google.com/maps?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}&z=14&output=embed`,
  /** Master-planned community — category chip order. */
  categoryOrder: [
    'parks',
    'golf',
    'grocery',
    'restaurants',
    'cafes',
    'healthcare',
    'pharmacies',
    'fitness',
    'shopping',
    'schools',
    'parking',
  ] as const,
} as const;

export type AmenityCategoryId = (typeof communityMapConfig.categoryOrder)[number];

export interface AmenityCategoryDefinition {
  id: AmenityCategoryId;
  label: string;
  /** Places API (New) includedPrimaryTypes */
  primaryTypes: string[];
  /** Classic PlacesService nearbySearch `type` (first entry) */
  legacyType?: string;
  ariaLabel: string;
}

export const amenityCategories: AmenityCategoryDefinition[] = [
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park', 'playground'],
    legacyType: 'park',
    ariaLabel: 'Show parks and recreation areas near Skye Canyon',
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
    legacyType: 'golf_course',
    ariaLabel: 'Show golf courses near Skye Canyon',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
    legacyType: 'grocery_or_supermarket',
    ariaLabel: 'Show grocery stores near Skye Canyon',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
    legacyType: 'restaurant',
    ariaLabel: 'Show restaurants near Skye Canyon',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
    legacyType: 'cafe',
    ariaLabel: 'Show cafes near Skye Canyon',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
    legacyType: 'hospital',
    ariaLabel: 'Show hospitals and medical offices near Skye Canyon',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy', 'drugstore'],
    legacyType: 'pharmacy',
    ariaLabel: 'Show pharmacies near Skye Canyon',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym', 'fitness_center'],
    legacyType: 'gym',
    ariaLabel: 'Show gyms and fitness centers near Skye Canyon',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall', 'department_store'],
    legacyType: 'shopping_mall',
    ariaLabel: 'Show shopping near Skye Canyon',
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
    legacyType: 'school',
    ariaLabel: 'Show schools near Skye Canyon',
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
    legacyType: 'parking',
    ariaLabel: 'Show parking near Skye Canyon',
  },
];

export function getAmenityCategory(id: AmenityCategoryId): AmenityCategoryDefinition {
  const found = amenityCategories.find((c) => c.id === id);
  if (!found) {
    throw new Error(`Unknown amenity category: ${id}`);
  }
  return found;
}

export function getGoogleMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  return key || undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
  return mapId || undefined;
}
