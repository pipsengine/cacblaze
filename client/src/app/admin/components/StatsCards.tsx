'use client';

import { UserStats } from '@/types/user';
import Icon from '@/components/ui/AppIcon';

interface StatsCardsProps {
  stats: UserStats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      label: 'Total Users',
      value: stats.totalUsers,
      icon: 'UsersIcon',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      label: 'Active Users',
      value: stats.activeUsers,
      icon: 'CheckCircleIcon',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      label: 'Admins',
      value: stats.adminCount,
      icon: 'ShieldCheckIcon',
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
    },
    {
      label: 'Editors',
      value: stats.editorCount,
      icon: 'PencilSquareIcon',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      label: 'Authors',
      value: stats.authorCount,
      icon: 'DocumentTextIcon',
      color: 'bg-indigo-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
    {
      label: 'New This Month',
      value: stats.newUsersThisMonth,
      icon: 'SparklesIcon',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center`}
            >
              <Icon name={card.icon as any} size={24} className={card.textColor} />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">{card.value}</p>
          <p className="text-sm text-secondary">{card.label}</p>
        </div>
      ))}
    </div>
  );
}
