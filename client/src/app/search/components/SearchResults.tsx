import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  matchScore: number;
  image: string;
  imageAlt: string;
  href: string;
}

interface SearchResultsProps {
  query: string;
  results: SearchResult[];
}

const SearchResults = ({ query, results }: SearchResultsProps) => {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-secondary">
          Found <span className="font-semibold text-foreground">{results.length}</span> results for{' '}
          <span className="font-semibold text-foreground">"{query}"</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-sm text-foreground focus:outline-none focus:border-primary">
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {results.map((result) => (
          <Link
            key={result.id}
            href={result.href}
            className="group flex gap-6 p-6 rounded-3xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift"
          >
            {/* Image */}
            <div className="w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0 hidden md:block">
              <AppImage
                src={result.image}
                alt={result.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                      {result.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Icon name="CheckCircleIcon" size={14} className="text-success" />
                      <span className="text-xs text-muted-foreground">Verified</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {result.title}
                  </h3>
                  <p className="text-secondary text-sm mb-3 line-clamp-2 leading-relaxed">
                    {result.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-success/10 text-success px-3 py-1 rounded-full flex-shrink-0">
                  <span className="text-xs font-semibold">{Math.round(result.matchScore * 100)}%</span>
                  <span className="text-xs">match</span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="UserIcon" size={14} />
                  <span>{result.author}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Icon name="ClockIcon" size={14} />
                  <span>{result.readTime}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Icon name="CalendarIcon" size={14} />
                  <span>{result.date}</span>
                </div>
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <button className="px-8 py-4 border-2 border-gray-200 text-foreground rounded-2xl font-semibold hover:border-primary transition-all hover-lift">
          Load More Results
        </button>
      </div>
    </div>
  );
};

export default SearchResults;