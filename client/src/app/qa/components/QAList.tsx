'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { getAuthorAvatar } from '@/utils/imageService';
import { useAuth } from '@/contexts/AuthContext';

interface Question {
  id: string;
  userId: string;
  category: string;
  title: string;
  content: string;
  status: string;
  upvotes: number;
  viewCount: number;
  createdAt: string;
  userProfiles: {
    fullName: string;
    avatarUrl: string | null;
    role: string;
  };
  qaAnswers: Answer[];
}

interface Answer {
  id: string;
  content: string;
  isAccepted: boolean;
  upvotes: number;
  createdAt: string;
  userProfiles: {
    fullName: string;
    avatarUrl: string | null;
    role: string;
  };
}

export default function QAList() {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [answerContent, setAnswerContent] = useState('');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/qa/questions?limit=20');
      const data = await response.json();
      
      if (data.success) {
        const formatted = data.questions.map((q: any) => ({
          id: q.id,
          userId: q.user_id,
          category: q.category,
          title: q.title,
          content: q.content,
          status: q.status,
          upvotes: q.upvotes,
          viewCount: q.view_count,
          createdAt: q.created_at,
          userProfiles: {
            fullName: q.user_profiles?.full_name || 'Anonymous',
            avatarUrl: q.user_profiles?.avatar_url,
            role: q.user_profiles?.role || 'user',
          },
          qaAnswers: q.qa_answers?.map((a: any) => ({
            id: a.id,
            content: a.content,
            isAccepted: a.is_accepted,
            upvotes: a.upvotes,
            createdAt: a.created_at,
            userProfiles: {
              fullName: a.user_profiles?.full_name || 'Anonymous',
              avatarUrl: a.user_profiles?.avatar_url,
              role: a.user_profiles?.role || 'user',
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

  const submitAnswer = async () => {
    if (!user || !selectedQuestion || !answerContent.trim()) return;

    try {
      await fetch('/api/qa/answers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question_id: selectedQuestion.id,
          content: answerContent,
        }),
      });
      
      setAnswerContent('');
      setSelectedQuestion(null);
      fetchQuestions();
    } catch (error) {
      console.error('Submit answer error:', error);
    }
  };

  const upvoteQuestion = async (questionId: string) => {
    if (!user) {
      alert('Please sign in to upvote');
      return;
    }

    try {
      await fetch('/api/qa/upvotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question_id: questionId }),
      });
      fetchQuestions();
    } catch (error) {
      console.error('Upvote error:', error);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div key={question.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex gap-4">
            {/* Upvote Section */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => upvoteQuestion(question.id)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icon name="ArrowUpIcon" size={24} className="text-secondary" />
              </button>
              <span className="text-lg font-semibold text-foreground">{question.upvotes}</span>
            </div>

            {/* Question Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{question.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {question.category}
                    </span>
                    <span className="text-xs text-secondary">
                      {question.qaAnswers.length} answers
                    </span>
                    <span className="text-xs text-secondary">
                      {question.viewCount} views
                    </span>
                  </div>
                </div>
                {question.status === 'answered' && (
                  <span className="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                    <Icon name="CheckCircleIcon" size={16} />
                    Answered
                  </span>
                )}
              </div>

              <p className="text-secondary mb-4">{question.content}</p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <AppImage
                  src={getAuthorAvatar(question.userProfiles.avatarUrl)}
                  alt={question.userProfiles.fullName}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{question.userProfiles.fullName}</p>
                  <p className="text-xs text-secondary">
                    {new Date(question.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Answers */}
              {question.qaAnswers.length > 0 && (
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-4">
                  {question.qaAnswers.map((answer) => (
                    <div key={answer.id} className="flex gap-3">
                      <AppImage
                        src={getAuthorAvatar(answer.userProfiles.avatarUrl)}
                        alt={answer.userProfiles.fullName}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-foreground">{answer.userProfiles.fullName}</p>
                          {answer.isAccepted && (
                            <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">
                              <Icon name="CheckIcon" size={12} />
                              Accepted
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-secondary">{answer.content}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="flex items-center gap-1 text-xs text-secondary hover:text-primary">
                            <Icon name="ArrowUpIcon" size={14} />
                            {answer.upvotes}
                          </button>
                          <span className="text-xs text-secondary">
                            {new Date(answer.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Answer Button */}
              <button
                onClick={() => setSelectedQuestion(question)}
                className="mt-4 flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium"
              >
                <Icon name="ChatBubbleLeftIcon" size={16} />
                Answer this question
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Answer Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">Your Answer</h3>
              <button onClick={() => setSelectedQuestion(null)} className="text-secondary hover:text-foreground">
                <Icon name="XMarkIcon" size={24} />
              </button>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-semibold text-foreground mb-1">{selectedQuestion.title}</p>
              <p className="text-sm text-secondary">{selectedQuestion.content}</p>
            </div>

            <textarea
              value={answerContent}
              onChange={(e) => setAnswerContent(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={6}
              placeholder="Write your answer here..."
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={submitAnswer}
                disabled={!answerContent.trim()}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                Submit Answer
              </button>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="px-4 py-2 bg-gray-100 text-foreground rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}