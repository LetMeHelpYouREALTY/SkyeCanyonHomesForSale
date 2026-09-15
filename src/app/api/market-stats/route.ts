import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site.config';

/**
 * Do not return invented medians, DOM, or YoY rates.
 * Portal snapshots move monthly — send buyers to live MLS and the office.
 */
export async function GET() {
  return NextResponse.json({
    zip: siteConfig.address.zip,
    neighborhood: 'Skye Canyon',
    disclaimer:
      'Confirm current list prices, days on market, and sale comps on live MLS before you write an offer.',
    searchUrl: siteConfig.realscoutOnboarding,
    phone: siteConfig.phone,
    mapsUrl: siteConfig.googleMapsUrl,
    updated: null,
  });
}
