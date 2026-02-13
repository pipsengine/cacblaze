'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface ReadingList {
  id: string;
  name: string;
  description: string | null;
  isPublic: boolean;
  createdAt: string;
  items: ReadingListItem[];
}

interface ReadingListItem {
  id: string;
  articleId: string;
  articleTitle: string;
  articleCategory: string;
}

export default function ReadingListsManager() {
  const { user } = useAuth();
  const [lists, setLists] = useState<ReadingList[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [newListDescription, setNewListDescription] = useState('');

  useEffect(() => {
    if (user) {
      fetchLists();
    }
  }, [user]);

  const fetchLists = async () => {
    try {
      const response = await fetch('/api/reading-lists');
      const data = await response.json();

      if (data.success) {
        const formatted = data.lists.map((list: any) => ({
          id: list.id,
          name: list.name,
          description: list.description,
          isPublic: list.is_public,
          createdAt: list.created_at,
          items:
            list.reading_list_items?.map((item: any) => ({
              id: item.id,
              articleId: item.article_id,
              articleTitle: item.article_title,
              articleCategory: item.article_category,
            })) || [],
        }));
        setLists(formatted);
      }
    } catch (error) {
      console.error('Fetch lists error:', error);
    } finally {
      setLoading(false);
    }
  };

  const createList = async () => {
    if (!newListName.trim()) return;

    try {
      await fetch('/api/reading-lists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newListName,
          description: newListDescription,
          is_public: false,
        }),
      });

      setNewListName('');
      setNewListDescription('');
      setShowCreateModal(false);
      fetchLists();
    } catch (error) {
      console.error('Create list error:', error);
    }
  };

  if (!user) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <Icon name="ListBulletIcon" size={48} className="mx-auto text-secondary mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Sign in to create lists</h3>
        <p className="text-secondary mb-4">Organize articles into custom reading lists</p>
        <Link
          href="/login"
          className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Sign In
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="animate-pulse space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Reading Lists</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="PlusIcon" size={20} />
            <span className="text-sm font-medium">New List</span>
          </button>
        </div>
      </div>

      <div className="p-6">
        {lists.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="ListBulletIcon" size={48} className="mx-auto text-secondary mb-4" />
            <p className="text-secondary">No reading lists yet</p>
            <p className="text-sm text-secondary mt-2">
              Create lists to organize your favorite articles
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {lists.map((list) => (
              <div
                key={list.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{list.name}</h3>
                  <span className="text-sm text-secondary">{list.items.length} articles</span>
                </div>
                {list.description && (
                  <p className="text-sm text-secondary mb-3">{list.description}</p>
                )}
                {list.items.length > 0 && (
                  <div className="space-y-2">
                    {list.items.slice(0, 3).map((item) => (
                      <Link
                        key={item.id}
                        href={`/guides/${item.articleId}`}
                        className="block text-sm text-foreground hover:text-primary transition-colors"
                      >
                        • {item.articleTitle}
                      </Link>
                    ))}
                    {list.items.length > 3 && (
                      <p className="text-xs text-secondary">+ {list.items.length - 3} more</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create List Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">Create Reading List</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-secondary hover:text-foreground"
              >
                <Icon name="XMarkIcon" size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  List Name *
                </label>
                <input
                  type="text"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., Tech Learning Path"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Description
                </label>
                <textarea
                  value={newListDescription}
                  onChange={(e) => setNewListDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  placeholder="What is this list about?"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={createList}
                  disabled={!newListName.trim()}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  Create List
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 bg-gray-100 text-foreground rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
