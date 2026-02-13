interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags?: string[];
  readTime: string;
  publishDate: string;
  slug: string;
}

interface RelatedArticleScore {
  article: Article;
  score: number;
}

/**
 * Calculate semantic similarity between two articles based on category, tags, and title
 */
function calculateSimilarityScore(
  currentArticle: { category: string; title: string; tags?: string[] },
  candidateArticle: Article
): number {
  let score = 0;

  // Category match (highest weight)
  if (currentArticle.category.toLowerCase() === candidateArticle.category.toLowerCase()) {
    score += 50;
  }

  // Tag overlap (medium weight)
  if (currentArticle.tags && candidateArticle.tags) {
    const currentTags = new Set(currentArticle.tags.map((t) => t.toLowerCase()));
    const candidateTags = candidateArticle.tags.map((t) => t.toLowerCase());
    const commonTags = candidateTags.filter((tag) => currentTags.has(tag));
    score += commonTags.length * 15;
  }

  // Title keyword overlap (lower weight)
  const currentKeywords = new Set(
    currentArticle.title
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 3)
  );
  const candidateKeywords = candidateArticle.title
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3);
  const commonKeywords = candidateKeywords.filter((word) => currentKeywords.has(word));
  score += commonKeywords.length * 5;

  return score;
}

/**
 * Get related articles with internal linking optimization
 */
export function getRelatedArticles(
  currentArticleId: string,
  currentCategory: string,
  currentTitle: string,
  allArticles: Article[],
  currentTags?: string[],
  limit: number = 3
): Article[] {
  // Filter out current article
  const candidates = allArticles.filter((article) => article.id !== currentArticleId);

  // Calculate similarity scores
  const scoredArticles: RelatedArticleScore[] = candidates.map((article) => ({
    article,
    score: calculateSimilarityScore(
      { category: currentCategory, title: currentTitle, tags: currentTags },
      article
    ),
  }));

  // Sort by score (descending) and return top N
  return scoredArticles
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article);
}

/**
 * Generate internal linking suggestions for article content
 */
export function generateInternalLinks(
  articleContent: string,
  allArticles: Article[],
  maxLinks: number = 5
): Array<{ keyword: string; article: Article }> {
  const suggestions: Array<{ keyword: string; article: Article; matches: number }> = [];

  // Extract keywords from article content (words longer than 4 characters)
  const contentWords = articleContent
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 4);
  const wordFrequency = new Map<string, number>();

  contentWords.forEach((word) => {
    wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
  });

  // Find articles with matching keywords
  allArticles.forEach((article) => {
    const articleKeywords = article.title.toLowerCase().split(/\s+/);

    articleKeywords.forEach((keyword) => {
      if (keyword.length > 4 && wordFrequency.has(keyword)) {
        const matches = wordFrequency.get(keyword) || 0;
        suggestions.push({ keyword, article, matches });
      }
    });
  });

  // Sort by frequency and return top suggestions
  return suggestions
    .sort((a, b) => b.matches - a.matches)
    .slice(0, maxLinks)
    .map(({ keyword, article }) => ({ keyword, article }));
}

/**
 * Calculate internal linking strength for SEO optimization
 */
export function calculateLinkingStrength(article: Article, linkedArticles: Article[]): number {
  let strength = 0;

  linkedArticles.forEach((linked) => {
    // Same category links are stronger
    if (article.category === linked.category) {
      strength += 10;
    } else {
      strength += 5;
    }

    // Tag overlap increases strength
    if (article.tags && linked.tags) {
      const commonTags = article.tags.filter((tag) => linked.tags?.includes(tag));
      strength += commonTags.length * 3;
    }
  });

  return strength;
}
