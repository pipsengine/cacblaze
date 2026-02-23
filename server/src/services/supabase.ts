import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export function getSupabase() {
  if (supabase) return supabase;
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return null;
  }
  supabase = createClient(url, serviceKey);
  return supabase;
}

export async function getUserProfileByEmail(email: string) {
  const client = getSupabase();
  if (!client) return null;
  const { data, error } = await client
    .from('user_profiles')
    .select('id, full_name, email, role, is_active')
    .eq('email', email)
    .single();
  if (error) return null;
  return data;
}

export async function upsertUserProfile(payload: {
  email: string;
  full_name?: string;
  role?: 'admin' | 'author' | 'user';
  is_active?: boolean;
}) {
  const client = getSupabase();
  if (!client) return null;
  const { data, error } = await client
    .from('user_profiles')
    .upsert(
      {
        email: payload.email,
        full_name: payload.full_name || null,
        role: payload.role || 'user',
        is_active: typeof payload.is_active === 'boolean' ? payload.is_active : true,
      },
      { onConflict: 'email' }
    )
    .select()
    .single();
  if (error) return null;
  return data;
}
