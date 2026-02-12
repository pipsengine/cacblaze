export interface ServiceProviderReview {
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
    basePrice: string;
    coverage: string;
    support: string;
    responseTime: string;
    features: string[];
  };
  pros: string[];
  cons: string[];
  verdict: string;
}

export const serviceProviderReviews: Record<string, ServiceProviderReview> = {
  'mtn-fiber-lagos': {
    id: 'provider_mtn_fiber',
    slug: 'mtn-fiber-lagos',
    name: 'MTN Fibre-to-the-Home',
    category: 'ISP',
    location: 'Lagos/Abuja/PH',
    specialty: 'High-speed Fiber Internet',
    rating: 4.4,
    description: 'MTN\'s premium fiber service offering dedicated speeds for homes and small offices with reliable uptime.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦15,000/mo',
      coverage: 'Major Urban Areas',
      support: '24/7 Phone & Email',
      responseTime: 'Under 24 hours',
      features: ['Unlimited Data', 'Free Installation Promo', 'Router Included', 'Static IP Options']
    },
    pros: ['Very low latency', 'Stable during rain', 'Easy recharge via App'],
    cons: ['Limited coverage areas', 'Installation wait times'],
    verdict: 'The best fiber option if you are within their coverage map.'
  },
  'starlink-nigeria': {
    id: 'provider_starlink',
    slug: 'starlink-nigeria',
    name: 'Starlink Nigeria',
    category: 'ISP',
    location: 'Nationwide',
    specialty: 'Satellite Internet',
    rating: 4.6,
    description: 'Low-earth orbit satellite internet that has changed the game for remote workers and rural areas in Nigeria.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 11, 2026',
    heroImage: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦38,000/mo',
      coverage: '100% Nationwide',
      support: 'In-app Tickets',
      responseTime: '2-3 Days',
      features: ['Self-install', 'No Data Caps', 'Portable Options', 'High Speed Anywhere']
    },
    pros: ['Works everywhere', 'Impressive speeds', 'No cable theft issues'],
    cons: ['High upfront hardware cost', 'Price fluctuates with FX', 'Support is slow'],
    verdict: 'A lifesaver for those outside fiber zones or requiring 100% uptime.'
  },
  'airtel-5g-router': {
    id: 'provider_airtel_5g',
    slug: 'airtel-5g-router',
    name: 'Airtel 5G Home Broadband',
    category: 'ISP',
    location: 'Lagos/Abuja/Kano',
    specialty: '5G Fixed Wireless',
    rating: 4.2,
    description: 'Ultra-fast wireless internet using Airtel\'s expanding 5G network. Great for heavy streamers.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦20,000/mo',
      coverage: 'City Centers',
      support: 'Call Center',
      responseTime: 'Immediate (Phone)',
      features: ['Plug & Play', 'Up to 500Mbps', 'Connect 64 devices', 'Airtel TV Access']
    },
    pros: ['Fastest wireless option', 'No digging required', 'Competitive data plans'],
    cons: ['Inconsistent indoor signal', 'Router gets hot'],
    verdict: 'The best mid-range option for high-speed home internet.'
  },
  'tizeti-wifi-lagos': {
    id: 'provider_tizeti',
    slug: 'tizeti-wifi-lagos',
    name: 'Tizeti (Wifi.com.ng)',
    category: 'ISP',
    location: 'Lagos/Ogun/Edo',
    specialty: 'Unlimited Solar Wifi',
    rating: 3.8,
    description: 'Known for truly unlimited data plans powered by solar towers. A popular choice for budget-conscious users.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 09, 2026',
    heroImage: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦12,500/mo',
      coverage: 'Lagos Metropolis',
      support: 'Email/Social Media',
      responseTime: '48 Hours',
      features: ['Truly Unlimited', 'Solar Powered', 'Affordable Setup', 'Referral Bonuses']
    },
    pros: ['Cheap unlimited plans', 'Sustainable energy', 'Reliable in daytime'],
    cons: ['Peak hour slowdowns', 'Technical support can be frustrating'],
    verdict: 'Great for downloads and light streaming on a budget.'
  },
  'coollink-fiber': {
    id: 'provider_coollink',
    slug: 'coollink-fiber',
    name: 'Coollink Fiber',
    category: 'ISP',
    location: 'Lagos/Abuja',
    specialty: 'Enterprise & Home Fiber',
    rating: 4.1,
    description: 'A boutique ISP focusing on quality of service and dedicated bandwidth for professionals.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 08, 2026',
    heroImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦25,000/mo',
      coverage: 'High-brow Lagos/Abuja',
      support: 'Dedicated Manager',
      responseTime: '4 Hours',
      features: ['Dedicated Bandwidth', '99% Uptime SLA', 'Professional Install', 'Security Suite']
    },
    pros: ['Excellent uptime', 'Professional support', 'Consistent speeds'],
    cons: ['Higher price point', 'Narrow coverage'],
    verdict: 'The "Mercedes" of Nigerian ISPs – you get what you pay for.'
  },
  'spectranet-4g-lte': {
    id: 'provider_spectranet',
    slug: 'spectranet-4g-lte',
    name: 'Spectranet 4G LTE',
    category: 'ISP',
    location: 'Major Cities',
    specialty: 'Consumer 4G LTE',
    rating: 3.7,
    description: 'The pioneer of 4G in Nigeria. Offers a variety of MiFi and Router options with flexible data plans.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 07, 2026',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦7,000/mo',
      coverage: '10+ Major Cities',
      support: 'Walk-in Centers',
      responseTime: 'Varies',
      features: ['Free Night Browsing', 'MiFi Bundles', 'Rollover Data', 'Device Insurance']
    },
    pros: ['Wide range of plans', 'Good physical presence', 'Reliable night speeds'],
    cons: ['Throttling after limit', 'Daytime speeds vary by area'],
    verdict: 'Reliable secondary internet or primary for light users.'
  },
  'ipnx-fiber-lagos': {
    id: 'provider_ipnx',
    slug: 'ipnx-fiber-lagos',
    name: 'ipNX Fiber',
    category: 'ISP',
    location: 'Lagos/Abuja/PH/Ibadan',
    specialty: 'Premium Residential Fiber',
    rating: 4.5,
    description: 'Consistently ranked as one of the fastest ISPs in Nigeria. Their fiber infrastructure is top-tier.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 06, 2026',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦18,000/mo',
      coverage: 'Estate Focus',
      support: '24/7 Support Desk',
      responseTime: 'Under 12 hours',
      features: ['Symmetric Speeds', 'Smart Home Ready', 'Multi-room Wifi', 'No Data Throttling']
    },
    pros: ['Blazing speeds', 'Symmetric upload/download', 'Low downtime'],
    cons: ['Strict coverage in gated estates', 'Setup fee is high'],
    verdict: 'If you live in a gated estate, this is likely your best option.'
  },
  'smile-4g-broadband': {
    id: 'provider_smile',
    slug: 'smile-4g-broadband',
    name: 'Smile Communications',
    category: 'ISP',
    location: 'Nationwide Cities',
    specialty: '4G LTE Voice & Data',
    rating: 3.9,
    description: 'Offers high-quality 4G data and VoLTE services. Known for their "SmileVoice" app and reliable MiFis.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 05, 2026',
    heroImage: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦10,000/mo',
      coverage: 'Major Urban Centers',
      support: 'Online/Phone',
      responseTime: '24 Hours',
      features: ['VoLTE Calls', 'Unlimited Plans', 'Travel Friendly', 'Data Rollover']
    },
    pros: ['Great voice quality', 'Reliable MiFi devices', 'Good coverage in cities'],
    cons: ['Data can be expensive', 'Signal drops in old buildings'],
    verdict: 'Best for professionals who need data and calls on the go.'
  },
  'cobranet-fiber': {
    id: 'provider_cobranet',
    slug: 'cobranet-fiber',
    name: 'Cobranet Internet',
    category: 'ISP',
    location: 'Lagos/Abuja/Kano',
    specialty: 'Microwave & Fiber Internet',
    rating: 4.0,
    description: 'A long-standing player in the ISP space, offering robust microwave links for areas where fiber can\'t reach.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 04, 2026',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦30,000/mo',
      coverage: 'Business Districts',
      support: 'Priority Support',
      responseTime: '6 Hours',
      features: ['Microwave Link', 'Fiber Backbone', 'Backup Links', 'Static IP']
    },
    pros: ['Very reliable link', 'Great for businesses', 'Independent of road works'],
    cons: ['Expensive setup', 'Microwave affected by heavy storms'],
    verdict: 'Ideal for offices and high-reliability home setups.'
  },
  'glo-fiber-lagos': {
    id: 'provider_glo',
    slug: 'glo-fiber-lagos',
    name: 'Glo Fiber (Globacom)',
    category: 'ISP',
    location: 'Lagos/Abuja',
    specialty: 'Fiber to the Home',
    rating: 3.5,
    description: 'The indigenous giant\'s foray into fiber. Offers massive data bundles for very competitive prices.',
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Connectivity Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 03, 2026',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    specs: {
      basePrice: '₦12,000/mo',
      coverage: 'Selected Lagos Areas',
      support: 'Gloworld Centers',
      responseTime: '48-72 Hours',
      features: ['Massive Data', 'Bundle with Mobile', 'Free Router Promo', 'Local Peering']
    },
    pros: ['Cheapest fiber data', 'Huge data volume', 'Good local speeds'],
    cons: ['Frequent maintenance', 'Support can be difficult to reach'],
    verdict: 'Best for heavy downloaders who can tolerate occasional downtime.'
  }
};
