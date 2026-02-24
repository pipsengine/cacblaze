import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

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
  const pathname = req.nextUrl.pathname;
  if (isExcludedPath(pathname)) return NextResponse.next();
  // Let Next.js handle routing without custom redirects to avoid loops
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|public|favicon.ico|assets|api).*)'],
};
