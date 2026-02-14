'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { getAuthorAvatar } from '@/utils/imageService';

interface AMASessionDetailProps {
  sessionId: string;
}

interface Question {
  id: string;
  question: string;
  upvotes: number;
  isAnswered: boolean;
  createdAt: string;
  userProfiles: {
    fullName: string;
    avatarUrl: string | null;
  };
  amaAnswers: Answer[];
}

interface Answer {
  id: string;
  answer: string;
  createdAt: string;
  userProfiles: {
    fullName: string;
    avatarUrl: string | null;
  };
}

export default function AMASessionDetail({ sessionId }: AMASessionDetailProps) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [newQuestion, setNewQuestion] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, [sessionId]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`/api/ama/questions?session_id=${sessionId}`);
      const data = await response.json();

      if (data.success) {
        const formatted = data.questions.map((q: any) => ({
          id: q.id,
          question: q.question,
          upvotes: q.upvotes,
          isAnswered: q.is_answered,
          createdAt: q.created_at,
          userProfiles: {
            fullName: q.user_profiles?.full_name || 'Anonymous',
            avatarUrl: q.user_profiles?.avatar_url,
          },
          amaAnswers:
            q.ama_answers?.map((a: any) => ({
              id: a.id,
              answer: a.answer,
              createdAt: a.created_at,
              userProfiles: {
                fullName: a.user_profiles?.full_name || 'Expert',
                avatarUrl: a.user_profiles?.avatar_url,
              },
            })) || [],
        }));
        setQuestions(formatted);
      }
    } catch (error) {
      console.error('Fetch questions error:', error);
    } finally {
      setLoading(false);
    }
  };

  const submitQuestion = async () => {
    if (!user || !newQuestion.trim()) return;

    setSubmitting(true);
    try {
      await fetch('/api/ama/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          question: newQuestion,
        }),
      });

      setNewQuestion('');
      fetchQuestions();
    } catch (error) {
      console.error('Submit question error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Ask Question Section */}
      {user && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Ask Your Question</h3>
          <div className="flex gap-3">
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={3}
              placeholder="What would you like to ask?"
            />
          </div>
          <button
            onClick={submitQuestion}
            disabled={submitting || !newQuestion.trim()}
            className="mt-3 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-semibold"
          >
            {submitting ? 'Submitting...' : 'Submit Question'}
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold text-foreground mb-6">Questions ({questions.length})</h3>

        {questions.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="ChatBubbleLeftIcon" size={48} className="mx-auto text-secondary mb-4" />
            <p className="text-secondary">No questions yet</p>
            <p className="text-sm text-secondary mt-2">Be the first to ask a question!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex gap-4">
                  {/* Upvote Section */}
                  <div className="flex flex-col items-center gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Icon name="ArrowUpIcon" size={20} className="text-secondary" />
                    </button>
                    <span className="text-sm font-semibold text-foreground">
                      {question.upvotes}
                    </span>
                  </div>

                  {/* Question Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <AppImage
                        src={getAuthorAvatar(question.userProfiles.fullName)}
                        alt={question.userProfiles.fullName}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-foreground">
                            {question.userProfiles.fullName}
                          </p>
                          {question.isAnswered && (
                            <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">
                              <Icon name="CheckIcon" size={12} />
                              Answered
                            </span>
                          )}
                        </div>
                        <p className="text-foreground">{question.question}</p>
                        <p className="text-xs text-secondary mt-1">
                          {new Date(question.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Answer */}
                    {question.amaAnswers.length > 0 && (
                      <div className="ml-12 mt-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                        {question.amaAnswers.map((answer) => (
                          <div key={answer.id}>
                            <div className="flex items-center gap-2 mb-2">
                              <AppImage
                                src={getAuthorAvatar(answer.userProfiles.fullName)}
                                alt={answer.userProfiles.fullName}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                              <div>
                                <p className="text-sm font-semibold text-primary">
                                  {answer.userProfiles.fullName} (Expert)
                                </p>
                                <p className="text-xs text-secondary">
                                  {new Date(answer.createdAt).toLocaleString()}
                                </p>
                              </div>
                            </div>
                            <p className="text-foreground">{answer.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
