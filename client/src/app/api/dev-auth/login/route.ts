import { NextResponse } from 'next/server';
import {
  buildDevAdminIdentity,
  buildExpectedDevAdminToken,
  DEV_ADMIN_COOKIE_NAME,
} from '@/lib/auth/adminAccess';

function isDevAdminEnabled() {
  return process.env.NODE_ENV !== 'production' && process.env.DEV_ADMIN_ENABLED === 'true';
}

export async function POST(request: Request) {
  if (!isDevAdminEnabled()) {
    return NextResponse.json({ error: 'Development admin login is disabled.' }, { status: 404 });
  }

  const configuredEmail = process.env.DEV_ADMIN_EMAIL;
  const configuredPassword = process.env.DEV_ADMIN_PASSWORD;
  const configuredName = process.env.DEV_ADMIN_NAME || 'Local Admin';
  const expectedToken = buildExpectedDevAdminToken();
  const identity = buildDevAdminIdentity();

  if (!configuredEmail || !configuredPassword || !expectedToken || !identity) {
    return NextResponse.json(
      { error: 'Development admin credentials are not configured.' },
      { status: 500 }
    );
  }

  let body: { email?: string; password?: string };

  try {
    body = (await request.json()) as { email?: string; password?: string };
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (body.email !== configuredEmail || body.password !== configuredPassword) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  const response = NextResponse.json({
    user: {
      ...identity,
      username: configuredEmail.split('@')[0] || 'admin',
    },
    token: expectedToken,
  });

  response.cookies.set(DEV_ADMIN_COOKIE_NAME, expectedToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    path: '/',
    maxAge: 60 * 60 * 8,
  });

  return response;
}