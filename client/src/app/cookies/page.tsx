import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - CACBLAZE',
  description:
    'Information about how CACBLAZE uses cookies and similar technologies to provide, improve, and protect our services.',
};

export default function CookiePolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <header className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-500">Last Updated: {currentDate}</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how <strong>CACBLAZE</strong> ("we," "us," or "our")
                uses cookies and similar technologies to recognize you when you visit our website.
                It explains what these technologies are and why we use them, as well as your rights
                to control our use of them.
              </p>
              <p>
                This policy is designed to be compliant with the{' '}
                <strong>Nigeria Data Protection Regulation (NDPR)</strong>, which requires
                transparent information about data collection technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when
                you visit a website. Cookies are widely used by website owners in order to make
                their websites work, or to work more efficiently, as well as to provide reporting
                information.
              </p>
              <p>
                Cookies set by the website owner (in this case, CACBLAZE) are called "first-party
                cookies." Cookies set by parties other than the website owner are called
                "third-party cookies." Third-party cookies enable third-party features or
                functionality to be provided on or through the website (e.g., advertising,
                interactive content, and analytics).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Why We Use Cookies</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are
                required for technical reasons in order for our Website to operate, and we refer to
                these as "essential" or "strictly necessary" cookies. Other cookies also enable us
                to track and target the interests of our users to enhance the experience on our
                Online Properties. Third parties serve cookies through our Website for advertising,
                analytics, and other purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Types of Cookies We Use
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Essential Cookies</h3>
                  <p>
                    These cookies are strictly necessary to provide you with services available
                    through our Website and to use some of its features, such as access to secure
                    areas. Because these cookies are strictly necessary to deliver the Website to
                    you, you cannot refuse them without impacting how our website functions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Performance and Functionality Cookies
                  </h3>
                  <p>
                    These cookies are used to enhance the performance and functionality of our
                    Website but are non-essential to their use. However, without these cookies,
                    certain functionality (like videos) may become unavailable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Analytics and Customization Cookies
                  </h3>
                  <p>
                    These cookies collect information that is used either in aggregate form to help
                    us understand how our Website is being used or how effective our marketing
                    campaigns are, or to help us customize our Website for you. We use tools like
                    Google Analytics to help us improve our site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Advertising Cookies</h3>
                  <p>
                    These cookies are used to make advertising messages more relevant to you. They
                    perform functions like preventing the same ad from continuously reappearing,
                    ensuring that ads are properly displayed for advertisers, and in some cases
                    selecting advertisements that are based on your interests.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. How You Can Control Cookies
              </h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise
                your cookie rights by setting your preferences in the Cookie Consent Manager (if
                available) or by amending your web browser controls.
              </p>
              <p>
                <strong>Browser Controls:</strong> You can set or amend your web browser controls to
                accept or refuse cookies. If you choose to reject cookies, you may still use our
                website though your access to some functionality and areas of our website may be
                restricted. As the means by which you can refuse cookies through your web browser
                controls vary from browser-to-browser, you should visit your browser's help menu for
                more information.
              </p>
              <p>
                Under the <strong>NDPR</strong>, your continued use of our website after being
                notified of our cookie usage constitutes valid consent, provided you have been given
                the option to manage such consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Updates to This Cookie Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example,
                changes to the cookies we use or for other operational, legal, or regulatory
                reasons. Please therefore re-visit this Cookie Policy regularly to stay informed
                about our use of cookies and related technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please
                email us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@cacblaze.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
