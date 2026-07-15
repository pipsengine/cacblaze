'use client';

import Link from 'next/link';

const ContributorCTA = () => {
  return (
    <section className="py-20 bg-white relative pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative pointer-events-auto">
        <p className="text-lg text-secondary mb-6">
          Share practical knowledge with CACBLAZE readers
        </p>
        <Link
          id="contributor_cta_anchor"
          href="/contact?reason=contribute"
          className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all relative z-50 pointer-events-auto"
        >
          Become a Contributor
        </Link>
      </div>
    </section>
  );
};

export default ContributorCTA;
