'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

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
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setToken(data.session.access_token);
        await loadCurrentUser();
      } else {
        setLoading(false);
      }
    };
    init();
    const { data: sub } = supabase.auth.onAuthStateChange(async (_e, session) => {
      setToken(session?.access_token || null);
      if (session) {
        await loadCurrentUser();
      } else {
        setUser(null);
      }
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const loadCurrentUser = async () => {
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) {
      setUser(null);
      setLoading(false);
      return;
    }
    let role: 'admin' | 'author' | 'user' = 'user';
    let fullName: string | undefined = undefined;
    let avatarUrl: string | undefined = undefined;
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
    setLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message || 'Login failed');
    await loadCurrentUser();
    router.refresh();
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
    await supabase.auth.signOut();
    setToken(null);
    setUser(null);
    router.push('/');
    router.refresh();
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, userRole: user?.role || null, token, signIn, signUp, signOut }}
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
