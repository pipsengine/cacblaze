export interface RecentArticleView {
  slug: string;
  title: string;
  category: string;
  readTime?: string;
  viewedAt: string;
}

const RECENT_ARTICLES_KEY = 'cacblaze_recent_articles';
const MAX_RECENT_ARTICLES = 12;

function isBrowser() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getRecentArticleViews(): RecentArticleView[] {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(RECENT_ARTICLES_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is RecentArticleView =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as RecentArticleView).slug === 'string' &&
        typeof (item as RecentArticleView).title === 'string' &&
        typeof (item as RecentArticleView).category === 'string' &&
        typeof (item as RecentArticleView).viewedAt === 'string'
    );
  } catch {
    return [];
  }
}

export function saveRecentArticleView(article: Omit<RecentArticleView, 'viewedAt'>) {
  if (!isBrowser()) return;

  try {
    const current = getRecentArticleViews().filter((item) => item.slug !== article.slug);
    const updated: RecentArticleView[] = [
      {
        ...article,
        viewedAt: new Date().toISOString(),
      },
      ...current,
    ].slice(0, MAX_RECENT_ARTICLES);

    window.localStorage.setItem(RECENT_ARTICLES_KEY, JSON.stringify(updated));
  } catch {
    // ignore storage errors
  }
}

export function getPreferredCategories(limit = 3): string[] {
  const recent = getRecentArticleViews();
  const counts = recent.reduce<Record<string, number>>((acc, item) => {
    const key = item.category || 'Guides';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([category]) => category);
}
