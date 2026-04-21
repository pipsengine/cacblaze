import { createHash } from 'crypto';
import { NextResponse } from 'next/server';

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

  if (!configuredEmail || !configuredPassword) {
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

  const user = {
    id: 'dev-admin',
    email: configuredEmail,
    username: configuredEmail.split('@')[0] || 'admin',
    role: 'admin' as const,
    full_name: configuredName,
  };

  const token = createHash('sha256')
    .update(`${configuredEmail}:${configuredPassword}:${process.env.NODE_ENV}`)
    .digest('hex');

  return NextResponse.json({ user, token });
}