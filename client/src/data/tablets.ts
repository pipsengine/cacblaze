export interface TabletReview {
  id: string;
  slug: string;
  name: string;
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
    display: string;
    processor: string;
    ram: string;
    storage: string;
    battery: string;
    cameras: string;
    weight: string;
    os: string;
  };
  verdict: string;
  pros: string[];
  cons: string[];
  content: {
    title: string;
    body: string;
  }[];
}

export const tabletReviews: Record<string, TabletReview> = {
  'ipad-pro-m4': {
    id: 'rev_ipadprom4',
    slug: 'ipad-pro-m4',
    name: 'iPad Pro M4 (13-inch)',
    tagline: 'Thinner. Faster. Brighter.',
    price: '₦2,100,000 - ₦2,800,000',
    rating: 4.8,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 11, 2026',
    heroImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      display: '13-inch Ultra Retina XDR (Tandem OLED)',
      processor: 'Apple M4 chip',
      ram: '8GB / 16GB',
      storage: '256GB / 512GB / 1TB / 2TB',
      battery: 'Up to 10 hours of web browsing',
      cameras: '12MP Wide (Rear), 12MP Ultra Wide (Front - Landscape)',
      weight: '579 grams',
      os: 'iPadOS 19'
    },
    verdict: 'The iPad Pro M4 is a technical marvel. The Tandem OLED display is the best screen you can find on any portable device, and the M4 chip is absurdly powerful. However, iPadOS still holds back this hardware from being a true laptop replacement for everyone. In Nigeria, it\'s a luxury item for top-tier creatives and executives who want the absolute best.',
    pros: [
      'Tandem OLED display is breathtakingly bright and contrasty',
      'Impossibly thin and light design',
      'M4 chip performance is industry-leading',
      'Front camera is finally on the landscape edge',
      'Apple Pencil Pro adds great new interactions'
    ],
    cons: [
      'Extremely expensive, especially with accessories',
      'iPadOS still limits "pro" multitasking',
      'Nano-texture glass is only available on high-storage models'
    ],
    content: [
      {
        title: 'The Display: A New Standard',
        body: 'The headline feature is the Ultra Retina XDR display. By stacking two OLED panels (Tandem OLED), Apple has achieved 1000 nits of full-screen brightness. It makes HDR content look incredible and is easily viewable even in bright Lagos offices. The colors are perfect, and the 120Hz ProMotion makes everything fluid.'
      },
      {
        title: 'M4 Performance & Heat',
        body: 'The jump to M4 was unexpected but welcome. It handles heavy logic pro sessions or 4K video editing without breaking a sweat. Despite being so thin, it manages heat surprisingly well, though it can get warm during intense gaming. For most users, this is more power than they will ever need in a tablet.'
      },
      {
        title: 'Design: How is it this thin?',
        body: 'At just 5.1mm, the 13-inch model is thinner than an iPod Nano. It feels like you are holding a sheet of glass. The landscape front camera is a huge improvement for Zoom calls, as you no longer look like you are staring off to the side.'
      }
    ]
  },
  'galaxy-tab-s9-ultra': {
    id: 'rev_tabs9ultra',
    slug: 'galaxy-tab-s9-ultra',
    name: 'Samsung Galaxy Tab S9 Ultra',
    tagline: 'The Ultimate Android Productivity Tablet',
    price: '₦1,600,000 - ₦1,950,000',
    rating: 4.7,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 08, 2026',
    heroImage: 'https://images.unsplash.com/photo-1634045540919-45917812580a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1634045540919-45917812580a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1623126307048-0e3d992255e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      display: '14.6-inch Dynamic AMOLED 2X (120Hz)',
      processor: 'Snapdragon 8 Gen 2 for Galaxy',
      ram: '12GB / 16GB',
      storage: '256GB / 512GB / 1TB (Expandable)',
      battery: '11,200 mAh',
      cameras: '13MP + 8MP (Rear), 12MP + 12MP (Front)',
      weight: '732 grams',
      os: 'Android 14 with One UI 6'
    },
    verdict: 'The Galaxy Tab S9 Ultra is a monster of a tablet. Its 14.6-inch screen is basically a portable TV, and with Samsung DeX, it gets closer to a laptop experience than the iPad. It\'s also IP68 rated, which is rare for tablets. For Android power users and those who need a massive canvas for drawing or multitasking, this is the king.',
    pros: [
      'Massive, beautiful 14.6-inch AMOLED display',
      'S-Pen included in the box',
      'Samsung DeX provides a great desktop-like experience',
      'IP68 water and dust resistance',
      'MicroSD card slot for easy storage expansion'
    ],
    cons: [
      'Huge size makes it difficult to use as a handheld tablet',
      'Android tablet app ecosystem still lags behind iPadOS',
      'Expensive, though often cheaper than iPad Pro'
    ],
    content: [
      {
        title: 'Display: A Portable Cinema',
        body: 'The 14.6-inch screen is the star here. It\'s huge. Watching movies on this is a much better experience than on most laptops. The AMOLED blacks are perfect, and the 120Hz refresh rate makes everything smooth. It\'s perfect for split-screen multitasking.'
      },
      {
        title: 'Productivity: DeX and S-Pen',
        body: 'Samsung DeX transforms the tablet into a desktop-like interface, especially when paired with the keyboard cover. The included S-Pen is fantastic for note-taking and drawing, with virtually zero latency. Unlike Apple, Samsung including the pen in the box is a huge value win.'
      },
      {
        title: 'Durability & Battery',
        body: 'The IP68 rating means you don\'t have to worry about accidental spills or dust. The 11,200mAh battery is massive and easily lasts through a full day of heavy work. Charging is 45W, which is decent but takes a while to fill such a large cell.'
      }
    ]
  }
};
