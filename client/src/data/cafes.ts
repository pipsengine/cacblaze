export interface CafeReview {
  id: string;
  slug: string;
  name: string;
  location: string;
  specialty: string;
  priceLevel: '$' | '$$' | '$$$' | '$$$$';
  rating: number;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  specs: {
    address: string;
    openingHours: string;
    contact: string;
    features: string[];
  };
  pros: string[];
  cons: string[];
  verdict: string;
}

export const cafeReviews: Record<string, CafeReview> = {
  'art-cafe-victoria-island': {
    id: 'cafe_art',
    slug: 'art-cafe-victoria-island',
    name: 'Art Cafe',
    location: 'Victoria Island, Lagos',
    specialty: 'Artisan Coffee & Pastries',
    priceLevel: '$$$',
    rating: 4.8,
    description: 'A cozy and eclectic cafe that doubles as an art gallery. Known for its quiet atmosphere, perfect for working or intimate conversations.',
    author: {
      name: 'Tobi "Caffeine" Bakare',
      role: 'Coffee Enthusiast',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: '282 Akin Olugbade St, Victoria Island, Lagos',
      openingHours: '8:00 AM - 9:00 PM',
      contact: '+234 817 000 1234',
      features: ['Free WiFi', 'Outdoor Patio', 'Art Gallery', 'Silent Zone']
    },
    pros: ['Excellent brew quality', 'Quiet workspace', 'Unique artistic decor'],
    cons: ['Limited seating during peak hours', 'Premium price point'],
    verdict: 'The best spot in VI for a quiet coffee and focused work. Their flat white is exceptional.'
  },
  'vibe-by-the-waterfront-lekki': {
    id: 'cafe_vibe',
    slug: 'vibe-by-the-waterfront-lekki',
    name: 'Vibe by the Waterfront',
    location: 'Lekki Phase 1, Lagos',
    specialty: 'Brunch & Cocktails',
    priceLevel: '$$$',
    rating: 4.5,
    description: 'A vibrant and trendy spot overlooking the Lekki-Ikoyi link bridge. Ideal for weekend brunch and socializing.',
    author: {
      name: 'Tobi "Caffeine" Bakare',
      role: 'Coffee Enthusiast',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Admiralty Way, Lekki Phase 1, Lagos',
      openingHours: '9:00 AM - 11:00 PM',
      contact: '+234 908 765 4321',
      features: ['Waterfront View', 'Live DJ (Weekends)', 'Full Bar', 'Valet Parking']
    },
    pros: ['Stunning views', 'Great brunch menu', 'Lively atmosphere'],
    cons: ['Can get very loud', 'Wait times for waterfront tables'],
    verdict: 'Perfect for a social brunch with friends. The view alone is worth the visit.'
  },
  'mai-shayi-coffee-abuja': {
    id: 'cafe_maishayi',
    slug: 'mai-shayi-coffee-abuja',
    name: 'Mai Shayi Coffee',
    location: 'Wuse 2, Abuja',
    specialty: 'Northern Nigerian Coffee Blends',
    priceLevel: '$$',
    rating: 4.6,
    description: 'A modern tribute to the traditional "Mai Shayi" culture, offering premium Northern coffee blends in a contemporary setting.',
    author: {
      name: 'Tobi "Caffeine" Bakare',
      role: 'Coffee Enthusiast',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 05, 2026',
    heroImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Adetokunbo Ademola Crescent, Wuse 2, Abuja',
      openingHours: '7:30 AM - 10:00 PM',
      contact: '+234 802 111 2222',
      features: ['Locally Sourced Beans', 'Fast WiFi', 'Pastry Corner', 'Meeting Booths']
    },
    pros: ['Authentic local blends', 'Excellent WiFi', 'Affordable luxury'],
    cons: ['Limited food options', 'Small interior space'],
    verdict: 'A must-visit for coffee lovers in Abuja. Their signature spiced coffee is a game changer.'
  }
};
