'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';

interface ModerationComment {
  id: string;
  content: string;
  status: 'pending' | 'approved' | 'rejected' | 'flagged';
  createdAt: string;
  userProfiles: {
    fullName: string;
    email: string;
  };
  flags: {
    id: string;
    reason: string;
    userProfiles: {
      fullName: string;
    };
  }[];
}

interface ModerationPanelProps {
  articleId: string;
}

export default function ModerationPanel({ articleId }: ModerationPanelProps) {
  const { user } = useAuth();
  const [comments, setComments] = useState<ModerationComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'flagged'>('all');
  const [isAuthorOrAdmin, setIsAuthorOrAdmin] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    checkPermissions();
  }, [user]);

  useEffect(() => {
    if (isAuthorOrAdmin) {
      fetchComments();
    }
  }, [isAuthorOrAdmin, filter]);

  const checkPermissions = async () => {
    if (!user) {
      setIsAuthorOrAdmin(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      setIsAuthorOrAdmin(data?.role === 'admin' || data?.role === 'author');
    } catch (error) {
      console.error('Error checking permissions:', error);
      setIsAuthorOrAdmin(false);
    }
  };

  const fetchComments = async () => {
    try {
      let query = supabase
        .from('comments')
        .select(`
          *,
          user_profiles:user_profiles!comments_user_id_fkey(
            full_name,
            email
          ),
          flags:comment_flags(
            id,
            reason,
            user_profiles:user_profiles!comment_flags_user_id_fkey(
              full_name
            )
          )
        `)
        .eq('article_id', articleId)
        .order('created_at', { ascending: false });

      if (filter === 'pending') {
        query = query.eq('status', 'pending');
      } else if (filter === 'flagged') {
        query = query.eq('status', 'flagged');
      }

      const { data, error } = await query;

      if (error) throw error;

      const formattedComments = data?.map((comment: any) => ({
        id: comment.id,
        content: comment.content,
        status: comment.status,
        createdAt: comment.created_at,
        userProfiles: {
          fullName: comment.user_profiles?.full_name || 'Anonymous',
          email: comment.user_profiles?.email || '',
        },
        flags: comment.flags?.map((f: any) => ({
          id: f.id,
          reason: f.reason,
          userProfiles: {
            fullName: f.user_profiles?.full_name || 'Anonymous',
          },
        })) || [],
      })) || [];

      setComments(formattedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (commentId: string, newStatus: 'approved' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ status: newStatus })
        .eq('id', commentId);

      if (error) throw error;
      fetchComments();
    } catch (error) {
      console.error('Error updating comment status:', error);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!confirm('Are you sure you want to permanently delete this comment?')) return;

    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleDismissFlag = async (flagId: string, commentId: string) => {
    try {
      // Delete the flag
      const { error: flagError } = await supabase
        .from('comment_flags')
        .delete()
        .eq('id', flagId);

      if (flagError) throw flagError;

      // Update comment status to approved if no more flags
      const { data: remainingFlags } = await supabase
        .from('comment_flags')
        .select('id')
        .eq('comment_id', commentId);

      if (!remainingFlags || remainingFlags.length === 0) {
        await supabase
          .from('comments')
          .update({ status: 'approved' })
          .eq('id', commentId);
      }

      fetchComments();
    } catch (error) {
      console.error('Error dismissing flag:', error);
    }
  };

  if (!user || !isAuthorOrAdmin) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Icon name="ShieldCheckIcon" size={28} className="text-primary" variant="solid" />
          <h3 className="text-2xl font-bold text-foreground">Moderation Panel</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all' ?'bg-primary text-white' :'bg-gray-100 text-secondary hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'pending' ?'bg-primary text-white' :'bg-gray-100 text-secondary hover:bg-gray-200'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('flagged')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'flagged' ?'bg-primary text-white' :'bg-gray-100 text-secondary hover:bg-gray-200'
            }`}
          >
            Flagged
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="CheckCircleIcon" size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-secondary">No comments to moderate</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              {/* Comment Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold text-foreground">{comment.userProfiles.fullName}</p>
                  <p className="text-sm text-secondary">{comment.userProfiles.email}</p>
                  <p className="text-xs text-secondary mt-1">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    comment.status === 'approved' ?'bg-success/10 text-success'
                      : comment.status === 'pending' ?'bg-warning/10 text-warning'
                      : comment.status === 'flagged' ?'bg-destructive/10 text-destructive' :'bg-gray-200 text-gray-600'
                  }`}
                >
                  {comment.status.toUpperCase()}
                </span>
              </div>

              {/* Comment Content */}
              <p className="text-foreground mb-4 leading-relaxed">{comment.content}</p>

              {/* Flags */}
              {comment.flags && comment.flags.length > 0 && (
                <div className="mb-4 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <p className="text-sm font-semibold text-destructive mb-2">
                    Flagged by {comment.flags.length} {comment.flags.length === 1 ? 'user' : 'users'}:
                  </p>
                  {comment.flags.map((flag) => (
                    <div key={flag.id} className="flex items-start justify-between mb-2 last:mb-0">
                      <div>
                        <p className="text-sm text-foreground">
                          <span className="font-medium">{flag.userProfiles.fullName}:</span> {flag.reason}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDismissFlag(flag.id, comment.id)}
                        className="text-xs text-secondary hover:text-primary transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                {comment.status !== 'approved' && (
                  <button
                    onClick={() => handleUpdateStatus(comment.id, 'approved')}
                    className="flex items-center gap-2 px-4 py-2 bg-success text-white rounded-lg hover:bg-success/90 transition-colors"
                  >
                    <Icon name="CheckIcon" size={16} />
                    Approve
                  </button>
                )}
                {comment.status !== 'rejected' && (
                  <button
                    onClick={() => handleUpdateStatus(comment.id, 'rejected')}
                    className="flex items-center gap-2 px-4 py-2 bg-warning text-white rounded-lg hover:bg-warning/90 transition-colors"
                  >
                    <Icon name="XMarkIcon" size={16} />
                    Reject
                  </button>
                )}
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-destructive text-white rounded-lg hover:bg-destructive/90 transition-colors"
                >
                  <Icon name="TrashIcon" size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
