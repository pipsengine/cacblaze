import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Contact Us - CACBLAZE',
  description: 'Get in touch with the CACBLAZE team. We are here to help with your questions and feedback.',
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
                Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                  <p className="text-gray-600 mb-4 text-sm">For help with our guides or your account.</p>
                  <a href="mailto:support@cacblaze.com" className="text-primary font-semibold hover:underline">support@cacblaze.com</a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon name="BriefcaseIcon" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Business</h3>
                  <p className="text-gray-600 mb-4 text-sm">For partnerships and advertising inquiries.</p>
                  <a href="mailto:partners@cacblaze.com" className="text-primary font-semibold hover:underline">partners@cacblaze.com</a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon name="MapPinIcon" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Office</h3>
                  <p className="text-gray-600 text-sm">
                    123 Innovation Drive<br />
                    Lekki Phase 1, Lagos<br />
                    Nigeria
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                        <option>General Inquiry</option>
                        <option>Feedback</option>
                        <option>Report an Issue</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea id="message" rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
