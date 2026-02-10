import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AMASessionsList from './components/AMASessionsList';

export const metadata: Metadata = {
  title: 'Expert AMA Sessions - CACBLAZE',
  description: 'Join live Ask Me Anything sessions with Nigerian tech professionals and industry experts',
};

export default function AMAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 mb-12 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Expert AMA Sessions</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Connect with Nigerian tech professionals, entrepreneurs, and industry leaders.
              Ask questions, learn from their experience, and grow your career.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Learn from Experts</h3>
              <p className="text-sm text-secondary">Get insights from successful professionals in tech, business, and finance</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ask Anything</h3>
              <p className="text-sm text-secondary">Submit questions and get real answers from industry veterans</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Live Interaction</h3>
              <p className="text-sm text-secondary">Participate in real-time Q&A sessions with upvoting and discussions</p>
            </div>
          </div>

          {/* Sessions List */}
          <AMASessionsList />
        </div>
      </main>

      <Footer />
    </div>
  );
}