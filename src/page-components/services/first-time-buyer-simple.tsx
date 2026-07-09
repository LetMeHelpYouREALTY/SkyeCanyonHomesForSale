'use client';

import ServiceHeroSimple from '@/components/sections/service-hero-simple';

export default function FirstTimeBuyerServicesSimple() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeroSimple
        heroKey="first-time-buyer"
        title="Skye Canyon First-Time Buyer Expert"
        subtitle="Guidance for new buyers through financing, HOA requirements, and closing in 89166."
      />
    </div>
  );
}
