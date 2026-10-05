export type AmenityIconKey =
  | 'wifi'
  | 'bed'
  | 'bath'
  | 'tv'
  | 'coffee'
  | 'car'
  | 'ac'
  | 'pool'
  | 'gym'
  | 'users'
  | 'food'
  | 'view';

export interface Amenity {
  label: string;
  icon: AmenityIconKey;
}

export interface ImageAsset {
  id: string;
  label: string;
  /** Path prefix; variants are `${src}-${width}.webp`. */
  src: string;
  widths: number[];
  width: number;
  height: number;
  /** Tiny inline WebP shown while the real image loads. */
  blur: string;
}

export interface Room {
  id: number;
  slug: string;
  title: string;
  pricePerNightInr: number;
  image?: ImageAsset;
  galleryImages: ImageAsset[];
  description: string;
  amenities: Amenity[];
  mainFeatures: string[];
  checkInTime: string;
  checkOutTime: string;
  rules: string[];
  termsAndConditions: string[];
  mainFeature?: string;
  starRating?: number;
  tags?: string[];
}

export interface MarketingNavLink {
  label: string;
  href: string;
}
