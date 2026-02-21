import { User, UserRole, ActivityLog, UserStats, Permission, RolePermissions } from '@/types/user';

const USERS_STORAGE_KEY = 'cacblaze_users';
const ACTIVITY_LOG_KEY = 'cacblaze_activity_log';
const CURRENT_USER_KEY = 'cacblaze_current_user';

// Default permissions configuration
const PERMISSIONS: Permission[] = [
  {
    id: 'content.create',
    name: 'Create Content',
    description: 'Create new articles and guides',
    category: 'content',
  },
  {
    id: 'content.edit',
    name: 'Edit Content',
    description: 'Edit existing content',
    category: 'content',
  },
  {
    id: 'content.delete',
    name: 'Delete Content',
    description: 'Delete content',
    category: 'content',
  },
  {
    id: 'content.publish',
    name: 'Publish Content',
    description: 'Publish content to live site',
    category: 'content',
  },
  {
    id: 'users.view',
    name: 'View Users',
    description: 'View user list and profiles',
    category: 'users',
  },
  {
    id: 'users.create',
    name: 'Create Users',
    description: 'Create new user accounts',
    category: 'users',
  },
  {
    id: 'users.edit',
    name: 'Edit Users',
    description: 'Edit user profiles and roles',
    category: 'users',
  },
  {
    id: 'users.delete',
    name: 'Delete Users',
    description: 'Delete user accounts',
    category: 'users',
  },
  {
    id: 'settings.view',
    name: 'View Settings',
    description: 'View system settings',
    category: 'settings',
  },
  {
    id: 'settings.edit',
    name: 'Edit Settings',
    description: 'Modify system settings',
    category: 'settings',
  },
  {
    id: 'analytics.view',
    name: 'View Analytics',
    description: 'View analytics and reports',
    category: 'analytics',
  },
];

const ROLE_PERMISSIONS: RolePermissions[] = [
  {
    role: 'admin',
    permissions: PERMISSIONS.map((p) => p.id), // All permissions
  },
  {
    role: 'editor',
    permissions: [
      'content.create',
      'content.edit',
      'content.delete',
      'content.publish',
      'users.view',
      'analytics.view',
    ],
  },
  {
    role: 'author',
    permissions: ['content.create', 'content.edit', 'analytics.view'],
  },
  {
    role: 'user',
    permissions: [],
  },
];

class UserManagementService {
  // Initialize with default admin user if no users exist
  private initializeDefaultUsers(): void {
    const users = this.getAllUsers();
    if (users.length === 0) {
      const defaultAdmin: User = {
        id: 'admin-001',
        email: 'admin@cacsms.com',
        fullName: 'Admin User',
        role: 'admin',
        isActive: true,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        metadata: {
          articlesPublished: 0,
          commentsCount: 0,
          loginCount: 1,
        },
      };
      this.saveUsers([defaultAdmin]);
      this.logActivity({
        userId: defaultAdmin.id,
        userName: defaultAdmin.fullName,
        action: 'System Initialization',
        details: 'Default admin user created',
      });
    }
  }

  // User CRUD Operations
  getAllUsers(): User[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(USERS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading users:', error);
      return [];
    }
  }

  getUserById(id: string): User | null {
    const users = this.getAllUsers();
    return users.find((user) => user.id === id) || null;
  }

  getUserByEmail(email: string): User | null {
    const users = this.getAllUsers();
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
  }

