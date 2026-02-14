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
    const origin = new URL(target).hostname;
    const referer =
      origin.includes('images.unsplash.com')
        ? 'https://unsplash.com/'
        : origin.includes('images.pexels.com')
          ? 'https://www.pexels.com/'
          : origin.includes('images.pixabay.com')
            ? 'https://pixabay.com/'
            : 'https://cacblaze.local/';
    const upstream = await fetch(target, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        Referer: referer,
      },
      cache: 'no-store',
      redirect: 'follow',
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
        'x-proxy-source': origin,
        'access-control-allow-origin': '*',
        'cross-origin-resource-policy': 'cross-origin',
      },
    });
  } catch {
    return new Response('Proxy error', { status: 502 });
  }
}
