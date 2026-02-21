import { Article, ArticleCreationAttributes } from '../articles/Article';
import { Tip, TipCreationAttributes } from '../tips/Tip';
import User from '../users/User';
import { AIImageIntegrationService, AIImageRequest } from './AIImageIntegrationService';

interface Topic {
  title: string;
  category: string;
  type: 'Guide' | 'HowTo' | 'Review' | 'Education' | 'Technology' | 'Lifestyle';
  geo_focus: 'Nigeria' | 'Africa' | 'Global';
  tags: string[];
}

export class AIContentService {
  private imageService: AIImageIntegrationService;

  constructor() {
    this.imageService = new AIImageIntegrationService();
  }

  private getTopicPool(): Topic[] {
    return [
      {
        title: "How to Start a Small Business in Lagos",
        category: "Business",
        type: "Guide",
        geo_focus: "Nigeria",
        tags: ["entrepreneurship", "small business", "lagos", "nigeria"]
      },
      {
        title: "Nigerian Food Culture: Complete Guide to Local Cuisine",
        category: "Food",
        type: "Guide",
        geo_focus: "Nigeria",
        tags: ["nigerian food", "cuisine", "culture", "african food"]
      },
      {
        title: "Digital Banking in Nigeria: Comparing Top Fintech Apps",
        category: "Finance",
        type: "Review",
        geo_focus: "Nigeria",
        tags: ["fintech", "banking", "digital", "nigeria"]
      },
      {
        title: "Remote Work Opportunities Across Africa",
        category: "Career",
        type: "Guide",
        geo_focus: "Africa",
        tags: ["remote work", "africa", "career", "digital nomad"]
      },
      {
        title: "AI Tools for Content Creation: Comprehensive Review",
        category: "Technology",
        type: "Review",
        geo_focus: "Global",
        tags: ["ai", "content creation", "technology", "tools"]
      }
    ];
  }

  private selectTopic(): Topic {
    const pool = this.getTopicPool();
    const random = Math.random();
    
    // 60% Nigeria, 30% Africa, 10% Global distribution
    let filteredPool;
    if (random < 0.6) {
      filteredPool = pool.filter(t => t.geo_focus === 'Nigeria');
    } else if (random < 0.9) {
      filteredPool = pool.filter(t => t.geo_focus === 'Africa');
    } else {
      filteredPool = pool.filter(t => t.geo_focus === 'Global');
    }
    
    return filteredPool[Math.floor(Math.random() * filteredPool.length)];
  }

  private getContentTypeByDay(): string {
    const day = new Date().getDay();
    switch (day) {
      case 1: return 'Guide'; // Monday
      case 2: return 'HowTo'; // Tuesday
      case 3: return 'Review'; // Wednesday
      case 4: return 'Education'; // Thursday
      case 5: return 'Technology'; // Friday
      default: return 'Lifestyle'; // Weekends
    }
  }

  async generateArticle(adminUser: User): Promise<Article> {
    const topic = this.selectTopic();
    const contentType = this.getContentTypeByDay();

    // In production, this would call OpenAI API
    // For now, using placeholder content with proper structure
    const content = `# ${topic.title}

## Introduction
This comprehensive ${contentType.toLowerCase()} provides practical insights about ${topic.title.toLowerCase()} with specific focus on ${topic.geo_focus === 'Nigeria' ? 'Nigerian' : topic.geo_focus === 'Africa' ? 'African' : 'global'} context.

## Why This Matters
Understanding ${topic.title.toLowerCase()} is crucial for success in today's digital age, especially within the ${topic.geo_focus} context.

## Practical Steps
1. **Research and Planning** - Start with thorough market research
2. **Implementation** - Apply best practices tailored to local needs
3. **Optimization** - Continuously improve based on feedback

## Nigerian Example
For instance, many Nigerian entrepreneurs have successfully implemented these strategies in Lagos and Abuja.

## FAQs
### What are the key challenges?
The main challenges include market saturation and regulatory compliance.

### How long does it take to see results?
Typically 3-6 months with consistent effort.

## Summary
${topic.title} offers significant opportunities when approached with proper planning and local context understanding.`;

    // Generate appropriate image for this content
    const imageRequest: AIImageRequest = {
      category: topic.category.toLowerCase(),
      title: topic.title,
      content: content,
      keywords: topic.tags,
      geoFocus: topic.geo_focus,
      contentType: 'article'
    };

    const imageResponse = await this.imageService.getImageForContent(imageRequest);

    const articleData: ArticleCreationAttributes = {
      author_id: adminUser.id,
      title: topic.title,
      slug: this.generateSlug(topic.title),
      content: content,
      meta_description: `Learn about ${topic.title.toLowerCase()} with practical ${topic.geo_focus.toLowerCase()} examples and expert insights`,
      category: topic.category,
      tags: topic.tags,
      geo_focus: topic.geo_focus,
      type: contentType as any,
      status: 'draft',
      word_count: this.countWords(content),
      readability_score: this.calculateReadability(content),
      ai_generated: true,
      validation_passed: false,
      featured_image: imageResponse.imageUrl,
      image_alt: imageResponse.altText
    };

    return await Article.create(articleData);
  }

  async generateDailyTip(): Promise<Tip> {
    const topics = ['Productivity', 'Finance', 'Health', 'Technology', 'Career', 'Lifestyle'];
    const topic = topics[Math.floor(Math.random() * topics.length)];

    const content = `**Daily ${topic} Tip:** 

For better ${topic.toLowerCase()} management, try setting specific daily goals and tracking your progress. Many successful Nigerians use this approach to achieve remarkable results. Start with small, achievable targets and gradually increase them as you build consistency.`;

    // Generate appropriate image for this tip
    const imageRequest: AIImageRequest = {
      category: topic.toLowerCase(),
      title: `Daily ${topic} Tip`,
      content: content,
      geoFocus: 'Nigeria',
      contentType: 'tip'
    };

    const imageResponse = await this.imageService.getImageForContent(imageRequest);

    const tipData: TipCreationAttributes = {
      title: `Daily ${topic} Tip`,
      content: content,
      category: topic,
      status: 'draft',
      word_count: this.countWords(content),
      ai_generated: true,
      validation_passed: false
    };

    return await Tip.create(tipData);
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 100);
  }

  private countWords(text: string): number {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  }

  private calculateReadability(text: string): number {
    const words = text.split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).length;
    
    if (words === 0 || sentences === 0) return 8.0;
    
    const averageWordsPerSentence = words / sentences;
    // Simple readability score (higher = more readable)
    return Math.max(6, Math.min(10, 11 - (averageWordsPerSentence * 0.1)));
  }
}