'use client';

import { UserStats } from '@/types/user';
import Icon from '@/components/ui/AppIcon';
import { adminCardThemes } from '@/components/admin/cardThemes';

interface StatsCardsProps {
  stats: UserStats;
}

type StatsCard = {
  label: string;
  value: number;
  icon: string;
  theme: keyof typeof adminCardThemes;
};

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards: StatsCard[] = [
    {
      label: 'Total Users',
      value: stats.totalUsers,
      icon: 'UsersIcon',
      theme: 'sky',
    },
    {
      label: 'Active Users',
      value: stats.activeUsers,
      icon: 'CheckCircleIcon',
      theme: 'emerald',
    },
    {
      label: 'Admins',
      value: stats.adminCount,
      icon: 'ShieldCheckIcon',
      theme: 'rose',
    },
    {
      label: 'Authors',
      value: stats.authorCount,
      icon: 'DocumentTextIcon',
      theme: 'indigo',
    },
    {
      label: 'New This Month',
      value: stats.newUsersThisMonth,
      icon: 'SparklesIcon',
      theme: 'amber',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
      {cards.map((card, index) => {
        const theme = adminCardThemes[card.theme];

        return (
          <div
            key={index}
            className={`rounded-[1.5rem] border p-6 transition-shadow hover:shadow-md ${theme.surface}`}
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.iconWrap}`}
              >
                <Icon name={card.icon} size={24} className={theme.iconColor} />
              </div>
            </div>
            <p className={`mb-1 text-3xl font-bold ${theme.value}`}>{card.value}</p>
            <p className="text-sm text-secondary">{card.label}</p>
          </div>
        );
      })}
    </div>
  );
}
