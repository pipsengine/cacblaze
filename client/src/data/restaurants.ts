export interface RestaurantReview {
  id: string;
  slug: string;
  name: string;
  cuisine: string;
  location: string;
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
  gallery: string[];
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

export const restaurants: Record<string, RestaurantReview> = {
  'the-yellow-chilli-ikeja': {
    id: 'rest_yellow_chilli',
    slug: 'the-yellow-chilli-ikeja',
    name: 'The Yellow Chilli',
    cuisine: 'Modern Nigerian',
    location: 'Ikeja, Lagos',
    priceLevel: '$$$',
    rating: 4.7,
    description:
      'A pioneer in gourmet Nigerian cuisine, The Yellow Chilli offers a sophisticated take on traditional flavors in the heart of Ikeja.',
    author: {
      name: 'Bisi "Foodie" Adebayo',
      role: 'Lifestyle Editor',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526318472351-c75aa2c7b117?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523983301210-94cb5df1a9ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      address: '35 Joel Ogunnaike St, Ikeja GRA, Lagos',
      openingHours: '12:00 PM - 11:00 PM',
      contact: '+234 803 300 1234',
      features: ['Valet Parking', 'VIP Lounge', 'Outdoor Seating', 'Generator Backup'],
    },
    pros: ['Excellent Jollof Rice', 'Sophisticated ambiance', 'Professional service'],
    cons: ['Wait times during weekends', 'Premium pricing'],
    verdict:
      'Still the gold standard for modern Nigerian dining in Ikeja. Their Seafood Okra is legendary.',
  },
  'ocean-basket-victoria-island': {
    id: 'rest_ocean_basket',
    slug: 'ocean-basket-victoria-island',
    name: 'Ocean Basket',
    cuisine: 'Seafood',
    location: 'Victoria Island, Lagos',
    priceLevel: '$$',
    rating: 4.5,
    description:
      'The Mediterranean-style seafood giant remains a favorite for families and casual dates in VI, offering consistent quality and value.',
    author: {
      name: 'Bisi "Foodie" Adebayo',
      role: 'Lifestyle Editor',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553532435-9347b7c1d66e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555398293-4b0b9d5bdbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      address: 'Plot 1392 Tiamiyu Savage St, Victoria Island, Lagos',
      openingHours: '11:00 AM - 10:30 PM',
      contact: '+234 816 678 9012',
      features: ['Family Friendly', 'Sea View', 'Fast Service', 'Secure Parking'],
    },
    pros: ['Generous portions', 'Fresh seafood', 'Consistent quality'],
    cons: ['Can get very noisy', 'Limited vegetarian options'],
    verdict: "The best place for a seafood platter that won't break the bank. Great for groups.",
  },
  'terra-kulture-food-lounge': {
    id: 'rest_terra_kulture',
    slug: 'terra-kulture-food-lounge',
    name: 'Terra Kulture Food Lounge',
    cuisine: 'Traditional Nigerian',
    location: 'Victoria Island, Lagos',
    priceLevel: '$$$',
    rating: 4.8,
    description:
      'More than just a restaurant, Terra Kulture is a cultural hub where the food is as artistic as the gallery next door.',
    author: {
      name: 'Bisi "Foodie" Adebayo',
      role: 'Lifestyle Editor',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 08, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533777324565-a040eb52fac1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541542684-4a0b5f0c55c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533777324565-6e59f1e3a836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      address: 'Plot 1376 Tiamiyu Savage St, Victoria Island, Lagos',
      openingHours: '9:00 AM - 10:00 PM',
      contact: '+234 1 270 0588',
      features: ['Art Gallery', 'Bookstore', 'Live Music', 'Authentic Decor'],
    },
    pros: ['Best Pounded Yam in VI', 'Immersive cultural experience', 'Great for tourists'],
    cons: ['Limited parking', 'Slow service during peak hours'],
    verdict:
      'An essential Lagos experience. The Ofada rice here is unmatched in its presentation and taste.',
  },
};
