'use client';

import Icon from '@/components/ui/AppIcon';

interface PermissionsViewProps {
  onClose: () => void;
}

export default function PermissionsView({ onClose }: PermissionsViewProps) {
  const rolePermissions = [
    {
      role: 'Admin',
      color: 'bg-red-100 text-red-700',
      icon: 'ShieldCheckIcon',
      permissions: [
        'Full system access',
        'User management (create, edit, delete users)',
        'Role assignments',
        'Content management (create, edit, delete, publish)',
        'View analytics and reports',
        'System settings',
        'Activity log access',
      ],
    },
    {
      role: 'Editor',
      color: 'bg-purple-100 text-purple-700',
      icon: 'PencilSquareIcon',
      permissions: [
        'Create and edit content',
        'Delete content',
        'Publish content',
        'View user list',
        'View analytics',
        'Cannot manage users or system settings',
      ],
    },
    {
      role: 'Author',
      color: 'bg-blue-100 text-blue-700',
      icon: 'DocumentTextIcon',
      permissions: [
        'Create new content',
        'Edit own content',
        'View analytics for own content',
        'Cannot publish or delete content',
        'Cannot access user management',
      ],
    },
    {
      role: 'User',
      color: 'bg-gray-100 text-gray-700',
      icon: 'UserIcon',
      permissions: [
        'Basic read access',
        'View published content',
        'Cannot create or edit content',
        'Cannot access admin features',
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Roles & Permissions</h2>
            <p className="text-sm text-secondary mt-1">Understanding user roles in CACBLAZE</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Icon name="XMarkIcon" size={24} className="text-secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {rolePermissions.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}
                >
                  <Icon name={item.icon as any} size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
                </div>
              </div>
              <ul className="space-y-2">
                {item.permissions.map((permission, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-secondary">
                    <Icon
                      name="CheckCircleIcon"
                      size={16}
                      className="text-green-600 mt-0.5 flex-shrink-0"
                    />
                    <span>{permission}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Icon
                name="InformationCircleIcon"
                size={24}
                className="text-blue-600 flex-shrink-0"
              />
              <div>
                <h4 className="font-bold text-foreground mb-2">Quick Tips</h4>
                <ul className="space-y-1 text-sm text-secondary">
                  <li>• You can change user roles directly from the user list</li>
                  <li>• At least one admin must remain active in the system</li>
                  <li>• All role changes are logged in the activity log</li>
                  <li>• Inactive users cannot access the system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
