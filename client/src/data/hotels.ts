export interface HotelReview {
  id: string;
  slug: string;
  name: string;
  category: 'Luxury' | 'Boutique' | 'Business' | 'Budget';
  location: string;
  priceRange: string;
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
    checkIn: string;
    checkOut: string;
    contact: string;
    amenities: string[];
  };
  pros: string[];
  cons: string[];
  verdict: string;
}

export const hotelReviews: Record<string, HotelReview> = {
  'eko-hotels-suites-lagos': {
    id: 'hotel_eko',
    slug: 'eko-hotels-suites-lagos',
    name: 'Eko Hotels & Suites',
    category: 'Luxury',
    location: 'Victoria Island, Lagos',
    priceRange: '₦150,000 - ₦450,000',
    rating: 4.6,
    description: 'The most prestigious hotel in Nigeria, known for hosting the biggest events in Lagos and offering unparalleled views of the Atlantic.',
    author: {
      name: 'Amaka "Jetset" Obi',
      role: 'Travel Editor',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Plot 1415 Adetokunbo Ademola Street, Victoria Island, Lagos',
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      contact: '+234 1 277 2700',
      amenities: ['8 Restaurants', 'Olympic Size Pool', '24/7 Power', 'Grand Ballroom', 'Secure Parking']
    },
    pros: ['Prime location', 'Excellent security', 'World-class event facilities'],
    cons: ['Can feel overcrowded during events', 'Premium pricing for older rooms'],
    verdict: 'The heartbeat of Lagos social life. Ideal for business travelers and those who want to be in the center of the action.'
  },
  'transcorp-hilton-abuja': {
    id: 'hotel_transcorp',
    slug: 'transcorp-hilton-abuja',
    name: 'Transcorp Hilton Abuja',
    category: 'Business',
    location: 'Maitama, Abuja',
    priceRange: '₦180,000 - ₦550,000',
    rating: 4.8,
    description: 'The crown jewel of Abuja, Transcorp Hilton is where power players meet. It offers a secure and serene environment in the heart of the capital.',
    author: {
      name: 'Amaka "Jetset" Obi',
      role: 'Travel Editor',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: '1 Aguiyi Ironsi St, Maitama, Abuja',
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      contact: '+234 9 461 3000',
      amenities: ['Tennis Courts', 'Executive Lounge', 'Shopping Mall', 'State-of-the-art Gym']
    },
    pros: ['Unmatched security', 'Beautifully landscaped grounds', 'Highly professional staff'],
    cons: ['Check-in can be slow', 'Food prices are very high'],
    verdict: 'The only choice for high-level diplomatic or business visits to the capital.'
  },
  'radisson-blu-ikeja': {
    id: 'hotel_radisson_ikeja',
    slug: 'radisson-blu-ikeja',
    name: 'Radisson Blu Anchorage Hotel',
    category: 'Business',
    location: 'Ikeja GRA, Lagos',
    priceRange: '₦120,000 - ₦250,000',
    rating: 4.4,
    description: 'A modern and stylish business hotel located in the quiet suburbs of Ikeja GRA, perfect for those needing proximity to the airport.',
    author: {
      name: 'Amaka "Jetset" Obi',
      role: 'Travel Editor',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 08, 2026',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: '38-40 Isaac John St, Ikeja GRA, Lagos',
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      contact: '+234 1 460 6100',
      amenities: ['Rooftop Bar', 'Airport Shuttle', 'Business Center', 'Spa']
    },
    pros: ['Proximity to MMA Airport', 'Vibrant nightlife nearby', 'Modern interior design'],
    cons: ['Traffic on Isaac John St can be heavy', 'Pool area is relatively small'],
    verdict: 'Excellent for transit travelers and business professionals working on the Mainland.'
  },
  'the-wheatbaker-lagos': {
    id: 'hotel_wheatbaker',
    slug: 'the-wheatbaker-lagos',
    name: 'The Wheatbaker',
    category: 'Boutique',
    location: 'Ikoyi, Lagos',
    priceRange: '₦200,000 - ₦400,000',
    rating: 4.7,
    description: 'Lagos\' premier boutique hotel, offering a discreet and luxurious sanctuary for the discerning traveler in the quiet streets of Ikoyi.',
    author: {
      name: 'Amaka "Jetset" Obi',
      role: 'Travel Editor',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 05, 2026',
    heroImage: 'https://images.unsplash.com/photo-1551882547-ff43c63efe81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: '4 Onitolo Rd, Ikoyi, Lagos',
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      contact: '+234 1 277 3560',
      amenities: ['Art Collection', 'Fine Dining Restaurant', 'Steam Room', 'Curated Wine Cellar']
    },
    pros: ['Exceptional privacy', 'High-end dining', 'Beautiful art displays'],
    cons: ['Limited number of rooms', 'Expensive spa services'],
    verdict: 'A masterpiece of understated luxury. Best for couples or those seeking a quiet retreat.'
  },
  'protea-hotel-port-harcourt': {
    id: 'hotel_protea_ph',
    slug: 'protea-hotel-port-harcourt',
    name: 'Protea Hotel by Marriott',
    category: 'Business',
    location: 'GRA Phase 2, Port Harcourt',
    priceRange: '₦90,000 - ₦180,000',
    rating: 4.3,
    description: 'A reliable and comfortable choice in the Garden City, offering Marriott\'s global standards with local hospitality.',
    author: {
      name: 'Amaka "Jetset" Obi',
      role: 'Travel Editor',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 01, 2026',
    heroImage: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: '1 Protea Road, GRA Phase 2, Port Harcourt',
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      contact: '+234 84 461 540',
      amenities: ['Outdoor Pool', '24-hour Fitness Center', 'Meeting Rooms', 'Laundry Service']
    },
    pros: ['Consistent Marriott standards', 'Safe neighborhood', 'Good breakfast spread'],
    cons: ['Older building style', 'WiFi can be spotty in some rooms'],
    verdict: 'The most dependable hotel in Port Harcourt for business travelers.'
  }
};
