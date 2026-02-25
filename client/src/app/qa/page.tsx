import { Metadata } from 'next';
import { headers } from 'next/headers';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import QAList from './components/QAList';
import AskQuestionButton from './components/AskQuestionButton';

export const metadata: Metadata = {
  title: 'Community Q&A - CACBLAZE',
  description: 'Ask questions and get answers from the Nigerian tech community',
  alternates: { canonical: '/qa' },
};

export default async function QAPage() {
  const h = await headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:4028';
  const baseUrl = `${proto}://${host}`;
  const qaWebPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Community Q&A',
    description: 'Ask questions and get answers from the Nigerian tech community',
    url: `${baseUrl}/qa`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Community', item: `${baseUrl}/community` },
        { '@type': 'ListItem', position: 3, name: 'Q&A', item: `${baseUrl}/qa` },
      ],
    },
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaWebPageLd) }}
        />
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 mb-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Community Q&A</h1>
            <p className="text-lg opacity-90 mb-6">
              Ask questions, share knowledge, and learn from the Nigerian tech community
            </p>
            <AskQuestionButton />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
            <div className="space-y-3 text-sm text-secondary mb-6">
              <div>
                <h4 className="text-foreground font-semibold mb-1">Purpose</h4>
                <p>Solve practical problems with clear questions and defensible answers that balance correctness, maintainability, and security.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Question Essentials</h4>
                <p>Articulate the exact challenge, environment details, and expected outcome so responders can reason without guesswork.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Posting Flow</h4>
                <p>State the goal, list observed behavior, include a minimal repro, paste logs verbatim, and describe prior attempts.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Recognition</h4>
                <p>Upvote helpful answers, accept the best one, and edit your post with learnings for future readers.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">1</span>
                  </div>
                  <p className="font-semibold text-foreground">Ask Clearly</p>
                </div>
                <p className="text-sm text-secondary">Describe the problem, show attempts, include code or screenshots, and set expected outcomes.</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">2</span>
                  </div>
                  <p className="font-semibold text-foreground">Answer Helpfully</p>
                </div>
                <p className="text-sm text-secondary">Explain steps, provide references, add working examples, and mention trade‑offs or caveats.</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">3</span>
                  </div>
                  <p className="font-semibold text-foreground">Reward and Improve</p>
                </div>
                <p className="text-sm text-secondary">Upvote helpful answers, accept the best, and edit your question with learnings for future readers.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Ask a Great Question</h3>
                <div className="space-y-2 text-sm text-secondary">
                  <div>
                    <h4 className="text-foreground font-semibold">Title</h4>
                    <p>Capture the core problem in a concise, specific statement.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Context</h4>
                    <p>List framework, versions, configuration flags, platform, and setup.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Minimal Repro</h4>
                    <p>Provide the smallest snippet that reproduces the failure consistently.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Error Details</h4>
                    <p>Paste logs and messages verbatim with relevant inputs and outputs.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Prior Attempts</h4>
                    <p>Explain what you tried and why those approaches did not work.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Tagging</h4>
                    <p>Add precise tags so experts can discover and answer quickly.</p>
                  </div>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Write a Solid Answer</h3>
                <div className="space-y-2 text-sm text-secondary">
                  <div>
                    <h4 className="text-foreground font-semibold">Directness</h4>
                    <p>Address the exact question with clear, actionable steps.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Steps & Code</h4>
                    <p>Show code samples, expected outputs, and verification checks.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Reasoning</h4>
                    <p>Explain why the approach works, with performance and caveats.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Sources</h4>
                    <p>Reference official docs and reputable resources for credibility.</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Safety</h4>
                    <p>Offer secure patterns and alternatives that avoid common pitfalls.</p>
                  </div>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-3">Tags & Categories</h3>
            <div className="space-y-2 text-sm text-secondary mb-4">
              <div>
                <h4 className="text-foreground font-semibold">Primary Category</h4>
                <p>Select one category that best anchors the topic.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold">Specific Tags</h4>
                <p>Add 2–4 precise tags for technologies, frameworks, and domains.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold">Avoid Generic</h4>
                <p>Prefer targeted labels over broad, ambiguous keywords.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold">Discoverability</h4>
                <p>Use the terms practitioners search for to attract experts fast.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'DevOps', 'Security', 'UI/UX', 'Education', 'Finance', 'Career'].map(
                (cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-gray-100 text-foreground rounded-lg"
                  >
                    {cat}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Moderation & Safety</h3>
              <div className="space-y-2 text-sm text-secondary">
                <div>
                  <h4 className="text-foreground font-semibold">Protect Data</h4>
                  <p>Do not share personal information, secrets, or credentials.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Formatting</h4>
                  <p>Use code blocks and clear structure to reduce misinterpretation.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Report & Flag</h4>
                  <p>Report spam or abuse and flag inaccuracies for moderator review.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Continuous Improvement</h4>
                  <p>Edit and refine content so guidance stays accurate and useful.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Community Tips</h3>
              <div className="space-y-2 text-sm text-secondary">
                <div>
                  <h4 className="text-foreground font-semibold">Clarity First</h4>
                  <p>Write for future readers and keep examples minimal yet representative.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Platform Constraints</h4>
                  <p>Note OS differences, cloud limits, and environment specifics.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Stay Current</h4>
                  <p>Update accepted answers when tools or APIs change materially.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
            <h3 className="text-xl font-bold text-foreground mb-3">Examples & Patterns</h3>
            <div className="space-y-2 text-sm text-secondary">
              <div>
                <h4 className="text-foreground font-semibold">Performance Example</h4>
                <p>Explain component structure, dataset size, rendering strategy, and the exact bottleneck with a constrained repro.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold">Security Example</h4>
                <p>Provide a clear threat model and failure modes, then propose protective controls that preserve user experience.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold">Outcome</h4>
                <p>Use shared patterns to compare approaches, evaluate trade‑offs, and adopt practices that stand up to real‑world demands.</p>
              </div>
            </div>
          </div>

          <QAList />
        </div>
      </main>

      <Footer />
    </div>
  );
}
