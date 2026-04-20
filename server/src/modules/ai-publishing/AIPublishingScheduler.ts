import { AIContentService } from './AIContentService';
import { AIImageIntegrationService } from './AIImageIntegrationService';
import { ContentValidationService } from './ContentValidationService';
import User from '../users/User';
import { Article } from '../articles/Article';
import { Tip } from '../tips/Tip';
import { CronJob } from 'cron';
import { Op } from 'sequelize';

export class AIPublishingScheduler {
  private aiService: AIContentService;
  private validationService: ContentValidationService;
  private adminUser: User | null = null;
  private readonly weeklyArticleTarget = Math.max(
    1,
    Math.min(Number(process.env.AI_WEEKLY_ARTICLE_TARGET || 7), 7)
  );
  private readonly weeklyTipTarget = Math.max(
    1,
    Math.min(Number(process.env.AI_WEEKLY_TIP_TARGET || 7), 7)
  );

  constructor() {
    this.aiService = new AIContentService();
    this.validationService = new ContentValidationService();
    void this.initializeScheduler();
  }

  private async initializeScheduler(): Promise<void> {
    try {
      this.adminUser = await this.getAdminUser();
      await this.ensureContentInventory(
        Number(process.env.AI_MIN_PUBLISHED_ARTICLES || Math.max(this.weeklyArticleTarget * 4, 21))
      );
      await this.refreshLegacyPublishedContent(Number(process.env.AI_MIN_PUBLISHED_WORDS || 2000));
      await this.repairInvalidGeneratedImages();
      await this.ensureWeeklyFreshContent();

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
    const email = process.env.AI_PUBLISHER_EMAIL || 'ai-publisher@cacblaze.com';
    const username = process.env.AI_PUBLISHER_USERNAME || 'ai-publisher';

    let adminUser = await User.findOne({ where: { email } });

    if (!adminUser) {
      adminUser = await User.findOne({ where: { role: 'admin' } });
    }

    if (!adminUser) {
      if (process.env.ALLOW_AI_PUBLISHER_AUTO_CREATE !== 'true') {
        throw new Error('AI publisher user not found');
      }

      const password = process.env.AI_PUBLISHER_PASSWORD;
      if (!password) {
        throw new Error('AI_PUBLISHER_PASSWORD is required when auto-creating the AI publisher user');
      }

      adminUser = await User.create({
        username,
        email,
        password,
        role: 'admin',
      });
    }

    return adminUser;
  }

  async ensureContentInventory(minimumPublished: number = 6): Promise<void> {
    if (!this.adminUser || minimumPublished <= 0) {
      return;
    }

    const publishedCount = await Article.count({
      where: {
        status: 'published',
        ai_generated: true,
      },
    });

    if (publishedCount >= minimumPublished) {
      return;
    }

    const missingCount = minimumPublished - publishedCount;
    const categories = this.aiService.getSupportedCategories();

    for (let index = 0; index < missingCount; index += 1) {
      const category = categories[index % categories.length];
      const article = await this.aiService.generateArticle(this.adminUser, {
        category,
        status: 'draft',
      });

      await this.autoApproveAfterSelfReview(article, 'immediate');
    }

    console.log(`AI inventory warm-up completed with ${missingCount} newly generated articles.`);
  }

  async refreshLegacyPublishedContent(minimumWords: number = 2000): Promise<void> {
    if (!this.adminUser || minimumWords <= 0) {
      return;
    }

    const legacyArticles = await Article.findAll({
      where: {
        ai_generated: true,
        word_count: {
          [Op.lt]: minimumWords,
        },
      },
      order: [['updated_at', 'ASC']],
      limit: 25,
    });

    for (const article of legacyArticles) {
      await this.aiService.refreshArticleContent(article);
      await this.autoApproveAfterSelfReview(article, 'immediate');
    }

    if (legacyArticles.length > 0) {
      console.log(`Refreshed ${legacyArticles.length} legacy AI articles to the new quality standard.`);
    }
  }

  private async repairInvalidGeneratedImages(): Promise<void> {
    const [articles, tips] = await Promise.all([
      Article.findAll({
        where: { ai_generated: true },
        order: [['updated_at', 'DESC']],
        limit: 100,
      }),
      Tip.findAll({
        where: { ai_generated: true },
        order: [['updated_at', 'DESC']],
        limit: 100,
      }),
    ]);

    let repairedArticles = 0;
    for (const article of articles) {
      if (!AIImageIntegrationService.isPlaceholderImage(article.featured_image_url)) {
        continue;
      }

      const image = await AIImageIntegrationService.getImageForContent({
        prompt: `Select a real digital image for ${article.title}`,
        category: article.category,
        title: article.title,
        content: article.content,
        geoFocus: article.geo_focus,
        contentType: 'article',
        keywords: article.tags || [],
      });

      await article.update({
        featured_image_url: image.imageUrl,
        image_alt: image.altText,
      });
      repairedArticles += 1;
    }

    let repairedTips = 0;
    for (const tip of tips) {
      if (!AIImageIntegrationService.isPlaceholderImage(tip.featured_image)) {
        continue;
      }

      const image = await AIImageIntegrationService.getImageForContent({
        prompt: `Select a real digital image for ${tip.title}`,
        category: tip.category,
        title: tip.title,
        content: tip.content,
        geoFocus: 'Nigeria',
        contentType: 'tip',
        keywords: [tip.category.toLowerCase(), 'tip'],
      });

      await tip.update({
        featured_image: image.imageUrl,
        image_alt: image.altText,
      });
      repairedTips += 1;
    }

    if (repairedArticles > 0 || repairedTips > 0) {
      console.log(
        `Repaired ${repairedArticles} article images and ${repairedTips} tip images with real digital assets.`
      );
    }
  }

  private async ensureWeeklyFreshContent(): Promise<void> {
    if (!this.adminUser || this.weeklyArticleTarget <= 0) {
      return;
    }

    const now = new Date();
    const mondayOffset = (now.getDay() + 6) % 7;
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - mondayOffset);
    weekStart.setHours(0, 0, 0, 0);

    const publishedThisWeek = await Article.count({
      where: {
        status: 'published',
        ai_generated: true,
        published_at: {
          [Op.gte]: weekStart,
        },
      },
    });

    const missingThisWeek = this.weeklyArticleTarget - publishedThisWeek;
    if (missingThisWeek <= 0) {
      return;
    }

    const categories = this.aiService.getSupportedCategories();
    for (let index = 0; index < missingThisWeek; index += 1) {
      const category = categories[(mondayOffset + index) % categories.length];
      const article = await this.aiService.generateArticle(this.adminUser, {
        category,
        status: 'draft',
      });

      await this.autoApproveAfterSelfReview(article, 'immediate');
    }

    console.log(`Weekly content catch-up completed with ${missingThisWeek} article(s).`);
  }

