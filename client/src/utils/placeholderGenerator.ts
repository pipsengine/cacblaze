/**
 * Dynamic Placeholder Generator for CACBLAZE
 * Generates narrative-driven, human-centric placeholder images with Nigerian/African context
 */

export interface PlaceholderConfig {
  width?: number;
  height?: number;
  category?: string;
  text?: string;
  seed?: string;
}

export interface CategoryTheme {
  colors: string[];
  gradient: string;
  icon: string;
  textColor: string;
}

// Nigerian/African-inspired color themes for each category
const categoryThemes: Record<string, CategoryTheme> = {
  technology: {
    colors: ['#008751', '#FDB913', '#00A86B'], // Nigerian green, gold, emerald
    gradient: 'linear-gradient(135deg, #008751 0%, #00A86B 100%)',
    icon: '💻',
    textColor: '#FFFFFF'
  },
  education: {
    colors: ['#E31B23', '#FDB913', '#FF6B35'], // Nigerian red, gold, coral
    gradient: 'linear-gradient(135deg, #E31B23 0%, #FF6B35 100%)',
    icon: '📚',
    textColor: '#FFFFFF'
  },
  lifestyle: {
    colors: ['#FDB913', '#FF8C42', '#FFD700'], // Gold, warm orange, bright gold
    gradient: 'linear-gradient(135deg, #FDB913 0%, #FF8C42 100%)',
    icon: '🌍',
    textColor: '#1A1A1A'
  },
  guides: {
    colors: ['#008751', '#00A86B', '#20B2AA'], // Green spectrum
    gradient: 'linear-gradient(135deg, #008751 0%, #20B2AA 100%)',
    icon: '📖',
    textColor: '#FFFFFF'
  },
  reviews: {
    colors: ['#6B46C1', '#9333EA', '#A855F7'], // Purple spectrum
    gradient: 'linear-gradient(135deg, #6B46C1 0%, #A855F7 100%)',
    icon: '⭐',
    textColor: '#FFFFFF'
  },
  howto: {
    colors: ['#0EA5E9', '#06B6D4', '#22D3EE'], // Cyan/blue spectrum
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #22D3EE 100%)',
    icon: '🔧',
    textColor: '#FFFFFF'
  },
  'local-resources': {
    colors: ['#008751', '#FDB913', '#E31B23'], // Nigerian flag colors
    gradient: 'linear-gradient(135deg, #008751 0%, #FDB913 50%, #E31B23 100%)',
    icon: '🏛️',
    textColor: '#FFFFFF'
  },
  default: {
    colors: ['#008751', '#FDB913', '#00A86B'],
    gradient: 'linear-gradient(135deg, #008751 0%, #00A86B 100%)',
    icon: '📄',
    textColor: '#FFFFFF'
  }
};

/**
 * Generate a deterministic color based on seed string
 */
function generateColorFromSeed(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 65%, 55%)`;
}

/**
 * Generate SVG placeholder with narrative-driven design
 */
export function generatePlaceholderSVG(config: PlaceholderConfig): string {
  const {
    width = 800,
    height = 600,
    category = 'default',
    text = '',
    seed = ''
  } = config;

  const theme = categoryThemes[category.toLowerCase()] || categoryThemes.default;
  const displayText = text || category.charAt(0).toUpperCase() + category.slice(1);
  
  // Add pattern overlay for visual interest
  const patternColor = theme.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${category}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${theme.colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${theme.colors[1] || theme.colors[0]};stop-opacity:1" />
        </linearGradient>
        <pattern id="pattern-${category}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="${patternColor}" />
        </pattern>
      </defs>
      
      <!-- Background gradient -->
      <rect width="${width}" height="${height}" fill="url(#grad-${category})" />
      
      <!-- Pattern overlay -->
      <rect width="${width}" height="${height}" fill="url(#pattern-${category})" />
      
      <!-- Icon -->
      <text x="50%" y="40%" font-size="80" text-anchor="middle" dominant-baseline="middle" opacity="0.9">
        ${theme.icon}
      </text>
      
      <!-- Category text -->
      <text 
        x="50%" 
        y="60%" 
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        font-size="32" 
        font-weight="700" 
        fill="${theme.textColor}" 
        text-anchor="middle" 
        dominant-baseline="middle"
        opacity="0.95"
      >
        ${displayText}
      </text>
      
      <!-- Decorative elements -->
      <circle cx="10%" cy="10%" r="60" fill="${theme.textColor}" opacity="0.1" />
      <circle cx="90%" cy="90%" r="80" fill="${theme.textColor}" opacity="0.08" />
    </svg>
  `;

  // Use URI encoding instead of btoa() to properly handle Unicode characters (emojis)
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Generate canvas-based placeholder (for client-side rendering)
 */
