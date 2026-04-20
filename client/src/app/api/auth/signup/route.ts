import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullName } = await req.json();
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const strongPassword =
      typeof password === 'string' &&
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password);

    if (
      !normalizedEmail ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) ||
      !strongPassword ||
      typeof fullName !== 'string' ||
      fullName.trim().length < 2
    ) {
      return NextResponse.json(
        {
          error:
            'Enter a valid email, full name, and a strong password with uppercase, lowercase, and a number',
        },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    const supabase = await createClient();
    const { origin } = new URL(req.url);
    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        data: { full_name: fullName || '' },
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });
    if (error) {
      return NextResponse.json(
        {
          error: error.message || 'Registration failed',
        },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    // Best-effort profile create; may fail if no session before email confirm
    try {
      if (data?.user?.id) {
        await supabase
          .from('user_profiles')
          .upsert({ id: data.user.id, full_name: fullName || null }, { onConflict: 'id' });
      }
    } catch {
      // ignore; profile can be created on first login
    }

    return NextResponse.json({
      ok: true,
      userId: data?.user?.id ?? null,
      message: 'Check your email to confirm.',
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unexpected error';

    return NextResponse.json(
      { error: message },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
