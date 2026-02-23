'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { ActivityLog as ActivityLogType } from '@/types/user';
import Icon from '@/components/ui/AppIcon';

export default function ActivityLog() {
  const [logs, setLogs] = useState<ActivityLogType[]>([]);
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchLogs();
  }, [limit]);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('audit_logs')
        .select(
          `
          id,
          action_type,
          details,
          created_at,
          admin_profiles:admin_user_id(full_name,email),
          target_profiles:target_user_id(full_name,email)
        `
        )
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;

      const mapped: ActivityLogType[] =
        (data || []).map((row: any) => ({
          id: row.id,
          userId: row.admin_user_id || '',
          userName: row.admin_profiles?.full_name || row.admin_profiles?.email || 'Admin',
          action: row.action_type.replace(/_/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()),
          target:
            (row.target_profiles &&
              (row.target_profiles.full_name || row.target_profiles.email)) ||
            undefined,
          details:
            typeof row.details === 'string'
              ? row.details
              : row.details
              ? JSON.stringify(row.details)
              : undefined,
          timestamp: row.created_at,
        })) ?? [];

      setLogs(mapped);
    } catch (e) {
      console.error('Failed to load audit logs:', e);
      setLogs([]);
    } finally {
      setLoading(false);
    }
  };

  const getActionIcon = (action: string) => {
    if (action.includes('Created')) return 'PlusCircleIcon';
    if (action.includes('Updated') || action.includes('Changed')) return 'PencilIcon';
    if (action.includes('Deleted')) return 'TrashIcon';
    if (action.includes('Activated')) return 'CheckCircleIcon';
    if (action.includes('Deactivated')) return 'XCircleIcon';
    return 'ClockIcon';
  };

  const getActionColor = (action: string) => {
    if (action.includes('Created')) return 'text-green-600';
    if (action.includes('Updated') || action.includes('Changed')) return 'text-blue-600';
    if (action.includes('Deleted')) return 'text-red-600';
    if (action.includes('Activated')) return 'text-green-600';
    if (action.includes('Deactivated')) return 'text-orange-600';
    return 'text-gray-600';
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleClearLogs = async () => {
    if (
      !window.confirm(
        'Are you sure you want to clear all activity logs? This action cannot be undone.'
      )
    ) {
      return;
    }
    try {
      const { error } = await supabase.from('audit_logs').delete().neq('id', '');
      if (error) throw error;
      fetchLogs();
    } catch (e) {
      console.error('Failed to clear audit logs:', e);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">Activity Log</h3>
          <p className="text-sm text-secondary">Track all user management activities</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          >
            <option value={25}>Last 25</option>
            <option value={50}>Last 50</option>
            <option value={100}>Last 100</option>
            <option value={500}>Last 500</option>
          </select>
          <button
            onClick={handleClearLogs}
            className="px-4 py-2 border border-red-300 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors text-sm"
          >
            Clear Logs
          </button>
        </div>
      </div>

      {/* Activity List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
        </div>
      ) : logs.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="ClockIcon" size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-secondary">No activity logs found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {/* Icon */}
              <div className={`mt-1 ${getActionColor(log.action)}`}>
                <Icon name={getActionIcon(log.action) as any} size={20} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{log.action}</p>
                    <p className="text-sm text-secondary mt-1">
                      <span className="font-medium">{log.userName}</span>
                      {log.target && (
                        <>
                          {' '}
                          <span className="text-gray-400">→</span> {log.target}
                        </>
                      )}
                    </p>
                    {log.details && <p className="text-xs text-secondary mt-1">{log.details}</p>}
                  </div>
                  <span className="text-xs text-secondary whitespace-nowrap">
                    {formatTimestamp(log.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
