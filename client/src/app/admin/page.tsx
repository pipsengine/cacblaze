'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import { userManagementService } from '@/services/userManagementService';
import { User, UserRole, UserStats } from '@/types/user';
import UserList from './components/UserList';
import UserModal from './components/UserModal';
import ActivityLog from './components/ActivityLog';
import StatsCards from './components/StatsCards';
import PermissionsView from './components/PermissionsView';

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [activeTab, setActiveTab] = useState<'users' | 'activity'>('users');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPermissionsOpen, setIsPermissionsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<UserRole | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    loadData();
    const user = userManagementService.getCurrentUser();
    setCurrentUser(user);
  }, []);

  const loadData = () => {
    let filteredUsers = userManagementService.getAllUsers();

    // Apply search
    if (searchQuery) {
      filteredUsers = userManagementService.searchUsers(searchQuery);
    }

    // Apply role filter
    if (roleFilter !== 'all') {
      filteredUsers = filteredUsers.filter(u => u.role === roleFilter);
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filteredUsers = filteredUsers.filter(u => 
        statusFilter === 'active' ? u.isActive : !u.isActive
      );
    }

    setUsers(filteredUsers);
    setStats(userManagementService.getUserStats());
  };

  useEffect(() => {
    loadData();
  }, [searchQuery, roleFilter, statusFilter]);

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        userManagementService.deleteUser(userId);
        loadData();
      } catch (error) {
        alert(error instanceof Error ? error.message : 'Failed to delete user');
      }
    }
  };

  const handleToggleStatus = (userId: string) => {
    try {
      userManagementService.toggleUserStatus(userId);
      loadData();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to update user status');
    }
  };

  const handleRoleChange = (userId: string, newRole: UserRole) => {
    try {
      userManagementService.updateUserRole(userId, newRole);
      loadData();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to update user role');
    }
  };

  const handleSaveUser = (userData: Omit<User, 'id' | 'createdAt'>) => {
    try {
      if (selectedUser) {
        userManagementService.updateUser(selectedUser.id, userData);
      } else {
        userManagementService.createUser(userData);
      }
      setIsModalOpen(false);
      loadData();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to save user');
    }
  };

  // Check if current user has admin permissions
  const isAdmin = currentUser?.role === 'admin';

  if (!isAdmin && currentUser) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center py-20">
            <Icon name="ShieldExclamationIcon" size={64} className="mx-auto text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-secondary mb-8">You don't have permission to access this page.</p>
            <a href="/homepage" className="text-primary hover:underline">Return to Homepage</a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">User Administration</h1>
              <p className="text-secondary">Manage users, roles, and permissions</p>
            </div>
            <button
              onClick={() => setIsPermissionsOpen(true)}
              className="px-4 py-2 border border-gray-300 text-secondary rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Icon name="InformationCircleIcon" size={20} />
              View Roles & Permissions
            </button>
          </div>

          {/* Stats Cards */}
          {stats && <StatsCards stats={stats} />}

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('users')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'users'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-secondary hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon name="UsersIcon" size={20} />
                  User Management
                </div>
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'activity'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-secondary hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon name="ClockIcon" size={20} />
                  Activity Log
                </div>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'users' ? (
                <>
                  {/* Filters and Actions */}
                  <div className="flex flex-col lg:flex-row gap-4 mb-6">
                    {/* Search */}
                    <div className="flex-1">
                      <div className="relative">
                        <Icon
                          name="MagnifyingGlassIcon"
                          size={20}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
                        />
                        <input
                          type="text"
                          placeholder="Search users by name, email, or role..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Role Filter */}
                    <select
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value as UserRole | 'all')}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="all">All Roles</option>
                      <option value="admin">Admin</option>
                      <option value="editor">Editor</option>
                      <option value="author">Author</option>
                      <option value="user">User</option>
                    </select>

                    {/* Status Filter */}
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as 'all' | 'active' | 'inactive')}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>

                    {/* Create User Button */}
                    <button
                      onClick={handleCreateUser}
                      className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap"
                    >
                      <Icon name="PlusIcon" size={20} className="text-white" />
                      Add User
                    </button>
                  </div>

                  {/* User List */}
                  <UserList
                    users={users}
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                    onToggleStatus={handleToggleStatus}
                    onRoleChange={handleRoleChange}
                  />
                </>
              ) : (
                <ActivityLog />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* User Modal */}
      {isModalOpen && (
        <UserModal
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveUser}
        />
      )}

      {/* Permissions View */}
      {isPermissionsOpen && (
        <PermissionsView onClose={() => setIsPermissionsOpen(false)} />
      )}

      <Footer />
    </>
  );
}
