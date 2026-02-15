import { NextResponse } from 'next/server';

const ALLOWED_HOSTS = new Set([
  'images.unsplash.com',
  'images.pexels.com',
  'images.pixabay.com',
  'img.rocket.new',
]);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const urlParam = searchParams.get('url');
    if (!urlParam) {
      return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
    }

    let target: URL;
    try {
      target = new URL(urlParam);
    } catch {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    if (target.protocol !== 'http:' && target.protocol !== 'https:') {
      return NextResponse.json({ error: 'Unsupported protocol' }, { status: 400 });
    }

    if (!ALLOWED_HOSTS.has(target.hostname)) {
      return NextResponse.json({ error: 'Host not allowed' }, { status: 403 });
    }

    const resp = await fetch(target.toString(), {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0 Safari/537.36',
        Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        Referer: request.headers.get('referer') || '',
      },
      cache: 'no-store',
    });

    if (!resp.ok) {
      return NextResponse.json({ error: 'Upstream fetch failed' }, { status: resp.status });
    }

    const contentType = resp.headers.get('content-type') || 'application/octet-stream';
    const arrayBuf = await resp.arrayBuffer();

    return new Response(arrayBuf, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'Cross-Origin-Resource-Policy': 'cross-origin',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Proxy error' }, { status: 500 });
  }
}
