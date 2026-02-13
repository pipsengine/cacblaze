/**
 * Image Service for CACBLAZE
 * Intelligently manages image selection between curated library and dynamic placeholders
 */

import { getPlaceholderDataURL } from './placeholderGenerator';

export interface ImageConfig {
  category?: string;
  title?: string;
  alt?: string;
  width?: number;
  height?: number;
  preferCurated?: boolean;
}

// Curated image library organized by category with Nigerian/African context
const curatedImages = {
  technology: [
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
      alt: 'Nigerian software developer working on laptop in modern Lagos tech hub',
      keywords: ['coding', 'developer', 'software', 'programming'],
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800',
      alt: 'African tech startup team collaborating in bright office space',
      keywords: ['startup', 'team', 'collaboration', 'innovation'],
    },
    {
      src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800',
      alt: 'Young Nigerian woman using mobile payment app on smartphone',
      keywords: ['mobile', 'payment', 'fintech', 'digital'],
    },
    {
      src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800',
      alt: 'Students learning coding at African technology education center',
      keywords: ['education', 'learning', 'students', 'training'],
    },
  ],
  education: [
    {
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800',
      alt: 'Nigerian university students studying together in library',
      keywords: ['students', 'studying', 'university', 'learning'],
    },
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800',
      alt: 'African teacher engaging students in modern classroom setting',
      keywords: ['teacher', 'classroom', 'teaching', 'school'],
    },
    {
      src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800',
      alt: 'Young African professional taking online course on laptop',
      keywords: ['online', 'elearning', 'course', 'digital'],
    },
    {
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800',
      alt: 'Nigerian graduates celebrating at university graduation ceremony',
      keywords: ['graduation', 'achievement', 'success', 'celebration'],
    },
  ],
  lifestyle: [
    {
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800',
      alt: 'Happy Nigerian family spending quality time together at home',
      keywords: ['family', 'home', 'togetherness', 'lifestyle'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800',
      alt: 'Nigerian woman preparing traditional jollof rice in modern kitchen',
      keywords: ['cooking', 'food', 'cuisine', 'kitchen'],
    },
    {
      src: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=800',
      alt: 'Vibrant street scene in Lagos showing daily urban life',
      keywords: ['city', 'urban', 'lagos', 'street'],
    },
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800',
      alt: 'Young Nigerian woman in contemporary African fashion outfit',
      keywords: ['fashion', 'style', 'clothing', 'culture'],
    },
  ],
  guides: [
    {
      src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800',
      alt: 'Nigerian entrepreneur planning business strategy with documents and laptop',
      keywords: ['business', 'planning', 'entrepreneur', 'strategy'],
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
      alt: 'African couple working on home improvement project together',
      keywords: ['home', 'improvement', 'diy', 'renovation'],
    },
    {
      src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800',
      alt: 'Nigerian financial advisor helping client with investment planning',
      keywords: ['finance', 'money', 'investment', 'planning'],
    },
    {
      src: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=800',
      alt: 'African woman practicing yoga and wellness in peaceful outdoor setting',
      keywords: ['health', 'wellness', 'fitness', 'exercise'],
    },
  ],
  reviews: [
    {
      src: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800',
      alt: 'Nigerian reviewer testing and examining new technology product',
      keywords: ['review', 'testing', 'product', 'evaluation'],
    },
    {
      src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800',
      alt: 'Food critic reviewing Nigerian restaurant dish in Lagos',
      keywords: ['restaurant', 'food', 'dining', 'review'],
    },
    {
      src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800',
      alt: 'African tech reviewer demonstrating smartphone features',
      keywords: ['gadget', 'tech', 'smartphone', 'device'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800',
      alt: 'Nigerian customer sharing positive service experience',
      keywords: ['service', 'customer', 'experience', 'satisfaction'],
    },
  ],
  howto: [
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
      alt: 'Nigerian man following step-by-step DIY tutorial with tools',
      keywords: ['diy', 'tutorial', 'project', 'howto'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800',
      alt: 'African chef demonstrating cooking technique in kitchen',
      keywords: ['cooking', 'tutorial', 'recipe', 'kitchen'],
    },
    {
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800',
      alt: 'Nigerian tech enthusiast setting up home office workspace',
      keywords: ['setup', 'tech', 'workspace', 'guide'],
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800',
      alt: 'African professional learning new skill through hands-on practice',
      keywords: ['skill', 'learning', 'practice', 'training'],
    },
  ],
  'local-resources': [
    {
      src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800',
      alt: 'Bustling Nigerian local market with vendors and fresh produce',
      keywords: ['market', 'local', 'shopping', 'community'],
    },
    {
      src: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&w=800',
      alt: 'Iconic Lagos landmarks and cultural heritage sites',
      keywords: ['landmarks', 'culture', 'heritage', 'tourism'],
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800',
      alt: 'Nigerian community center hosting local event and gathering',
      keywords: ['community', 'center', 'event', 'gathering'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800',
      alt: 'Local Nigerian service providers and small businesses',
      keywords: ['services', 'business', 'local', 'providers'],
    },
  ],
};

/**
 * Find best matching curated image based on keywords
 */
function findBestCuratedImage(
  category: string,
  title?: string
): { src: string; alt: string } | null {
  const categoryImages = curatedImages[category as keyof typeof curatedImages];

  if (!categoryImages || categoryImages.length === 0) {
    return null;
  }

  // If no title provided, return random image from category
  if (!title) {
    const randomIndex = Math.floor(Math.random() * categoryImages.length);
    return categoryImages[randomIndex];
  }

  // Find best match based on keywords
  const titleLower = title.toLowerCase();
  let bestMatch = categoryImages[0];
  let bestScore = 0;

  for (const image of categoryImages) {
    let score = 0;
    for (const keyword of image.keywords) {
      if (titleLower.includes(keyword)) {
        score++;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = image;
    }
  }

  return bestMatch;
}

/**
 * Get appropriate image (curated or placeholder)
 */
export function getContextualImage(config: ImageConfig): { src: string; alt: string } {
  const {
    category = 'default',
    title = '',
    alt = '',
    width = 800,
    height = 600,
    preferCurated = true,
  } = config;

  const normalizedCategory = category.toLowerCase().replace(/-/g, '');

  // Try to get curated image first if preferred
  if (preferCurated) {
    const curatedImage = findBestCuratedImage(normalizedCategory, title);
    if (curatedImage) {
      return curatedImage;
    }
  }

  // Fallback to dynamic placeholder
  const placeholderSrc = getPlaceholderDataURL({
    width,
    height,
    category: normalizedCategory,
    text: title || category,
    seed: title || category,
  });

  const placeholderAlt = alt || `${category} - ${title || 'Visual representation'}`;

  return {
    src: placeholderSrc,
    alt: placeholderAlt,
  };
}

/**
 * Get author avatar (placeholder or curated)
 */
export function getAuthorAvatar(authorName: string): string {
  // Handle undefined or null authorName
  if (!authorName) {
    authorName = 'Unknown Author';
  }

  // Generate consistent avatar based on author name
  const colors = [
    '#008751',
    '#FDB913',
    '#E31B23',
    '#00A86B',
    '#FF6B35',
    '#6B46C1',
    '#0EA5E9',
    '#FF8C42',
    '#9333EA',
    '#22D3EE',
  ];

  const hash = authorName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorIndex = hash % colors.length;
  const color = colors[colorIndex];

  const initials = authorName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="${color}" />
      <text 
        x="50" 
        y="50" 
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        font-size="40" 
        font-weight="700" 
        fill="#FFFFFF" 
        text-anchor="middle" 
        dominant-baseline="central"
      >
        ${initials}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Check if image exists in curated library
 */
export function hasCuratedImage(category: string): boolean {
  const normalizedCategory = category.toLowerCase().replace(/-/g, '');
  return normalizedCategory in curatedImages;
}

/**
 * Get all curated images for a category
 */
export function getCuratedImagesForCategory(category: string) {
  const normalizedCategory = category.toLowerCase().replace(/-/g, '');
  return curatedImages[normalizedCategory as keyof typeof curatedImages] || [];
}
