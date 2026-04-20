import { Article, ArticleCreationAttributes } from '../articles/Article';
import { Tip, TipCreationAttributes } from '../tips/Tip';
import User from '../users/User';
import { AIImageIntegrationService, AIImageRequest } from './AIImageIntegrationService';

type GeoFocus = 'Nigeria' | 'Africa' | 'Global';
type ContentType = 'Guide' | 'HowTo' | 'Review' | 'Education' | 'Technology' | 'Lifestyle';
type PublishStatus = 'draft' | 'published' | 'scheduled';

interface Topic {
  title: string;
  category: string;
  type: ContentType;
  geo_focus: GeoFocus;
  tags: string[];
  audience: string;
  intent: string;
}

interface CategoryBlueprint {
  category: string;
  type: ContentType;
  geo_focus: GeoFocus;
  audience: string;
  intent: string;
  tags: string[];
  titles: string[];
}

export interface GenerateArticleOptions {
  category?: string;
  type?: ContentType;
  geo_focus?: GeoFocus;
  title?: string;
  tags?: string[];
  status?: PublishStatus;
  autoPublish?: boolean;
  scheduledPublishDate?: Date;
}

export interface BatchGenerationOptions {
  categories?: string[];
  articlesPerCategory?: number;
  autoPublish?: boolean;
  status?: PublishStatus;
  geo_focus?: GeoFocus;
}

const CATEGORY_BLUEPRINTS: CategoryBlueprint[] = [
  {
    category: 'Technology',
    type: 'Technology',
    geo_focus: 'Nigeria',
    audience: 'students, professionals, founders, and everyday digital users',
    intent: 'make modern technology easier to understand and apply',
    tags: ['technology', 'digital skills', 'gadgets', 'software', 'nigeria'],
    titles: [
      'Practical AI Tools That Help Small Teams Work Faster',
      'How to Choose the Best Laptop for Work and Study in Nigeria',
      'Understanding Cybersecurity Basics for Everyday Internet Users',
      'Smartphone Buying Guide for Students and Young Professionals',
      'How to Build Better Digital Habits Without Feeling Overwhelmed',
    ],
  },
  {
    category: 'Education',
    type: 'Education',
    geo_focus: 'Nigeria',
    audience: 'students, parents, teachers, and lifelong learners',
    intent: 'turn learning goals into practical study systems and better outcomes',
    tags: ['education', 'learning', 'students', 'study skills', 'nigeria'],
    titles: [
      'Study Techniques That Improve Focus and Memory Retention',
      'How to Create a Realistic Exam Preparation Plan That Works',
      'Choosing the Right Learning Resources for Independent Study',
      'How Parents Can Better Support Daily Learning at Home',
      'Digital Tools That Make Learning More Organized and Effective',
    ],
  },
  {
    category: 'Lifestyle',
    type: 'Lifestyle',
    geo_focus: 'Nigeria',
    audience: 'busy adults, families, and readers seeking healthier routines',
    intent: 'support balanced living with practical, everyday choices',
    tags: ['lifestyle', 'wellness', 'productivity', 'daily living', 'healthy habits'],
    titles: [
      'Simple Daily Habits That Improve Energy and Consistency',
      'How to Build a Healthier Morning Routine for Busy Weeks',
      'Practical Time Management Tips for Work, Family, and Personal Goals',
      'Stress Reduction Strategies That Fit into Real Life',
      'Creating Better Home Routines for Long-Term Stability',
    ],
  },
  {
    category: 'Local Resources',
    type: 'Guide',
    geo_focus: 'Nigeria',
    audience: 'residents, visitors, and people navigating local services',
    intent: 'help readers discover reliable places, services, and city guidance',
    tags: ['local resources', 'nigeria', 'city guides', 'services', 'community'],
    titles: [
      'How to Find Reliable Local Services in Fast-Growing Cities',
      'A Practical Guide to Exploring City Resources More Confidently',
      'What to Check Before Choosing a Local Vendor or Service Provider',
      'How to Plan Better Around Housing, Transport, and Daily Essentials',
      'Smart Ways to Discover Useful Community Resources Near You',
    ],
  },
  {
    category: 'Business',
    type: 'Guide',
    geo_focus: 'Nigeria',
    audience: 'entrepreneurs, operators, and aspiring founders',
    intent: 'make business decisions clearer, leaner, and more sustainable',
    tags: ['business', 'entrepreneurship', 'operations', 'growth', 'strategy'],
    titles: [
      'How to Start a Small Business with Better Planning and Lower Risk',
      'Business Systems Every Growing Team Should Put in Place Early',
      'How to Improve Customer Trust Through Clear Service Delivery',
      'Practical Budgeting Habits for Small and Medium Businesses',
      'How to Organize Business Operations for Steadier Growth',
    ],
  },
  {
    category: 'Finance',
    type: 'Review',
    geo_focus: 'Nigeria',
    audience: 'workers, freelancers, and households managing money carefully',
    intent: 'help readers compare money tools and make more informed choices',
    tags: ['finance', 'budgeting', 'fintech', 'money management', 'personal finance'],
    titles: [
      'Comparing Digital Budgeting Methods for Better Monthly Control',
      'How to Build an Emergency Fund Without Disrupting Daily Needs',
      'A Practical Review Framework for Choosing Finance Apps',
      'Simple Money Habits That Improve Financial Stability Over Time',
      'What to Look for Before Using a New Digital Payment Tool',
    ],
  },
  {
    category: 'Career',
    type: 'HowTo',
    geo_focus: 'Africa',
    audience: 'job seekers, early professionals, and career changers',
    intent: 'turn career growth into a structured and repeatable process',
    tags: ['career', 'jobs', 'professional growth', 'skills', 'remote work'],
    titles: [
      'How to Prepare for Job Opportunities with a Stronger Personal Profile',
      'Building In-Demand Skills for the Modern Digital Workplace',
      'How to Organize a Better Job Search Without Burning Out',
      'Practical Steps for Freelancers Who Want More Stable Work',
      'How to Communicate Your Value More Clearly in Applications and Interviews',
    ],
  },
];

