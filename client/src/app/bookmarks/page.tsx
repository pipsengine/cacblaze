import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BookmarksManager from './components/BookmarksManager';
import ReadingListsManager from './components/ReadingListsManager';

export const metadata: Metadata = {
  title: 'My Bookmarks & Reading Lists',
  description: 'Manage your saved articles and curated reading lists',
};

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Library</h1>
            <p className="text-lg text-secondary">Manage your bookmarks and reading lists</p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BookmarksManager />
            <ReadingListsManager />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
