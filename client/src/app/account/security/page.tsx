'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export default function AccountSecurityPage() {
  const router = useRouter();
  const supabase = createClient();
  const { user, loading, isDevAuthSession } = useAuth();
  const [nextPassword, setNextPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, router, user]);

  const handlePasswordUpdate = async () => {
    if (isDevAuthSession) {
      setError('Password changes are unavailable for local development fallback sessions.');
      return;
    }

    if (nextPassword.length < 8) {
      setError('Use a password with at least 8 characters.');
      return;
    }

    if (nextPassword !== confirmPassword) {
      setError('The new password and confirmation do not match.');
      return;
    }

    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password: nextPassword });
      if (updateError) throw updateError;

      setNextPassword('');
      setConfirmPassword('');
      setMessage('Your password has been updated.');
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : 'Failed to update password.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-16 pt-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-8 py-10 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
              Account Center
            </p>
            <h1 className="mt-4 text-4xl font-semibold">Security</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Maintain password hygiene, review session posture, and keep your administrative access
              resilient as the platform grows.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Icon name="LockClosedIcon" size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Change Password</h2>
                  <p className="text-sm text-gray-600">
                    Update your password for the current authenticated account.
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
                    New Password
                  </label>
                  <input
                    type="password"
                    value={nextPassword}
                    onChange={(event) => setNextPassword(event.target.value)}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                    placeholder="Minimum 8 characters"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                    placeholder="Repeat the new password"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => void handlePasswordUpdate()}
                  disabled={saving || loading || !user}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Icon name="KeyIcon" size={18} className="text-white" />
                  {saving ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            </section>

            <aside className="space-y-6">
              <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">Security Posture</h2>
                <div className="mt-5 space-y-4 text-sm text-gray-600">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="font-semibold text-gray-900">Account Type</p>
                    <p className="mt-1 uppercase tracking-[0.18em] text-emerald-700">
                      {user?.role || 'user'}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="font-semibold text-gray-900">Session Mode</p>
                    <p className="mt-1">
                      {isDevAuthSession
                        ? 'Development fallback session'
                        : 'Authenticated Supabase session'}
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">Recommended Next Steps</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600">
                  <li>Use a unique password that is not shared with other services.</li>
                  <li>Rotate administrative passwords after team or environment changes.</li>
                  <li>Future hardening should include 2FA and device/session management.</li>
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
