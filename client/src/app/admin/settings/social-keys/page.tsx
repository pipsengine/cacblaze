'use client';

import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';

type PlatformKey =
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'instagram'
  | 'youtube'
  | 'whatsapp';

type PlatformConfig = {
  label: string;
  fields: { name: string; label: string; type?: string }[];
};

const PLATFORM_CONFIGS: Record<PlatformKey, PlatformConfig> = {
  facebook: {
    label: 'Facebook',
    fields: [
      { name: 'appId', label: 'App ID' },
      { name: 'appSecret', label: 'App Secret' },
      { name: 'accessToken', label: 'Access Token' },
      { name: 'pageId', label: 'Page ID' },
    ],
  },
  twitter: {
    label: 'X (Twitter)',
    fields: [
      { name: 'clientId', label: 'Client ID' },
      { name: 'clientSecret', label: 'Client Secret' },
      { name: 'accessToken', label: 'Access Token' },
    ],
  },
  linkedin: {
    label: 'LinkedIn',
    fields: [
      { name: 'clientId', label: 'Client ID' },
      { name: 'clientSecret', label: 'Client Secret' },
      { name: 'accessToken', label: 'Access Token' },
      { name: 'organizationId', label: 'Organization ID' },
    ],
  },
  instagram: {
    label: 'Instagram',
    fields: [
      { name: 'appId', label: 'App ID' },
      { name: 'appSecret', label: 'App Secret' },
      { name: 'accessToken', label: 'Access Token' },
      { name: 'businessAccountId', label: 'Business Account ID' },
    ],
  },
  youtube: {
    label: 'YouTube',
    fields: [
      { name: 'apiKey', label: 'API Key' },
      { name: 'clientId', label: 'Client ID' },
      { name: 'clientSecret', label: 'Client Secret' },
      { name: 'channelId', label: 'Channel ID' },
    ],
  },
  whatsapp: {
    label: 'WhatsApp Business',
    fields: [
      { name: 'businessId', label: 'Business Account ID' },
      { name: 'accessToken', label: 'Access Token' },
      { name: 'phoneNumberId', label: 'Phone Number ID' },
    ],
  },
};

type StatusItem = {
  platform: PlatformKey;
  enabled: boolean;
  configured: boolean;
  updatedAt: string | null;
};

function PlatformCard({
  platform,
  status,
  onRefresh,
}: {
  platform: PlatformKey;
  status: StatusItem | undefined;
  onRefresh: () => void;
}) {
  const config = useMemo(() => PLATFORM_CONFIGS[platform], [platform]);
  const [enabled, setEnabled] = useState<boolean>(status?.enabled ?? false);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [credentials, setCredentials] = useState<Record<string, string>>(
    Object.fromEntries(config.fields.map((f) => [f.name, '']))
  );

  useEffect(() => {
    setEnabled(status?.enabled ?? false);
  }, [status]);

  const onChangeField = (name: string, value: string) => {
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const onSave = async () => {
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      // Only send non-empty credentials; this preserves existing secrets unless updated.
      const filtered: Record<string, string> = {};
      for (const [k, v] of Object.entries(credentials)) {
        if (v && v.trim() !== '') filtered[k] = v.trim();
      }
      const res = await fetch(`/api/admin/social-keys/${platform}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled, credentials: filtered }),
      });
      const data = await res.json();
      if (!res.ok || data?.error) {
        throw new Error(data?.error || 'Save failed');
      }
      setMessage('Saved successfully');
      onRefresh();
      // Reset inputs to blank after save to avoid showing secrets
      setCredentials(Object.fromEntries(config.fields.map((f) => [f.name, ''])));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unexpected error');
    } finally {
      setSaving(false);
    }
  };

  const onTest = async () => {
    setTesting(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch(`/api/admin/social-keys/${platform}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credentials }),
      });
      const data = await res.json();
      if (data?.ok) {
        setMessage('Connection check passed');
      } else if (data?.missing?.length) {
        setError(`Missing fields: ${data.missing.join(', ')}`);
      } else {
        setError('Connection check failed');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unexpected error');
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <Icon name="Cog6ToothIcon" className="text-gray-600" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{config.label}</h3>
            <p className="text-sm text-gray-500">
              {status?.configured ? 'Configured' : 'Not configured'}
              {status?.updatedAt ? ` • Updated ${new Date(status.updatedAt).toLocaleString()}` : ''}
            </p>
          </div>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          <span className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {config.fields.map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
            <input
              type={f.type ?? 'password'}
              name={f.name}
              value={credentials[f.name] || ''}
              placeholder={status?.configured ? '********' : ''}
              onChange={(e) => onChangeField(f.name, e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60"
        >
          <Icon name="CheckCircleIcon" size={18} />
          {saving ? 'Saving…' : 'Save'}
        </button>
        <button
          onClick={onTest}
          disabled={testing}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 disabled:opacity-60"
        >
          <Icon name="BoltIcon" size={18} />
          {testing ? 'Testing…' : 'Test Connection'}
        </button>
        {message && <span className="text-green-600 text-sm">{message}</span>}
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </div>
    </div>
  );
}

export default function SocialKeysSettingsPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Admin', href: '/admin' },
    { name: 'Settings', href: '/admin/settings' },
    { name: 'Social API Keys', href: '/admin/settings/social-keys' },
  ];

  const [status, setStatus] = useState<StatusItem[]>([]);
  const [loading, setLoading] = useState(true);
  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/social-keys');
      const data = await res.json();
      setStatus(data?.items || []);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);

  const grid: PlatformKey[] = [
    'facebook',
    'twitter',
    'linkedin',
    'instagram',
    'youtube',
    'whatsapp',
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Social Media API Keys
            </h1>
            <p className="text-gray-600">
              Manage encrypted credentials for auto-posting and future automation.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {grid.map((p) => (
                <PlatformCard
                  key={p}
                  platform={p}
                  status={status.find((s) => s.platform === p)}
                  onRefresh={load}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
