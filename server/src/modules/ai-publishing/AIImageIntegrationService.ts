export interface AIImageRequest {
  prompt: string;
  width?: number;
  height?: number;
  style?: string;
  category?: string;
  title?: string;
  content?: string;
  geoFocus?: string;
  contentType?: string;
  keywords?: string[];
}

interface CuratedImageAsset {
  src: string;
  alt: string;
  keywords: string[];
}

const ALLOWED_IMAGE_HOSTS = new Set([
  'images.pexels.com',
  'images.unsplash.com',
  'images.pixabay.com',
]);

const IMAGE_LIBRARY: Record<string, CuratedImageAsset[]> = {
  technology: [
    {
      src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Software developer working on modern code editor setup',
      keywords: ['technology', 'software', 'coding', 'developer', 'laptop'],
    },
    {
      src: 'https://images.pexels.com/photos/5380648/pexels-photo-5380648.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Digital connectivity and internet performance workspace',
      keywords: ['internet', 'digital', 'network', 'online', 'performance'],
    },
    {
      src: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Secure digital payment and fintech usage on point of sale device',
      keywords: ['fintech', 'payment', 'security', 'mobile', 'banking'],
    },
  ],
  education: [
    {
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      alt: 'Students learning together in a bright modern study environment',
      keywords: ['education', 'students', 'learning', 'school', 'study'],
    },
    {
      src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80',
      alt: 'Young professional taking an online course on a laptop',
      keywords: ['online', 'course', 'exam', 'study', 'learning'],
    },
    {
      src: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Student desk with notebooks and organized study materials',
      keywords: ['exam', 'notes', 'preparation', 'revision', 'focus'],
    },
  ],
  lifestyle: [
    {
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
      alt: 'Healthy family lifestyle moment at home',
      keywords: ['lifestyle', 'family', 'wellness', 'routine', 'home'],
    },
    {
      src: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=1200&q=80',
      alt: 'Wellness and mindfulness practice in calm outdoor setting',
      keywords: ['wellness', 'mindfulness', 'health', 'habit', 'balance'],
    },
    {
      src: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Morning routine with coffee journal and personal planning',
      keywords: ['morning', 'routine', 'productivity', 'planning', 'self-care'],
    },
  ],
  business: [
    {
      src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Business planning session with documents laptop and strategy notes',
      keywords: ['business', 'strategy', 'planning', 'growth', 'operations'],
    },
    {
      src: 'https://images.unsplash.com/photo-1523958203904-5f8d59f0e1ea?auto=format&fit=crop&w=1200&q=80',
      alt: 'Small business owner reviewing financial figures with calculator',
      keywords: ['budget', 'finance', 'business', 'money', 'bookkeeping'],
    },
    {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Team meeting around business performance dashboard',
      keywords: ['team', 'customers', 'company', 'meeting', 'management'],
    },
  ],
  finance: [
    {
      src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Personal finance planning with cash notebook and calculator',
      keywords: ['finance', 'budget', 'money', 'savings', 'planning'],
    },
    {
      src: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Budget review and expense tracking on a digital device',
      keywords: ['expenses', 'tracking', 'payments', 'money', 'budgeting'],
    },
    {
      src: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Digital payment and responsible money management in daily life',
      keywords: ['fintech', 'banking', 'wallet', 'cashless', 'digital'],
    },
  ],
  career: [
    {
      src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Professional collaboration and career growth discussion',
      keywords: ['career', 'jobs', 'professional', 'work', 'skills'],
    },
    {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern workplace teamwork and professional development',
      keywords: ['career', 'teamwork', 'office', 'interview', 'growth'],
    },
    {
      src: 'https://images.pexels.com/photos/4065622/pexels-photo-4065622.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Freelancer or job seeker working from laptop with focused workspace',
      keywords: ['freelance', 'remote', 'portfolio', 'applications', 'skills'],
    },
  ],
  'local resources': [
    {
      src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80',
      alt: 'Busy urban city environment with useful local services and movement',
      keywords: ['city', 'local', 'services', 'community', 'transport'],
    },
    {
      src: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Street-level city navigation and local discovery scene',
      keywords: ['local', 'city guide', 'neighborhood', 'places', 'resources'],
    },
    {
      src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
      alt: 'Community cityscape and practical everyday local access',
      keywords: ['community', 'urban', 'living', 'essentials', 'vendors'],
    },
  ],
  guides: [
    {
      src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'Practical digital guide content displayed on a laptop screen',
      keywords: ['guide', 'digital', 'practical', 'how-to', 'learning'],
    },
    {
      src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
      alt: 'Notebook laptop and workflow tools prepared for focused knowledge work',
      keywords: ['guide', 'workflow', 'planning', 'editorial', 'knowledge'],
    },
    {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      alt: 'People collaborating around a practical research and content desk',
      keywords: ['guide', 'research', 'content', 'team', 'insights'],
    },
  ],
};