export class AIContentService {
  private imageService: AIImageIntegrationService;
  private topicCursor = 0;

  constructor() {
    this.imageService = new AIImageIntegrationService();
  }

  getSupportedCategories(): string[] {
    return CATEGORY_BLUEPRINTS.map((blueprint) => blueprint.category);
  }

  getCategoryProfiles() {
    return CATEGORY_BLUEPRINTS.map(({ category, type, geo_focus, audience, intent }) => ({
      category,
      type,
      geo_focus,
      audience,
      intent,
    }));
  }

  private getTopicPool(): Topic[] {
    return CATEGORY_BLUEPRINTS.flatMap((blueprint) =>
      blueprint.titles.map((title) => ({
        title,
        category: blueprint.category,
        type: blueprint.type,
        geo_focus: blueprint.geo_focus,
        tags: blueprint.tags,
        audience: blueprint.audience,
        intent: blueprint.intent,
      }))
    );
  }

  private normalizeCategory(category?: string): string | undefined {
    return category?.trim().toLowerCase();
  }

  private selectTopic(options: GenerateArticleOptions = {}): Topic {
    const normalizedCategory = this.normalizeCategory(options.category);
    const allTopics = this.getTopicPool();

    let pool = allTopics.filter((topic) => {
      const categoryMatches = normalizedCategory
        ? topic.category.toLowerCase() === normalizedCategory
        : true;
      const typeMatches = options.type ? topic.type === options.type : true;
      const geoMatches = options.geo_focus ? topic.geo_focus === options.geo_focus : true;
      return categoryMatches && typeMatches && geoMatches;
    });

    if (pool.length === 0) {
      pool = allTopics;
    }

    const weeklySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
    const rotatingIndex = (weeklySeed + this.topicCursor) % pool.length;
    this.topicCursor = (this.topicCursor + 1) % Math.max(pool.length, 1);
    const selected = pool[rotatingIndex];

    return {
      ...selected,
      title: options.title || selected.title,
      type: options.type || selected.type,
      geo_focus: options.geo_focus || selected.geo_focus,
      tags: Array.from(new Set([...(selected.tags || []), ...(options.tags || [])])),
    };
  }

  private getContentTypeByDay(category?: string): ContentType {
    if (category) {
      const match = CATEGORY_BLUEPRINTS.find(
        (blueprint) => blueprint.category.toLowerCase() === category.toLowerCase()
      );
      if (match) return match.type;
    }

    const day = new Date().getDay();
    switch (day) {
      case 1:
        return 'Guide';
      case 2:
        return 'HowTo';
      case 3:
        return 'Review';
      case 4:
        return 'Education';
      case 5:
        return 'Technology';
      default:
        return 'Lifestyle';
    }
  }

