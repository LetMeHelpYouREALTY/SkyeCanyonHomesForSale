/** Minimal Google Maps typings for amenity map (full @types/google.maps not required). */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions);
    setCenter(latLng: LatLng | LatLngLiteral): void;
    setZoom(zoom: number): void;
    fitBounds(bounds: LatLngBounds): void;
    panTo(latLng: LatLng | LatLngLiteral): void;
  }

  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }

  class InfoWindow {
    constructor(opts?: InfoWindowOptions);
    setContent(content: string | Element): void;
    open(map?: Map, anchor?: Marker): void;
    close(): void;
  }

  enum SymbolPath {
    CIRCLE = 0,
  }

  class LatLngBounds {
    extend(point: LatLng | LatLngLiteral): void;
  }

  class LatLng {
    constructor(lat: number, lng: number);
    lat(): number;
    lng(): number;
  }

  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    mapId?: string;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
    zoomControl?: boolean;
  }

  interface MarkerOptions {
    position?: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
    icon?: unknown;
    label?: { text: string; color?: string; fontWeight?: string };
  }

  interface InfoWindowOptions {
    content?: string;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  namespace places {
    class PlacesService {
      constructor(map: Map);
      nearbySearch(
        request: NearbySearchRequest,
        callback: (results: PlaceResult[] | null, status: PlacesServiceStatus) => void,
      ): void;
    }

    interface NearbySearchRequest {
      location: LatLng | LatLngLiteral;
      radius: number;
      type?: string;
    }

    interface PlaceResult {
      place_id?: string;
      name?: string;
      vicinity?: string;
      formatted_address?: string;
      geometry?: { location?: LatLng };
      rating?: number;
    }

    enum PlacesServiceStatus {
      OK = 'OK',
    }
  }

  function importLibrary(name: 'places'): Promise<PlacesLibrary>;
  function importLibrary(name: 'marker'): Promise<MarkerLibrary>;

  interface PlacesLibrary {
    Place: PlaceClass;
  }

  interface PlaceClass {
    searchNearby(request: PlaceSearchNearbyRequest): Promise<{ places: PlaceInstance[] }>;
  }

  interface PlaceSearchNearbyRequest {
    fields: string[];
    locationRestriction: {
      center: LatLngLiteral;
      radius: number;
    };
    includedPrimaryTypes?: string[];
    maxResultCount?: number;
  }

  interface PlaceInstance {
    displayName?: string;
    formattedAddress?: string;
    location?: LatLngLiteral;
    rating?: number;
    googleMapsURI?: string;
  }

  interface MarkerLibrary {
    AdvancedMarkerElement: new (opts: AdvancedMarkerOptions) => AdvancedMarkerElement;
    PinElement: new (opts?: { background?: string; glyph?: string }) => { element: HTMLElement };
  }

  interface AdvancedMarkerOptions {
    map?: Map;
    position?: LatLngLiteral;
    title?: string;
    content?: HTMLElement;
  }

  interface AdvancedMarkerElement {
    map: Map | null;
    addListener(event: string, handler: () => void): void;
  }
}

interface Window {
  google?: typeof google;
}