  private getDailyCategory(): string {
    const rotation: Record<number, string> = {
      1: 'Technology',
      2: 'Education',
      3: 'Lifestyle',
      4: 'Local Resources',
      5: 'Business',
      6: 'Finance',
      0: 'Career',
    };

    return rotation[new Date().getDay()] || 'Technology';
  }

  private shouldRunForWeeklyTarget(target: number): boolean {
    const preferredDays = [1, 2, 3, 4, 5, 6, 0];
    if (target >= preferredDays.length) {
      return true;
    }

    return preferredDays.slice(0, target).includes(new Date().getDay());
  }

  private async autoApproveAfterSelfReview(
    article: Article,
    publishMode: 'immediate' | 'scheduled' = 'immediate'
  ): Promise<boolean> {
    const validationResult = await this.validationService.validateArticle(article);

    if (!validationResult.isValid) {
      await article.update({
        status: 'draft',
        validation_passed: false,
        validation_errors: validationResult.errors || [],
      });
      return false;
    }

    if (publishMode === 'scheduled') {
      const publishDate = new Date();
      publishDate.setMinutes(publishDate.getMinutes() + 15, 0, 0);

      await article.update({
        status: 'scheduled',
        scheduled_publish_date: publishDate,
        validation_passed: true,
        validation_errors: [],
      });
      return true;
    }

    await article.update({
      status: 'published',
      published_at: new Date(),
      validation_passed: true,
      validation_errors: [],
    });

    await this.generateSEOMetadata(article);
    return true;
  }

