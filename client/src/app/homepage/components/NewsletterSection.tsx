'use client';

import NewsletterForm from '@/components/common/NewsletterForm';

export default function NewsletterSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-white to-accent/5 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              Stay connected
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Get practical guides and trusted updates every week
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
              Join readers getting fresh technology, education, lifestyle, and local resource
              insights tailored to what matters most.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Fresh weekly roundups from your favorite categories',
                'Actionable tips instead of generic updates',
                'Early access to new guides and reviews',
                'Easy unsubscribe anytime',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <NewsletterForm variant="inline" />
          </div>
        </div>
      </div>
    </section>
  );
}
