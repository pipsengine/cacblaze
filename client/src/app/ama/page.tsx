import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AMASessionsList from './components/AMASessionsList';

export const metadata: Metadata = {
  title: 'Expert AMA Sessions - CACBLAZE',
  description:
    'Join live Ask Me Anything sessions with Nigerian tech professionals and industry experts',
};

export default function AMAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 mb-12 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Expert AMA Sessions</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Connect with Nigerian tech professionals, entrepreneurs, and industry leaders. Ask
              questions, learn from their experience, and grow your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Learn from Experts</h3>
              <p className="text-sm text-secondary">
                Get insights from successful professionals in tech, business, and finance
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ask Anything</h3>
              <p className="text-sm text-secondary">
                Submit questions and get real answers from industry veterans
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Live Interaction</h3>
              <p className="text-sm text-secondary">
                Participate in real-time Q&A sessions with upvoting and discussions
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">How AMA Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3 text-sm text-secondary">
                <div>
                  <h4 className="text-foreground font-semibold">Purpose</h4>
                  <p>Learn directly from experienced practitioners through focused, time‑boxed sessions.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Format</h4>
                  <p>Experts host live threads; participants submit questions and upvote helpful answers.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Scope</h4>
                  <p>Topics span engineering, product, business, finance, and career development.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Outcomes</h4>
                  <p>Actionable guidance, references, and patterns you can apply immediately.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-secondary">
                <div>
                  <h4 className="text-foreground font-semibold">Participation</h4>
                  <p>Ask concise, well‑scoped questions with context and goals; avoid broad hypotheticals.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Etiquette</h4>
                  <p>Be respectful, keep threads tidy, and accept the most accurate answer.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Follow‑Up</h4>
                  <p>Share results, edits, or learnings so future readers benefit from your implementation.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Recording</h4>
                  <p>Key takeaways and references are summarized after each session.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Ask Better Questions</h3>
              <div className="space-y-2 text-sm text-secondary">
                <div>
                  <h4 className="text-foreground font-semibold">Title</h4>
                  <p>Capture the core problem in one specific sentence.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Context</h4>
                  <p>List environment, versions, configuration, and relevant constraints.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Minimal Repro</h4>
                  <p>Provide the smallest example that triggers the issue consistently.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Expected vs Actual</h4>
                  <p>State the goal, observed behavior, and exact error messages.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Prior Attempts</h4>
                  <p>Explain what you tried and why it didn’t work so far.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Answer With Impact</h3>
              <div className="space-y-2 text-sm text-secondary">
                <div>
                  <h4 className="text-foreground font-semibold">Direct Steps</h4>
                  <p>Provide a clear sequence with code samples and expected outputs.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Reasoning</h4>
                  <p>Explain why it works; note performance, reliability, and caveats.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">References</h4>
                  <p>Link official docs and credible resources for follow‑up reading.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Safety</h4>
                  <p>Highlight secure patterns and avoid sharing secrets or private data.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-3">Session Guidelines</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-secondary">
              <div className="space-y-2">
                <h4 className="text-foreground font-semibold">Moderation</h4>
                <p>Keep discussions constructive; report spam or abuse promptly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-foreground font-semibold">Formatting</h4>
                <p>Use code blocks and clear structure to improve readability.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-foreground font-semibold">Discoverability</h4>
                <p>Add precise tags so experts find your question quickly.</p>
              </div>
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
