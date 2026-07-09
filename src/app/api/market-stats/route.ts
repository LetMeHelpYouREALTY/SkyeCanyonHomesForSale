import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    medianPrice: '$1,250,000',
    daysOnMarket: 15,
    homesSold: 24,
    activeListings: 8,
    appreciationRate: '8-12% annually',
    marketTrend: 'Strong buyer demand',
  });
}
