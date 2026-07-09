interface FubLeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  timeframe?: string | null;
  priceRange?: string | null;
  source?: string;
}

export async function sendLeadToFollowUpBoss(lead: FubLeadPayload): Promise<boolean> {
  const apiKey = process.env.FOLLOWUP_BOSS_API_KEY ?? process.env.FUB_API_KEY;
  if (!apiKey) {
    return false;
  }

  try {
    const response = await fetch('https://api.followupboss.com/v1/people', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: lead.firstName,
        lastName: lead.lastName,
        emails: [{ value: lead.email, type: 'work' }],
        phones: lead.phone ? [{ value: lead.phone, type: 'mobile' }] : [],
        source: lead.source ?? 'Skye Canyon Website',
        customFields: {
          skye_canyon_interest: true,
          timeframe: lead.timeframe,
          price_range: lead.priceRange,
          message: lead.message,
        },
        tags: ['Skye Canyon Interest', 'Website Lead'],
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}
