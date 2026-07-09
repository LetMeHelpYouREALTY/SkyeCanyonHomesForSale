import { NextRequest, NextResponse } from 'next/server';

const sampleProperties = [
  {
    id: 1,
    address: '123 Skye Canyon Drive, Las Vegas, NV 89166',
    price: 1250000,
    bedrooms: 4,
    bathrooms: '3.5',
    sqft: 3200,
    description: 'Luxury Skye Canyon home with mountain views and TPC golf course access',
    imageUrl: '/images/luxury-home-1.jpg',
    status: 'active',
    featured: true,
  },
  {
    id: 2,
    address: '456 Skye Canyon Park Drive, Las Vegas, NV 89166',
    price: 1850000,
    bedrooms: 5,
    bathrooms: '4.5',
    sqft: 4200,
    description: 'Premium estate with Red Rock Canyon views and resort amenities',
    imageUrl: '/images/luxury-home-2.jpg',
    status: 'active',
    featured: true,
  },
];

export async function GET() {
  return NextResponse.json(sampleProperties);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ success: true, property: { id: Date.now(), ...body } }, { status: 201 });
}
