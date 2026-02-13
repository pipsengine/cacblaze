export interface BuyingGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  lastUpdated: string;
  recommendations: {
    title: string;
    productName: string;
    priceRange: string;
    image: string;
    description: string;
    pros: string[];
    link: string;
  }[];
  buyingTips: {
    title: string;
    content: string;
  }[];
}

export const buyingGuides: Record<string, BuyingGuide> = {
  'best-student-laptops-2026': {
    id: 'guide_student_laptops',
    slug: 'best-student-laptops-2026',
    title: 'Best Laptops for Students in Nigeria (2026)',
    description:
      'A comprehensive guide to the best budget-friendly and performance-oriented laptops for Nigerian students across all levels.',
    category: 'Laptops',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 12, 2026',
    lastUpdated: 'Feb 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    recommendations: [
      {
        title: 'Best Overall Value',
        productName: 'MacBook Air M2 (Renewed/New)',
        priceRange: '₦950,000 - ₦1,200,000',
        image:
          'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description:
          'Even in 2026, the M2 Air remains a beast for students. Its battery life is legendary, lasting through multiple lectures even when there is no light in the department.',
        pros: ['Incredible battery life', 'Silent operation', 'Great resale value'],
        link: '/reviews/laptops/macbook-air-m3',
      },
      {
        title: 'Best Windows Budget',
        productName: 'HP Laptop 15 (Ryzen 5)',
        priceRange: '₦450,000 - ₦550,000',
        image:
          'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description:
          'The workhorse of Nigerian campuses. Reliable, easy to repair, and parts are readily available in Computer Village.',
        pros: ['Solid performance', 'Great keyboard', 'Abundant ports'],
        link: '#',
      },
    ],
    buyingTips: [
      {
        title: 'Check the Battery Health',
        content:
          'Since power supply is inconsistent, prioritize laptops with at least 8 hours of real-world battery life.',
      },
      {
        title: 'SSD is Non-Negotiable',
        content:
          'Do not buy any laptop in 2026 with a traditional HDD. Ensure it has at least 256GB SSD for speed.',
      },
    ],
  },
  'smartphones-under-200k': {
    id: 'guide_phones_200k',
    slug: 'smartphones-under-200k',
    title: 'Top Smartphones Under ₦200,000 in Nigeria',
    description:
      'Looking for a great phone without breaking the bank? Here are the best devices currently available for under 200k.',
    category: 'Smartphones',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 10, 2026',
    lastUpdated: 'Feb 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    recommendations: [
      {
        title: 'Best Camera in Class',
        productName: 'Infinix Note 40',
        priceRange: '₦185,000 - ₦198,000',
        image:
          'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description:
          'Offers a high-refresh-rate AMOLED screen and decent fast charging that helps you top up quickly during brief power flashes.',
        pros: ['Great display', 'Fast charging', 'Modern design'],
        link: '/reviews/smartphones/infinix-note-40-pro',
      },
      {
        title: 'Best Battery Performance',
        productName: 'Tecno Pova 6 Neo',
        priceRange: '₦160,000 - ₦175,000',
        image:
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description:
          'With a massive 7000mAh battery, this is the king of endurance for those who go days without charging.',
        pros: ['Unrivaled battery', 'Large screen', 'Affordable'],
        link: '#',
      },
    ],
    buyingTips: [
      {
        title: 'RAM Expansion is a Marketing Trick',
        content:
          'Focus on the physical RAM (e.g., 8GB) rather than the "expanded" RAM (e.g., 8+8GB) for true performance.',
      },
      {
        title: 'Check for 5G Coverage',
        content:
          'If you live in Lagos, Abuja, or Port Harcourt, it might be worth spending slightly more for a 5G device.',
      },
    ],
  },
  'best-portable-power-stations': {
    id: 'guide_power_stations',
    slug: 'best-portable-power-stations',
    title: 'Best Portable Power Stations for Home & Office',
    description:
      'Ditch the noisy "I pass my neighbor" generator. Here are the best silent solar-compatible power solutions for Nigerians.',
    category: 'Gadgets',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 05, 2026',
    lastUpdated: 'Feb 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    recommendations: [
      {
        title: 'Best for Remote Work',
        productName: 'EcoFlow River 2 Pro',
        priceRange: '₦650,000 - ₦750,000',
        image:
          'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description:
          'Charges from 0-100% in just 70 minutes. Perfect for when the NEPA light only stays for an hour.',
        pros: ['Fastest charging', 'LiFePO4 battery', 'Lightweight'],
        link: '#',
      },
      {
        title: 'Best Budget Solution',
        productName: 'Bluetti EB3A',
        priceRange: '₦320,000 - ₦380,000',
        image:
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description:
          'Compact and powerful enough to run your laptop, monitor, and router for a full workday.',
        pros: ['Very affordable', 'App control', 'UPS function'],
        link: '#',
      },
    ],
    buyingTips: [
      {
        title: 'Prioritize LiFePO4 Batteries',
        content:
          'These last 10 years compared to the 2-3 years of older Lithium-ion variants. Better for long-term Nigerian use.',
      },
      {
        title: 'Calculate Your Wattage',
        content:
          "Always add up the watts of your devices before buying. Don't try to run a fridge on a small station!",
      },
    ],
  },
};
