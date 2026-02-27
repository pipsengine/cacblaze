import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const host = (() => {
      try {
        return url ? new URL(url).host : '';
      } catch {
        return '';
      }
    })();
    let authHealth: 'ok' | 'fail' | 'unknown' = 'unknown';
    if (url && anon) {
      try {
        const res = await fetch(`${url.replace(/\/+$/, '')}/auth/v1/health`, {
          headers: { apikey: anon },
          cache: 'no-store',
        });
        authHealth = res.ok ? 'ok' : 'fail';
      } catch {
        authHealth = 'fail';
      }
    }
    const supabase = await createClient();
    try {
      const { error, status } = await supabase
        .from('user_profiles')
        .select('id', { count: 'exact', head: true })
        .limit(1);

      if (error) {
        return NextResponse.json(
          {
            reachable: true,
            rest: true,
            db: 'permission_denied',
            status: status || 403,
            error: error.message,
            env: {
              supabaseUrlHost: host || null,
              supabaseAnonPresent: !!anon,
              authHealth,
            },
          },
          { status: 200, headers: { 'Cache-Control': 'no-store' } }
        );
      }

      return NextResponse.json(
        {
          reachable: true,
          rest: true,
          db: 'ok',
          env: {
            supabaseUrlHost: host || null,
            supabaseAnonPresent: !!anon,
            authHealth,
          },
        },
        { status: 200, headers: { 'Cache-Control': 'no-store' } }
      );
    } catch (e: any) {
      return NextResponse.json(
        {
          reachable: false,
          rest: false,
          db: 'unknown',
          error: e?.message || 'Network error',
          env: {
            supabaseUrlHost: host || null,
            supabaseAnonPresent: !!anon,
            authHealth,
          },
        },
        { status: 200, headers: { 'Cache-Control': 'no-store' } }
      );
    }
  } catch (e: any) {
    return NextResponse.json(
      {
        reachable: false,
        error: e?.message || 'Initialization error',
      },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
