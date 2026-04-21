'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const DEV_SESSION_KEY = 'cacblaze_dev_admin_session';
const DEV_ADMIN_AUTH_ENABLED = process.env.NEXT_PUBLIC_DEV_ADMIN_ENABLED === 'true';

export interface User {
  id: string;
  email: string;
  username: string;
  role: 'admin' | 'author' | 'user';
  full_name?: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  userRole: 'admin' | 'author' | 'user' | null;
  token: string | null;
  isDevAuthSession: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

function isBrowser() {
  return typeof window !== 'undefined';
}

function getStoredDevSession(): { user: User; token: string } | null {
  if (!isBrowser()) return null;

  try {
    const raw = window.localStorage.getItem(DEV_SESSION_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as { user?: User; token?: string };
    if (!parsed?.user || !parsed?.token) return null;

    return {
      user: parsed.user,
      token: parsed.token,
    };
  } catch {
    return null;
  }
}

function storeDevSession(session: { user: User; token: string } | null) {
  if (!isBrowser()) return;

  if (!session) {
    window.localStorage.removeItem(DEV_SESSION_KEY);
    return;
  }

  window.localStorage.setItem(DEV_SESSION_KEY, JSON.stringify(session));
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [isDevAuthSession, setIsDevAuthSession] = useState(false);
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const loadDevSessionFromServer = useCallback(async () => {
    if (!DEV_ADMIN_AUTH_ENABLED) return null;

    try {
      const response = await fetch('/api/dev-auth/session', { cache: 'no-store' });
      const payload = (await response.json().catch(() => null)) as
        | { user?: User; token?: string | null }
        | null;

      if (!response.ok || !payload?.user || !payload?.token) {
        return null;
      }

      storeDevSession({ user: payload.user, token: payload.token });
      return { user: payload.user, token: payload.token };
    } catch {
      return null;
    }
  }, []);

  const loadCurrentUser = useCallback(async () => {
    const storedDevSession = getStoredDevSession();
    if (storedDevSession) {
      setUser(storedDevSession.user);
      setToken(storedDevSession.token);
      setIsDevAuthSession(true);
      setLoading(false);
      return;
    }

    const serverDevSession = await loadDevSessionFromServer();
    if (serverDevSession) {
      setUser(serverDevSession.user);
      setToken(serverDevSession.token);
      setIsDevAuthSession(true);
      setLoading(false);
      return;
    }

    try {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) {
        setUser(null);
        setToken(null);
        return;
      }

      let role: 'admin' | 'author' | 'user' = 'user';
      let fullName: string | undefined;
      let avatarUrl: string | undefined;

      const { data: profile } = await supabase
        .from('user_profiles')
        .select('role,full_name,avatar_url')
        .eq('id', u.user.id)
        .single();

      if (profile?.role) role = profile.role;
      if (profile?.full_name) fullName = profile.full_name;
      if (profile?.avatar_url) avatarUrl = profile.avatar_url;

      setUser({
        id: u.user.id,
        email: u.user.email || '',
        username: u.user.user_metadata?.username || u.user.email?.split('@')[0] || '',
        role,
        full_name: fullName,
        avatar_url: avatarUrl,
      });
      setIsDevAuthSession(false);
    } catch (error) {
      console.error('Failed to load current user', error);
      setUser(null);
      setToken(null);
      setIsDevAuthSession(false);
    } finally {
      setLoading(false);
    }
  }, [loadDevSessionFromServer, supabase]);

  useEffect(() => {
    const init = async () => {
      const storedDevSession = getStoredDevSession();
      if (storedDevSession) {
        setUser(storedDevSession.user);
        setToken(storedDevSession.token);
        setIsDevAuthSession(true);
        setLoading(false);
        return;
      }

      const serverDevSession = await loadDevSessionFromServer();
      if (serverDevSession) {
        setUser(serverDevSession.user);
        setToken(serverDevSession.token);
        setIsDevAuthSession(true);
        setLoading(false);
        return;
      }

      try {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          setToken(data.session.access_token);
          await loadCurrentUser();
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to initialize auth session', error);
        setLoading(false);
      }
    };

    void init();

    const { data: sub } = supabase.auth.onAuthStateChange(async (_e, session) => {
      setToken(session?.access_token || null);
      if (session) {
        storeDevSession(null);
        setIsDevAuthSession(false);
        await loadCurrentUser();
      } else {
        setUser(null);
        setIsDevAuthSession(false);
        setLoading(false);
      }
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, [loadCurrentUser, supabase]);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw new Error(error.message || 'Login failed');
      storeDevSession(null);
      await loadCurrentUser();
      router.refresh();
      return;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      const shouldTryDevFallback =
        DEV_ADMIN_AUTH_ENABLED && /failed to fetch|name_not_resolved|dns/i.test(message);

      if (!shouldTryDevFallback) {
        throw error instanceof Error ? error : new Error(message);
      }

      const response = await fetch('/api/dev-auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { user?: User; token?: string; error?: string }
        | null;

      if (!response.ok || !payload?.user || !payload?.token) {
        throw new Error(payload?.error || message || 'Login failed');
      }

      setUser(payload.user);
      setToken(payload.token);
      setLoading(false);
      setIsDevAuthSession(true);
      storeDevSession({ user: payload.user, token: payload.token });
      router.refresh();
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    if (error) throw new Error(error.message || 'Registration failed');
    if (data.user) {
      await supabase
        .from('user_profiles')
        .upsert({ id: data.user.id, full_name: fullName }, { onConflict: 'id' });
    }
    await loadCurrentUser();
    router.refresh();
  };

  const signOut = async () => {
    storeDevSession(null);
    if (isDevAuthSession) {
      try {
        await fetch('/api/dev-auth/logout', { method: 'POST' });
      } catch {
        // Ignore cookie cleanup failures during local development.
      }
    } else {
      try {
        await supabase.auth.signOut();
      } catch {
        // Ignore Supabase sign-out failures when using development fallback auth.
      }
    }
    setToken(null);
    setUser(null);
    setIsDevAuthSession(false);
    router.push('/');
    router.refresh();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        userRole: user?.role || null,
        token,
        isDevAuthSession,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
