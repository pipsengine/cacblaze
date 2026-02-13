import { Metadata } from 'next/server';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import QAList from './components/QAList';
import AskQuestionButton from './components/AskQuestionButton';

export const metadata: Metadata = {
  title: 'Community Q&A - CACBLAZE',
  description: 'Ask questions and get answers from the Nigerian tech community',
};

export default function QAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 mb-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Community Q&A</h1>
            <p className="text-lg opacity-90 mb-6">
              Ask questions, share knowledge, and learn from the Nigerian tech community
            </p>
            <AskQuestionButton />
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              {['Technology', 'Education', 'Finance', 'Lifestyle', 'Business', 'Career'].map(
                (cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 bg-gray-100 text-foreground rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Questions List */}
          <QAList />
        </div>
      </main>

      <Footer />
    </div>
  );
}