export function generatePlaceholderCanvas(
  canvas: HTMLCanvasElement,
  config: PlaceholderConfig
): void {
  const {
    width = 800,
    height = 600,
    category = 'default',
    text = '',
  } = config;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = width;
  canvas.height = height;

  const theme = categoryThemes[category.toLowerCase()] || categoryThemes.default;
  const displayText = text || category.charAt(0).toUpperCase() + category.slice(1);

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, theme.colors[0]);
  gradient.addColorStop(1, theme.colors[1] || theme.colors[0]);

  // Fill background
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add pattern
  ctx.fillStyle = theme.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.arc(x + 20, y + 20, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Draw decorative circles
  ctx.fillStyle = theme.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  ctx.beginPath();
  ctx.arc(width * 0.1, height * 0.1, 60, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = theme.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  ctx.beginPath();
  ctx.arc(width * 0.9, height * 0.9, 80, 0, Math.PI * 2);
  ctx.fill();

  // Draw icon
  ctx.font = '80px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = theme.textColor;
  ctx.globalAlpha = 0.9;
  ctx.fillText(theme.icon, width / 2, height * 0.4);

  // Draw text
  ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.globalAlpha = 0.95;
  ctx.fillText(displayText, width / 2, height * 0.6);
}

/**
 * Get data URL for placeholder image
 */
export function getPlaceholderDataURL(config: PlaceholderConfig): string {
  // Use URI encoding instead of base64 to handle Unicode characters (emojis)
  const svg = generatePlaceholderSVG(config);
  // Extract the SVG content from the data URL
  const svgContent = svg.replace(/^data:image\/svg\+xml;base64,/, '');
  
  // Decode base64 to get original SVG, then use URI encoding
  try {
    const decodedSVG = atob(svgContent);
    return `data:image/svg+xml,${encodeURIComponent(decodedSVG)}`;
  } catch (e) {
    // If base64 decode fails, generate SVG directly with URI encoding
    const { width = 800, height = 600, category = 'default', text = '', seed = '' } = config;
    const theme = categoryThemes[category.toLowerCase()] || categoryThemes.default;
    const displayText = text || category.charAt(0).toUpperCase() + category.slice(1);
    const patternColor = theme.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
    
    const svgString = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-${category}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${theme.colors[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${theme.colors[1] || theme.colors[0]};stop-opacity:1" />
          </linearGradient>
          <pattern id="pattern-${category}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="${patternColor}" />
          </pattern>
        </defs>
        
        <!-- Background gradient -->
        <rect width="${width}" height="${height}" fill="url(#grad-${category})" />
        
        <!-- Pattern overlay -->
        <rect width="${width}" height="${height}" fill="url(#pattern-${category})" />
        
        <!-- Icon -->
        <text x="50%" y="40%" font-size="80" text-anchor="middle" dominant-baseline="middle" opacity="0.9">
          ${theme.icon}
        </text>
        
        <!-- Category text -->
        <text 
          x="50%" 
          y="60%" 
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="32" 
          font-weight="700" 
          fill="${theme.textColor}" 
          text-anchor="middle" 
          dominant-baseline="middle"
          opacity="0.95"
        >
          ${displayText}
        </text>
        
        <!-- Decorative elements -->
        <circle cx="10%" cy="10%" r="60" fill="${theme.textColor}" opacity="0.1" />
        <circle cx="90%" cy="90%" r="80" fill="${theme.textColor}" opacity="0.08" />
      </svg>
    `;
    
    return `data:image/svg+xml,${encodeURIComponent(svgString)}`;
  }
}

/**
 * Extract category from URL or path
 */
export function extractCategoryFromPath(path: string): string {
  const segments = path.split('/');
  const possibleCategories = ['technology', 'education', 'lifestyle', 'guides', 'reviews', 'howto', 'local-resources'];
  
  for (const segment of segments) {
    const normalized = segment.toLowerCase().replace(/-/g, '');
    if (possibleCategories.includes(normalized)) {
      return normalized;
    }
  }
  
  return 'default';
}