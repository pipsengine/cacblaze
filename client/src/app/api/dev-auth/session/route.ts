import { NextResponse } from 'next/server';
import { buildDevAdminIdentity, buildExpectedDevAdminToken, DEV_ADMIN_COOKIE_NAME } from '@/lib/auth/adminAccess';

export async function GET(request: Request) {
  const expectedToken = buildExpectedDevAdminToken();
  const devIdentity = buildDevAdminIdentity();

  if (!expectedToken || !devIdentity) {
    return NextResponse.json({ user: null, token: null }, { status: 200 });
  }

  const cookieHeader = request.headers.get('cookie') || '';
  const tokenMatch = cookieHeader
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${DEV_ADMIN_COOKIE_NAME}=`));

  const token = tokenMatch?.slice(`${DEV_ADMIN_COOKIE_NAME}=`.length) || null;

  if (token !== expectedToken) {
    return NextResponse.json({ user: null, token: null }, { status: 200 });
  }

  return NextResponse.json({ user: devIdentity, token: expectedToken }, { status: 200 });
}