"use client";

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { getAuthorAvatar } from '@/utils/imageService';

interface AuthorBoxProps {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  articlesCount: number;
  verified: boolean;
}

const AuthorBox = ({
  name,
  role,
  bio,
  expertise,
  articlesCount,
  verified
}: AuthorBoxProps) => {
  const authorAvatar = getAuthorAvatar(name);

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
      <div className="flex items-start gap-6">
        {/* Author Avatar */}
        <div className="relative flex-shrink-0">
          <AppImage
            src={authorAvatar}
            alt={`${name} profile picture`}
            className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg"
          />
          {verified && (
            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-white">
              <Icon name="CheckBadgeIcon" size={20} className="text-white" variant="solid" />
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {name}
              </h3>
              <p className="text-sm text-secondary font-medium">{role}</p>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200">
              <Icon name="StarIcon" size={16} className="text-warning fill-current" />
              <span className="text-sm font-semibold text-foreground">
                {expertise?.length || 0}
              </span>
            </div>
          </div>

          <p className="text-base text-secondary leading-relaxed mb-4 text-justify">
            {bio}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="DocumentTextIcon" size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{articlesCount}</p>
                <p className="text-xs text-secondary">Articles</p>
              </div>
            </div>
            {verified && (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                  <Icon name="ShieldCheckIcon" size={20} className="text-success" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Verified</p>
                  <p className="text-xs text-secondary">Expert</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBox;