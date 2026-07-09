import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'wouter';
import { CalendlyPopupWidget } from '@/components/calendly-widget';
import Navigation from '@/components/navigation';

// Lazy load all pages to prevent one module crash from breaking the entire app
const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));
const Contact = lazy(() => import('@/pages/contact'));
const Properties = lazy(() => import('@/pages/properties'));
const PropertyDetail = lazy(() => import('@/pages/property-detail'));
const LasVegasRealEstate = lazy(() => import('@/pages/las-vegas-real-estate'));
const LuxuryHomesLasVegas = lazy(() => import('@/pages/luxury-homes-las-vegas'));
const MarketAnalysis = lazy(() => import('@/pages/market-analysis'));
const NeighborhoodAnalysis = lazy(() => import('@/pages/neighborhood-analysis'));
const PrivacyPolicy = lazy(() => import('@/pages/privacy-policy'));
const TermsOfService = lazy(() => import('@/pages/terms-of-service'));
const VoiceSearch = lazy(() => import('@/pages/voice-search'));
const SkyeCanyonGuide = lazy(() => import('@/pages/skye-canyon-guide'));
const SkyeCanyonCommunities = lazy(() => import('@/pages/skye-canyon-communities'));
const SkyeCanyonParks = lazy(() => import('@/pages/skye-canyon-parks'));
const SkyeCanyonSchools = lazy(() => import('@/pages/skye-canyon-schools'));
const NorthwestLasVegas = lazy(() => import('@/pages/northwest-las-vegas'));
const PerformanceDashboard = lazy(() => import('@/pages/performance-dashboard'));
const LeadDashboard = lazy(() => import('@/pages/lead-dashboard'));
const FollowupBossStatus = lazy(() => import('@/pages/followup-boss-status'));
const SeoManagement = lazy(() => import('@/pages/seo-management'));
const HomeSimple = lazy(() => import('@/pages/home-simple'));
const NotFound = lazy(() => import('@/pages/not-found'));
const Search = lazy(() => import('@/pages/search'));
const StaticMapsDemo = lazy(() => import('@/components/static-maps-demo'));

// Service Pages
const BuyerAgent = lazy(() => import('@/pages/services/buyer-agent'));
const FirstTimeBuyer = lazy(() => import('@/pages/services/first-time-buyer'));
const LuxuryProperties = lazy(() => import('@/pages/services/luxury-properties'));
const NewConstruction = lazy(() => import('@/pages/services/new-construction'));
const SellerAgent = lazy(() => import('@/pages/services/seller-agent'));
const Relocation = lazy(() => import('@/pages/services/relocation'));

function PageLoading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '18px', color: '#1e3a8a', fontWeight: 600 }}>Loading...</div>
      </div>
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <Router>
      <Navigation />
      <CalendlyPopupWidget />
      <Suspense fallback={<PageLoading />}>
        <Switch>
          {/* Main Routes */}
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/properties" component={Properties} />
          <Route path="/property/:id" component={PropertyDetail} />
          <Route path="/las-vegas" component={LasVegasRealEstate} />
          <Route path="/las-vegas-real-estate" component={LasVegasRealEstate} />
          <Route path="/luxury-homes-las-vegas" component={LuxuryHomesLasVegas} />
          <Route path="/market-analysis" component={MarketAnalysis} />
          <Route path="/neighborhood-analysis" component={NeighborhoodAnalysis} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/voice-search" component={VoiceSearch} />
          <Route path="/skye-canyon-guide" component={SkyeCanyonGuide} />
          <Route path="/skye-canyon-communities" component={SkyeCanyonCommunities} />
          <Route path="/skye-canyon-parks" component={SkyeCanyonParks} />
          <Route path="/skye-canyon-schools" component={SkyeCanyonSchools} />
          <Route path="/northwest-las-vegas" component={NorthwestLasVegas} />
          <Route path="/performance-dashboard" component={PerformanceDashboard} />
          <Route path="/lead-dashboard" component={LeadDashboard} />
          <Route path="/followup-boss-status" component={FollowupBossStatus} />
          <Route path="/seo-management" component={SeoManagement} />
          <Route path="/home-simple" component={HomeSimple} />

          {/* Service Routes */}
          <Route path="/services/buyer-agent" component={BuyerAgent} />
          <Route path="/services/first-time-buyer" component={FirstTimeBuyer} />
          <Route path="/services/luxury-properties" component={LuxuryProperties} />
          <Route path="/services/new-construction" component={NewConstruction} />
          <Route path="/services/seller-agent" component={SellerAgent} />
          <Route path="/services/relocation" component={Relocation} />

          {/* Search Route */}
          <Route path="/search" component={Search} />
          <Route path="/search/:query" component={Search} />

          {/* Demo Route */}
          <Route path="/demo/maps" component={StaticMapsDemo} />

          {/* 404 Route - must be last inside Switch */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