export class AIImageIntegrationService {
  private static normalizeCategory(category?: string): string {
    const value = (category || '').trim().toLowerCase();

    if (value.includes('tech')) return 'technology';
    if (value.includes('education') || value.includes('study') || value.includes('exam')) return 'education';
    if (value.includes('life') || value.includes('wellness') || value.includes('health')) return 'lifestyle';
    if (value.includes('business')) return 'business';
    if (value.includes('finance') || value.includes('fintech') || value.includes('money')) return 'finance';
    if (value.includes('career') || value.includes('job')) return 'career';
    if (value.includes('local')) return 'local resources';

    return 'guides';
  }

  private static hashValue(value: string): number {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) {
      hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
    }
    return hash;
  }

  private static scoreCandidate(asset: CuratedImageAsset, text: string): number {
    const lowerText = text.toLowerCase();
    return asset.keywords.reduce((score, keyword) => {
      return score + (lowerText.includes(keyword.toLowerCase()) ? 10 : 0);
    }, 0);
  }

  private static pickImageAsset(request: AIImageRequest): CuratedImageAsset {
    const normalizedCategory = this.normalizeCategory(
      request.category || request.contentType || request.style
    );
    const pool = IMAGE_LIBRARY[normalizedCategory] || IMAGE_LIBRARY.guides;
    const searchText = [
      request.title || '',
      request.prompt || '',
      request.content || '',
      ...(request.keywords || []),
      request.geoFocus || '',
    ]
      .join(' ')
      .toLowerCase();

    const ranked = [...pool].sort((a, b) => this.scoreCandidate(b, searchText) - this.scoreCandidate(a, searchText));
    const bestScore = ranked.length > 0 ? this.scoreCandidate(ranked[0], searchText) : 0;
    const candidatePool = bestScore > 0 ? ranked.filter((asset) => this.scoreCandidate(asset, searchText) === bestScore) : pool;
    const index = this.hashValue(`${normalizedCategory}|${request.title || request.prompt || ''}`) % candidatePool.length;

    return candidatePool[index];
  }

  static isPlaceholderImage(imageUrl?: string | null): boolean {
    if (!imageUrl || imageUrl.trim().length === 0) {
      return true;
    }

    const normalized = imageUrl.toLowerCase();
    return (
      normalized.includes('example.com') ||
      normalized.includes('generated-image') ||
      normalized.includes('placeholder') ||
      normalized.includes('no_image') ||
      normalized.startsWith('data:image/svg')
    );
  }

  static async generateImage(request: AIImageRequest): Promise<string> {
    const { imageUrl } = await this.getImageForContent(request);
    return imageUrl;
  }

  static async optimizeImage(imageUrl: string): Promise<string> {
    return imageUrl;
  }

  static async validateImage(imageUrl: string): Promise<boolean> {
    if (this.isPlaceholderImage(imageUrl)) {
      return false;
    }

    try {
      const parsed = new URL(imageUrl);
      return parsed.protocol === 'https:' && ALLOWED_IMAGE_HOSTS.has(parsed.hostname);
    } catch {
      return false;
    }
  }

  static async getImageForContent(
    request: AIImageRequest
  ): Promise<{ imageUrl: string; altText: string }> {
    const selected = this.pickImageAsset(request);
    const optimized = await this.optimizeImage(selected.src);
    const isValid = await this.validateImage(optimized);
    const fallback = IMAGE_LIBRARY.guides[0];

    return {
      imageUrl: isValid ? optimized : fallback.src,
      altText: request.title ? `${request.title} illustration` : selected.alt,
    };
  }
}