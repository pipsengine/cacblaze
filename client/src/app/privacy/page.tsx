import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - CACBLAZE',
  description:
    'Our commitment to protecting your personal data in compliance with the Nigeria Data Protection Regulation (NDPR) and the Nigeria Data Protection Act (NDPA).',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last Updated: {currentDate}</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to <strong>CACBLAZE</strong> ("we," "our," or "us"). We are committed to
                protecting your personal data and respecting your privacy. This Privacy Policy
                explains how we collect, use, store, and share your personal data when you visit our
                website or use our services.
              </p>
              <p>
                This policy is drafted in strict compliance with the{' '}
                <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and the{' '}
                <strong>Nigeria Data Protection Regulation (NDPR) 2019</strong> issued by the
                National Information Technology Development Agency (NITDA). By accessing or using
                our services, you consent to the data practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Data Controller</h2>
              <p>
                For the purposes of the NDPR and NDPA, <strong>CACBLAZE</strong> is the Data
                Controller. This means we determine the purposes and means of processing your
                personal data.
              </p>
              <p>
                <strong>Contact Address:</strong>
                <br />
                CACBLAZE Headquarters
                <br />
                Lagos, Nigeria
                <br />
                Email: privacy@cacsms.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Information We Collect
              </h2>
              <p>We collect and process the following categories of personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Identity Information:</strong> Name, username, and other
                  identifiers you provide when registering.
                </li>
                <li>
                  <strong>Contact Information:</strong> Email address and phone number (if
                  applicable).
                </li>
                <li>
                  <strong>Technical Data:</strong> Internet Protocol (IP) address, browser type and
                  version, time zone setting, browser plug-in types, operating system, and platform.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website, products,
                  and services, including pages viewed and time spent.
                </li>
                <li>
                  <strong>Marketing and Communications Data:</strong> Your preferences in receiving
                  marketing from us and your communication preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Purpose and Legal Basis for Processing
              </h2>
              <p>
                Under the NDPR, we are required to have a lawful basis for processing your personal
                data. We rely on the following bases:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-3 px-4 font-semibold text-gray-900">Purpose/Activity</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">
                        Lawful Basis (NDPR Art. 2.2)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">To register you as a new user</td>
                      <td className="py-3 px-4">Performance of a contract with you</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">To deliver services and content</td>
                      <td className="py-3 px-4">Performance of a contract; Legitimate interests</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        To manage our relationship with you (e.g., notifying you of changes)
                      </td>
                      <td className="py-3 px-4">Performance of a contract; Legal obligation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        To administer and protect our business (troubleshooting, data analysis)
                      </td>
                      <td className="py-3 px-4">
                        Legitimate interests (network security, fraud prevention)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">To deliver relevant newsletters or marketing</td>
                      <td className="py-3 px-4">Consent (which you can withdraw at any time)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Your Rights as a Data Subject
              </h2>
              <p>
                As a user located in Nigeria, you have specific rights under the NDPR and NDPA. You
                have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Request Access:</strong> Ask for a copy of the personal data we hold about
                  you.
                </li>
                <li>
                  <strong>Request Correction:</strong> Ask us to correct any incomplete or
                  inaccurate data.
                </li>
                <li>
                  <strong>Request Erasure ("Right to be Forgotten"):</strong> Ask us to delete your
                  personal data where there is no good reason for us to continue processing it.
                </li>
                <li>
                  <strong>Object to Processing:</strong> Object to the processing of your data for
                  direct marketing purposes.
                </li>
                <li>
                  <strong>Request Restriction:</strong> Ask us to suspend the processing of your
                  personal data in certain scenarios.
                </li>
                <li>
                  <strong>Data Portability:</strong> Request the transfer of your data to you or a
                  third party in a structured, machine-readable format.
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw your consent at any time where we are
                  relying on consent to process your data.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@cacsms.com" className="text-primary hover:underline">
                  privacy@cacsms.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
              <p>
                We have put in place appropriate technical and organizational security measures to
                prevent your personal data from being accidentally lost, used, or accessed in an
                unauthorized way. These measures include encryption (SSL/TLS), firewalls, and strict
                access controls.
              </p>
              <p>
                However, please note that no method of transmission over the Internet or electronic
                storage is 100% secure. While we strive to protect your data, we cannot guarantee
                its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the
                purposes we collected it for, including satisfying any legal, accounting, or
                reporting requirements.
              </p>
              <p>
                In general, account data is retained for the duration of your active account. If you
                delete your account, your personal data will be deleted or anonymized within 90
                days, unless a longer retention period is required by Nigerian law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. International Transfers
              </h2>
              <p>
                We may transfer your personal data to service providers or servers located outside
                Nigeria. Whenever we transfer your data out of Nigeria, we ensure a similar degree
                of protection is afforded to it by ensuring at least one of the following safeguards
                is implemented:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We will only transfer your personal data to countries that have been deemed to
                  provide an adequate level of protection for personal data by the{' '}
                  <strong>National Information Technology Development Agency (NITDA)</strong> or the{' '}
                  <strong>Nigeria Data Protection Commission (NDPC)</strong>.
                </li>
                <li>
                  Where we use certain service providers, we may use specific contracts or standard
                  contractual clauses approved for use in Nigeria which give personal data the same
                  protection it has in Nigeria.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins, and applications.
                Clicking on those links or enabling those connections may allow third parties to
                collect or share data about you. We do not control these third-party websites and
                are not responsible for their privacy statements. When you leave our website, we
                encourage you to read the privacy policy of every website you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We keep our privacy policy under regular review. Any changes we make to our privacy
                policy in the future will be posted on this page and, where appropriate, notified to
                you by email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact Us & Complaints
              </h2>
              <p>
                If you have any questions about this privacy policy or our data protection
                practices, please contact us:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@cacsms.com
                <br />
                <strong>Address:</strong> Lagos, Nigeria
              </p>
              <p className="mt-4">
                You have the right to make a complaint at any time to the{' '}
                <strong>Nigeria Data Protection Commission (NDPC)</strong>, the supervisory
                authority for data protection issues in Nigeria (ndpc.gov.ng). We would, however,
                appreciate the chance to deal with your concerns before you approach the NDPC, so
                please contact us in the first instance.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
