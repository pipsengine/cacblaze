'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'author' | 'user';
  bio: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface UserProfileProps {
  userId: string | null;
}

export default function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    full_name: string;
    bio: string;
    role: 'admin' | 'author' | 'user';
    is_active: boolean;
  }>({
    full_name: '',
    bio: '',
    role: 'user',
    is_active: true,
  });
  useEffect(() => {
    if (userId) {
      void fetchUserProfile();
    }
  }, [userId]);

  const fetchUserProfile = async () => {
    if (!userId) return;

    setLoading(true);
    try {
      setError(null);
      const response = await fetch(`/api/admin/users/${userId}`, { cache: 'no-store' });
      const payload = (await response.json().catch(() => null)) as
        | { user?: UserProfile; error?: string }
        | null;

      if (!response.ok || !payload?.user) {
        throw new Error(payload?.error || 'Failed to load user profile');
      }

      setUser(payload.user);
      setFormData({
        full_name: payload.user.full_name,
        bio: payload.user.bio || '',
        role: payload.user.role,
        is_active: payload.user.is_active,
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setError(error instanceof Error ? error.message : 'Failed to load user profile');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!userId) return;

    try {
      setError(null);
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) throw new Error(payload?.error || 'Failed to update user profile');

      setEditing(false);
      await fetchUserProfile();
    } catch (error) {
      console.error('Error updating user profile:', error);
      setError(error instanceof Error ? error.message : 'Failed to update user profile');
    }
  };

  if (!userId) {
    return (
      <div className="text-center py-12">
        <Icon name="UserCircleIcon" size={64} className="text-gray-300 mx-auto mb-4" />
        <p className="text-secondary">Select a user to view their profile</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary">User not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground">User Profile</h3>
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="PencilIcon" size={16} className="text-white" />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditing(false);
                setFormData({
                  full_name: user.full_name,
                  bio: user.bio || '',
                  role: user.role,
                  is_active: user.is_active,
                });
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
          {editing ? (
            <input
              type="text"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ) : (
            <p className="text-secondary">{user.full_name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
          <p className="text-secondary">{user.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Role</label>
          {editing ? (
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="user">User</option>
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </select>
          ) : (
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                user.role === 'admin'
                  ? 'bg-red-100 text-red-700'
                  : user.role === 'author'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
              }`}
            >
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Status</label>
          {editing ? (
            <select
              value={formData.is_active ? 'active' : 'inactive'}
              onChange={(e) => setFormData({ ...formData, is_active: e.target.value === 'active' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          ) : (
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                user.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {user.is_active ? 'Active' : 'Inactive'}
            </span>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
          {editing ? (
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="User bio..."
            />
          ) : (
            <p className="text-secondary">{user.bio || 'No bio provided'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Joined</label>
          <p className="text-secondary">{new Date(user.created_at).toLocaleString()}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Last Updated</label>
          <p className="text-secondary">{new Date(user.updated_at).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
