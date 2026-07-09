export interface HyperlocalFaq {
  question: string;
  answer: string;
}

export interface HyperlocalSubdivision {
  slug: string;
  name: string;
  builder: string;
  builderSlug: string;
  priceRange: string;
  bedrooms: string;
  description: string;
  answerSummary: string;
  features: string[];
  highlights: string[];
  faqs: HyperlocalFaq[];
  geo: { latitude: number; longitude: number };
  zip: string;
}

export interface HyperlocalPark {
  slug: string;
  name: string;
  size?: string;
  description: string;
  answerSummary: string;
  address?: string;
  hours?: string;
  features: string[];
  highlights: string[];
  faqs: HyperlocalFaq[];
  geo: { latitude: number; longitude: number };
}

export interface HyperlocalZipArea {
  slug: string;
  zip: string;
  name: string;
  headline: string;
  description: string;
  answerSummary: string;
  neighborhoods: string[];
  medianPrice?: string;
  daysOnMarket?: string;
  faqs: HyperlocalFaq[];
  geo: { latitude: number; longitude: number };
}

export interface HyperlocalBuilder {
  slug: string;
  name: string;
  description: string;
  answerSummary: string;
  communities: string[];
  communitySlugs: string[];
  priceRange: string;
  faqs: HyperlocalFaq[];
}

export interface HyperlocalArea {
  slug: string;
  name: string;
  zipCodes: string[];
  headline: string;
  description: string;
  answerSummary: string;
  highlights: string[];
  faqs: HyperlocalFaq[];
  geo: { latitude: number; longitude: number };
}

export interface RealtorService {
  slug: string;
  title: string;
  description: string;
  href: string;
}