  private buildMetaDescription(topic: Topic, contentType: ContentType): string {
    const description = `Explore ${topic.title.toLowerCase()} with practical ${contentType.toLowerCase()} advice, clear steps, and ${topic.geo_focus.toLowerCase()} context.`;
    return description.length > 160 ? `${description.slice(0, 157).trim()}...` : description;
  }

  private buildRichArticleContent(topic: Topic, contentType: ContentType): string {
    const lowerTitle = topic.title.toLowerCase();
    const focusRegion =
      topic.geo_focus === 'Nigeria'
        ? 'Nigerian readers and fast-changing local realities'
        : topic.geo_focus === 'Africa'
          ? 'African markets and regional opportunities'
          : 'global best practices that still feel practical';

    return `# ${topic.title}

## Introduction
${topic.title} is no longer a niche topic for a few specialists. It is now part of how people plan, work, study, compare options, and make better everyday decisions. This ${contentType.toLowerCase()} was created for ${topic.audience}, with a strong focus on helping readers move from confusion to confident action. Instead of relying on vague advice, this article breaks ${lowerTitle} into clear ideas, practical checkpoints, and useful next steps.

On CACBLAZE, every strong piece of content should do more than explain a concept. It should help a real person make a better choice. That is why this article emphasizes structure, clarity, and the kind of detail that supports real-world decision making. Whether you are just getting started or trying to improve an existing approach, the goal is to help you understand what matters, what to avoid, and what to do next.

## Why This Topic Matters
There are several reasons ${lowerTitle} deserves serious attention right now. First, people are making more decisions in faster, more demanding environments. Second, tools and platforms are changing rapidly, which means older advice becomes less useful over time. Third, readers increasingly need resources that are not only searchable, but actually dependable once they are found. In that context, ${topic.intent}, especially for ${focusRegion}.

A good guide does not just tell people what is trending. It tells them what is useful, what is sustainable, and what fits their real conditions. That is particularly important in places where time, money, infrastructure, and trust all shape the final decision. Strong content should make complexity feel manageable, not heavier.

## Quick Takeaways
- Start with a clear goal before choosing tools, methods, or platforms.
- Focus on dependable systems rather than one-time shortcuts.
- Compare options using usefulness, cost, trust, and long-term fit.
- Review results regularly so your decisions improve over time.
- Keep your process simple enough to maintain consistently.

## A Practical Framework You Can Use
### 1. Define the real outcome
Before you invest time or money, decide what success actually looks like. Do you want better organization, improved productivity, clearer learning outcomes, stronger business results, or more reliable day-to-day systems? Many people struggle because they chase trends before defining the outcome they really care about. A clear outcome helps you filter noise and focus on what is relevant.

### 2. Assess your current situation honestly
Every effective improvement starts with a realistic baseline. Look at the tools you already use, the habits you already follow, the bottlenecks you repeatedly face, and the decisions that keep slowing you down. This is where practical self-review matters. If a process is too expensive, too complicated, or too inconsistent to maintain, it is not yet a strong system.

### 3. Choose the most practical next step
The best next step is usually not the most advanced one. It is the one you can sustain. In many cases, a simpler, well-structured approach beats a more sophisticated system that never gets used consistently. This is why strong editorial content should not glorify complexity. It should guide readers toward the right level of action for where they currently are.

### 4. Build a repeatable routine
What turns information into results is repetition. Whether the subject is learning, productivity, local discovery, budgeting, or digital tools, the most effective improvements come from systems you can repeat. Build a short routine that includes planning, execution, review, and adjustment. Over time, this creates better outcomes without constant guesswork.

### 5. Review, refine, and scale
Once something begins working, do not stop at basic success. Review what is helping most, what remains difficult, and where small changes can create better results. Sustainable progress comes from measured refinement, not from constantly starting over.

## Common Mistakes Readers Should Avoid
One common mistake is rushing into decisions without enough context. People often choose tools, services, or strategies because they appear popular, not because they fit their needs. Another mistake is expecting instant transformation from a single tactic. Good systems usually improve over time as people learn what works for them. A third mistake is ignoring clarity. If a method is too confusing to explain, it will be hard to maintain.

Another major issue is failing to check the practical side of a decision. For example, something may look attractive on paper but be harder to access, more expensive to maintain, or less suited to local conditions than expected. This is where structured review makes a difference. Readers benefit most when content shows both strengths and trade-offs honestly.

## Real-World Application in Context
In ${topic.geo_focus}, the best outcomes often come from combining strong fundamentals with local awareness. Readers need advice that respects infrastructure realities, budget constraints, device differences, learning gaps, and the pace of change in their communities. A solution that works perfectly in one environment may still need adaptation before it works well somewhere else. Good content helps readers make that adaptation thoughtfully.

For example, a student may need affordable tools with low data demands, while a small business owner may care more about customer trust, workflow reliability, and ease of training. A family planning daily routines may prioritize consistency and simplicity, while a professional may prioritize speed and flexibility. These differences matter, and content should reflect them.

## Editorial Review Checklist
Before publishing or acting on any article like this, it helps to ask:
- Is the advice clear enough for a non-expert to use?
- Does it explain both benefits and limitations honestly?
- Are the steps practical for real-life schedules and budgets?
- Does it reflect the needs of the intended audience?
- Does it leave the reader with a confident next step?

These questions are not only useful for writers and editors. They are also useful for readers who want to assess whether a guide is genuinely worth following.

## Frequently Asked Questions
### How do I know if this topic is worth prioritizing right now?
If it affects your learning, work quality, personal effectiveness, money decisions, or daily reliability, it is worth prioritizing. Start with the part that creates the biggest day-to-day friction and improve that first.

### Do I need expensive tools or expert-level knowledge to begin?
Usually not. The stronger strategy is to begin with a clear objective, a realistic process, and a small set of dependable tools or methods. Once the basics are working, you can expand with more confidence.

### How long before results become visible?
That depends on your goal, but most readers begin to notice useful change when they apply a good system consistently for several weeks. What matters most is not speed alone, but whether the approach is sustainable and measurable.

### What should I do after reading this guide?
Identify one action you can implement immediately, one habit you should improve this week, and one decision you now feel more prepared to make. Progress becomes much easier when information quickly turns into action.

## Final Thoughts
${topic.title} should not feel overwhelming. With the right structure, better questions, and a more practical decision-making process, readers can make steady progress without unnecessary confusion. That is the real purpose of strong knowledge content: not simply to inform, but to support better action.

As CACBLAZE continues to grow its self-sustaining content engine across categories, articles like this are designed to help readers discover credible guidance, compare options thoughtfully, and make confident choices that hold up in real life.`;
  }

