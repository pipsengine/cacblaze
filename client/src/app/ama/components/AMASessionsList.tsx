'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { getAuthorAvatar } from '@/utils/imageService';
import Link from 'next/link';

interface AMASession {
  id: string;
  expertId: string;
  title: string;
  description: string;
  expertBio: string | null;
  expertTitle: string | null;
  category: string;
  scheduledAt: string;
  durationMinutes: number;
  status: string;
  participantCount: number;
  questionCount: number;
  userProfiles: {
    fullName: string;
    avatarUrl: string | null;
    role: string;
  };
}

export default function AMASessionsList() {
  const [sessions, setSessions] = useState<AMASession[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'upcoming' | 'live' | 'completed'>('upcoming');

  useEffect(() => {
    fetchSessions();
  }, [filter]);

  const fetchSessions = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/ama/sessions?status=${filter}&limit=20`);
      const data = await response.json();
      
      if (data.success) {
        const formatted = data.sessions.map((s: any) => ({
          id: s.id,
          expertId: s.expert_id,
          title: s.title,
          description: s.description,
          expertBio: s.expert_bio,
          expertTitle: s.expert_title,
          category: s.category,
          scheduledAt: s.scheduled_at,
          durationMinutes: s.duration_minutes,
          status: s.status,
          participantCount: s.participant_count,
          questionCount: s.question_count,
          userProfiles: {
            fullName: s.user_profiles?.full_name || 'Expert',
            avatarUrl: s.user_profiles?.avatar_url,
            role: s.user_profiles?.role || 'author',
          },
        }));
        setSessions(formatted);
      }
    } catch (error) {
      console.error('Fetch sessions error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      upcoming: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Upcoming' },
      live: { bg: 'bg-green-100', text: 'text-green-700', label: 'Live Now' },
      completed: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Completed' },
      cancelled: { bg: 'bg-red-100', text: 'text-red-700', label: 'Cancelled' },
    };
    const badge = badges[status as keyof typeof badges] || badges.upcoming;
    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
        {status === 'live' && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>}
        {badge.label}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="space-y-6">
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
    <div>
      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow-sm p-2 mb-6 flex gap-2">
        {(['upcoming', 'live', 'completed'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === tab
                ? 'bg-primary text-white' :'text-secondary hover:bg-gray-100'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Sessions Grid */}
      {sessions.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Icon name="CalendarIcon" size={48} className="mx-auto text-secondary mb-4" />
          <p className="text-lg text-secondary">No {filter} sessions at the moment</p>
          <p className="text-sm text-secondary mt-2">Check back soon for new AMA sessions</p>
        </div>
      ) : (
        <div className="space-y-6">
          {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusBadge(session.status)}
                      <span className="text-xs px-2 py-1 bg-gray-100 text-secondary rounded">
                        {session.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{session.title}</h2>
                    <p className="text-secondary">{session.description}</p>
                  </div>
                </div>

                {/* Expert Info */}
                <div className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <AppImage
                    src={getAuthorAvatar(session.userProfiles.avatarUrl)}
                    alt={session.userProfiles.fullName}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-foreground">{session.userProfiles.fullName}</p>
                    {session.expertTitle && (
                      <p className="text-sm text-primary font-medium">{session.expertTitle}</p>
                    )}
                    {session.expertBio && (
                      <p className="text-sm text-secondary mt-1">{session.expertBio}</p>
                    )}
                  </div>
                </div>

                {/* Session Details */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-secondary">
                  <div className="flex items-center gap-2">
                    <Icon name="CalendarIcon" size={16} />
                    <span>{new Date(session.scheduledAt).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="ClockIcon" size={16} />
                    <span>{new Date(session.scheduledAt).toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })} ({session.durationMinutes} mins)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="UserGroupIcon" size={16} />
                    <span>{session.participantCount} participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="ChatBubbleLeftIcon" size={16} />
                    <span>{session.questionCount} questions</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={`/ama/${session.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  {session.status === 'live' ? (
                    <>
                      <Icon name="PlayIcon" size={20} />
                      Join Live Session
                    </>
                  ) : session.status === 'upcoming' ? (
                    <>
                      <Icon name="BellIcon" size={20} />
                      Register for Session
                    </>
                  ) : (
                    <>
                      <Icon name="EyeIcon" size={20} />
                      View Session Recap
                    </>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}