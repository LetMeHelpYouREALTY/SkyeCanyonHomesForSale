import { sectionImages, type SectionImage } from '@/data/section-images';

type KnownZip = '89166' | '89149' | '89144';
type KnownPark =
  | 'skye-canyon-park'
  | 'eagle-canyon-park'
  | 'skye-view-park'
  | 'big-skye-park'
  | 'starlight-park';
type KnownSubdivision = 'eaglepointe' | 'marvella' | 'skyecrest';

function knownZip(zip: string): KnownZip {
  switch (zip) {
    case '89166':
    case '89149':
    case '89144':
      return zip;
    default:
      return '89166';
  }
}

function knownPark(slug: string): KnownPark {
  switch (slug) {
    case 'skye-canyon-park':
    case 'eagle-canyon-park':
    case 'skye-view-park':
    case 'big-skye-park':
    case 'starlight-park':
      return slug;
    default:
      return 'eagle-canyon-park';
  }
}

function knownSubdivision(slug: string): KnownSubdivision {
  switch (slug) {
    case 'eaglepointe':
    case 'marvella':
    case 'skyecrest':
      return slug;
    default:
      return 'eaglepointe';
  }
}

export function zipImageKey(zip: string): string {
  const key = knownZip(zip);
  switch (key) {
    case '89166':
      return 'gbp/community-map.jpg';
    case '89149':
      return 'heroes/northwest.jpg';
    case '89144':
      return 'heroes/market.jpg';
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function zipSectionImage(zip: string): SectionImage {
  const key = knownZip(zip);
  switch (key) {
    case '89166':
      return {
        ...sectionImages.communityMap,
        alt: 'Skye Canyon community map for zip 89166 Las Vegas NV homes',
      };
    case '89149':
      return {
        ...sectionImages.northwest,
        alt: 'Centennial Hills and northwest Las Vegas homes in zip 89149',
      };
    case '89144':
      return {
        ...sectionImages.market,
        alt: 'Northwest Las Vegas housing in zip 89144 near Skye Canyon',
      };
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function zipHeroKey(zip: string): string {
  const key = knownZip(zip);
  switch (key) {
    case '89166':
      return 'skye-canyon-guide';
    case '89149':
      return 'northwest-las-vegas';
    case '89144':
      return 'las-vegas-real-estate';
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function parkImageKey(slug: string): string {
  const key = knownPark(slug);
  switch (key) {
    case 'skye-canyon-park':
      return 'gbp/recreation.jpg';
    case 'eagle-canyon-park':
      return 'gbp/park.jpg';
    case 'skye-view-park':
      return 'heroes/northwest.jpg';
    case 'big-skye-park':
      return 'gbp/community-map.jpg';
    case 'starlight-park':
      return 'gbp/clubhouse.jpg';
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function parkSectionImage(slug: string, name: string): SectionImage {
  const key = knownPark(slug);
  switch (key) {
    case 'skye-canyon-park':
      return {
        ...sectionImages.recreation,
        alt: `${name} Junior Olympic pool and recreation in Skye Canyon Las Vegas NV 89166`,
      };
    case 'eagle-canyon-park':
      return {
        ...sectionImages.parks,
        alt: `${name} playground and walking paths in Skye Canyon Las Vegas NV 89166`,
      };
    case 'skye-view-park':
      return {
        ...sectionImages.northwest,
        alt: `${name} mountain views and trails in Skye Canyon Las Vegas NV 89166`,
      };
    case 'big-skye-park':
      return {
        ...sectionImages.communityMap,
        alt: `${name} open fields on the Skye Canyon community map Las Vegas NV 89166`,
      };
    case 'starlight-park':
      return {
        ...sectionImages.clubhouse,
        alt: `${name} evening lighting near the Skye Canyon clubhouse Las Vegas NV 89166`,
      };
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function parkHeroKey(slug: string): string {
  const key = knownPark(slug);
  switch (key) {
    case 'skye-canyon-park':
      return 'skye-canyon-parks';
    case 'eagle-canyon-park':
      return 'skye-canyon-parks';
    case 'skye-view-park':
      return 'northwest-las-vegas';
    case 'big-skye-park':
      return 'skye-canyon-guide';
    case 'starlight-park':
      return 'skye-canyon-parks';
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function subdivisionImageKey(slug: string): string {
  const key = knownSubdivision(slug);
  switch (key) {
    case 'eaglepointe':
      return 'sections/new-construction.jpg';
    case 'marvella':
      return 'sections/luxury-interior.jpg';
    case 'skyecrest':
      return 'heroes/community.jpg';
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function subdivisionSectionImage(slug: string, name: string): SectionImage {
  const key = knownSubdivision(slug);
  switch (key) {
    case 'eaglepointe':
      return {
        ...sectionImages.newConstruction,
        alt: `${name} new construction homes in Skye Canyon Las Vegas NV 89166`,
      };
    case 'marvella':
      return {
        ...sectionImages.luxuryInterior,
        alt: `${name} interior finishes in Skye Canyon Las Vegas NV 89166`,
      };
    case 'skyecrest':
      return {
        ...sectionImages.guide,
        alt: `${name} neighborhood street in Skye Canyon Las Vegas NV 89166`,
      };
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function subdivisionHeroKey(slug: string): string {
  const key = knownSubdivision(slug);
  switch (key) {
    case 'eaglepointe':
      return 'new-construction';
    case 'marvella':
      return 'luxury-properties';
    case 'skyecrest':
      return 'subdivision';
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

export function areaImageKey(): string {
  return 'heroes/northwest.jpg';
}

export function areaSectionImage(name: string): SectionImage {
  return {
    ...sectionImages.northwest,
    alt: `${name} homes in northwest Las Vegas near Skye Canyon NV 89166`,
  };
}
