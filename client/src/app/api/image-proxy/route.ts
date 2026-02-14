export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: Request) {
  const urlObj = new URL(req.url);
  const target = urlObj.searchParams.get('url');
  if (!target) {
    return new Response('Missing url', { status: 400 });
  }
  try {
    const upstream = await fetch(target, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      },
      cache: 'no-store',
    });
    if (!upstream.ok) {
      return new Response('Upstream error', { status: upstream.status });
    }
    const contentType = upstream.headers.get('content-type') || 'image/jpeg';
    const buf = await upstream.arrayBuffer();
    return new Response(buf, {
      headers: {
        'content-type': contentType,
        'cache-control': 'public, max-age=1800',
        'x-proxy-source': new URL(target).hostname,
      },
    });
  } catch {
    return new Response('Proxy error', { status: 502 });
  }
}
