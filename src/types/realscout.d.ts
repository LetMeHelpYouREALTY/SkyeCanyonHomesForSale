import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type RealScoutOfficeListingsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  'agent-encoded-id'?: string;
  'sort-order'?: string;
  'listing-status'?: string;
  'price-min'?: string;
  'price-max'?: string;
  'property-types'?: string;
  'data-production'?: string;
};

type RealScoutSearchProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  'agent-encoded-id'?: string;
  'search-type'?: string;
  location?: string;
  'data-production'?: string;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': RealScoutOfficeListingsProps;
      'realscout-search': RealScoutSearchProps;
    }
  }
}

export {};
