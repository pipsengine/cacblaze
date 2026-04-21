import { NextResponse } from 'next/server';
import { articles as localArticles } from '@/data/articles';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const EXPLICIT_BASE = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '');
const DEV_BASE_CANDIDATES = Array.from(
  { length: 10 },
  (_, index) => `http://localhost:${3001 + index}/api`
);

type LocalArticleRecord = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  heroImage?: string;
  heroImageAlt?: string;
  author?: {
    name?: string;
    image?: string;
  };
};

async function resolveBaseUrl(pathWithSearch: string, init: RequestInit) {
  const candidates = EXPLICIT_BASE ? [EXPLICIT_BASE] : DEV_BASE_CANDIDATES;

  for (const base of candidates) {
    try {
      const response = await fetch(`${base}/ai-publishing/${pathWithSearch}`, {
        ...init,
        method: 'GET',
        cache: 'no-store',
      });

      if (response.ok || response.status < 500) {
        return base;
      }
    } catch {}
  }

  return EXPLICIT_BASE || '';
}

async function proxy(request: Request, params: { path?: string[] }) {
  const url = new URL(request.url);
  const path = params?.path?.join('/') || '';
  const search = url.search ? url.search : '';
  const qs = url.searchParams;
  const limitParam = Number(qs.get('limit') || '');
  const limit =
    Number.isFinite(limitParam) && limitParam > 0 ? Math.min(limitParam, 20) : undefined;
  const today = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  const weekIndex = Math.floor(today.getTime() / (7 * dayMs));
  const sortMode = qs.get('sort') || 'popular';
  const toISO = (d: Date) => new Date(d).toISOString();
  const pickArticleSlugs = (n: number) => {
    const keys = Object.keys(localArticles);
    if (keys.length === 0) return [];
    const start = weekIndex % keys.length;
    const picked: string[] = [];
    for (let i = 0; i < n; i++) {
      picked.push(keys[(start + i) % keys.length]);
    }
    return picked;
  };
  const publishedArticlesFallback = (n: number, sortMode: string = 'popular') => {
    const slugs = pickArticleSlugs(Math.max(n * 2, 12));
    const items = slugs.map((slug, i) => {
      const article = (localArticles as Record<string, LocalArticleRecord>)[slug];
      const pub = new Date(today.getTime() - i * dayMs);
      return {
        id: `local_${article.slug}`,
        title: article.title,
        content: article.excerpt,
        category: article.category || 'Guides',
        published_at: toISO(pub),
        featured_image_url: article.heroImage || '',
        image_alt: article.heroImageAlt || article.title,
        author: {
          id: 'local_dataset',
          name: article.author?.name || 'CACBLAZE Editors',
          avatar_url: article.author?.image || '',
        },
        slug: article.slug,
        meta_description: article.excerpt || '',
        type: 'Guide',
        geo_focus: 'Nigeria',
        word_count: 2000 + i * 35,
        readability_score: 8.2 + ((weekIndex + i) % 5) * 0.2,
      };
    });

    const sorted = [...items].sort((a, b) => {
      if (sortMode === 'recent') {
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
      }

      if (sortMode === 'trending') {
        return (b.readability_score || 0) - (a.readability_score || 0);
      }

      return (
        (b.readability_score || 0) +
        (b.word_count || 0) / 1000 -
        ((a.readability_score || 0) + (a.word_count || 0) / 1000)
      );
    });

    const rotated =
      sortMode === 'recent'
        ? sorted
        : sorted
            .slice(weekIndex % sorted.length)
            .concat(sorted.slice(0, weekIndex % sorted.length));

    return {
      articles: rotated.slice(0, n),
      total_count: items.length,
      has_more: items.length > n,
      selected_for: {
        featured: true,
        sort: sortMode,
        week_start: toISO(new Date(today.getTime() - ((today.getDay() + 6) % 7) * dayMs)),
      },
    };
  };
  const categories = ['Technology', 'Education', 'Lifestyle', 'Personal Finance', 'Business'];
  const tipPhrases = [
    {
      title: 'Use the 2‑minute rule',
      content: 'If a task takes less than 2 minutes, do it now to reduce mental load.',
    },
    {
      title: 'Batch your notifications',
      content:
        'Disable push notifications and check apps on a schedule to avoid context switching.',
    },
    {
      title: 'Optimize mobile data',
      content:
        'Force LTE only when needed; prefer Wi‑Fi and disable background data for heavy apps.',
    },
    {
      title: 'Backup before updates',
      content: 'Create a quick cloud backup before major OS or app updates.',
    },
    {
      title: 'Use strong passphrases',
      content:
        'Combine four random words with a number and symbol for memorable, strong passwords.',
    },
    {
      title: 'Declutter weekly',
      content: 'Archive old chats and delete large downloads to keep devices fast and tidy.',
    },
    {
      title: 'Schedule deep work',
      content: 'Block 60–90 minutes daily for focused work without meetings or messages.',
    },
    {
      title: 'Verify payment links',
      content: 'Type bank URLs manually; avoid clicking unknown links to prevent phishing.',
    },
    {
      title: 'Power hygiene',
      content: 'Use surge protectors and avoid full discharges to extend battery and device life.',
    },
    {
      title: 'Use checklists',
      content: 'Standardize repeated tasks with short checklists to reduce errors.',
    },
  ];
  const tipImageByCategory = (category: string) => {
    const lc = category.toLowerCase();
    const catalog: Record<string, string[]> = {
      technology: [
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
        'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      ],
      education: [
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80',
      ],
      lifestyle: [
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1200&q=80',
      ],
      business: [
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1523958203904-5f8d59f0e1ea?auto=format&fit=crop&w=1200&q=80',
      ],
      finance: [
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1200&q=80',
      ],
    };
    const list =
      lc.includes('finance') || lc.includes('personal finance')
        ? catalog.finance
        : catalog[lc] || catalog.business;
    const pick = list[(weekIndex + today.getDate()) % list.length];
    return `/api/image-proxy?url=${encodeURIComponent(pick)}`;
  };
  const dailyTipsFallback = (n: number) => {
    const items = Array.from({ length: n }).map((_, i) => {
      const idx = (weekIndex + i) % tipPhrases.length;
      const cat = categories[(weekIndex + i) % categories.length];
      const phrase = tipPhrases[idx];
      const pub = new Date(today.getTime() - i * dayMs);
      return {
        id: `tip_${pub.toISOString().slice(0, 10)}_${i}`,
        title: phrase.title,
        content: phrase.content,
        category: cat,
        published_at: toISO(pub),
        featured_image: tipImageByCategory(cat),
        image_alt: phrase.title,
      };
    });
    return { tips: items, count: items.length };
  };

  const headers = new Headers(request.headers);
  headers.delete('host');

  const init: RequestInit = {
    method: request.method,
    headers,
  };

  const resolvedBase = await resolveBaseUrl(path + search, init);

  // If no upstream configured in production, provide safe fallbacks for known endpoints
  if (!resolvedBase) {
    if (request.method === 'GET') {
      if (path.startsWith('tips/published')) {
        const n = limit ?? 7;
        const data = dailyTipsFallback(n);
        return NextResponse.json(data, { status: 200, headers: { 'Cache-Control': 'no-store' } });
      }
      if (path.startsWith('articles/published')) {
        const n = limit ?? 7;
        const data = publishedArticlesFallback(n, sortMode);
        return NextResponse.json(data, { status: 200, headers: { 'Cache-Control': 'no-store' } });
      }
    }
    return NextResponse.json({ error: 'Upstream API not configured' }, { status: 502 });
  }

  const target = `${resolvedBase}/ai-publishing/${path}${search}`;

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = request.body;
  }

  try {
    const res = await fetch(target, init);
    // Graceful fallback for specific endpoints
    if (!res.ok && request.method === 'GET') {
      if (path.startsWith('tips/published')) {
        const n = limit ?? 7;
        return NextResponse.json(dailyTipsFallback(n), { status: 200 });
      }
      if (path.startsWith('articles/published')) {
        const n = limit ?? 7;
        return NextResponse.json(publishedArticlesFallback(n, sortMode), { status: 200 });
      }
    }

    const buf = await res.arrayBuffer();
    const responseHeaders = new Headers(res.headers);
    responseHeaders.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
    return new NextResponse(buf, { status: res.status, headers: responseHeaders });
  } catch (_error) {
    // Network or DNS error
    if (request.method === 'GET') {
      if (path.startsWith('tips/published')) {
        const n = limit ?? 7;
        return NextResponse.json(dailyTipsFallback(n), { status: 200 });
      }
      if (path.startsWith('articles/published')) {
        const n = limit ?? 7;
        return NextResponse.json(publishedArticlesFallback(n, sortMode), { status: 200 });
      }
    }
    return NextResponse.json({ error: 'Upstream request failed' }, { status: 502 });
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(request, await params);
}
export async function POST(request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(request, await params);
}
export async function PUT(request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(request, await params);
}
export async function PATCH(request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(request, await params);
}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxy(request, await params);
}
