'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = (() => {
  const raw = process.env.NEXT_PUBLIC_API_URL || '';
  const base = raw.replace(/\/$/, '');
  if (!base) {
    if (typeof window !== 'undefined') {
      // Surface a clear error in the browser console for missing config
      // IMPORTANT: do not throw here to avoid hydration issues
      console.error(
        'Missing NEXT_PUBLIC_API_URL. Auth endpoints will be unavailable until configured.'
      );
    }
  }
  return base;
})();

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

  useEffect(() => {
    // Check for token in localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      if (API_URL) {
        fetchUser(storedToken);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async (authToken: string) => {
    try {
      // In dev, avoid noisy network errors if local API is down
      // Also keep this silent in production to prevent console.error spam in monitoring
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${authToken}` },
        signal: controller.signal,
      }).catch((e) => {
        // Swallow connection errors; treat as signed-out
        return new Response(null, { status: 0, statusText: 'network-failed' });
      });
      clearTimeout(timeout);
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
      } else {
        localStorage.removeItem('token');
        setToken(null);
      }
    } catch (error) {
      // Be quiet to avoid noisy dev/preview consoles when API is unavailable
      localStorage.removeItem('token');
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    if (!API_URL) {
      throw new Error('API base URL not configured');
    }
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');

    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
    router.refresh();
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    if (!API_URL) {
      throw new Error('API base URL not configured');
    }
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, fullName }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Registration failed');

    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
    router.refresh();
  };

  const signOut = async () => {
    localStorage.removeItem('token');
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
