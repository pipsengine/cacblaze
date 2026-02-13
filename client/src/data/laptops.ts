export interface LaptopReview {
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
    graphics: string;
    ram: string;
    storage: string;
    battery: string;
    weight: string;
    ports: string;
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

export const laptopReviews: Record<string, LaptopReview> = {
  'macbook-air-m3': {
    id: 'rev_macbookairm3',
    slug: 'macbook-air-m3',
    name: 'MacBook Air M3 (13-inch)',
    tagline: 'The Best All-Around Laptop Just Got Faster',
    price: '₦1,850,000 - ₦2,200,000',
    rating: 4.9,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 10, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1517336714460-4c50d917bd7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517336714460-4c50d917bd7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    specs: {
      display: '13.6-inch Liquid Retina display (2560 x 1664)',
      processor: 'Apple M3 chip (8-core CPU, 8-core or 10-core GPU)',
      graphics: 'Integrated Apple GPU',
      ram: '8GB / 16GB / 24GB Unified Memory',
      storage: '256GB / 512GB / 1TB / 2TB SSD',
      battery: 'Up to 18 hours Apple TV app movie playback',
      weight: '1.24 kg (2.7 pounds)',
      ports: '2x Thunderbolt / USB 4, MagSafe 3, Headphone jack',
      os: 'macOS Sequoia',
    },
    verdict:
      'The MacBook Air M3 remains the gold standard for portable computing. It combines class-leading performance with silent, fanless operation and incredible battery life. While the base 8GB RAM is starting to feel stingy in 2026, the overall package is nearly flawless for students, writers, and office professionals in Nigeria who need reliability during power outages.',
    pros: [
      'Stellar performance from the M3 chip',
      'Incredible battery life (easily lasts a full workday)',
      'Silent, fanless design',
      'MagSafe charging is a lifesaver',
      'Great keyboard and industry-leading trackpad',
    ],
    cons: [
      'Base model still starts with 8GB RAM',
      'Price in Naira is heavily affected by exchange rates',
      'Limited port selection requires dongles for many',
    ],
    content: [
      {
        title: 'Design & Portability',
        body: 'The M3 MacBook Air keeps the modern, squared-off design introduced with the M2. It is incredibly thin and light, making it the perfect companion for remote work in cafes or commuting through Lagos. The build quality is top-notch, with a recycled aluminum chassis that feels solid and premium.',
      },
      {
        title: 'Performance: The M3 Edge',
        body: 'The M3 chip brings a noticeable bump in speed, especially for graphics-intensive tasks. It handles web browsing with dozens of tabs, document editing, and even light 4K video editing without breaking a sweat. The best part? It does all this without a fan, so it stays completely silent even under load.',
      },
      {
        title: 'Display & Audio',
        body: 'The Liquid Retina display is bright and colorful, reaching 500 nits—great for working near windows. The notch is still there but easy to ignore. The four-speaker sound system is surprisingly good for such a thin laptop, providing clear audio for Zoom calls or Netflix sessions.',
      },
      {
        title: 'Battery Life & Charging',
        body: "Battery life is where the Air truly shines for the Nigerian user. You can easily get 12-15 hours of real-world use. When NEPA strikes, you don't have to panic about finding a generator immediately. MagSafe charging is great for safety, and you can also charge via USB-C for convenience.",
      },
    ],
  },
  'dell-xps-15': {
    id: 'rev_dellxps15',
    slug: 'dell-xps-15',
    name: 'Dell XPS 15 (2025)',
    tagline: 'The Windows Multimedia King',
    price: '₦2,400,000 - ₦3,100,000',
    rating: 4.7,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    publishDate: 'Feb 05, 2026',
    heroImage:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588872677353-9a94e27aa5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    specs: {
      display: '15.6-inch 3.5K OLED Touch Display',
      processor: 'Intel Core Ultra 7 155H',
      graphics: 'NVIDIA GeForce RTX 4050 (6GB GDDR6)',
      ram: '16GB / 32GB / 64GB DDR5',
      storage: '512GB / 1TB / 2TB NVMe SSD',
      battery: '86Whr Battery',
      weight: '1.86 kg (4.1 lbs)',
      ports: '2x Thunderbolt 4, 1x USB-C 3.2, SD Card Reader, Headphone jack',
      os: 'Windows 11 Pro',
    },
    verdict:
      'The Dell XPS 15 remains the best 15-inch laptop for creators who prefer Windows. Its OLED screen is breathtaking, and the performance is robust enough for serious video editing and design work. However, the battery life takes a hit due to that gorgeous screen, and the price remains premium.',
    pros: [
      'Stunning 3.5K OLED display with thin bezels',
      'Excellent build quality with carbon fiber palm rest',
      'Great performance for creative workloads',
      'Full-size SD card reader is a win for photographers',
      'Large, precise trackpad',
    ],
    cons: [
      'Webcam is still just average',
      'Battery life is mediocre with the OLED panel',
      'Expensive compared to some gaming laptops with similar specs',
    ],
    content: [
      {
        title: 'Design & Build',
        body: "Dell hasn't changed the design much because they don't need to. The CNC machined aluminum and carbon fiber interior still look and feel amazing. It's one of the most compact 15-inch laptops thanks to the \"InfinityEdge\" bezels.",
      },
      {
        title: 'The OLED Experience',
        body: 'If you do color-critical work or just love watching movies, this screen is for you. The blacks are perfect, and the colors pop. It makes working on spreadsheets almost enjoyable.',
      },
      {
        title: 'Performance & Thermals',
        body: 'The Intel Core Ultra processor handles heavy multitasking well. The RTX 4050 GPU provides enough juice for smooth video editing in Premiere Pro. It can get warm under load, and the fans are audible, but it rarely throttles significantly.',
      },
    ],
  },
};
