import { NextResponse } from 'next/server';

function getServerApiBase() {
  return (
    process.env.SERVER_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === 'production' ? 'http://server:3001/api' : 'http://localhost:3001/api')
  ).replace(/\/+$/, '');
}

export async function proxyServerApi(request: Request, path: string) {
  const sourceUrl = new URL(request.url);
  const target = `${getServerApiBase()}/${path.replace(/^\/+/, '')}${sourceUrl.search}`;
  const headers = new Headers(request.headers);
  headers.delete('host');
  headers.delete('content-length');

  const init: RequestInit = {
    method: request.method,
    headers,
    cache: 'no-store',
    signal: AbortSignal.timeout(15_000),
  };

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = await request.arrayBuffer();
  }

  try {
    const upstream = await fetch(target, init);
    const responseHeaders = new Headers(upstream.headers);
    responseHeaders.set('Cache-Control', 'no-store');
    return new NextResponse(await upstream.arrayBuffer(), {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch {
    return NextResponse.json({ error: 'Application API is unavailable' }, { status: 502 });
  }
}
