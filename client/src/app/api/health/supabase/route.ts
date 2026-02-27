import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
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
          },
          { status: 200, headers: { 'Cache-Control': 'no-store' } }
        );
      }

      return NextResponse.json(
        {
          reachable: true,
          rest: true,
          db: 'ok',
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
