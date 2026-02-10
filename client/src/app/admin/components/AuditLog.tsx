'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Icon from '@/components/ui/AppIcon';

interface AuditLog {
  id: string;
  action_type: string;
  details: any;
  created_at: string;
  admin_profiles: {
    full_name: string;
    email: string;
  };
  target_profiles: {
    full_name: string;
    email: string;
  } | null;
}

export default function AuditLog() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'user_actions' | 'content_actions'>('all');
  const supabase = createClient();

  useEffect(() => {
    fetchAuditLogs();
  }, [filter]);

  const fetchAuditLogs = async () => {
    try {
      let query = supabase
        .from('admin_audit_logs')
        .select(`
          *,
          admin_profiles:user_profiles!admin_audit_logs_admin_id_fkey(
            full_name,
            email
          ),
          target_profiles:user_profiles!admin_audit_logs_target_user_id_fkey(
            full_name,
            email
          )
        `)
        .order('created_at', { ascending: false })
        .limit(50);

      if (filter === 'user_actions') {
        query = query.in('action_type', ['user_created', 'user_updated', 'user_deleted', 'user_role_changed', 'user_status_changed']);
      } else if (filter === 'content_actions') {
        query = query.in('action_type', ['comment_moderated', 'content_deleted']);
      }

      const { data, error } = await query;

      if (error) throw error;
      setLogs(data || []);
    } catch (error) {
      console.error('Error fetching audit logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActionIcon = (actionType: string) => {
    if (actionType.includes('user')) return 'UserIcon';
    if (actionType.includes('comment')) return 'ChatBubbleLeftIcon';
    if (actionType.includes('content')) return 'DocumentIcon';
    return 'ClockIcon';
  };

  const getActionColor = (actionType: string) => {
    if (actionType.includes('deleted')) return 'text-red-600';
    if (actionType.includes('created')) return 'text-green-600';
    if (actionType.includes('updated') || actionType.includes('changed')) return 'text-blue-600';
    return 'text-gray-600';
  };

  const formatActionType = (actionType: string) => {
    return actionType
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filter */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'all' ?'bg-primary text-white' :'bg-gray-100 text-secondary hover:bg-gray-200'
          }`}
        >
          All Actions
        </button>
        <button
          onClick={() => setFilter('user_actions')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'user_actions' ?'bg-primary text-white' :'bg-gray-100 text-secondary hover:bg-gray-200'
          }`}
        >
          User Actions
        </button>
        <button
          onClick={() => setFilter('content_actions')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'content_actions' ?'bg-primary text-white' :'bg-gray-100 text-secondary hover:bg-gray-200'
          }`}
        >
          Content Actions
        </button>
      </div>

      {/* Audit Log List */}
      <div className="space-y-4">
        {logs.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="ClockIcon" size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-secondary">No audit logs found</p>
          </div>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-4">
                <Icon
                  name={getActionIcon(log.action_type) as any}
                  size={24}
                  className={getActionColor(log.action_type)}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">
                      {formatActionType(log.action_type)}
                    </h4>
                    <span className="text-xs text-secondary">
                      {new Date(log.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-secondary mb-2">
                    <span className="font-medium">{log.admin_profiles?.full_name}</span>
                    {' performed this action'}
                    {log.target_profiles && (
                      <>
                        {' on '}
                        <span className="font-medium">{log.target_profiles.full_name}</span>
                      </>
                    )}
                  </p>
                  {log.details && Object.keys(log.details).length > 0 && (
                    <div className="bg-white rounded p-2 text-xs text-secondary font-mono">
                      {JSON.stringify(log.details, null, 2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}