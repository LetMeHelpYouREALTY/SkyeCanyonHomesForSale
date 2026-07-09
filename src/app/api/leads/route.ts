import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToFollowUpBoss } from '@/lib/fub/client';
import { prisma } from '@/lib/prisma';
import { rateLimit } from '@/lib/rate-limit';
import { leadSchema } from '@/lib/validations/lead';

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  const { success: withinLimit } = rateLimit(`leads:${ip}`, 10, 60_000);
  if (!withinLimit) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const source = data.source ?? 'Skye Canyon Website';

  let leadId: string | null = null;
  let persisted = false;

  try {
    const lead = await prisma.lead.upsert({
      where: { email: data.email },
      create: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone ?? null,
        message: data.message ?? null,
        timeframe: data.timeframe ?? null,
        priceRange: data.priceRange ?? null,
        source,
      },
      update: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone ?? null,
        message: data.message ?? null,
        timeframe: data.timeframe ?? null,
        priceRange: data.priceRange ?? null,
        source,
      },
    });
    leadId = lead.id;
    persisted = true;
  } catch {
    // DB optional in dev — continue to FUB
  }

  const fubSent = await sendLeadToFollowUpBoss({ ...data, source });

  return NextResponse.json(
    {
      success: true,
      message: 'Lead received successfully',
      leadId,
      persisted,
      fubSent,
    },
    { status: 201 },
  );
}
