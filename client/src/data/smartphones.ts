export interface SmartphoneReview {
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
    screen: string;
    processor: string;
    ram: string;
    storage: string;
    battery: string;
    charging: string;
    mainCamera: string;
    selfieCamera: string;
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

export const smartphoneReviews: Record<string, SmartphoneReview> = {
  'iphone-15-pro-max': {
    id: 'rev_iphone15promax',
    slug: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    tagline: 'The Titanium Titan',
    price: '₦2,200,000 - ₦2,800,000',
    rating: 4.9,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1696446702183-f8a5d7d43521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      screen: '6.7" Super Retina XDR OLED, 120Hz',
      processor: 'A17 Pro (3nm)',
      ram: '8GB',
      storage: '256GB / 512GB / 1TB',
      battery: '4441 mAh',
      charging: '25W Wired, 15W MagSafe',
      mainCamera: '48MP Main + 12MP Ultra + 12MP 5x Telephoto',
      selfieCamera: '12MP TrueDepth',
      os: 'iOS 19 (Upgradable)'
    },
    verdict: 'If you can afford it, the iPhone 15 Pro Max is the best smartphone you can buy in Nigeria right now. The move to Titanium makes it lighter, the USB-C port finally makes it compatible with everyone else\'s chargers, and the video quality remains unbeaten. However, the slow charging speed is noticeable compared to Chinese competitors.',
    pros: [
      'Titanium build is significantly lighter',
      'USB-C port is a game changer',
      '5x Telephoto lens is incredibly sharp',
      'A17 Pro chip handles console-level gaming',
      'Best-in-class video recording'
    ],
    cons: [
      'Charging is slow (takes over 90 mins for full charge)',
      'Pricey, especially with current exchange rates',
      'Action button placement takes getting used to'
    ],
    content: [
      {
        title: 'Design & Build',
        body: 'The first thing you notice is the weight. The switch from stainless steel to Grade 5 Titanium has shaved off 19 grams, and you feel it immediately. The contoured edges also make it more comfortable to hold without a case. The Action Button replaces the mute switch, which is cool, but I mostly just use it to launch the camera.'
      },
      {
        title: 'Display & Performance',
        body: 'The 6.7-inch Super Retina XDR display is stunning, hitting 2000 nits peak brightness outdoors—essential for the Nigerian sun. Inside, the A17 Pro chip is overkill for most apps, but if you play Call of Duty Mobile or edit videos on CapCut, it flies. It does get slightly warm during intense gaming, but nothing alarming.'
      },
      {
        title: 'Camera: The Content Creator\'s Dream',
        body: 'This is why you buy this phone. The 5x optical zoom (120mm equivalent) lets you get close to subjects without moving. Portrait mode now activates automatically when it sees a person or pet. But the real star is video: shooting in ProRes Log is like having a cinema camera in your pocket, provided you have the storage space.'
      },
      {
        title: 'Battery & Charging',
        body: 'Battery life is solid—it easily lasts a full day of heavy use (social media, maps, music). I finish most days with 20% left. The downside? Charging. In a world where Infinix and Xiaomi give you 100W charging, Apple\'s 25W feels ancient. It takes about 30 minutes to get to 50%, but a full charge takes over an hour and a half.'
      }
    ]
  },
  'samsung-s24-ultra': {
    id: 'rev_s24ultra',
    slug: 'samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    tagline: 'The AI Productivity Powerhouse',
    price: '₦1,950,000 - ₦2,400,000',
    rating: 4.8,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1706727271927-44026605286b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1706606550774-7060424545d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      screen: '6.8" Dynamic LTPO AMOLED 2X, 120Hz',
      processor: 'Snapdragon 8 Gen 3 for Galaxy',
      ram: '12GB',
      storage: '256GB / 512GB / 1TB',
      battery: '5000 mAh',
      charging: '45W Wired, 15W Wireless',
      mainCamera: '200MP Main + 50MP 5x Tele + 10MP 3x Tele + 12MP Ultra',
      selfieCamera: '12MP Dual Pixel',
      os: 'Android 14 (One UI 6.1)'
    },
    verdict: 'The Galaxy S24 Ultra is not just a phone; it\'s a computer in your pocket. The S-Pen remains a unique advantage for business owners and creatives, and the new Galaxy AI features are genuinely useful, not just gimmicks. While the shutter lag still annoys me when taking photos of moving kids or pets, the screen and zoom capabilities are unmatched.',
    pros: [
      'Galaxy AI features (Circle to Search, Live Translate) are excellent',
      'Flat display makes using the S-Pen much better',
      '7 years of OS updates is a huge commitment',
      'Anti-reflective screen coating is a game changer outdoors',
      'Zoom quality up to 10x is still the best in the business'
    ],
    cons: [
      'It is a very large and boxy phone to hold',
      'Shutter lag is still present in indoor lighting',
      '45W charging is faster than iPhone but slower than Chinese rivals'
    ],
    content: [
      {
        title: 'Design: Flat & Functional',
        body: 'Samsung finally listened! The curved screen is gone. The S24 Ultra has a completely flat display, which is fantastic for using the S-Pen right to the edge without slipping. The titanium frame adds durability, though it doesn\'t feel quite as light as the iPhone. It\'s a big, boxy phone that means business.'
      },
      {
        title: 'Display: The Best Screen Period',
        body: 'Samsung makes the best screens, and this is their masterpiece. The new Gorilla Armor glass significantly reduces reflections. Using this phone under the harsh Lagos sun is noticeably better than any other device. The colors are vivid, and the 2600 nits peak brightness is blindingly good.'
      },
      {
        title: 'Galaxy AI & S-Pen',
        body: 'The "Circle to Search" feature is addictive—I use it constantly to find prices of shoes or clothes I see on Instagram. Live Translate works surprisingly well for calls, though you might not use it daily. The S-Pen remains the king for signing documents on the go or quick sketches. If you run a business from your phone, this tool is invaluable.'
      },
      {
        title: 'Camera: 200MP Power',
        body: 'The 200MP main sensor captures an insane amount of detail. You can crop into photos endlessly. The switch from 10x optical to a 5x 50MP sensor was controversial, but in practice, it\'s better. 5x is a more usable zoom length for portraits, and the digital crop to 10x is nearly lossless. Video quality has improved, especially in low light, though iPhone still holds the crown there.'
      }
    ]
  },
  'tecno-phantom-v-fold': {
    id: 'rev_tecnovfold',
    slug: 'tecno-phantom-v-fold',
    name: 'Tecno Phantom V Fold',
    tagline: 'The Foldable for Everyone',
    price: '₦1,100,000 - ₦1,300,000',
    rating: 4.5,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 15, 2026',
    heroImage: 'https://images.unsplash.com/photo-1660462998336-64c8d56b4f3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1660462998336-64c8d56b4f3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      screen: '7.85" LTPO AMOLED Foldable (120Hz)',
      processor: 'Dimensity 9000+ (4nm)',
      ram: '12GB',
      storage: '256GB / 512GB',
      battery: '5000 mAh',
      charging: '45W Wired',
      mainCamera: '50MP Main + 50MP Tele + 13MP Ultra',
      selfieCamera: '16MP (Inner) + 32MP (Cover)',
      os: 'Android 13 (HiOS 13 Fold)'
    },
    verdict: 'The Tecno Phantom V Fold is the most accessible way to enter the foldable market in Nigeria. It offers 90% of the Samsung experience for 60% of the price. While the software isn\'t as polished and the crease is slightly more visible, the sheer value proposition is undeniable. Plus, having Carlcare support centers everywhere gives peace of mind that Samsung sometimes lacks.',
    pros: [
      'Incredible value for money compared to Samsung Z Fold',
      'Zero gap when folded design looks premium',
      'Usable cover screen aspect ratio (not too narrow)',
      'Carlcare service center support across Nigeria',
      'Generous 512GB storage as standard'
    ],
    cons: [
      'Software (HiOS) is still buggy on the large screen',
      'No official water resistance rating',
      'Hinge doesn\'t hold at all angles (no "Flex Mode")'
    ],
    content: [
      {
        title: 'Design & Hinge',
        body: 'Tecno nailed the design on their first try. The phone closes completely flat with no gap, something Samsung took years to figure out. The back has a unique texture that resists fingerprints. However, the hinge is a bit loose; it snaps open or closed but struggles to hold angles in between, meaning you can\'t easily set it on a table to take a selfie.'
      },
      {
        title: 'Displays: Big and Bigger',
        body: 'The cover screen is a normal 6.4-inch size, unlike the narrow remote-control shape of the Galaxy Fold. You can use it like a regular phone comfortably. Unfold it, and you get a massive 7.85-inch tablet. Watching movies or reading documents on this thing is a joy. The crease is there, but you stop noticing it after a day.'
      },
      {
        title: 'Performance & Software',
        body: 'The Dimensity 9000+ chip is a flagship performer. It handles PUBG and Call of Duty Mobile with ease. The issue is software. HiOS still has some bloatware, and not all apps scale perfectly to the square inner screen. But for multitasking—running WhatsApp alongside YouTube—it works flawlessly.'
      },
      {
        title: 'Cameras & Battery',
        body: 'The 50MP main camera takes sharp, punchy photos that Tecno is known for. The portrait mode handles darker skin tones very well. Battery life is surprisingly good for a foldable, easily lasting a full day thanks to the 5000mAh cell. The 45W charging tops it up in under an hour.'
      }
    ]
  },
  'infinix-note-40-pro': {
    id: 'rev_infinixnote40pro',
    slug: 'infinix-note-40-pro',
    name: 'Infinix Note 40 Pro',
    tagline: 'The Fast Charge King',
    price: '₦450,000 - ₦520,000',
    rating: 4.6,
    author: {
      name: 'Tunde "Gadget" Bakare',
      role: 'Tech Editor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'Feb 18, 2026',
    heroImage: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      screen: '6.78" 3D Curved AMOLED (120Hz)',
      processor: 'Helio G99 Ultimate',
      ram: '8GB / 12GB (+12GB Virtual)',
      storage: '256GB',
      battery: '5000 mAh',
      charging: '70W Wired, 20W MagCharge',
      mainCamera: '108MP OIS Main + 2MP + 2MP',
      selfieCamera: '32MP',
      os: 'Android 14 (XOS 14)'
    },
    verdict: 'The Infinix Note 40 Pro redefines what a mid-range phone can do in Nigeria. It brings premium features like a curved AMOLED screen, 70W fast charging, and magnetic wireless charging (MagCharge) to a price point that makes sense for many. While the processor isn\'t a flagship killer, it is perfectly adequate for daily tasks and light gaming. For students and young professionals, this is the best value phone right now.',
    pros: [
      'MagCharge wireless charging is a first in this price range',
      'Included MagKit (case + charger) in the box adds huge value',
      'Stunning curved AMOLED display looks premium',
      '70W fast charging is a lifesaver with erratic power supply',
      'Active Halo AI lighting is a cool party trick'
    ],
    cons: [
      'Helio G99 chip is getting a bit old for heavy gaming',
      'Pre-installed bloatware apps are annoying',
      'No ultra-wide camera lens'
    ],
    content: [
      {
        title: 'Charging: Changing the Game',
        body: 'This phone is all about power. The 70W wired charging gets you from 0 to 50% in just 20 minutes—crucial when NEPA brings light for only a short time. But the real game-changer is MagCharge. It\'s basically Apple\'s MagSafe but cheaper. You get a magnetic case and a wireless charging puck in the box! You can snap on a magnetic power bank (sold separately) without dealing with cables.'
      },
      {
        title: 'Design & Display',
        body: 'Infinix has mastered the art of making affordable phones look expensive. The 55-degree curved screen gives it a flagship vibe, and the vegan leather back (in Vintage Green) feels great in the hand. The "Active Halo" light on the back pulses when you get notifications or charge the phone, which definitely turns heads.'
      },
      {
        title: 'Performance',
        body: 'The Helio G99 Ultimate is a solid workhorse. It opens apps quickly and handles multitasking well thanks to the virtual RAM expansion (up to 24GB total). However, if you are a hardcore gamer wanting to play Genshin Impact at max settings, you might struggle. For Call of Duty Mobile and Free Fire, it runs smooth at medium settings.'
      },
      {
        title: 'Camera',
        body: 'The 108MP main camera with OIS (Optical Image Stabilization) is a big step up. Photos are crisp, and the OIS helps a lot with low-light shots and stable videos. The "Super Night" mode is surprisingly good for Lagos nightlife shots. The lack of an ultra-wide lens is a miss, but the 3x lossless zoom (digital crop) is useful for portraits.'
      }
    ]
  }
};
