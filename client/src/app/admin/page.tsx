'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import PermissionsView from './components/PermissionsView';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import AuditLog from './components/AuditLog';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'users' | 'audit'>('users');
  const [isPermissionsOpen, setIsPermissionsOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const { user, userRole, loading } = useAuth();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          ) : !user || userRole !== 'admin' ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
                <Icon name="ShieldExclamationIcon" size={28} className="text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Access Restricted</h2>
              <p className="text-secondary">
                You need an administrator account to view the User Administration dashboard.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">User Administration</h1>
                  <p className="text-secondary">Manage users, roles, permissions, and audit logs</p>
                </div>
                <button
                  onClick={() => setIsPermissionsOpen(true)}
                  className="px-4 py-2 border border-gray-300 text-secondary rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <Icon name="InformationCircleIcon" size={20} />
                  View Roles & Permissions
                </button>
              </div>

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
                      Users
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('audit')}
                    className={`px-6 py-4 font-semibold transition-colors ${
                      activeTab === 'audit'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-secondary hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon name="ClipboardDocumentListIcon" size={20} />
                      Audit Log
                    </div>
                  </button>
                </div>

                <div className="p-6">
                  {activeTab === 'users' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <UserList onUserSelect={(id) => setSelectedUserId(id)} />
                      </div>
                      <div>
                        <UserProfile userId={selectedUserId} />
                      </div>
                    </div>
                  ) : (
                    <AuditLog />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {isPermissionsOpen && <PermissionsView onClose={() => setIsPermissionsOpen(false)} />}

      <Footer />
    </>
  );
}
