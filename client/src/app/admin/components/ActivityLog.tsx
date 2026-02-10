'use client';

import { useState, useEffect } from 'react';
import { userManagementService } from '@/services/userManagementService';
import { ActivityLog as ActivityLogType } from '@/types/user';
import Icon from '@/components/ui/AppIcon';

export default function ActivityLog() {
  const [logs, setLogs] = useState<ActivityLogType[]>([]);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    loadLogs();
  }, [limit]);

  const loadLogs = () => {
    const activityLogs = userManagementService.getActivityLogs(limit);
    setLogs(activityLogs);
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

  const handleClearLogs = () => {
    if (window.confirm('Are you sure you want to clear all activity logs? This action cannot be undone.')) {
      userManagementService.clearActivityLogs();
      loadLogs();
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
      {logs.length === 0 ? (
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
                    {log.details && (
                      <p className="text-xs text-secondary mt-1">{log.details}</p>
                    )}
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
