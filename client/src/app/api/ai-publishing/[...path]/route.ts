import { NextResponse } from 'next/server';
import { articles as localArticles } from '@/data/articles';

const BASE = (
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : '')
).replace(/\/+$/, '');

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
  const publishedArticlesFallback = (n: number) => {
    const slugs = pickArticleSlugs(n);
    const items = slugs.map((slug, i) => {
      const a: any = (localArticles as any)[slug];
      const pub = new Date(today.getTime() - i * dayMs);
      return {
        id: `local_${a.slug}`,
        title: a.title,
        content: a.excerpt,
        category: a.category || 'Guides',
        published_at: toISO(pub),
        featured_image_url: a.heroImage || '',
        image_alt: a.heroImageAlt || a.title,
        author: {
          id: 'local_dataset',
          name: a.author?.name || 'CACBLAZE Editors',
          avatar_url: a.author?.image || '',
        },
        slug: a.slug,
        meta_description: a.excerpt || '',
        type: 'Guide',
        geo_focus: 'Nigeria',
      };
    });
    return { articles: items, total_count: items.length, has_more: false };
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
        featured_image: '/assets/images/no_image.png',
        image_alt: phrase.title,
      };
    });
    return { tips: items, count: items.length };
  };

  // If no upstream configured in production, provide safe fallbacks for known endpoints
  if (!BASE) {
    if (request.method === 'GET') {
      if (path.startsWith('tips/published')) {
        const n = limit ?? 7;
        const data = dailyTipsFallback(n);
        return NextResponse.json(data, { status: 200, headers: { 'Cache-Control': 'no-store' } });
      }
      if (path.startsWith('articles/published')) {
        const n = limit ?? 5;
        const data = publishedArticlesFallback(n);
        return NextResponse.json(data, { status: 200, headers: { 'Cache-Control': 'no-store' } });
      }
    }
    return NextResponse.json({ error: 'Upstream API not configured' }, { status: 502 });
  }

  const target = `${BASE}/ai-publishing/${path}${search}`;

  const headers = new Headers(request.headers);
  headers.delete('host');

  const init: RequestInit = {
    method: request.method,
    headers,
  };

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = request.body as any;
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
        const n = limit ?? 5;
        return NextResponse.json(publishedArticlesFallback(n), { status: 200 });
      }
    }

    const buf = await res.arrayBuffer();
    const responseHeaders = new Headers(res.headers);
    return new NextResponse(buf, { status: res.status, headers: responseHeaders });
  } catch (e) {
    // Network or DNS error
    if (request.method === 'GET') {
      if (path.startsWith('tips/published')) {
        const n = limit ?? 7;
        return NextResponse.json(dailyTipsFallback(n), { status: 200 });
      }
      if (path.startsWith('articles/published')) {
        const n = limit ?? 5;
        return NextResponse.json(publishedArticlesFallback(n), { status: 200 });
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
