import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullName } = await req.json();
    if (
      !email ||
      typeof email !== 'string' ||
      !password ||
      typeof password !== 'string' ||
      password.length < 6
    ) {
      return NextResponse.json(
        { error: 'Invalid payload' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName || '' } },
    });
    if (error) {
      return NextResponse.json(
        { error: error.message || 'Registration failed' },
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

    return NextResponse.json(
      { ok: true, userId: data?.user?.id ?? null, message: 'Check your email to confirm.' },
      { status: 200, headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || 'Unexpected error' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
