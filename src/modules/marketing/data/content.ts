import type { MarketingNavLink, Room } from '../types';

export const propertyConfig = {
  name: 'HILL GROVES HOMESTAY',
  location: 'Thirthahalli',
  description:
    'Experience the perfect blend of nature and comfort at Hill Groves Homestay. Nestled in the lush surroundings of Thirthahalli, our homestay offers a peaceful escape from the rush of daily life. We focus on warm hospitality, serene landscapes, and authentic local experiences so every stay feels relaxed, memorable, and close to nature.',
}

export const siteConfig = {
  propertyName: propertyConfig.name,
  copyrightText: `(c) ${new Date().getFullYear()} ${propertyConfig.name}. All rights reserved.`,
  footerTagline: 'Where nature meets comfort, and memories are made.',
};

export const bookingFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSeEupfw_fM_q_q0aVN6vrLH0UriGqNppPrrFFRerNJbMgEXfQ/viewform?usp=publish-editor';

export const heroContent = {
  eyebrow: 'The Ultimate Malenadu Experience',
  title: 'A peaceful homestay in the heart of Malenadu',
  primaryCtaLabel: 'Take a Tour',
  bookingCtaLabel: 'Book Rooms',
};

export const marketingNavLinks: MarketingNavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Event Space', href: '#hall-showcase' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#find-us' },
];

