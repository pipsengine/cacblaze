import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PreferencesManager from './components/PreferencesManager';

export const metadata: Metadata = {
  title: 'Preferences - CACBLAZE',
  description:
    'Manage your content preferences, notification settings, and personalized recommendations.',
};

export default function PreferencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-gray-50">
        <PreferencesManager />
      </main>
      <Footer />
    </>
  );
}
