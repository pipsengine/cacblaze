import { NextResponse } from 'next/server';
import { DEV_ADMIN_COOKIE_NAME } from '@/lib/auth/adminAccess';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(DEV_ADMIN_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    path: '/',
    maxAge: 0,
  });
  return response;
}