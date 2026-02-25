import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { getContextualImage, getAuthorAvatar } from '@/utils/imageService';

interface GuideCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  authorImage: string;
  authorImageAlt: string;
  rating: number;
  image: string;
  imageAlt: string;
  date: string;
  href: string;
  isNew?: boolean;
}

const GuideCard = ({
  id,
  title,
  excerpt,
  category,
  readTime,
  author,
  authorImage,
  authorImageAlt,
  rating,
  image,
  imageAlt,
  date,
  href,
  isNew = false,
}: GuideCardProps) => {
  const contextualImage = getContextualImage({
    category,
    title,
    alt: imageAlt,
    width: 800,
    height: 600,
    preferCurated: true,
  });
  const displayImage =
    image && image.length > 0
      ? { src: image, alt: imageAlt || contextualImage.alt }
      : contextualImage;

  // Get author avatar
  const authorAvatar = getAuthorAvatar(author);

  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <AppImage
          src={displayImage.src}
          alt={displayImage.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground">
            {category}
          </span>
        </div>

        {/* New Badge */}
        {isNew && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-success text-white text-xs font-semibold">
              New
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">{excerpt}</p>

        {/* Author & Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AppImage
              src={authorAvatar}
              alt={`${author} profile picture`}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-foreground">{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="StarIcon" size={16} className="text-warning fill-current" />
            <span className="text-sm font-semibold text-foreground">{rating}</span>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="ClockIcon" size={16} />
            <span className="text-xs">{readTime}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="CalendarIcon" size={16} />
            <span className="text-xs">{date}</span>
          </div>
          <Icon
            name="ArrowRightIcon"
            size={16}
            className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
          />
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;
