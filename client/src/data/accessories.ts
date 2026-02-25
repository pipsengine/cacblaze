export interface AccessoryReview {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  rating: number;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishDate: string;
  heroImage: string;
  gallery: string[];
  specs: {
    type: string;
    connectivity: string;
    batteryLife: string;
    charging: string;
    noiseCancellation?: string;
    waterResistance?: string;
    compatibility: string;
    weight: string;
  };
  verdict: string;
  pros: string[];
  cons: string[];
  content: {
    title: string;
    body: string;
  }[];
}

export const accessoryReviews: Record<string, AccessoryReview> = {
  'airpods-pro-2': {
    id: 'rev_airpodspro2',
    slug: 'airpods-pro-2',
    name: 'Apple AirPods Pro (2nd Gen, USB-C)',
    category: 'Audio',
    tagline: 'The Gold Standard for iPhone Users',
    price: '₦380,000 - ₦450,000',
    rating: 4.9,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588423770d14-b29e96e7438c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    specs: {
      type: 'In-ear TWS',
      connectivity: 'Bluetooth 5.3, H2 Chip',
      batteryLife: '6 hours (buds), 30 hours (total with case)',
      charging: 'USB-C, MagSafe, Apple Watch charger',
      noiseCancellation: 'Active Noise Cancellation (2x better)',
      waterResistance: 'IP54 (buds and case)',
      compatibility: 'Apple Ecosystem (Best), Android (Limited)',
      weight: '5.3g (per bud), 50.8g (case)',
    },
    verdict:
      'The AirPods Pro 2 remain the best earbuds for anyone with an iPhone. The noise cancellation is spooky-quiet, and the transparency mode is still unmatched in the industry. For Nigerians commuting through noisy yellow buses (Danfo) or working in loud generator-powered offices, these are a lifesaver.',
    pros: [
      'Industry-leading Transparency mode',
      'Superb Active Noise Cancellation',
      'Seamless switching between Apple devices',
      'USB-C charging and Find My speaker in case',
      'Volume control on the stems',
    ],
    cons: [
      'Very expensive compared to rivals',
      'Limited features on Android',
      'Battery life is good but not class-leading',
    ],
    content: [
      {
        title: 'Noise Cancellation & Audio',
        body: 'The H2 chip does wonders. The noise cancellation is noticeably better than the first generation, silencing low-frequency hums of generators and AC units with ease. Spatial Audio with head tracking provides an immersive experience for movies and music.',
      },
      {
        title: 'The Case & Convenience',
        body: 'The switch to USB-C makes it easier to charge with the same cable as your iPhone 15 or 16. The built-in speaker in the case is surprisingly loud, making it easy to find when it slips between sofa cushions.',
      },
    ],
  },
  'sony-wh-1000xm5': {
    id: 'rev_sonyxm5',
    slug: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    category: 'Audio',
    tagline: 'The King of Silence',
    price: '₦550,000 - ₦680,000',
    rating: 4.8,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1644737554464-3fd7d39a89c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1644737554464-3fd7d39a89c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426da471b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    specs: {
      type: 'Over-ear Headphones',
      connectivity: 'Bluetooth 5.2, Multipoint',
      batteryLife: '30 hours (ANC on), 40 hours (ANC off)',
      charging: 'USB-C (Fast charging: 3 mins for 3 hours)',
      noiseCancellation: 'Industry-leading Auto NC Optimizer',
      waterResistance: 'No official IP rating',
      compatibility: 'Universal (Android, iOS, Windows, Mac)',
      weight: '250g',
    },
    verdict:
      "Sony continues to dominate the over-ear market. The XM5 offers a more modern design and even better noise cancellation than its predecessor. It's the perfect companion for long flights from Lagos to London or for focusing in a busy open-plan office.",
    pros: [
      'Best-in-class noise cancellation',
      'Extremely comfortable for long sessions',
      'Great microphone quality for calls',
      'Multipoint connection works flawlessly',
      'Excellent companion app',
    ],
    cons: [
      'Does not fold as compactly as the XM4',
      'No water resistance rating',
      'Pricey for the Nigerian market',
    ],
    content: [
      {
        title: 'Design & Comfort',
        body: 'Sony moved to a "noiseless" design with thinner sliders and a seamless headband. It feels lighter on the head than the XM4, though the lack of a folding hinge means the carrying case is quite large.',
      },
      {
        title: 'Performance',
        body: 'The eight-microphone array ensures that your voice is crystal clear on calls, even in windy conditions. The LDAC support provides high-resolution audio for audiophiles using compatible Android devices.',
      },
    ],
  },
  'oraimo-freepods-4': {
    id: 'rev_freepods4',
    slug: 'oraimo-freepods-4',
    name: 'Oraimo FreePods 4',
    category: 'Audio',
    tagline: 'Premium Features, Budget Price',
    price: '₦45,000 - ₦55,000',
    rating: 4.5,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 05, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    specs: {
      type: 'In-ear TWS',
      connectivity: 'Bluetooth 5.2',
      batteryLife: '8.5 hours (buds), 35.5 hours (total)',
      charging: 'USB-C',
      noiseCancellation: 'Active Noise Cancellation',
      waterResistance: 'IPX5',
      compatibility: 'Universal',
      weight: '4.5g (per bud)',
    },
    verdict:
      "The Oraimo FreePods 4 is the king of value in Nigeria. For a fraction of the price of mainstream competitors, you get ANC, transparency mode, and incredible battery life. It's the best choice for students and young professionals who want the TWS experience without breaking the bank.",
    pros: [
      'Incredible value for money',
      'Strong bass (HavyBass™)',
      'Impressive battery life',
      'Good app support with EQ settings',
      'Local warranty and support (Carlcare)',
    ],
    cons: [
      'ANC is not as effective as premium rivals',
      'Build quality feels slightly plasticky',
      'Microphone can struggle in very loud environments',
    ],
    content: [
      {
        title: 'Value Proposition',
        body: 'Oraimo has localized its products perfectly for the Nigerian market. The FreePods 4 offers features usually reserved for headphones costing 5x more. The ANC is decent enough to block out the low hum of a fan or distant traffic.',
      },
      {
        title: 'Battery & Durability',
        body: 'The battery life is a standout feature, easily lasting a full workday. With IPX5 rating, it handles sweat and light rain well, making it a good gym companion.',
      },
    ],
  },
};