  private saveUsers(users: User[]): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users:', error);
    }
  }

  createUser(userData: Omit<User, 'id' | 'createdAt'>): User {
    const users = this.getAllUsers();

    // Check if email already exists
    if (this.getUserByEmail(userData.email)) {
      throw new Error('User with this email already exists');
    }

    const newUser: User = {
      ...userData,
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      metadata: {
        articlesPublished: 0,
        commentsCount: 0,
        loginCount: 0,
      },
    };

    users.push(newUser);
    this.saveUsers(users);

    const currentUser = this.getCurrentUser();
    this.logActivity({
      userId: currentUser?.id || 'system',
      userName: currentUser?.fullName || 'System',
      action: 'User Created',
      target: newUser.email,
      details: `New user created with role: ${newUser.role}`,
    });

    return newUser;
  }

  updateUser(id: string, updates: Partial<User>): User {
    const users = this.getAllUsers();
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new Error('User not found');
    }

    // Prevent email duplication
    if (updates.email) {
      const existingUser = this.getUserByEmail(updates.email);
      if (existingUser && existingUser.id !== id) {
        throw new Error('Email already in use');
      }
    }

    const updatedUser = { ...users[index], ...updates };
    users[index] = updatedUser;
    this.saveUsers(users);

    const currentUser = this.getCurrentUser();
    this.logActivity({
      userId: currentUser?.id || id,
      userName: currentUser?.fullName || updatedUser.fullName,
      action: 'User Updated',
      target: updatedUser.email,
      details: `User profile updated`,
    });

    return updatedUser;
  }

  deleteUser(id: string): boolean {
    const users = this.getAllUsers();
    const user = users.find((u) => u.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    // Prevent deleting the last admin
    if (user.role === 'admin') {
      const adminCount = users.filter((u) => u.role === 'admin').length;
      if (adminCount <= 1) {
        throw new Error('Cannot delete the last admin user');
      }
    }

    const filteredUsers = users.filter((u) => u.id !== id);
    this.saveUsers(filteredUsers);

    const currentUser = this.getCurrentUser();
    this.logActivity({
      userId: currentUser?.id || 'system',
      userName: currentUser?.fullName || 'System',
      action: 'User Deleted',
      target: user.email,
      details: `User account deleted`,
    });

    return true;
  }

  // Role Management
  updateUserRole(userId: string, newRole: UserRole): User {
    const user = this.getUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Prevent changing the last admin's role
    if (user.role === 'admin' && newRole !== 'admin') {
      const users = this.getAllUsers();
      const adminCount = users.filter((u) => u.role === 'admin').length;
      if (adminCount <= 1) {
        throw new Error('Cannot change role of the last admin user');
      }
    }

    const currentUser = this.getCurrentUser();
    this.logActivity({
      userId: currentUser?.id || 'system',
      userName: currentUser?.fullName || 'System',
      action: 'Role Changed',
      target: user.email,
      details: `Role changed from ${user.role} to ${newRole}`,
    });

    return this.updateUser(userId, { role: newRole });
  }

  toggleUserStatus(userId: string): User {
    const user = this.getUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Prevent deactivating the last admin
    if (user.role === 'admin' && user.isActive) {
      const users = this.getAllUsers();
      const activeAdminCount = users.filter((u) => u.role === 'admin' && u.isActive).length;
      if (activeAdminCount <= 1) {
        throw new Error('Cannot deactivate the last active admin user');
      }
    }

    const currentUser = this.getCurrentUser();
    this.logActivity({
      userId: currentUser?.id || 'system',
      userName: currentUser?.fullName || 'System',
      action: user.isActive ? 'User Deactivated' : 'User Activated',
      target: user.email,
      details: `User status changed to ${!user.isActive ? 'active' : 'inactive'}`,
    });

    return this.updateUser(userId, { isActive: !user.isActive });
  }

  // Permissions
  getAllPermissions(): Permission[] {
    return PERMISSIONS;
  }

  getRolePermissions(role: UserRole): string[] {
    const rolePerms = ROLE_PERMISSIONS.find((rp) => rp.role === role);
    return rolePerms?.permissions || [];
  }

  hasPermission(userId: string, permissionId: string): boolean {
    const user = this.getUserById(userId);
    if (!user || !user.isActive) return false;

    const userPermissions = this.getRolePermissions(user.role);
    return userPermissions.includes(permissionId);
  }

  // Activity Logging
  logActivity(activity: Omit<ActivityLog, 'id' | 'timestamp'>): void {
    if (typeof window === 'undefined') return;

    try {
      const logs = this.getActivityLogs();
      const newLog: ActivityLog = {
        ...activity,
        id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString(),
      };

      logs.unshift(newLog); // Add to beginning

      // Keep only last 1000 logs
      const trimmedLogs = logs.slice(0, 1000);
      localStorage.setItem(ACTIVITY_LOG_KEY, JSON.stringify(trimmedLogs));
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  }

  getActivityLogs(limit?: number): ActivityLog[] {
    if (typeof window === 'undefined') return [];

    try {
      const data = localStorage.getItem(ACTIVITY_LOG_KEY);
      const logs = data ? JSON.parse(data) : [];
      return limit ? logs.slice(0, limit) : logs;
    } catch (error) {
      console.error('Error loading activity logs:', error);
      return [];
    }
  }

  getUserActivityLogs(userId: string, limit?: number): ActivityLog[] {
    const allLogs = this.getActivityLogs();
    const userLogs = allLogs.filter((log) => log.userId === userId);
    return limit ? userLogs.slice(0, limit) : userLogs;
  }

  clearActivityLogs(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(ACTIVITY_LOG_KEY, JSON.stringify([]));
  }

  // Statistics
  getUserStats(): UserStats {
    const users = this.getAllUsers();
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    return {
      totalUsers: users.length,
      activeUsers: users.filter((u) => u.isActive).length,
      adminCount: users.filter((u) => u.role === 'admin').length,
      authorCount: users.filter((u) => u.role === 'author').length,
      editorCount: users.filter((u) => u.role === 'editor').length,
      regularUserCount: users.filter((u) => u.role === 'user').length,
      newUsersThisMonth: users.filter((u) => new Date(u.createdAt) >= firstDayOfMonth).length,
    };
  }

  // Current User Management (for session)
  setCurrentUser(user: User): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  }

  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    try {
      const data = localStorage.getItem(CURRENT_USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error loading current user:', error);
      return null;
    }
  }

  clearCurrentUser(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(CURRENT_USER_KEY);
  }

  // Search and Filter
  searchUsers(query: string): User[] {
    const users = this.getAllUsers();
    const lowerQuery = query.toLowerCase();

    return users.filter(
      (user) =>
        user.fullName.toLowerCase().includes(lowerQuery) ||
        user.email.toLowerCase().includes(lowerQuery) ||
        user.role.toLowerCase().includes(lowerQuery)
    );
  }

  filterUsersByRole(role: UserRole): User[] {
    const users = this.getAllUsers();
    return users.filter((user) => user.role === role);
  }

  filterUsersByStatus(isActive: boolean): User[] {
    const users = this.getAllUsers();
    return users.filter((user) => user.isActive === isActive);
  }
}

// Export singleton instance
export const userManagementService = new UserManagementService();

// Initialize on first import
if (typeof window !== 'undefined') {
  userManagementService['initializeDefaultUsers']();
}
