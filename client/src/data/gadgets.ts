export interface GadgetReview {
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
    [key: string]: string;
  };
  verdict: string;
  pros: string[];
  cons: string[];
  content: {
    title: string;
    body: string;
  }[];
}

export const gadgetReviews: Record<string, GadgetReview> = {
  'playstation-5-pro': {
    id: 'rev_ps5pro',
    slug: 'playstation-5-pro',
    name: 'Sony PlayStation 5 Pro',
    category: 'Gaming',
    tagline: 'The Pinnacle of Console Gaming',
    price: '₦1,400,000 - ₦1,650,000',
    rating: 4.7,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      GPU: 'Upgraded RDNA Architecture',
      Storage: '2TB Custom NVMe SSD',
      Performance: 'PSSR AI Upscaling',
      Connectivity: 'Wi-Fi 7 Support',
      'Ray Tracing': 'Advanced 2x-3x Speed',
      'Disc Drive': 'Sold Separately'
    },
    verdict: 'The PS5 Pro is a beast of a machine, offering the best possible console gaming experience today. For Nigerian gamers who want 60fps with high-fidelity graphics, it\'s the ultimate choice, though the price tag is a significant barrier for many.',
    pros: [
      'Consistent 60fps in high-fidelity modes',
      'PSSR upscaling works wonders',
      'Massive 2TB storage included',
      'Wi-Fi 7 is great for future-proofing'
    ],
    cons: [
      'Extremely expensive in Naira',
      'No disc drive or vertical stand included',
      'Requires a high-end 4K/120Hz TV to truly shine'
    ],
    content: [
      {
        title: 'Graphics & Performance',
        body: 'The main draw is the "Big Three" improvements: larger GPU, advanced ray tracing, and PlayStation Spectral Super Resolution (PSSR). In games like Spider-Man 2, the difference in detail while maintaining fluid movement is immediately noticeable.'
      },
      {
        title: 'The Cost of Power',
        body: 'At over 1.4 million Naira, this is a luxury investment. For the average gamer, the base PS5 still offers incredible value. However, for enthusiasts with high-end setups, the Pro is the missing piece of the puzzle.'
      }
    ]
  },
  'starlink-gen-3': {
    id: 'rev_starlinkg3',
    slug: 'starlink-gen-3',
    name: 'Starlink Standard Kit (Gen 3)',
    category: 'Networking',
    tagline: 'Internet Everywhere, Finally.',
    price: '₦590,000 - ₦800,000',
    rating: 4.9,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 08, 2026',
    heroImage: 'https://images.unsplash.com/photo-1621416848469-9c51819f31c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621416848469-9c51819f31c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1612547036242-77002603e5aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'Antenna Type': 'Electronic Phased Array',
      'Field of View': '110°',
      Router: 'Wi-Fi 6 (Tri-band)',
      Rating: 'IP67 Type 4',
      'Power Usage': '75 - 100 Watts',
      Ports: 'Two Ethernet Ports'
    },
    verdict: 'Starlink Gen 3 has revolutionized internet access in Nigeria. From remote villages to congested Lagos suburbs, it provides consistent high-speed data that local ISPs often fail to deliver. The Gen 3 kit is more robust and easier to set up than the previous version.',
    pros: [
      'Blazing fast speeds (up to 250Mbps)',
      'Works in areas with zero fiber coverage',
      'Improved Wi-Fi 6 router range',
      'Rugged IP67 rating for Nigerian weather'
    ],
    cons: [
      'High initial setup cost',
      'Requires clear view of the sky',
      'Monthly subscription varies with exchange rate'
    ],
    content: [
      {
        title: 'Performance in Nigeria',
        body: 'Even during heavy rainy seasons, the Gen 3 dish maintains a solid connection. We\'ve seen latency as low as 40ms, making it viable for gaming and high-quality Zoom calls without the typical "buffer face" of mobile networks.'
      },
      {
        title: 'Setup & Portability',
        body: 'The new kickstand design is simpler than the motorized Gen 2. It\'s easier to pack for those who move frequently or work from remote sites across the country.'
      }
    ]
  },
  'dji-mini-4-pro': {
    id: 'rev_djimini4',
    slug: 'dji-mini-4-pro',
    name: 'DJI Mini 4 Pro',
    category: 'Drones',
    tagline: 'Pro Cinematics in a Tiny Package',
    price: '₦1,100,000 - ₦1,350,000',
    rating: 4.8,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 01, 2026',
    heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      Weight: '< 249g',
      Resolution: '4K/60fps HDR',
      'Obstacle Sensing': 'Omnidirectional',
      'Flight Time': '34 - 45 Minutes',
      Range: '20km (O4 Video Transmission)',
      Sensor: '1/1.3-inch CMOS'
    },
    verdict: 'For Nigerian content creators and wedding videographers, the DJI Mini 4 Pro is a game-changer. It stays under the 250g weight limit (reducing regulatory hurdles) while delivering image quality that rivals much larger drones.',
    pros: [
      'Stunning image quality with D-Log M',
      'True vertical shooting for TikTok/Reels',
      'Incredible obstacle avoidance safety',
      'Portable enough to fit in a small bag'
    ],
    cons: [
      'Pricey for a "mini" drone',
      'Wind resistance is good but not elite',
      'Batteries are expensive'
    ],
    content: [
      {
        title: 'Safety & Ease of Use',
        body: 'The omnidirectional obstacle sensing makes it nearly impossible to crash, which is perfect for navigating through tight spaces or around trees in Nigerian estates. The O4 transmission system is rock solid, providing a clear feed even in urban areas.'
      },
      {
        title: 'Creative Freedom',
        body: 'The ability to flip the camera 90 degrees for vertical video is a huge plus for social media managers. You get the full resolution of the sensor for your Reels and TikToks.'
      }
    ]
  }
};
