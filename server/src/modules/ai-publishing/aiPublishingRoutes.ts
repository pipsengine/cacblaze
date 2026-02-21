import express from 'express';
import { AIContentService } from './AIContentService';
import { ContentValidationService } from './ContentValidationService';
import { AIPublishingScheduler } from './AIPublishingScheduler';
import { Article } from '../articles/Article';
import { Tip } from '../tips/Tip';
import { User } from '../users/User';

const router = express.Router();
const aiService = new AIContentService();
const validationService = new ContentValidationService();
const scheduler = new AIPublishingScheduler();

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

    res.json({
      total_articles: articleCount,
      total_tips: tipCount,
      published_articles: publishedCount,
      draft_articles: draftCount,
      success_rate: publishedCount / articleCount || 0
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
    const adminUser = await User.findOne({ 
      where: { email: 'ai-publisher@cacblaze.com' } 
    });

    if (!adminUser) {
      return res.status(404).json({ 
        error: 'AI publisher user not found' 
      });
    }

    const article = await aiService.generateArticle(adminUser);
    
    res.json({
      message: 'Article generated successfully',
      article: {
        id: article.id,
        title: article.title,
        status: article.status,
        word_count: article.word_count,
        readability_score: article.readability_score
      }
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to generate article',
      details: error instanceof Error ? error.message : 'Unknown error'
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
      common_errors: this.getCommonErrors([...articles, ...tips])
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
router.get('/scheduler/status', async (req, res) => {
  try {
    // This would normally check the actual scheduler status
    // For now, return basic status
    res.json({
      status: 'active',
      next_article_generation: 'Tomorrow 2:00 AM',
      next_tip_generation: 'Tomorrow 3:00 AM',
      next_validation: 'Next hour',
      next_publishing: 'Next 15 minutes'
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to get scheduler status',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Helper method to get common errors
private getCommonErrors(contentItems: Array<Article | Tip>): string[] {
  const errorCounts: Record<string, number> = {};
  
  contentItems.forEach(item => {
    if (item.validation_errors && item.validation_errors.length > 0) {
      item.validation_errors.forEach(error => {
        errorCounts[error] = (errorCounts[error] || 0) + 1;
      });
    }
  });

  return Object.entries(errorCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([error]) => error);
}

export default router;