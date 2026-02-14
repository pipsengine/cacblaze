import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function isValidSlug(slug: string) {
  return /^(?!-)[a-z0-9-]+(?<!-)$/.test(slug);
}

function isExcludedPath(path: string) {
  return (
    path === '/' ||
    path.startsWith('/api') ||
    path.startsWith('/_next') ||
    path.startsWith('/static') ||
    path.startsWith('/public') ||
    path === '/favicon.ico' ||
    path.startsWith('/assets')
  );
}

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  if (isExcludedPath(pathname)) return NextResponse.next();

  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 1) {
    const slug = segments[0];
    if (!isValidSlug(slug)) {
      return new NextResponse('Not Found', { status: 404 });
    }
    return NextResponse.next();
  }

  if (segments.length >= 3 && segments[0] === 'topics') {
    const slug = segments[segments.length - 1];
    if (!isValidSlug(slug)) {
      return new NextResponse('Not Found', { status: 404 });
    }
    url.pathname = `/${slug}`;
    return NextResponse.redirect(url, 301);
  }

  if (segments.length === 2 && segments[0] === 'category') {
    const slug = segments[1];
    if (!isValidSlug(slug)) {
      return new NextResponse('Not Found', { status: 404 });
    }
    url.pathname = `/${slug}`;
    return NextResponse.redirect(url, 301);
  }

  if (segments.length === 2) {
    const slug = segments[1];
    if (!isValidSlug(slug)) {
      return new NextResponse('Not Found', { status: 404 });
    }
    url.pathname = `/${slug}`;
    return NextResponse.redirect(url, 301);
  }

  const last = segments[segments.length - 1];
  if (isValidSlug(last)) {
    url.pathname = `/${last}`;
    return NextResponse.redirect(url, 301);
  }

  return new NextResponse('Not Found', { status: 404 });
}

export const config = {
  matcher: ['/((?!_next|static|public|favicon.ico|assets|api).*)'],
};