  private scheduleArticleGeneration(): void {
    const job = new CronJob('0 2 * * *', async () => {
      try {
        if (!this.shouldRunForWeeklyTarget(this.weeklyArticleTarget)) {
          return;
        }

        if (!this.adminUser) {
          throw new Error('Admin user not available for article generation');
        }

        const article = await this.aiService.generateArticle(this.adminUser, {
          category: this.getDailyCategory(),
          status: 'draft',
        });

        const approved = await this.autoApproveAfterSelfReview(article, 'immediate');
        console.log(
          approved
            ? `Article auto-approved and published: ${article.title}`
            : `Article sent back to draft after self-review: ${article.title}`
        );
      } catch (error) {
        console.error('Error in scheduled article generation:', error);
      }
    });

    job.start();
  }

  private scheduleTipGeneration(): void {
    const job = new CronJob('0 3 * * *', async () => {
      try {
        if (!this.shouldRunForWeeklyTarget(this.weeklyTipTarget)) {
          return;
        }

        const tip = await this.aiService.generateDailyTip(this.getDailyCategory());
        await tip.update({
          status: 'published',
          published_at: new Date(),
          validation_passed: true,
          validation_errors: [],
        });

        console.log(`Daily tip published successfully: ${tip.title}`);
      } catch (error) {
        console.error('Error in scheduled tip generation:', error);
      }
    });

    job.start();
  }

  private scheduleContentValidation(): void {
    const job = new CronJob('0 * * * *', async () => {
      try {
        const draftArticles = await Article.findAll({
          where: {
            status: 'draft',
            ai_generated: true,
          },
        });

        for (const article of draftArticles) {
          await this.autoApproveAfterSelfReview(article, 'immediate');
        }
      } catch (error) {
        console.error('Error in scheduled content validation:', error);
      }
    });

    job.start();
  }

  private scheduleAutoPublishing(): void {
    const job = new CronJob('*/15 * * * *', async () => {
      try {
        const now = new Date();
        const scheduledArticles = await Article.findAll({
          where: {
            status: 'scheduled',
            scheduled_publish_date: {
              [Op.lte]: now,
            },
            validation_passed: true,
          },
        });

        for (const article of scheduledArticles) {
          await article.update({
            status: 'published',
            published_at: now,
          });

          await this.generateSEOMetadata(article);
        }
      } catch (error) {
        console.error('Error in auto-publishing:', error);
      }
    });

    job.start();
  }

  private async generateSEOMetadata(article: Article): Promise<void> {
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
          name: 'CACBLAZE AI Publisher',
        },
        datePublished: article.published_at?.toISOString(),
        wordCount: article.word_count,
        articleSection: article.category,
      },
    };

    console.log('Generated SEO metadata for article:', seoData.title);
  }

  async generateArticleNow(category?: string): Promise<Article> {
    if (!this.adminUser) {
      throw new Error('Admin user not available');
    }

    const article = await this.aiService.generateArticle(this.adminUser, {
      category,
      status: 'draft',
    });

    await this.autoApproveAfterSelfReview(article, 'immediate');
    return article;
  }

  async generateTipNow(category?: string): Promise<Tip> {
    return this.aiService.generateDailyTip(category);
  }

  async validateAllDrafts(): Promise<void> {
    const draftArticles = await Article.findAll({
      where: {
        status: 'draft',
        ai_generated: true,
      },
    });

    for (const article of draftArticles) {
      await this.autoApproveAfterSelfReview(article, 'immediate');
    }
  }
}
