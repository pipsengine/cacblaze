import { NextResponse } from 'next/server';

const BASE =
  (process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : '')).replace(
    /\/+$/,
    ''
  );

async function proxy(request: Request, params: { path: string[] }) {
  const url = new URL(request.url);
  const path = params.path?.join('/') || '';
  const search = url.search ? url.search : '';

  // If no upstream configured in production, provide safe fallbacks for known endpoints
  if (!BASE) {
    if (request.method === 'GET') {
      if (path.startsWith('tips/published')) {
        return NextResponse.json({ tips: [], count: 0 }, { status: 200, headers: { 'Cache-Control': 'no-store' } });
      }
      if (path.startsWith('articles/published')) {
        return NextResponse.json(
          { articles: [], total_count: 0, has_more: false },
          { status: 200, headers: { 'Cache-Control': 'no-store' } }
        );
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
        return NextResponse.json({ tips: [], count: 0 }, { status: 200 });
      }
      if (path.startsWith('articles/published')) {
        return NextResponse.json({ articles: [], total_count: 0, has_more: false }, { status: 200 });
      }
    }

    const buf = await res.arrayBuffer();
    const responseHeaders = new Headers(res.headers);
    return new NextResponse(buf, { status: res.status, headers: responseHeaders });
  } catch (e) {
    // Network or DNS error
    if (request.method === 'GET') {
      if (path.startsWith('tips/published')) {
        return NextResponse.json({ tips: [], count: 0 }, { status: 200 });
      }
      if (path.startsWith('articles/published')) {
        return NextResponse.json({ articles: [], total_count: 0, has_more: false }, { status: 200 });
      }
    }
    return NextResponse.json({ error: 'Upstream request failed' }, { status: 502 });
  }
}

export async function GET(request: Request, { params }: { params: { path: string[] } }) {
  return proxy(request, params);
}
export async function POST(request: Request, { params }: { params: { path: string[] } }) {
  return proxy(request, params);
}
export async function PUT(request: Request, { params }: { params: { path: string[] } }) {
  return proxy(request, params);
}
export async function PATCH(request: Request, { params }: { params: { path: string[] } }) {
  return proxy(request, params);
}
export async function DELETE(request: Request, { params }: { params: { path: string[] } }) {
  return proxy(request, params);
}

