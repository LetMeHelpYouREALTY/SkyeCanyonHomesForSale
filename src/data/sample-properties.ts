/**
 * Sample Skye Canyon properties with coordinates for Google Maps integration
 */

import { propertyImages } from '@/data/section-images';

export interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  status: string;
  imageUrl?: string;
  featured?: boolean;
  coordinates: { lat: number; lng: number };
  propertyType: 'luxury' | 'golf-course' | 'new-construction' | 'standard';
  description?: string;
  yearBuilt?: number;
  lotSize?: number;
  mlsId?: string;
}

export const sampleProperties: Property[] = [
  {
    id: 'skye-canyon-001',
    address: '1234 Desert Highlands Dr, Las Vegas, NV 89166',
    price: 1250000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    status: 'Active',
    featured: true,
    coordinates: { lat: 36.2648, lng: -115.3275 },
    propertyType: 'golf-course',
    description: 'Stunning golf course home with panoramic views of the Desert Highlands Golf Course. Features open concept living, gourmet kitchen, and master suite with private balcony.',
    yearBuilt: 2020,
    lotSize: 12000,
    mlsId: 'SC001234',
    imageUrl: propertyImages.golf
  },
  {
    id: 'skye-canyon-002',
    address: '5678 Skye Canyon Blvd, Las Vegas, NV 89166',
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    status: 'Active',
    coordinates: { lat: 36.2654, lng: -115.3282 },
    propertyType: 'luxury',
    description: 'Modern luxury home in the heart of Skye Canyon. Features high-end finishes, smart home technology, and resort-style backyard with pool.',
    yearBuilt: 2022,
    lotSize: 8000,
    mlsId: 'SC002345',
    imageUrl: propertyImages.luxury
  },
  {
    id: 'skye-canyon-003',
    address: '9012 Canyon View Dr, Las Vegas, NV 89166',
    price: 950000,
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3800,
    status: 'New',
    coordinates: { lat: 36.2641, lng: -115.3268 },
    propertyType: 'new-construction',
    description: 'Brand new construction home with contemporary design and energy-efficient features. Quick move-in available with premium upgrades included.',
    yearBuilt: 2024,
    lotSize: 9000,
    mlsId: 'SC003456',
    imageUrl: propertyImages.newConstruction
  },
  {
    id: 'skye-canyon-004',
    address: '3456 Eagle Canyon Way, Las Vegas, NV 89166',
    price: 750000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2800,
    status: 'Active',
    coordinates: { lat: 36.2658, lng: -115.3265 },
    propertyType: 'standard',
    description: 'Single-story home with an open floor plan, updated kitchen, and backyard patio.',
    yearBuilt: 2018,
    lotSize: 7000,
    mlsId: 'SC004567',
    imageUrl: propertyImages.single
  },
  {
    id: 'skye-canyon-005',
    address: '7890 Skye View Ln, Las Vegas, NV 89166',
    price: 1100000,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4500,
    status: 'Active',
    featured: true,
    coordinates: { lat: 36.2639, lng: -115.3288 },
    propertyType: 'golf-course',
    description: 'Exceptional golf course estate with stunning mountain and course views. Features custom finishes, wine cellar, and outdoor entertainment area.',
    yearBuilt: 2019,
    lotSize: 15000,
    mlsId: 'SC005678',
    imageUrl: propertyImages.golf
  },
  {
    id: 'skye-canyon-006',
    address: '2345 Starlight Dr, Las Vegas, NV 89166',
    price: 680000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    status: 'Active',
    coordinates: { lat: 36.2662, lng: -115.3279 },
    propertyType: 'new-construction',
    description: 'Charming new construction home with modern amenities and energy-efficient design. Perfect for first-time buyers or downsizing.',
    yearBuilt: 2024,
    lotSize: 6000,
    mlsId: 'SC006789',
    imageUrl: propertyImages.newConstruction
  }
];

// Helper function to get properties by type
export const getPropertiesByType = (type: Property['propertyType']): Property[] => {
  return sampleProperties.filter(property => property.propertyType === type);
};

// Helper function to get featured properties
export const getFeaturedProperties = (): Property[] => {
  return sampleProperties.filter(property => property.featured);
};

// Helper function to get properties by price range
export const getPropertiesByPriceRange = (min: number, max: number): Property[] => {
  return sampleProperties.filter(property => property.price >= min && property.price <= max);
};

// Helper function to get luxury properties (over $800k)
export const getLuxuryProperties = (): Property[] => {
  return sampleProperties.filter(property => property.price >= 800000);
};

// Helper function to get golf course properties
export const getGolfCourseProperties = (): Property[] => {
  return sampleProperties.filter(property => property.propertyType === 'golf-course');
};

// Helper function to get new construction properties
export const getNewConstructionProperties = (): Property[] => {
  return sampleProperties.filter(property => property.propertyType === 'new-construction');
};
