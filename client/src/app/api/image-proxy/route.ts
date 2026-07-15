import { NextResponse } from 'next/server';

const DEFAULT_ALLOWED_HOSTS = [
  'images.unsplash.com',
  'images.pexels.com',
  'images.pixabay.com',
  'cdn.pixabay.com',
  'img.rocket.new',
  'cacblaze.com',
  'www.cacblaze.com',
  'cdn.cacblaze.com',
];

function buildAllowedHosts() {
  const envList = (process.env.IMAGE_PROXY_ALLOWED_HOSTS || '')
    .split(',')
    .map((h) => h.trim())
    .filter(Boolean);
  return new Set<string>([...DEFAULT_ALLOWED_HOSTS, ...envList]);
}

const ALLOWED_HOSTS = buildAllowedHosts();
const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

async function readLimitedBody(response: Response) {
  const contentLength = Number(response.headers.get('content-length') || 0);
  if (contentLength > MAX_IMAGE_BYTES) throw new Error('Image is too large');
  if (!response.body) return new ArrayBuffer(0);

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_IMAGE_BYTES) {
      await reader.cancel();
      throw new Error('Image is too large');
    }
    chunks.push(value);
  }

  const result = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return result.buffer;
}

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

    const refererMap: Record<string, string> = {
      'images.unsplash.com': 'https://unsplash.com',
      'images.pexels.com': 'https://www.pexels.com',
      'images.pixabay.com': 'https://pixabay.com',
      'cdn.pixabay.com': 'https://pixabay.com',
      'img.rocket.new': '',
    };
    const mappedReferer = refererMap[target.hostname] || '';

    const resp = await fetch(target.toString(), {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0 Safari/537.36',
        Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        Referer: mappedReferer,
      },
      cache: 'no-store',
      redirect: 'error',
      signal: AbortSignal.timeout(10_000),
    });

    if (!resp.ok) {
      return NextResponse.json({ error: 'Upstream fetch failed' }, { status: resp.status });
    }

    const contentType = resp.headers.get('content-type') || 'application/octet-stream';
    if (!contentType.toLowerCase().startsWith('image/')) {
      return NextResponse.json({ error: 'Upstream did not return an image' }, { status: 415 });
    }
    const arrayBuf = await readLimitedBody(resp);

    return new Response(arrayBuf, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'Cross-Origin-Resource-Policy': 'cross-origin',
      },
    });
  } catch (_error) {
    return NextResponse.json({ error: 'Proxy error' }, { status: 500 });
  }
}