  private selfEditAndExpandContent(content: string, topic: Topic, contentType: ContentType): string {
    let expanded = content;

    if (this.countWords(expanded) < 2200) {
      expanded += `

## In-Depth Decision Criteria
When readers evaluate ${topic.title.toLowerCase()}, they should not focus only on what sounds impressive at first glance. Stronger decisions usually come from a broader review of fit, reliability, cost, effort, and long-term usefulness. Ask whether the approach is realistic for your current stage, whether it solves a real recurring problem, and whether it can still serve you six months from now. The most engaging content is not content that simply promises a breakthrough. It is content that helps people think more clearly and act more confidently.

Another useful principle is to separate wants from operational needs. A person may want the most advanced tool, the fastest result, or the most talked-about option. But in practice, dependable results often come from simpler systems that are easier to sustain. Readers benefit most when content teaches them how to choose well, not just what to choose. That is one of the reasons long-form editorial guidance continues to matter. It builds judgment, not just awareness.

## Practical Scenarios for Different Readers
### For beginners
If you are completely new to this subject, your first goal should be confidence, not perfection. Start with a small and repeatable routine, learn the key terms, and avoid trying to master everything in a single week. New readers often make the mistake of assuming they need advanced tools or expert-level knowledge immediately. In most cases, progress becomes easier once the basics are handled consistently.

### For experienced readers
If you already have some experience, the opportunity is usually optimization. Look at where your current system is leaking time, energy, money, or trust. Review the parts you keep postponing, the tasks that create unnecessary friction, and the habits that no longer match your present goals. More advanced readers do not always need completely new methods; they often need stronger structure and better prioritization.

### For teams and decision makers
If you are applying these ideas in a team, consistency matters more than isolated effort. Processes should be easy to explain, document, and repeat. If only one person understands how the system works, the system is not resilient enough yet. Good content should therefore encourage readers to build workflows that other people can adopt, measure, and improve together.

## A 30-60-90 Day Action Roadmap
### First 30 days
Use the first month to clarify goals, understand your baseline, and remove the biggest sources of confusion. Document what you are trying to improve and identify the one or two changes most likely to make a visible difference. This period is about observation and disciplined simplification, not rushing into complexity.

### Days 31 to 60
The second phase should focus on deliberate execution. Apply the system consistently enough to gather useful feedback. Track what becomes easier, where resistance shows up, and what still creates delays or uncertainty. Many readers discover in this stage that the biggest improvement is not a dramatic shortcut, but a cleaner process followed more consistently.

### Days 61 to 90
In the final phase, refine what works and drop what does not. This is where quality increases because your decisions are based on evidence rather than assumptions. By the end of ninety days, you should have a clearer sense of what deserves long-term commitment, what needs adjustment, and what was never useful enough to keep.

## How to Measure Meaningful Progress
Progress should be visible in ways that matter to the reader's actual goals. For some people, success means saving time or reducing stress. For others, it means better study outcomes, clearer business operations, improved digital decision making, or stronger financial discipline. It helps to track a few meaningful indicators rather than too many random metrics. Useful measurements might include consistency, response time, quality of results, user satisfaction, money saved, or improvement in confidence.

Measurement is valuable because it makes refinement possible. Without feedback, people often continue ineffective routines longer than necessary. With a simple review habit, however, small corrections become easier and outcomes become more reliable. This is one reason long-form content creates engagement: it gives readers a fuller framework for understanding and improvement rather than isolated tips with no context.

## Final Action Plan
To move forward confidently, begin with one clear decision, one repeatable routine, and one review habit. Keep the system practical enough to maintain, detailed enough to trust, and flexible enough to improve over time. If something feels too complex to sustain, simplify it. If something works, document it. If something repeatedly fails, review the assumptions behind it and choose a more realistic next step.

The strongest content systems do not only generate pages. They generate pages that are easier to trust, easier to apply, and easier to return to when readers need clarity. That is the standard CACBLAZE is designed to support across every category.`;
    }

    return expanded;
  }

