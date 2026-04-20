import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import ContactFormClient from './ContactFormClient';

export const metadata: Metadata = {
  title: 'Contact Us - CACBLAZE',
  description:
    'Get in touch with the CACBLAZE team. We are here to help with your questions and feedback.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Breadcrumb items={breadcrumbItems} className="mb-6 justify-center" />
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a question? We'd love to hear from you. Send us a message and we'll respond as
                soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon name="ChatBubbleLeftRightIcon" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Support</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    For help with our guides or your account.
                  </p>
                  <a
                    href="mailto:support@cacsms.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    support@cacsms.com
                  </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon name="BriefcaseIcon" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Business</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    For partnerships and advertising inquiries.
                  </p>
                  <a
                    href="mailto:partners@cacsms.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    partners@cacsms.com
                  </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon name="MapPinIcon" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Office</h3>
                  <p className="text-gray-600 text-sm">
                    123 Innovation Drive
                    <br />
                    Lekki Phase 1, Lagos
                    <br />
                    Nigeria
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactFormClient />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
