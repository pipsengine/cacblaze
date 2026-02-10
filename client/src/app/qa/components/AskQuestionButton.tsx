'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';
import { useRouter } from 'next/navigation';

export default function AskQuestionButton() {
  const { user } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState('Technology');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const categories = ['Technology', 'Education', 'Finance', 'Lifestyle', 'Business', 'Career'];

  const handleSubmit = async () => {
    if (!user) {
      router?.push('/login');
      return;
    }

    if (!title?.trim() || !content?.trim()) return;

    setLoading(true);
    try {
      await fetch('/api/qa/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, title, content }),
      });
      
      setTitle('');
      setContent('');
      setShowModal(false);
      window.location?.reload();
    } catch (error) {
      console.error('Submit question error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-50 transition-colors font-semibold"
      >
        <Icon name="PlusIcon" size={20} />
        Ask a Question
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Ask a Question</h3>
              <button onClick={() => setShowModal(false)} className="text-secondary hover:text-foreground">
                <Icon name="XMarkIcon" size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e?.target?.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories?.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Question Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e?.target?.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., How do I deploy Next.js app to production?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Details *</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e?.target?.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={6}
                  placeholder="Provide more details about your question..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={loading || !title?.trim() || !content?.trim()}
                  className="flex-1 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-semibold"
                >
                  {loading ? 'Submitting...' : 'Post Question'}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-3 bg-gray-100 text-foreground rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}