import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

function getSupabaseServerEnv() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_Cacblaze_SUPABASE_URL;
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !anonKey) {
    throw new Error(
      'Missing Supabase public environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    );
  }

  return { url, anonKey };
}

export async function createClient() {
  const cookieStore = await cookies();
  const { url, anonKey } = getSupabaseServerEnv();
  const isProduction = process.env.NODE_ENV === 'production';

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet?.forEach(({ name, value, options }) => {
            const cookieOptions = {
              ...options,
              sameSite: (isProduction ? 'none' : 'lax') as 'none' | 'lax',
              secure: isProduction,
              httpOnly: options?.httpOnly,
              path: options?.path || '/',
            };
            cookieStore.set(name, value, cookieOptions);
          });
        } catch {
          // Cookie writes may be unavailable in some server component contexts.
        }
      },
    },
  });
}
