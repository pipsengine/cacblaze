import { Metadata } from 'next';
import { headers } from 'next/headers';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Advertise With Us - CACBLAZE',
  description:
    'Reach a fast-growing Nigerian audience across technology, education, lifestyle, and business. Explore ad formats, sponsored content, and community sponsorships.',
  keywords:
    'advertise, media kit, sponsored content, display ads, newsletter ads, Nigeria advertising, CACBLAZE',
  alternates: { canonical: '/advertise' },
};

export default async function AdvertisePage() {
  const h = await headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'cacblaze.com';
  const origin = `${proto}://${host}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Advertise With Us',
      description:
        'Advertising and sponsorship opportunities on CACBLAZE: sponsored content, display, newsletter, and community programs.',
      url: `${origin}/advertise`,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Advertise', item: `${origin}/advertise` },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'CACBLAZE Media Opportunities',
      url: `${origin}/advertise`,
      itemListElement: [
        { '@type': 'Offer', name: 'Sponsored Article' },
        { '@type': 'Offer', name: 'Display Banners' },
        { '@type': 'Offer', name: 'Newsletter Placement' },
        { '@type': 'Offer', name: 'Community AMA Sponsorship' },
        { '@type': 'Offer', name: 'Category Takeover' },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Advertise With Us</h1>
              <p className="text-lg md:text-xl opacity-90">
                Reach decision‑makers and ambitious learners across Nigeria with brand‑safe
                placements, high intent topics, and measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-2">Audience</h3>
              <p className="text-secondary text-sm">
                Nigerian professionals, students, and founders exploring technology, education,
                business tools, and everyday lifestyle decisions.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-2">Context</h3>
              <p className="text-secondary text-sm">
                Content designed for action: buying guides, how‑tos, tools, and reviews that drive
                consideration and conversion.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-2">Brand Safety</h3>
              <p className="text-secondary text-sm">
                Clear ethics, moderation, and quality standards ensure a trustworthy environment for
                brands and readers.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ad Formats</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3 text-sm text-secondary">
                <div>
                  <h4 className="text-foreground font-semibold">Sponsored Articles</h4>
                  <p>
                    Editorial‑quality explainers, comparisons, or case studies created with your
                    team. Includes research, visuals, and distribution across relevant categories.
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Display Banners</h4>
                  <p>
                    High‑viewability placements in hero, mid‑article, and sidebar positions with
                    device‑aware breakpoints. Standard IAB sizes supported.
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Newsletter Placements</h4>
                  <p>
                    Native placements in curated digests with consistent open rates and clear CTAs.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-secondary">
                <div>
                  <h4 className="text-foreground font-semibold">AMA Sponsorship</h4>
                  <p>
                    Align your brand with expert Ask‑Me‑Anything sessions. Includes logo lockups and
                    mention in session materials and recap.
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Category Takeover</h4>
                  <p>
                    Own a category for a fixed window with exclusive banner inventory and contextual
                    placements across topic pages.
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Custom Integrations</h4>
                  <p>
                    Quizzes, tools, or resource hubs tailored to your campaign goals. We collaborate
                    on scope and success metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Targeting & Measurement</h3>
              <ul className="list-disc list-inside text-sm text-secondary space-y-2">
                <li>Category and page‑level context targeting</li>
                <li>Device and time‑of‑day optimization</li>
                <li>UTM‑based tracking and post‑campaign reporting</li>
                <li>Creative guidelines for fast loading and clarity</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Policies</h3>
              <ul className="list-disc list-inside text-sm text-secondary space-y-2">
                <li>We disclose sponsored content and follow local regulations</li>
                <li>We do not accept misleading claims or unsafe categories</li>
                <li>All creatives subject to editorial review for clarity and fit</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get Started</h2>
            <p className="text-secondary text-sm mb-6">
              Share your objectives, preferred formats, and timelines. We’ll reply with
              availability, recommendations, and a media kit with current placement options.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:advertise@cacsms.com?subject=Advertise%20with%20CACBLAZE"
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Email advertise@cacsms.com
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-gray-100 text-foreground rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
