import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    url: 'https://drjanduffy.realscout.com/onboarding',
    agentId: 'QWdlbnQtMjI1MDUw',
    location: 'Skye Canyon, Las Vegas, NV 89166',
  });
}
