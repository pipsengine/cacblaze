import express from 'express';
import { Op } from 'sequelize';
import { AIContentService } from './AIContentService';
import { ContentValidationService } from './ContentValidationService';
import { Article } from '../articles/Article';
import { Tip } from '../tips/Tip';
import User from '../users/User';

const router = express.Router();
const aiService = new AIContentService();
const validationService = new ContentValidationService();
const DAY_MS = 24 * 60 * 60 * 1000;

const getWeekStart = (input = new Date()) => {
  const weekStart = new Date(input);
  const mondayOffset = (weekStart.getDay() + 6) % 7;
  weekStart.setDate(weekStart.getDate() - mondayOffset);
  weekStart.setHours(0, 0, 0, 0);
  return weekStart;
};

const scoreArticleForFeed = (article: any, sortMode: 'popular' | 'recent' | 'trending') => {
  const publishedAt = article.published_at ? new Date(article.published_at) : new Date(0);
  const ageInDays = Math.max(0, (Date.now() - publishedAt.getTime()) / DAY_MS);
  const freshnessScore = Math.max(0, 30 - ageInDays);
  const readabilityScore = Number(article.readability_score || 8.5);
  const wordCount = Number(article.word_count || 1800);

  if (sortMode === 'recent') {
    return publishedAt.getTime();
  }

  if (sortMode === 'trending') {
    return freshnessScore * 10 + readabilityScore * 25 + Math.min(wordCount, 3200) / 45;
  }

  return readabilityScore * 30 + Math.min(wordCount, 3200) / 40 + freshnessScore * 6;
};

const selectWeeklyFeaturedArticles = (
  articles: any[],
  limit: number,
  sortMode: 'popular' | 'recent' | 'trending'
) => {
  if (articles.length <= limit) {
    return articles;
  }

  const ranked = [...articles].sort(
    (a, b) => scoreArticleForFeed(b, sortMode) - scoreArticleForFeed(a, sortMode)
  );

  if (sortMode === 'recent') {
    return ranked.slice(0, limit);
  }

  const weekSeed = Math.floor(getWeekStart().getTime() / (7 * DAY_MS));
  const rotationOffset = sortMode === 'trending' ? 2 : 0;
  const startIndex = (weekSeed + rotationOffset) % ranked.length;
  const selected: any[] = [];
  const seenCategories = new Set<string>();

  for (let offset = 0; offset < ranked.length && selected.length < limit; offset += 1) {
    const candidate = ranked[(startIndex + offset) % ranked.length];
    const category = String(candidate.category || 'General');

    if (!seenCategories.has(category)) {
      selected.push(candidate);
      seenCategories.add(category);
    }
  }

  for (const candidate of ranked) {
    if (selected.length >= limit) {
      break;
    }

    if (!selected.includes(candidate)) {
      selected.push(candidate);
    }
  }

  return selected.slice(0, limit);
};

