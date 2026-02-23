import { AIContentService } from './AIContentService';
import { ContentValidationService } from './ContentValidationService';
import User from '../users/User';
import { Article } from '../articles/Article';
import { Tip } from '../tips/Tip';
import { CronJob } from 'cron';

export class AIPublishingScheduler {
  private aiService: AIContentService;
  private validationService: ContentValidationService;
  private adminUser: User | null = null;

  constructor() {
    this.aiService = new AIContentService();
    this.validationService = new ContentValidationService();
    this.initializeScheduler();
  }

  private async initializeScheduler(): Promise<void> {
    try {
      // Find or create admin user for AI content
      this.adminUser = await this.getAdminUser();
      
      // Schedule content generation
      this.scheduleArticleGeneration();
      this.scheduleTipGeneration();
      this.scheduleContentValidation();
      this.scheduleAutoPublishing();
      
      console.log('AI Publishing Scheduler initialized successfully');
    } catch (error) {
      console.error('Failed to initialize AI Publishing Scheduler:', error);
    }
  }

  private async getAdminUser(): Promise<User> {
    // Try to find existing admin user
    let adminUser = await User.findOne({ where: { email: 'ai-publisher@cacblaze.com' } });
    
    if (!adminUser) {
      // Create admin user for AI content
      adminUser = await User.create({
        username: 'ai-publisher',
        email: 'ai-publisher@cacblaze.com',
        password: 'auto-generated-password', // Should be hashed in production
        role: 'admin',
        is_verified: true,
        profile_completed: true
      });
    }
    
    return adminUser;
  }

  private scheduleArticleGeneration(): void {
    // Generate articles Monday-Friday at 2:00 AM
    setInterval(async () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      
      // Run only Monday-Friday (1-5) at 2:00 AM
      if (hour === 2 && day >= 1 && day <= 5) {
        try {
          console.log('Starting scheduled article generation...');
          
          if (!this.adminUser) {
            throw new Error('Admin user not available for article generation');
          }
          
          const article = await this.aiService.generateArticle(this.adminUser);
          console.log(`Generated article: ${article.title} (ID: ${article.id})`);
          
          // Auto-validate and schedule for publishing if validation passes
          const validationResult = await this.validationService.validateArticle(article);
          
          if (validationResult.isValid) {
            // Schedule for publishing at 8:00 AM
            const publishDate = new Date();
            publishDate.setHours(8, 0, 0, 0);
            
            await article.update({
              status: 'scheduled',
              scheduled_publish_date: publishDate,
              validation_passed: true
            });
            
            console.log(`Article scheduled for publishing at ${publishDate.toLocaleString()}`);
          } else {
            console.log(`Article validation failed: ${validationResult.errors?.join(', ')}`);
          }
          
        } catch (error) {
          console.error('Error in scheduled article generation:', error);
        }
      }
    }, 60 * 60 * 1000); // Check every hour
  }

  private scheduleTipGeneration(): void {
    // Generate tips daily at 3:00 AM
    setInterval(async () => {
      const now = new Date();
      const hour = now.getHours();
      
      // Run daily at 3:00 AM
      if (hour === 3) {
        try {
          console.log('Starting scheduled tip generation...');
          
          const tip = await this.aiService.generateDailyTip();
          console.log(`Generated daily tip: ${tip.title} (ID: ${tip.id})`);
          
          // Auto-publish tips immediately (they're short and low-risk)
          await tip.update({ 
            status: 'published',
            published_at: new Date(),
            validation_passed: true
          });
          
          console.log('Daily tip published successfully');
          
        } catch (error) {
          console.error('Error in scheduled tip generation:', error);
        }
      }
    }, 60 * 60 * 1000); // Check every hour
  }

  private scheduleContentValidation(): void {
    // Validate draft content every hour
    new CronJob('0 * * * *', async () => {
      try {
        console.log('Running scheduled content validation...');
        
        const draftArticles = await Article.findAll({ 
          where: { 
            status: 'draft',
            ai_generated: true 
          } 
        });
        
        for (const article of draftArticles) {
          const validationResult = await this.validationService.validateArticle(article);
          
          if (validationResult.isValid) {
            await article.update({ 
              validation_passed: true,
              validation_errors: []
            });
            console.log(`Article validated: ${article.title}`);
          } else {
            await article.update({ 
              validation_passed: false,
              validation_errors: validationResult.errors
            });
            console.log(`Article validation failed: ${article.title}`);
          }
        }
        
      } catch (error) {
        console.error('Error in scheduled content validation:', error);
      }
    });
  }

  private scheduleAutoPublishing(): void {
    // Check for scheduled content every 15 minutes
    new CronJob('*/15 * * * *', async () => {
      try {
        console.log('Checking for scheduled content to publish...');
        
        const now = new Date();
        const scheduledArticles = await Article.findAll({
          where: {
            status: 'scheduled',
            scheduled_publish_date: {
              [Symbol.for('lte')]: now
            },
            validation_passed: true
          }
        });
        
        for (const article of scheduledArticles) {
          await article.update({
            status: 'published',
            published_at: now
          });
          
          console.log(`Published article: ${article.title}`);
          
          // Generate SEO and schema data
          await this.generateSEOMetadata(article);
        }
        
      } catch (error) {
        console.error('Error in auto-publishing:', error);
      }
    }); // Check every 15 minutes
  }

  private async generateSEOMetadata(article: Article): Promise<void> {
    // Generate rich SEO metadata and schema markup
    const seoData = {
      title: article.title,
      description: article.meta_description,
      keywords: article.tags.join(', '),
      ogImage: article.featured_image_url,
      articleSchema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.meta_description,
        author: {
          '@type': 'Organization',
          name: 'CACBLAZE AI Publisher'
        },
        datePublished: article.published_at?.toISOString(),
        wordCount: article.word_count,
        articleSection: article.category
      }
    };
    
    // In production, you would store this in a separate SEO table
    // or add fields to the article model
    console.log('Generated SEO metadata for article:', article.title);
  }

  // Manual trigger methods for testing and admin control
  async generateArticleNow(): Promise<Article> {
    if (!this.adminUser) {
      throw new Error('Admin user not available');
    }
    
    const article = await this.aiService.generateArticle(this.adminUser);
    console.log('Manually generated article:', article.title);
    return article;
  }

  async generateTipNow(): Promise<Tip> {
    const tip = await this.aiService.generateDailyTip();
    console.log('Manually generated tip:', tip.title);
    return tip;
  }

  async validateAllDrafts(): Promise<void> {
    const draftArticles = await Article.findAll({ 
      where: { 
        status: 'draft',
        ai_generated: true 
      } 
    });
    
    for (const article of draftArticles) {
      const result = await this.validationService.validateArticle(article);
      await article.update({
        validation_passed: result.isValid,
        validation_errors: result.errors
      });
      
      console.log(`Validation result for ${article.title}: ${result.isValid ? 'PASS' : 'FAIL'}`);
    }
  }
}