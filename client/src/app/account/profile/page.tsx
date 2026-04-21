'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export default function AccountProfilePage() {
  const router = useRouter();
  const supabase = createClient();
  const { user, loading, isDevAuthSession, refreshUser } = useAuth();
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, router, user]);

  useEffect(() => {
    if (user) {
      setFullName(user.full_name || '');
      setAvatarUrl(user.avatar_url || '');
    }
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    if (isDevAuthSession) {
      setError('Profile editing is disabled for local development fallback sessions.');
      return;
    }

    setSaving(true);
    setMessage(null);
    setError(null);

    try {
      const { error: authError } = await supabase.auth.updateUser({
        data: { full_name: fullName.trim() || null, avatar_url: avatarUrl.trim() || null },
      });

      if (authError) throw authError;

      const { error: profileError } = await supabase
        .from('user_profiles')
        .update({
          full_name: fullName.trim() || null,
          avatar_url: avatarUrl.trim() || null,
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      await refreshUser();
      setMessage('Your profile details were updated successfully.');
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-16 pt-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-8 py-10 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/80">
              Account Center
            </p>
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-semibold">Profile</h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  Maintain the identity information shown across your account, admin workspace, and
                  personalized experiences.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 backdrop-blur-md">
                <p className="font-semibold">Signed in as</p>
                <p className="mt-1">{user?.email || 'Loading...'}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-sky-200">
                  {user?.role || 'User'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <Icon name="IdentificationIcon" size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Identity Details</h2>
                  <p className="text-sm text-gray-600">
                    Keep your visible account information accurate.
                  </p>
                </div>
              </div>

              {message && (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {message}
                </div>
              )}
              {error && (
                <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="mt-8 space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    placeholder="Your display name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Avatar URL
                  </label>
                  <input
                    type="url"
                    value={avatarUrl}
                    onChange={(event) => setAvatarUrl(event.target.value)}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => void handleSave()}
                    disabled={saving || loading || !user}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Icon name="CheckCircleIcon" size={18} className="text-white" />
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">Profile Preview</h2>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-xl font-semibold text-white">
                    {(fullName || user?.username || user?.email || 'A').slice(0, 1).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {fullName || user?.username || 'Account User'}
                    </p>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                    <p className="mt-2 inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {user?.role || 'user'}
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">Account Notes</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600">
                  <li>Profile changes update the identity shown in the header account menu.</li>
                  <li>Administrative access continues to be controlled by your assigned role.</li>
                  <li>
                    Local development fallback sessions are intentionally read-only for profile
                    edits.
                  </li>
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
