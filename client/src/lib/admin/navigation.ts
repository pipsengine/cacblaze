export type AdminNavItem = {
  id: string;
  label: string;
  href: string;
  icon: string;
  description: string;
  badge?: string;
};

export type AdminNavSection = {
  id: string;
  label: string;
  items: AdminNavItem[];
};

export const adminNavigationSections: AdminNavSection[] = [
  {
    id: 'workspace',
    label: 'Workspace',
    items: [
      {
        id: 'overview',
        label: 'Overview',
        href: '/admin',
        icon: 'Squares2X2Icon',
        description: 'Executive overview of publishing health, output, and operational alerts.',
      },
      {
        id: 'users',
        label: 'Users',
        href: '/admin/users',
        icon: 'UsersIcon',
        description: 'Manage access, lifecycle state, roles, and individual user records.',
      },
      {
        id: 'content',
        label: 'Content Ops',
        href: '/admin/content',
        icon: 'DocumentDuplicateIcon',
        description: 'Track editorial inventory, publishing flow, and recent release activity.',
      },
      {
        id: 'automation',
        label: 'Automation',
        href: '/admin/automation',
        icon: 'BoltIcon',
        description: 'Monitor generation cadence, scheduler state, and approval automation.',
      },
      {
        id: 'analytics',
        label: 'Analytics',
        href: '/admin/analytics',
        icon: 'ChartBarSquareIcon',
        description: 'Review category mix, publishing performance, and growth readiness.',
      },
    ],
  },
  {
    id: 'governance',
    label: 'Governance',
    items: [
      {
        id: 'security',
        label: 'Security',
        href: '/admin/security',
        icon: 'ShieldCheckIcon',
        description: 'Audit actions, operational safeguards, and access governance posture.',
      },
      {
        id: 'settings',
        label: 'Settings',
        href: '/admin/settings',
        icon: 'Cog6ToothIcon',
        description: 'Configure platform integrations and administrative system settings.',
      },
    ],
  },
];

export const adminNavigationItems = adminNavigationSections.flatMap((section) => section.items);

export function getAdminNavItem(pathname: string) {
  return (
    adminNavigationItems.find((item) => item.href === pathname) ||
    adminNavigationItems.find((item) => pathname.startsWith(`${item.href}/`)) ||
    adminNavigationItems[0]
  );
}