// Get AI publishing statistics
router.get('/stats', async (req, res) => {
  try {
    const [articleCount, tipCount, publishedCount, draftCount] = await Promise.all([
      Article.count({ where: { ai_generated: true } }),
      Tip.count({ where: { ai_generated: true } }),
      Article.count({ 
        where: { 
          ai_generated: true, 
          status: 'published' 
        } 
      }),
      Article.count({ 
        where: { 
          ai_generated: true, 
          status: 'draft' 
        } 
      })
    ]);

    const publishedArticles = await Article.findAll({
      where: { ai_generated: true, status: 'published' },
      attributes: ['id', 'category', 'word_count'],
      order: [['published_at', 'DESC']],
      limit: 50,
    });

    const averageWordCount =
      publishedArticles.length > 0
        ? Math.round(
            publishedArticles.reduce((sum, article) => sum + (article.word_count || 0), 0) /
              publishedArticles.length
          )
        : 0;

    const categoryBreakdown = publishedArticles.reduce<Record<string, number>>((acc, article) => {
      acc[article.category] = (acc[article.category] || 0) + 1;
      return acc;
    }, {});

    res.json({
      total_articles: articleCount,
      total_tips: tipCount,
      published_articles: publishedCount,
      draft_articles: draftCount,
      success_rate: publishedCount / articleCount || 0,
      average_word_count: averageWordCount,
      minimum_target_word_count: 2000,
      category_breakdown: categoryBreakdown,
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch publishing statistics',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Generate a new article
router.post('/generate/article', async (req, res) => {
  try {
    const { category, type, geo_focus, autoPublish } = req.body || {};
    const adminUser =
      (await User.findOne({ where: { email: 'ai-publisher@cacblaze.com' } })) ||
      (await User.findOne({ where: { role: 'admin' } }));

    if (!adminUser) {
      return res.status(404).json({
        error: 'AI publisher user not found',
      });
    }

    const article = await aiService.generateArticle(adminUser, {
      category,
      type,
      geo_focus,
      status: 'draft',
    });

    const validationResult = await validationService.validateArticle(article);
    await article.update({
      validation_passed: validationResult.isValid,
      validation_errors: validationResult.errors || [],
      ...(Boolean(autoPublish) && validationResult.isValid
        ? { status: 'published', published_at: new Date() }
        : { status: 'draft' }),
    });

    res.json({
      message: Boolean(autoPublish) && validationResult.isValid
        ? 'Article generated, reviewed, approved, and published successfully'
        : 'Article generated and reviewed successfully',
      article: {
        id: article.id,
        title: article.title,
        status: article.status,
        word_count: article.word_count,
        readability_score: article.readability_score,
        category: article.category,
        slug: article.slug,
      },
      review: validationResult,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to generate article',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Generate a daily tip
router.post('/generate/tip', async (req, res) => {
  try {
    const tip = await aiService.generateDailyTip();
    
    res.json({
      message: 'Daily tip generated successfully',
      tip: {
        id: tip.id,
        title: tip.title,
        status: tip.status,
        word_count: tip.word_count
      }
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to generate daily tip',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Validate specific content
router.post('/validate/:type/:id', async (req, res) => {
  try {
    const { type, id } = req.params;

    if (type === 'article') {
      const article = await Article.findByPk(id);
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      const result = await validationService.validateArticle(article);
      
      // Update validation status
      await article.update({
        validation_passed: result.isValid,
        validation_errors: result.errors
      });

      res.json(result);
    } else if (type === 'tip') {
      const tip = await Tip.findByPk(id);
      if (!tip) {
        return res.status(404).json({ error: 'Tip not found' });
      }

      const result = await validationService.validateTip(tip);
      
      // Update validation status
      await tip.update({
        validation_passed: result.isValid,
        validation_errors: result.errors
      });

      res.json(result);
    } else {
      res.status(400).json({ error: 'Invalid content type' });
    }
  } catch (error) {
    res.status(500).json({ 
      error: 'Validation failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Bulk validate all drafts
router.post('/validate-all', async (req, res) => {
  try {
    const [draftArticles, draftTips] = await Promise.all([
      Article.findAll({ 
        where: { 
          ai_generated: true, 
          status: 'draft' 
        } 
      }),
      Tip.findAll({ 
        where: { 
          ai_generated: true, 
          status: 'draft' 
        } 
      })
    ]);

    const articleResults = await validationService.validateMultipleArticles(draftArticles);
    const tipResults = await validationService.validateMultipleTips(draftTips);

    // Update all articles and tips with validation results
    await Promise.all([
      ...Array.from(articleResults.entries()).map(async ([id, result]) => {
        const article = draftArticles.find(a => a.id === id);
        if (article) {
          await article.update({
            validation_passed: result.isValid,
            validation_errors: result.errors
          });
        }
      }),
      ...Array.from(tipResults.entries()).map(async ([id, result]) => {
        const tip = draftTips.find(t => t.id === id);
        if (tip) {
          await tip.update({
            validation_passed: result.isValid,
            validation_errors: result.errors
          });
        }
      })
    ]);

    res.json({
      articles_validated: draftArticles.length,
      tips_validated: draftTips.length,
      article_results: Object.fromEntries(articleResults),
      tip_results: Object.fromEntries(tipResults)
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Bulk validation failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get published tips for display
router.get('/tips/published', async (req, res) => {
  try {
    const { limit = 7 } = req.query;
    
    const tips = await Tip.findAll({
      where: { 
        status: 'published',
        ai_generated: true 
      },
      order: [['published_at', 'DESC']],
      limit: parseInt(limit as string),
      attributes: [
        'id',
        'title', 
        'content',
        'category',
        'published_at',
        'featured_image',
        'image_alt'
      ]
    });
    
    res.json({
      tips,
      count: tips.length
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch published tips',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get validation report
router.get('/validation-report', async (req, res) => {
  try {
    const [articles, tips] = await Promise.all([
      Article.findAll({ where: { ai_generated: true } }),
      Tip.findAll({ where: { ai_generated: true } })
    ]);

    const report = {
      total_content: articles.length + tips.length,
      validation_stats: {
        articles: {
          total: articles.length,
          passed: articles.filter(a => a.validation_passed).length,
          failed: articles.filter(a => !a.validation_passed).length
        },
        tips: {
          total: tips.length,
          passed: tips.filter(t => t.validation_passed).length,
          failed: tips.filter(t => !t.validation_passed).length
        }
      },
      common_errors: []
    };

    res.json(report);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to generate validation report',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Manual publishing
router.post('/publish/:type/:id', async (req, res) => {
  try {
    const { type, id } = req.params;

    if (type === 'article') {
      const article = await Article.findByPk(id);
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      // Validate before publishing
      const validationResult = await validationService.validateArticle(article);
      
      if (!validationResult.isValid) {
        return res.status(400).json({
          error: 'Article validation failed',
          details: validationResult.errors
        });
      }

      await article.update({
        status: 'published',
        published_at: new Date(),
        validation_passed: true
      });

      res.json({ 
        message: 'Article published successfully',
        article: {
          id: article.id,
          title: article.title,
          published_at: article.published_at
        }
      });
    } else if (type === 'tip') {
      const tip = await Tip.findByPk(id);
      if (!tip) {
        return res.status(404).json({ error: 'Tip not found' });
      }

      await tip.update({
        status: 'published',
        published_at: new Date()
      });

      res.json({ 
        message: 'Tip published successfully',
        tip: {
          id: tip.id,
          title: tip.title,
          published_at: tip.published_at
        }
      });
    } else {
      res.status(400).json({ error: 'Invalid content type' });
    }
  } catch (error) {
    res.status(500).json({ 
      error: 'Publishing failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Quick validation endpoint for UI
router.post('/quick-validate', async (req, res) => {
  try {
    const { content, type } = req.body;

    if (!content || !type) {
      return res.status(400).json({ 
        error: 'Content and type are required' 
      });
    }

    if (type !== 'article' && type !== 'tip') {
      return res.status(400).json({ 
        error: 'Type must be "article" or "tip"' 
      });
    }

    const result = await validationService.quickValidate(content, type);
    res.json(result);
  } catch (error) {
    res.status(500).json({ 
      error: 'Quick validation failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get scheduler status
router.get('/scheduler/status', async (_req, res) => {
  try {
    const weeklyArticleTarget = Math.max(1, Math.min(Number(process.env.AI_WEEKLY_ARTICLE_TARGET || 7), 7));
    const weeklyTipTarget = Math.max(1, Math.min(Number(process.env.AI_WEEKLY_TIP_TARGET || 7), 7));

    res.json({
      status: 'active',
      automation_enabled: process.env.AI_AUTOMATION_ENABLED !== 'false',
      approval_mode: 'automatic',
      review_flow: 'self-edit → self-review → validate → publish',
      supported_categories: aiService.getSupportedCategories(),
      category_profiles: aiService.getCategoryProfiles(),
      next_article_generation: 'Daily scheduled rotation',
      next_tip_generation: 'Daily scheduled rotation',
      next_validation: 'Hourly',
      next_publishing: 'Immediate after successful validation',
      minimum_target_word_count: 2000,
      weekly_article_target: weeklyArticleTarget,
      weekly_tip_target: weeklyTipTarget,
      total_weekly_publish_events: weeklyArticleTarget + weeklyTipTarget,
      recommended_cadence: '1 long-form article daily and 1 tip daily',
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to get scheduler status',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

router.post('/generate/batch', async (req, res) => {
  try {
    const { categories, articlesPerCategory, autoPublish, geo_focus } = req.body || {};
    const adminUser =
      (await User.findOne({ where: { email: 'ai-publisher@cacblaze.com' } })) ||
      (await User.findOne({ where: { role: 'admin' } }));

    if (!adminUser) {
      return res.status(404).json({ error: 'AI publisher user not found' });
    }

    const articles = await aiService.generateArticlesBatch(adminUser, {
      categories,
      articlesPerCategory,
      status: 'draft',
      geo_focus,
    });

    for (const article of articles) {
      const validationResult = await validationService.validateArticle(article);
      await article.update({
        validation_passed: validationResult.isValid,
        validation_errors: validationResult.errors || [],
        ...(Boolean(autoPublish) && validationResult.isValid
          ? { status: 'published', published_at: new Date() }
          : { status: 'draft' }),
      });
    }

    res.json({
      message: 'Batch generation completed successfully',
      count: articles.length,
      articles: articles.map((article) => ({
        id: article.id,
        title: article.title,
        category: article.category,
        status: article.status,
        slug: article.slug,
      })),
    });
  } catch (error) {
    res.status(500).json({
      error: 'Batch generation failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

router.get('/report/overview', async (_req, res) => {
  try {
    const weeklyArticleTarget = Math.max(1, Math.min(Number(process.env.AI_WEEKLY_ARTICLE_TARGET || 7), 7));
    const weeklyTipTarget = Math.max(1, Math.min(Number(process.env.AI_WEEKLY_TIP_TARGET || 7), 7));
    const now = new Date();
    const mondayOffset = (now.getDay() + 6) % 7;
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - mondayOffset);
    weekStart.setHours(0, 0, 0, 0);

    const [stats, latestArticles, publishedThisWeek, tipsThisWeek] = await Promise.all([
      Promise.all([
        Article.count({ where: { ai_generated: true } }),
        Article.count({ where: { ai_generated: true, status: 'published' } }),
        Article.count({ where: { ai_generated: true, status: 'draft' } }),
      ]),
      Article.findAll({
        where: { ai_generated: true, status: 'published' },
        order: [['published_at', 'DESC']],
        limit: 10,
        attributes: ['id', 'title', 'category', 'status', 'word_count', 'published_at', 'slug'],
      }),
      Article.count({
        where: { ai_generated: true, status: 'published', published_at: { [Op.gte]: weekStart } },
      }),
      Tip.count({
        where: { ai_generated: true, status: 'published', published_at: { [Op.gte]: weekStart } },
      }),
    ]);

    const [totalArticles, publishedArticles, draftArticles] = stats;

    res.json({
      totals: {
        total_articles: totalArticles,
        published_articles: publishedArticles,
        draft_articles: draftArticles,
      },
      automation: {
        approval_mode: 'automatic',
        review_flow: 'self-edit → self-review → validate → publish',
        minimum_target_word_count: 2000,
        weekly_article_target: weeklyArticleTarget,
        weekly_tip_target: weeklyTipTarget,
        total_weekly_publish_events: weeklyArticleTarget + weeklyTipTarget,
      },
      weekly_progress: {
        week_start: weekStart.toISOString(),
        published_articles_this_week: publishedThisWeek,
        published_tips_this_week: tipsThisWeek,
      },
      latest_published: latestArticles,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch publishing overview',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Get published articles
router.get('/articles/published', async (req, res) => {
  try {
    const { limit = 5, offset = 0, category, type, featured, sort } = req.query;
    const parsedLimit = Math.min(parseInt(limit as string, 10) || 5, 20);
    const parsedOffset = parseInt(offset as string, 10) || 0;
    const sortMode = sort === 'recent' || sort === 'trending' ? sort : 'popular';
    const featuredMode = featured === 'true';

    const where: Record<string, unknown> = {
      status: 'published',
      ai_generated: true,
    };

    if (category) {
      where.category = category;
    }

    if (type) {
      where.type = type;
    }

    const fetchLimit = featuredMode ? Math.max(parsedLimit * 4, 24) : parsedLimit;
    const order: any[] = [['published_at', 'DESC'], ['readability_score', 'DESC'], ['word_count', 'DESC']];

    const articles = await Article.findAll({
      where,
      order,
      limit: fetchLimit,
      offset: featuredMode ? 0 : parsedOffset,
      include: [
        {
          association: 'author',
          attributes: ['id', 'username'],
        },
      ],
    });

    const selectedArticles = featuredMode
      ? selectWeeklyFeaturedArticles(articles, parsedLimit, sortMode)
      : articles.slice(0, parsedLimit);

    const totalCount = await Article.count({ where });

    res.json({
      articles: selectedArticles.map((article) => ({
        ...article.toJSON(),
        author: (article as any).author
          ? {
              id: (article as any).author.id,
              name: (article as any).author.username,
            }
          : undefined,
      })),
      total_count: totalCount,
      has_more: featuredMode ? totalCount > selectedArticles.length : parsedOffset + articles.length < totalCount,
      selected_for: {
        featured: featuredMode,
        sort: sortMode,
        week_start: getWeekStart().toISOString(),
      },
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch published articles',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Get article by slug
router.get('/articles/slug/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const article = await Article.findOne({
      where: {
        slug: slug,
        status: 'published'
      },
      include: [{
        association: 'author',
        attributes: ['id', 'username'] // Removed avatar_url as it doesn't exist
      }]
    });
    
    if (!article) {
      return res.status(404).json({ 
        error: 'Article not found' 
      });
    }
    
    res.json(article);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch article',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