  private reviewGeneratedContent(content: string): string {
    return content.replace(/\n{3,}/g, '\n\n').trim();
  }

  async generateArticle(adminUser: User, options: GenerateArticleOptions = {}): Promise<Article> {
    const topic = this.selectTopic(options);
    const contentType = options.type || topic.type || this.getContentTypeByDay(topic.category);
    const draftedContent = this.buildRichArticleContent(topic, contentType);
    const selfEditedContent = this.selfEditAndExpandContent(draftedContent, topic, contentType);
    const content = this.reviewGeneratedContent(selfEditedContent);

    const imageRequest: AIImageRequest = {
      prompt: `Generate image for article about ${topic.title}`,
      category: topic.category.toLowerCase(),
      title: topic.title,
      content,
      keywords: topic.tags,
      geoFocus: topic.geo_focus,
      contentType: 'article',
    };

    const imageResponse = await AIImageIntegrationService.getImageForContent(imageRequest);

    const finalStatus: PublishStatus = options.autoPublish
      ? 'published'
      : options.status || 'draft';

    const articleData: ArticleCreationAttributes = {
      author_id: adminUser.id.toString(),
      title: topic.title,
      slug: await this.generateUniqueSlug(topic.title),
      content,
      meta_description: this.buildMetaDescription(topic, contentType),
      category: topic.category,
      tags: topic.tags,
      geo_focus: topic.geo_focus,
      type: contentType,
      status: finalStatus,
      word_count: this.countWords(content),
      readability_score: this.calculateReadability(content),
      ai_generated: true,
      validation_passed: finalStatus === 'published',
      scheduled_publish_date:
        finalStatus === 'scheduled'
          ? options.scheduledPublishDate || this.defaultScheduledPublishDate()
          : undefined,
      published_at: finalStatus === 'published' ? new Date() : undefined,
      featured_image_url: imageResponse.imageUrl,
      image_alt: imageResponse.altText,
    };

    return await Article.create(articleData);
  }

