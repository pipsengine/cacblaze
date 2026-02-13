export interface LocalVendorReview {
  id: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  specialty: string;
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
    deliveryAvailable: boolean;
    paymentMethods: string[];
    contact: string;
    features: string[];
  };
  pros: string[];
  cons: string[];
  verdict: string;
}

export const localVendorReviews: Record<string, LocalVendorReview> = {
  'slot-systems-ikeja': {
    id: 'vendor_slot_ikeja',
    slug: 'slot-systems-ikeja',
    name: 'Slot Systems Ikeja',
    category: 'Electronics',
    location: 'Ikeja, Lagos',
    specialty: 'Mobile Phones & Laptops',
    rating: 4.5,
    description:
      'The household name for mobile phones in Nigeria. Their Ikeja flagship store is the go-to for official warranty devices.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 12, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Medical Road, Ikeja, Lagos',
      deliveryAvailable: true,
      paymentMethods: ['POS', 'Transfer', 'Cash', 'Installments'],
      contact: '+234 807 700 0000',
      features: ['Official Warranty', 'Repair Center', 'Trade-in Available', 'Air Conditioned'],
    },
    pros: ['Authentic products', 'Standardized pricing', 'Excellent after-sales support'],
    cons: ['Often crowded', 'Prices slightly higher than grey market'],
    verdict: 'The safest place to buy a phone in Nigeria if peace of mind is your priority.',
  },
  'hubmart-stores-vi': {
    id: 'vendor_hubmart_vi',
    slug: 'hubmart-stores-vi',
    name: 'Hubmart Stores VI',
    category: 'Supermarket',
    location: 'Victoria Island, Lagos',
    specialty: 'Fresh Produce & Groceries',
    rating: 4.7,
    description:
      'A premium shopping experience in VI, known for their exceptionally fresh bakery and organized layout.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 11, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Adeola Odeku St, Victoria Island, Lagos',
      deliveryAvailable: true,
      paymentMethods: ['POS', 'Transfer', 'Hubmart Card'],
      contact: '+234 908 786 0000',
      features: ['In-house Bakery', 'Deli Section', 'Pharmacy', 'Ample Parking'],
    },
    pros: ['Clean and organized', 'High-quality fresh food', 'Fast checkout'],
    cons: ['Premium pricing', 'Limited international brands compared to Shoprite'],
    verdict: 'Best for a stress-free grocery run in VI.',
  },
  'jid-tech-computer-village': {
    id: 'vendor_jid_tech',
    slug: 'jid-tech-computer-village',
    name: 'JID Tech Solutions',
    category: 'Electronics',
    location: 'Ikeja, Lagos',
    specialty: 'Custom PC Builds & Gaming Gear',
    rating: 4.8,
    description:
      'The hidden gem of Computer Village for PC enthusiasts. They specialize in high-end components and professional builds.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Otigba Street, Computer Village, Ikeja',
      deliveryAvailable: true,
      paymentMethods: ['Transfer', 'Cash'],
      contact: '+234 803 555 1234',
      features: ['Custom Cooling', 'Stress Testing', 'Component Warranty', 'Remote Support'],
    },
    pros: ['Deep technical expertise', 'Hard-to-find components', 'Honest advice'],
    cons: ['Small shop space', 'By-appointment preferred'],
    verdict: 'The best place for gamers and creative professionals to build their rigs.',
  },
  'spar-nigeria-lekki': {
    id: 'vendor_spar_lekki',
    slug: 'spar-nigeria-lekki',
    name: 'SPAR Nigeria Lekki',
    category: 'Hypermarket',
    location: 'Lekki Phase 1, Lagos',
    specialty: 'Home Appliances & Electronics',
    rating: 4.3,
    description:
      'Huge hypermarket offering everything from TVs to towels. Their electronics section often has the best promo deals.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 09, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Lekki Expressway, Lekki, Lagos',
      deliveryAvailable: true,
      paymentMethods: ['POS', 'Transfer', 'SPAR Rewards'],
      contact: '+234 708 065 3800',
      features: ['Cinema Nearby', 'Food Court', 'Furniture Section', 'Massive Inventory'],
    },
    pros: ['Competitive pricing', 'Wide variety', 'Frequent promotions'],
    cons: ['Long weekend queues', 'Customer service can be slow'],
    verdict: 'Great for bulk shopping and finding appliance deals.',
  },
  'pointek-online-ikeja': {
    id: 'vendor_pointek',
    slug: 'pointek-online-ikeja',
    name: 'Pointek Ikeja',
    category: 'Electronics',
    location: 'Ikeja, Lagos',
    specialty: 'Smartphones & Gadgets',
    rating: 4.4,
    description:
      "Slot's biggest rival. Pointek often has unique bundle deals and a very strong online presence.",
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 08, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Obafemi Awolowo Way, Ikeja, Lagos',
      deliveryAvailable: true,
      paymentMethods: ['POS', 'Transfer', 'Online Pay'],
      contact: '+234 807 700 2000',
      features: ['Express Delivery', 'Gadget Insurance', 'Authorized Service', 'Demo Units'],
    },
    pros: ['Excellent bundle deals', 'Responsive online chat', 'Reliable delivery'],
    cons: ['Limited parking at Ikeja branch', 'Stocks can fluctuate'],
    verdict: 'A fantastic alternative to Slot with often better promotional bundles.',
  },
  'h-medix-wuse-abuja': {
    id: 'vendor_hmedix',
    slug: 'h-medix-wuse-abuja',
    name: 'H-Medix Wuse',
    category: 'Pharmacy & Supermarket',
    location: 'Wuse 2, Abuja',
    specialty: 'Health & Beauty Products',
    rating: 4.6,
    description:
      "Abuja's most trusted name for authentic skincare and pharmaceuticals. The Wuse 2 branch is always stocked.",
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 07, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1586024486164-ce9b3d87e09f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Adetokunbo Ademola Crescent, Wuse 2, Abuja',
      deliveryAvailable: true,
      paymentMethods: ['POS', 'Transfer', 'Cash'],
      contact: '+234 9 291 4455',
      features: ['In-house Pharmacist', 'Imported Skincare', 'Baby Section', 'Cosmetics Desk'],
    },
    pros: ['Guaranteed authentic drugs', 'Huge skincare variety', 'Knowledgeable staff'],
    cons: ['Extremely busy', 'Traffic around the crescent'],
    verdict: 'The gold standard for health and beauty shopping in the FCT.',
  },
  'micro-station-ikeja': {
    id: 'vendor_microstation',
    slug: 'micro-station-ikeja',
    name: 'Micro Station Ikeja',
    category: 'Electronics',
    location: 'Ikeja, Lagos',
    specialty: 'Affordable Smartphones',
    rating: 4.2,
    description:
      'Specializes in making tech affordable. Known for their "Phone Swap" programs and budget-friendly focus.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 06, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Otigba Street, Computer Village, Ikeja',
      deliveryAvailable: false,
      paymentMethods: ['POS', 'Transfer'],
      contact: '+234 812 222 3333',
      features: ['Phone Swap', 'Screen Repair', 'Used Device Sales', 'Accessory Hub'],
    },
    pros: ['Aggressive pricing', 'Great swap-up deals', 'Central location'],
    cons: ['Noisy environment', 'Limited luxury device stock'],
    verdict: 'Best for budget-conscious buyers and those looking to trade in old devices.',
  },
  'justrite-superstore-isolo': {
    id: 'vendor_justrite',
    slug: 'justrite-superstore-isolo',
    name: 'Justrite Superstore Isolo',
    category: 'Supermarket',
    location: 'Isolo, Lagos',
    specialty: 'Value Groceries',
    rating: 4.1,
    description:
      'The king of value. Justrite offers competitive pricing for neighborhood shoppers who want to avoid high VI prices.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 05, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Mushin-Isolo Rd, Lagos',
      deliveryAvailable: false,
      paymentMethods: ['POS', 'Transfer', 'Cash'],
      contact: '+234 802 888 9999',
      features: ['Bulk Discounts', 'Local Brands', 'Parking Space', 'Daily Essentials'],
    },
    pros: ['Very affordable', 'Stocks local brands', 'Consistent inventory'],
    cons: ['Crowded aisles', 'Basic interior design'],
    verdict: 'The best value-for-money supermarket for residential areas.',
  },
  'market-square-ph': {
    id: 'vendor_marketsquare',
    slug: 'market-square-ph',
    name: 'Market Square Port Harcourt',
    category: 'Hypermarket',
    location: 'GRA Phase 2, Port Harcourt',
    specialty: 'Retail & Wholesale Groceries',
    rating: 4.5,
    description:
      'A modern hypermarket that has revolutionized shopping in the Garden City. Clean, well-stocked, and professional.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 04, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Tombia Street, GRA Phase 2, Port Harcourt',
      deliveryAvailable: true,
      paymentMethods: ['POS', 'Transfer', 'App Pay'],
      contact: '+234 818 000 4444',
      features: ['Loyalty Program', 'Bakery', 'Electronics Hub', 'Safe Parking'],
    },
    pros: ['Excellent organization', 'Courteous staff', 'Safe environment'],
    cons: ['Slightly higher prices on electronics', 'Peak hour traffic'],
    verdict: 'The premier shopping destination in Port Harcourt.',
  },
  '3chi-gadgets-abuja': {
    id: 'vendor_3chi',
    slug: '3chi-gadgets-abuja',
    name: '3Chi Gadgets',
    category: 'Electronics',
    location: 'Garki, Abuja',
    specialty: 'Apple Products & Accessories',
    rating: 4.6,
    description:
      'The Apple expert in Abuja. If you need a MacBook or iPhone with official Apple support standards, this is the place.',
    author: {
      name: 'Chidi "Tech" Nwosu',
      role: 'Hardware Analyst',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 03, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      address: 'Garki Mall, Garki 2, Abuja',
      deliveryAvailable: true,
      paymentMethods: ['Transfer', 'POS'],
      contact: '+234 809 999 1111',
      features: ['Apple Specialist', 'Software Setup', 'Genuine Accessories', 'Repair Desk'],
    },
    pros: ['Genuine Apple products', 'Expert tech support', 'Reliable warranty'],
    cons: ['Premium pricing', 'Strict return policy'],
    verdict: 'The most reliable Apple vendor in the FCT.',
  },
};
