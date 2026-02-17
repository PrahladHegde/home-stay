import type { MarketingNavLink, Room } from '../types';

export const propertyConfig = {
  name: 'NO NAME HOMESTAY',
  location: 'Riverside Valley, Karnataka',
  description:
    'Experience the perfect blend of nature and luxury at No Name Homestay. Nestled on the serene shores of a pristine lake, our homestay offers an escape from the ordinary. We focus on sustainability, luxury, and authentic local experiences. Whether you are hiking the nearby trails or relaxing in our spa, you will find peace here.',
}

export const siteConfig = {
  propertyName: propertyConfig.name,
  copyrightText: `(c) ${new Date().getFullYear()} ${propertyConfig.name}. All rights reserved.`,
  footerTagline: 'Designed for the future.',
};

export const bookingFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScExampleBookingFormUrl/viewform';

export const heroContent = {
  eyebrow: 'The Ultimate Luxury Experience',
  title: 'A Perfect Holiday Destination',
  primaryCtaLabel: 'Take a Tour',
  bookingCtaLabel: 'Book Rooms',
};

export const marketingNavLinks: MarketingNavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#find-us' },
];

export const aboutContent = {
  sectionTitle: 'Enjoy Your Stay',
  sectionSubtitle: 'About Us',
  description:
    'Set on the shores of a pristine lake, our homestay offers an escape from the ordinary. We focus on sustainability, luxury, and authentic local experiences. Whether you are hiking the nearby trails or relaxing in our spa, you will find peace here.',
  imageUrl:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
  imageAlt: 'Hotel View',
  stats: [
    { value: '15+', label: 'Years of Service' },
    { value: '50+', label: 'Luxury Rooms' },
  ],
  userRating: {
    value: 4.8,
    stars: 5,
    label: 'User Ratings',
  },
};

export const activityContent = {
  title: 'Activities and Excursions',
  description:
    'Discover curated local trails, private lake experiences, and seasonal culinary events designed around your stay.',
  backgroundImageUrl:
    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2070&auto=format&fit=crop',
};

export const roomSectionContent = {
  title: 'Our Rooms and Suites',
  subtitle: 'Accommodations',
  fallbackMainFeature: 'Add your room highlight here',
  viewDetailsLabel: 'View Details',
  viewAllRoomsLabel: 'View All Rooms',
};

export const roomDetailsContent = {
  backToHomeLabel: 'Back to Home',
  roomOverviewTitle: 'Room Overview',
  roomOverviewSubtitle: 'Description',
  mainFeaturesTitle: 'Main Features',
  galleryTitle: 'Room Gallery',
  gallerySubtitle: 'Photos',
  bookRoomCardTitle: 'Book This Room',
  bookRoomCardDescription: 'Fill the quick booking form and we will confirm availability.',
  bookRoomButtonLabel: 'Book Room',
  stayTimingsTitle: 'Stay Timings',
  amenitiesTitle: 'Amenities',
  rulesTitle: 'Rules',
  termsTitle: 'Terms and Conditions',
};

export const roomsPageContent = {
  title: 'All Room Types',
  subtitle: 'Browse Collection',
  description:
    'Explore all available room categories in one place. Select any room to view complete details and booking information.',
  backToHomeLabel: 'Back to Home',
};

export const contactContent = {
  sectionTitle: 'How to Find us',
  sectionSubtitle: 'Contact Us',
  cards: [
    {
      type: 'map',
      title: 'Map',
      mobileTone: 'from-amber-50 to-orange-100',
      lines: ['Lakefront Road 27, Riverside Valley, Karnataka 560001'],
      link: { label: 'Open in Maps', href: 'https://maps.app.goo.gl/LaYa7CZoLtXz5ycb6' },
    },
    {
      type: 'phone',
      title: 'Phone',
      mobileTone: 'from-blue-50 to-cyan-100',
      lines: ['Reservations: +91 98765 43210', 'Front Desk: +91 99887 77665'],
    },
    {
      type: 'email',
      title: 'Email',
      mobileTone: 'from-emerald-50 to-teal-100',
      lines: ['hello@nonamehomestay.com', 'bookings@nonamehomestay.com'],
    },
    {
      type: 'social',
      title: 'Social Media',
      mobileTone: 'from-fuchsia-50 to-rose-100',
      socialLinks: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
      ],
    },
  ],
};