  async refreshArticleContent(article: Article): Promise<Article> {
    const contentType = article.type as ContentType;
    const topic = this.selectTopic({
      title: article.title,
      category: article.category,
      type: contentType,
      geo_focus: article.geo_focus,
      tags: article.tags,
    });

    const draftedContent = this.buildRichArticleContent(topic, contentType);
    const selfEditedContent = this.selfEditAndExpandContent(draftedContent, topic, contentType);
    const content = this.reviewGeneratedContent(selfEditedContent);

    const imageRequest: AIImageRequest = {
      prompt: `Generate image for article about ${topic.title}`,
      category: topic.category.toLowerCase(),
      title: topic.title,
      content,
      keywords: topic.tags,
      geoFocus: topic.geo_focus,
      contentType: 'article',
    };

    const imageResponse = await AIImageIntegrationService.getImageForContent(imageRequest);

    await article.update({
      title: topic.title,
      content,
      meta_description: this.buildMetaDescription(topic, contentType),
      category: topic.category,
      tags: topic.tags,
      geo_focus: topic.geo_focus,
      type: contentType,
      word_count: this.countWords(content),
      readability_score: this.calculateReadability(content),
      featured_image_url: imageResponse.imageUrl,
      image_alt: imageResponse.altText,
      validation_passed: false,
      validation_errors: [],
    });

    return article;
  }

  async generateArticlesBatch(
    adminUser: User,
    options: BatchGenerationOptions = {}
  ): Promise<Article[]> {
    const categories =
      options.categories && options.categories.length > 0
        ? options.categories
        : this.getSupportedCategories();

    const articlesPerCategory = Math.max(1, Math.min(options.articlesPerCategory || 1, 3));
    const created: Article[] = [];

    for (const category of categories) {
      for (let index = 0; index < articlesPerCategory; index += 1) {
        const article = await this.generateArticle(adminUser, {
          category,
          geo_focus: options.geo_focus,
          autoPublish: options.autoPublish,
          status: options.status,
        });
        created.push(article);
      }
    }

    return created;
  }

  async generateDailyTip(category?: string): Promise<Tip> {
    const categories = category
      ? [category]
      : ['Technology', 'Education', 'Lifestyle', 'Finance', 'Career', 'Business'];
    const selected = categories[Math.floor(Date.now() / (1000 * 60 * 60)) % categories.length];

    const content = `**Daily ${selected} Tip:** Pick one small improvement you can apply today, document what worked, and repeat only what proves useful. Stronger systems are built through small, clear actions that can be sustained over time.`;

    const imageRequest: AIImageRequest = {
      prompt: `Generate image for daily tip about ${selected}`,
      category: selected.toLowerCase(),
      title: `Daily ${selected} Tip`,
      content,
      geoFocus: 'Nigeria',
      contentType: 'tip',
    };

    const imageResponse = await AIImageIntegrationService.getImageForContent(imageRequest);

    const tipData: TipCreationAttributes = {
      title: `Daily ${selected} Tip`,
      content,
      category: selected,
      status: 'draft',
      word_count: this.countWords(content),
      ai_generated: true,
      validation_passed: false,
      featured_image: imageResponse.imageUrl,
      image_alt: imageResponse.altText,
    };

    return await Tip.create(tipData);
  }

  private defaultScheduledPublishDate(): Date {
    const publishDate = new Date();
    publishDate.setHours(8, 0, 0, 0);
    if (publishDate.getTime() <= Date.now()) {
      publishDate.setDate(publishDate.getDate() + 1);
    }
    return publishDate;
  }

  private async generateUniqueSlug(title: string): Promise<string> {
    const baseSlug = this.generateSlug(title);
    let slug = baseSlug;
    let suffix = 1;

    while ((await Article.count({ where: { slug } })) > 0) {
      suffix += 1;
      slug = `${baseSlug}-${suffix}`.substring(0, 100);
    }

    return slug;
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 90);
  }

  private countWords(text: string): number {
    return text.split(/\s+/).filter((word) => word.length > 0).length;
  }

  private calculateReadability(text: string): number {
    const words = text.split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length;

    if (words === 0 || sentences === 0) return 8.0;

    const averageWordsPerSentence = words / sentences;
    return Math.max(6, Math.min(10, 11 - averageWordsPerSentence * 0.1));
  }
}