import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, email, phone, message, timeframe, priceRange } = body;

  const lead = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    phone,
    message,
    timeframe,
    priceRange,
    source: 'Skye Canyon Website',
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(
    { success: true, message: 'Lead created successfully', lead },
    { status: 201 },
  );
}
