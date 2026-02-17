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

export interface Room {
  id: number;
  slug: string;
  title: string;
  pricePerNightInr: number;
  imageUrl: string;
  galleryImages: string[];
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
