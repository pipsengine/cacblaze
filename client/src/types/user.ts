export type UserRole = 'admin' | 'author' | 'editor' | 'user';

export interface Permission {
  id: string;
  name: string;
  description: string;
  category: 'content' | 'users' | 'settings' | 'analytics';
}

export interface RolePermissions {
  role: UserRole;
  permissions: string[];
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  avatarUrl?: string;
  bio?: string;
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
  metadata?: {
    articlesPublished?: number;
    commentsCount?: number;
    loginCount?: number;
  };
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  target?: string;
  details?: string;
  timestamp: string;
  ipAddress?: string;
}

export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  adminCount: number;
  authorCount: number;
  editorCount: number;
  regularUserCount: number;
  newUsersThisMonth: number;
}
