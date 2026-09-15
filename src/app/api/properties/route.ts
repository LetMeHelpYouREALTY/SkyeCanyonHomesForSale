import { NextRequest, NextResponse } from 'next/server';

/**
 * Live inventory lives on RealScout MLS widgets, not this API.
 * Do not return invented addresses or prices.
 */
export async function GET() {
  return NextResponse.json([]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ success: true, property: { id: Date.now(), ...body } }, { status: 201 });
}
