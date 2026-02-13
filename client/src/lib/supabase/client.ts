import { createBrowserClient } from '@supabase/ssr';

interface CookieOptions {
  path?: string;
  maxAge?: number;
  domain?: string;
  expires?: string;
}

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          if (typeof document === 'undefined') return [];
          return document.cookie.split(';').map((cookie) => {
            const [name, ...rest] = cookie.trim().split('=');
            return { name, value: decodeURIComponent(rest.join('=')) };
          });
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: CookieOptions }>) {
          if (typeof document === 'undefined') return;
          cookiesToSet.forEach(({ name, value, options }) => {
            let cookieString = `${name}=${encodeURIComponent(value)}; Path=${options?.path || '/'}; Secure; SameSite=None`;

            if (options?.maxAge) {
              cookieString += `; max-age=${options.maxAge}`;
            }
            if (options?.domain) {
              cookieString += `; domain=${options.domain}`;
            }
            if (options?.expires) {
              cookieString += `; expires=${options.expires}`;
            }
            document.cookie = cookieString;
          });
        },
      },
    }
  );
}