export const aboutContent = {
  sectionTitle: 'Enjoy Your Stay',
  sectionSubtitle: 'About Homestay',
  description:
    'Hill Groves Homestay was born from a deep love for the rains, forests, and quiet life of Thirthahalli. Inspired by the beauty of this region, we created a place where guests can slow down, breathe fresh air, and reconnect with nature. Our home is not just a stay, but a peaceful experience shaped by local warmth and the calm rhythm of the hills.',
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

export const hallContent = {
  sectionId: 'hall-showcase',
  eyebrow: 'Event Space',
  title: 'Celebrate With Us',
  description:
    'Our hall is a spacious and welcoming venue for celebrations, ceremonies, family gatherings, and special occasions. Whether it is a birthday, engagement, naming ceremony, or a small get-together, it offers the perfect setting in a peaceful homestay atmosphere.',
  ctaLabel: 'View More Details',
  ctaLink: '/hall',
  bookingCtaLabel: 'Enquire Now',
  imageUrl:
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop',
  imageAlt: 'Hall available for celebrations and ceremonies at the homestay',
};

export const hallDetailsContent = {
  backToHomeLabel: 'Back to Home',
  hero: {
    title: 'Celebration Hall',
    subtitle: 'A spacious and welcoming hall for ceremonies, celebrations, and special family gatherings.',
  },
  overview: {
    sectionLabel: 'Description',
    title: 'Hall Overview',
    text: 'Our hall is designed for memorable celebrations in a warm and homely setting. With spacious interiors, comfortable surroundings, and a peaceful atmosphere, it is an ideal venue for birthdays, engagements, naming ceremonies, family functions, and small gatherings.',
  },
  mainFeatures: [
    'Spacious venue ideal for celebrations, ceremonies, and gatherings',
    'Bright and comfortable interiors with a warm, welcoming feel',
    'Peaceful homestay setting for memorable family occasions',
  ],
  suitableFor: [
    'Birthdays',
    'Engagements',
    'Naming ceremonies',
    'Family gatherings',
    'Small celebrations',
    'Get-togethers',
  ],
  amenities: [
    'Dining access available',
    'Comfortable seating and gathering space',
    'Homely and peaceful atmosphere',
    'Easy access within the homestay property',
  ],
  galleryImages: [
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop',
  ],
  cta: {
    title: 'Book This Hall',
    text: 'Contact us to check availability and plan your celebration with us.',
    buttonLabel: 'Enquire Now',
  },
  mainFeaturesTitle: 'Main Features',
  suitableForTitle: 'Suitable For',
  amenitiesTitle: 'Amenities',
  galleryTitle: 'Hall Gallery',
  gallerySubtitle: 'Photos',
};

export const activityContent = {
  title: 'Activities and Excursions',
  description:
    'Discover curated local trails, private local experiences, and seasonal events designed around your stay.',
  backgroundImageUrl:
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop',
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
      lines: ['KEB, opp. Raghavendra Extension, Soppugudde, Thirthahalli, Karnataka 577432'],
      link: { label: 'Open in Maps', href: 'https://maps.app.goo.gl/iyd53j4kA59Vdoc28' },
    },
    {
      type: 'phone',
      title: 'Phone',
      mobileTone: 'from-blue-50 to-cyan-100',
      lines: ['+91-9741613049'],
    },
    {
      type: 'email',
      title: 'Email',
      mobileTone: 'from-emerald-50 to-teal-100',
      lines: ['hillgroveshomestay@gmail.com'],
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
    slug: 'premium-suite',
    title: 'Premium Suite',
    pricePerNightInr: 20000,
    galleryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2069&auto=format&fit=crop',
    ],
    description:
      'A spacious and elegant suite designed for a relaxed premium stay, with abundant natural light, cozy interiors, and a calm homely feel. Ideal for guests who want added comfort with air conditioning and thoughtfully designed spaces.',
    amenities: [
      { label: 'Air conditioned room', icon: 'ac' },
      { label: 'King size bed', icon: 'bed' },
      { label: 'Complimentary breakfast', icon: 'food' },
      { label: 'Wi-Fi', icon: 'wifi' },
      { label: '24x7 hot water', icon: 'bath' },
      { label: 'Fridge', icon: 'food' },
      { label: 'Kettle', icon: 'coffee' },
      { label: 'Access to kitchen area, lounge, and dining space', icon: 'users' },
    ],
    mainFeatures: [
      'Air-conditioned comfort for a relaxed premium stay',
      'Spacious interiors with abundant natural light',
      'Cozy king-size bed with elegant homely ambience',
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
    mainFeature: 'Elegant air-conditioned suite for a premium experience',
    starRating: 5,
    tags: ['King Bed', 'Air Conditioned', 'Breakfast Included'],
    imageUrl:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'double-bedroom',
    title: 'Double Bedroom',
    pricePerNightInr: 18000,
    galleryImages: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1974&auto=format&fit=crop',
    ],
    description:
      'A warm and comfortable double bedroom with good natural light, spacious interiors, and a cozy atmosphere that makes guests feel at home. Perfect for a peaceful stay with all essential comforts.',
    amenities: [
      { label: 'Air conditioned room', icon: 'ac' },
      { label: 'King size bed', icon: 'bed' },
      { label: 'Complimentary breakfast', icon: 'food' },
      { label: 'Wi-Fi', icon: 'wifi' },
      { label: '24x7 hot water', icon: 'bath' },
      { label: 'Fridge', icon: 'food' },
      { label: 'Kettle', icon: 'coffee' },
      { label: 'Access to kitchen area, lounge, and dining space', icon: 'users' },
    ],
    mainFeatures: [
      'Comfortable air-conditioned room for restful stays',
      'Bright and airy space with cozy interiors',
      'King-size bed ideal for couples or solo guests',
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
    mainFeature: 'Comfortable and inviting atmosphere',
    starRating: 4,
    tags: ['King Bed', 'Air Conditioned', 'Breakfast Included'],
    imageUrl:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'family-room',
    title: 'Family Room',
    pricePerNightInr: 22000,
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    ],
    description:
      'A large, welcoming family room with generous space, good light, and a cozy atmosphere for a comfortable stay. Designed to bring together comfort and convenience, it is perfect for families looking for a homely retreat.',
    amenities: [
      { label: 'Spacious family-friendly layout', icon: 'users' },
      { label: 'Fan', icon: 'ac' },
      { label: 'Complimentary breakfast', icon: 'food' },
      { label: 'Wi-Fi', icon: 'wifi' },
      { label: '24x7 hot water', icon: 'bath' },
      { label: 'Fridge', icon: 'food' },
      { label: 'Kettle', icon: 'coffee' },
      { label: 'Access to kitchen area, lounge, and dining space', icon: 'users' },
    ],
    mainFeatures: [
      'Spacious family-friendly layout with a separate space for infants or kids',
      'Bright, airy interiors with a warm and cozy feel',
      'Comfortable setting ideal for longer, relaxed family stays',
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
    mainFeature: 'Spacious family-friendly layout',
    starRating: 4,
    tags: ['Family Room', 'Spacious', 'Breakfast Included'],
    imageUrl:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    slug: 'twin-bed-room',
    title: 'Twin Bed Room',
    pricePerNightInr: 16000,
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    ],
    description:
      'A bright and spacious twin bed room designed for convenience and comfort, offering a cozy setting for shared stays. Its practical layout and peaceful ambiance make it ideal for friends or travel companions.',
    amenities: [
      { label: 'Twin beds', icon: 'bed' },
      { label: 'Fan', icon: 'ac' },
      { label: 'Complimentary breakfast', icon: 'food' },
      { label: 'Wi-Fi', icon: 'wifi' },
      { label: '24x7 hot water', icon: 'bath' },
      { label: 'Fridge', icon: 'food' },
      { label: 'Kettle', icon: 'coffee' },
      { label: 'Access to kitchen area, lounge, and dining space', icon: 'users' },
    ],
    mainFeatures: [
      'Spacious shared room with comfortable twin beds',
      'Good natural light and a calm cozy setting',
      'Practical layout ideal for friends or travel companions',
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
    mainFeature: 'Spacious twin bed setup for shared stays',
    starRating: 4,
    tags: ['Twin Beds', 'Shared Room', 'Breakfast Included'],
    imageUrl:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop',
  },
];

export function findRoomBySlug(slug: string): Room | undefined {
  return roomInventory.find((room) => room.slug === slug);
}
