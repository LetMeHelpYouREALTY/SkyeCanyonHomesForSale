'use client';

import ServiceHeroSimple from '@/components/sections/service-hero-simple';

export default function BuyerAgentServicesSimple() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeroSimple
        heroKey="buyer-agent"
        title="Skye Canyon Expert Buyer Agent"
        subtitle="Licensed since 2008 · 35 years in Las Vegas, with Skye Canyon specialization, direct builder relationships and off-market access."
      />
    </div>
  );
}
