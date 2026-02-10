'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { getAuthorAvatar } from '@/utils/imageService';
import { trackCommentAction } from '@/lib/analytics';

const API_URL = 'http://localhost:3001/api';

interface Comment {
  id: string;
  articleId: string;
  userId: string;
  parentId: string | null;
  content: string;
  status: 'pending' | 'approved' | 'rejected' | 'flagged';
  isAuthorResponse: boolean;
  createdAt: string;
  updatedAt: string;
  userProfiles: {
    fullName: string;
    avatarUrl: string | null;
    role: 'admin' | 'author' | 'user';
  };
  reactions: Reaction[];
  replies?: Comment[];
}

interface Reaction {
  id: string;
  commentId: string;
  userId: string;
  reactionType: 'like' | 'helpful' | 'insightful' | 'love';
}

interface CommentsProps {
  articleId: string;
}

const reactionIcons = {
  like: { icon: 'HandThumbUpIcon', label: 'Like' },
  helpful: { icon: 'CheckCircleIcon', label: 'Helpful' },
  insightful: { icon: 'LightBulbIcon', label: 'Insightful' },
  love: { icon: 'HeartIcon', label: 'Love' },
};

export default function CommentsSection({ articleId }: CommentsProps) {
  const { user, token } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  const fetchComments = async () => {
    try {
      const res = await fetch(`${API_URL}/comments/${articleId}`);
      if (!res.ok) throw new Error('Failed to fetch comments');
      
      const data = await res.json();

      // Convert backend data to frontend Comment interface
      const formattedComments = data.map((comment: any) => ({
        id: String(comment.id),
        articleId: comment.articleId,
        userId: String(comment.userId),
        parentId: comment.parentId ? String(comment.parentId) : null,
        content: comment.content,
        status: comment.status,
        isAuthorResponse: comment.isAuthorResponse,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
        userProfiles: {
          fullName: comment.user?.username || 'Anonymous',
          avatarUrl: null, // Placeholder
          role: comment.user?.role || 'user',
        },
        reactions: comment.reactions?.map((r: any) => ({
          id: String(r.id),
          commentId: String(r.commentId),
          userId: String(r.userId),
          reactionType: r.reactionType,
        })) || [],
      }));

      // Organize into threads
      const topLevelComments = formattedComments.filter((c: Comment) => !c.parentId);
      const commentMap = new Map(formattedComments.map((c: Comment) => [c.id, { ...c, replies: [] }]));

      formattedComments.forEach((comment: Comment) => {
        if (comment.parentId) {
          const parent = commentMap.get(comment.parentId);
          if (parent) {
            parent.replies = parent.replies || [];
            parent.replies.push(commentMap.get(comment.id)!);
          }
        }
      });

      setComments(topLevelComments.map((c: Comment) => commentMap.get(c.id)!));
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    try {
      const res = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          articleId,
          content: newComment.trim(),
        })
      });

      if (!res.ok) throw new Error('Failed to post comment');
      
      // Track comment post
      trackCommentAction('post', { articleId });
      
      setNewComment('');
      fetchComments(); // Refresh comments
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleSubmitReply = async (parentId: string) => {
    if (!user || !replyContent.trim()) return;

    try {
      const res = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          articleId,
          parentId,
          content: replyContent.trim(),
        })
      });

      if (!res.ok) throw new Error('Failed to post reply');
      
      // Track reply
      trackCommentAction('reply', { articleId, commentId: parentId });
      
      setReplyContent('');
      setReplyingTo(null);
      fetchComments(); // Refresh comments
    } catch (error) {
      console.error('Error posting reply:', error);
    }
  };

  const handleEditComment = async (commentId: string) => {
    if (!user || !editContent.trim()) return;

    try {
      const res = await fetch(`${API_URL}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          content: editContent.trim(),
        })
      });

      if (!res.ok) throw new Error('Failed to edit comment');
      
      // Track edit
      trackCommentAction('edit', { articleId, commentId });
      
      setEditingId(null);
      setEditContent('');
      fetchComments(); // Refresh comments
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!user || !confirm('Are you sure you want to delete this comment?')) return;

    try {
      const res = await fetch(`${API_URL}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error('Failed to delete comment');
      
      // Track deletion
      trackCommentAction('delete', { articleId, commentId });
      fetchComments(); // Refresh comments
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleReaction = async (commentId: string, reactionType: string) => {
    if (!user) return;

    try {
      const res = await fetch(`${API_URL}/comments/${commentId}/reaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ reactionType })
      });

      if (!res.ok) throw new Error('Failed to toggle reaction');
        
      // Track reaction
      trackCommentAction('reaction', { articleId, commentId, reactionType });
      fetchComments(); // Refresh comments
    } catch (error) {
      console.error('Error handling reaction:', error);
    }
  };

  const renderComment = (comment: Comment, isReply = false) => {
    const isEditing = editingId === comment.id;
    // Ensure both are strings for comparison
    const isOwner = String(user?.id) === String(comment.userId);
    const reactionCounts = comment.reactions?.reduce((acc: any, r) => {
      acc[r.reactionType] = (acc[r.reactionType] || 0) + 1;
      return acc;
    }, {});

    return (
      <div key={comment.id} className={`${isReply ? 'ml-12 mt-4' : 'mb-6'}`}>
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/20 transition-colors">
          {/* Comment Header */}
          <div className="flex items-start gap-4 mb-4">
            <AppImage
              src={comment.userProfiles?.avatarUrl || getAuthorAvatar(comment.userProfiles?.fullName || 'User')}
              alt={`${comment.userProfiles?.fullName} avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-foreground">{comment.userProfiles?.fullName}</span>
                {comment.isAuthorResponse && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Author
                  </span>
                )}
                {comment.userProfiles?.role === 'admin' && (
                  <Icon name="ShieldCheckIcon" size={16} className="text-primary" variant="solid" />
                )}
              </div>
              <span className="text-sm text-secondary">
                {new Date(comment.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
            {isOwner && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEditingId(comment.id);
                    setEditContent(comment.content);
                  }}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Icon name="PencilIcon" size={18} />
                </button>
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-secondary hover:text-destructive transition-colors"
                >
                  <Icon name="TrashIcon" size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Comment Content */}
          {isEditing ? (
            <div className="mb-4">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={3}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEditComment(comment.id)}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setEditContent('');
                  }}
                  className="px-4 py-2 bg-gray-200 text-foreground rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-foreground leading-relaxed mb-4">{comment.content}</p>
          )}

          {/* Reactions and Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            {/* Reaction Buttons */}
            <div className="flex items-center gap-2">
              {Object.entries(reactionIcons).map(([type, { icon, label }]) => {
                const count = reactionCounts?.[type] || 0;
                const userReacted = comment.reactions?.some(
                  (r) => String(r.userId) === String(user?.id) && r.reactionType === type
                );
                return (
                  <button
                    key={type}
                    onClick={() => handleReaction(comment.id, type)}
                    disabled={!user}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                      userReacted
                        ? 'bg-primary/10 text-primary' :'bg-gray-100 text-secondary hover:bg-gray-200'
                    } ${!user ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title={label}
                  >
                    <Icon name={icon} size={16} variant={userReacted ? 'solid' : 'outline'} />
                    {count > 0 && <span className="font-medium">{count}</span>}
                  </button>
                );
              })}
            </div>

            {/* Reply Button */}
            {user && (
              <button
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                className="flex items-center gap-1 text-secondary hover:text-primary transition-colors text-sm font-medium"
              >
                <Icon name="ChatBubbleLeftIcon" size={16} />
                Reply
              </button>
            )}
          </div>

          {/* Reply Form */}
          {replyingTo === comment.id && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write your reply..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={3}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleSubmitReply(comment.id)}
                  disabled={!replyContent.trim()}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post Reply
                </button>
                <button
                  onClick={() => {
                    setReplyingTo(null);
                    setReplyContent('');
                  }}
                  className="px-4 py-2 bg-gray-200 text-foreground rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Render Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4">{comment.replies.map((reply) => renderComment(reply, true))}</div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Comments & Discussion</h2>
        <p className="text-secondary">
          {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
        </p>
      </div>

      {/* New Comment Form */}
      {user ? (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={4}
            />
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                Post Comment
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="mb-8 bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
          <p className="text-secondary mb-4">Sign in to join the discussion</p>
          <a
            href="/login"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Sign In
          </a>
        </div>
      )}

      {/* Comments List */}
      <div>
        {comments.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-secondary text-lg">No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => renderComment(comment))
        )}
      </div>
    </div>
  );
}
