import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - CACBLAZE',
  description: 'Terms and conditions governing your use of CACBLAZE services, governed by the laws of the Federal Republic of Nigeria.',
};

export default function TermsPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-500">
              Last Updated: {currentDate}
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>CACBLAZE</strong> ("we," "us," or "our"), concerning your access to and use of the CACBLAZE website and related services.
              </p>
              <p>
                By accessing or using the Service, you agree that you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using the Service and you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility and Jurisdiction</h2>
              <p>
                The Service is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Service without direct parental supervision and consent.
              </p>
              <p>
                These Terms are governed by and construed in accordance with the <strong>laws of the Federal Republic of Nigeria</strong>. The Service is controlled and operated from our facilities in Nigeria. We make no representations that the Service is appropriate or available for use in other locations. Those who access or use the Service from other jurisdictions do so at their own volition and are responsible for compliance with local law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Security</h2>
              <p>
                To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities. You must immediately notify us of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Activities</h2>
              <p>
                You may not access or use the Service for any purpose other than that for which we make the Service available. As a user of the Service, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Violate any applicable Nigerian laws or regulations, including but not limited to the <strong>Cybercrimes (Prohibition, Prevention, etc.) Act 2015</strong>.
                </li>
                <li>
                  Systematically retrieve data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                </li>
                <li>
                  Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Service.
                </li>
                <li>
                  Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Service to you.
                </li>
                <li>
                  Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Service.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Service is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Service (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of Nigeria, foreign jurisdictions, and international conventions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. User-Generated Content</h2>
              <p>
                The Service may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Service, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
              </p>
              <p>
                By posting your Contributions to any part of the Service, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimer</h2>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. You agree that your use of the Service and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Service and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>
                We make no warranties or representations about the accuracy or completeness of the Service's content or the content of any websites linked to the Service and we will assume no liability or responsibility for any (1) errors, mistakes, or inaccuracies of content and materials, (2) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Service, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Dispute Resolution</h2>
              <p>
                Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act (Cap. A18, Laws of the Federation of Nigeria 2004). The seat of the arbitration shall be <strong>Lagos, Nigeria</strong>. The language of the arbitration shall be English.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications and Interruptions</h2>
              <p>
                We reserve the right to change, modify, or remove the contents of the Service at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Service. We also reserve the right to modify or discontinue all or part of the Service without notice at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Service or to receive further information regarding use of the Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@cacblaze.com<br />
                <strong>Address:</strong> Lagos, Nigeria
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