export const roomInventory: Room[] = [
  {
    id: 1,
    slug: 'deluxe-ocean-view',
    title: 'Deluxe Ocean View',
    pricePerNightInr: 20000,
    galleryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2069&auto=format&fit=crop',
    ],
    description:
      'A light-filled room with uninterrupted sea views, handcrafted interiors, and a private balcony for sunset evenings.',
    amenities: [
      { label: 'High-speed Wi-Fi', icon: 'wifi' },
      { label: 'King size bed', icon: 'bed' },
      { label: 'Private ocean-facing balcony', icon: 'view' },
      { label: 'Smart TV with OTT apps', icon: 'tv' },
      { label: 'Rain shower bathroom', icon: 'bath' },
      { label: 'In-room minibar', icon: 'food' },
    ],
    mainFeatures: [
      'Panoramic balcony facing the sea',
      'Premium handcrafted interiors',
      'Dedicated work corner with charging dock',
    ],
    checkInTime: '2:00 PM',
    checkOutTime: '11:00 AM',
    rules: [
      'No smoking inside the room.',
      'Pets are not allowed in this category.',
      'Quiet hours start from 10:00 PM.',
    ],
    termsAndConditions: [
      '50% advance payment is required to confirm booking.',
      'Free cancellation up to 72 hours before check-in.',
      'Any damage to room assets will be chargeable.',
    ],
    mainFeature: 'Panoramic balcony view',
    starRating: 5,
    tags: ['King Bed', 'Private Balcony'],
    imageUrl:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'superior-forest-cabin',
    title: 'Superior Forest Cabin',
    pricePerNightInr: 35000,
    galleryImages: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1974&auto=format&fit=crop',
    ],
    description:
      'An intimate cabin experience surrounded by trees, designed for guests who want calm mornings and private evenings.',
    amenities: [
      { label: 'Forest-facing deck', icon: 'view' },
      { label: 'Fireplace setup', icon: 'ac' },
      { label: 'Complimentary breakfast', icon: 'food' },
      { label: 'Espresso machine', icon: 'coffee' },
      { label: 'Hot water 24/7', icon: 'bath' },
      { label: 'Workspace corner', icon: 'users' },
    ],
    mainFeatures: [
      'Secluded setting for peaceful stays',
      'Private firepit-ready deck',
      'Warm ambient lighting and wood accents',
    ],
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    rules: [
      'Outdoor firepit usage only under staff supervision.',
      'Maximum occupancy is 3 guests.',
      'No loud music after 9:30 PM.',
    ],
    termsAndConditions: [
      '25% non-refundable prepayment is required.',
      'Date modifications are subject to availability.',
      'Government-issued ID is mandatory at check-in.',
    ],
    mainFeature: 'Private deck with firepit',
    starRating: 4,
    tags: ['Nature-facing', 'Fireplace'],
    imageUrl:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'royal-suite',
    title: 'Royal Suite',
    pricePerNightInr: 50000,
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    ],
    description:
      'Our most expansive suite with a private lounge, premium bath setup, and personalized in-room hospitality service.',
    amenities: [
      { label: 'Dedicated lounge area', icon: 'users' },
      { label: 'Butler-on-call', icon: 'food' },
      { label: 'Premium bath amenities', icon: 'bath' },
      { label: 'Mini dining table', icon: 'coffee' },
      { label: 'Smart climate control', icon: 'ac' },
      { label: 'Luxury linen collection', icon: 'bed' },
    ],
    mainFeatures: [
      'Large suite with private lounge',
      'Personalized hospitality support',
      'Premium bath and sleep experience',
    ],
    checkInTime: '2:00 PM',
    checkOutTime: '12:00 PM',
    rules: [
      'Parties and events are not permitted in-suite.',
      'Outside visitors are allowed until 8:00 PM only.',
      'Pets are allowed on prior request.',
    ],
    termsAndConditions: [
      'Full refund if cancelled 5 days before check-in.',
      'Early check-in is chargeable and subject to occupancy.',
      'Management reserves right to deny entry for policy violations.',
    ],
    mainFeature: 'Curated lounge and dining area',
    starRating: 5,
    tags: ['Butler Service', 'Premium Bath'],
    imageUrl:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    slug: 'royal-suite-4',
    title: 'Royal Suite 4',
    pricePerNightInr: 50000,
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    ],
    description:
      'Our most expansive suite with a private lounge, premium bath setup, and personalized in-room hospitality service.',
    amenities: [
      { label: 'Dedicated lounge area', icon: 'users' },
      { label: 'Butler-on-call', icon: 'food' },
      { label: 'Premium bath amenities', icon: 'bath' },
      { label: 'Mini dining table', icon: 'coffee' },
      { label: 'Smart climate control', icon: 'ac' },
      { label: 'Luxury linen collection', icon: 'bed' },
    ],
    mainFeatures: [
      'Large suite with private lounge',
      'Personalized hospitality support',
      'Premium bath and sleep experience',
    ],
    checkInTime: '2:00 PM',
    checkOutTime: '12:00 PM',
    rules: [
      'Parties and events are not permitted in-suite.',
      'Outside visitors are allowed until 8:00 PM only.',
      'Pets are allowed on prior request.',
    ],
    termsAndConditions: [
      'Full refund if cancelled 5 days before check-in.',
      'Early check-in is chargeable and subject to occupancy.',
      'Management reserves right to deny entry for policy violations.',
    ],
    mainFeature: 'Curated lounge and dining area',
    starRating: 5,
    tags: ['Butler Service', 'Premium Bath'],
    imageUrl:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop',
  },
];

export function findRoomBySlug(slug: string): Room | undefined {
  return roomInventory.find((room) => room.slug === slug);
}
