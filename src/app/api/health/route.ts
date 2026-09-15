import { NextResponse } from 'next/server';
import { getImageCdnStatus, siteImage } from '@/lib/cloudflare-images';

export async function GET() {
  const imageCdn = getImageCdnStatus();
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    imageCdn,
    sampleImage: siteImage('gbp/cover.jpg'),
  });
}
