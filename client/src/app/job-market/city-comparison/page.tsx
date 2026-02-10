
'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CityComparisonPage() {
  const cities = [
    {
      name: 'Lagos',
      rent: 'High',
      rentPrice: '₦1.5M - ₦5M',
      transport: 'High',
      food: 'High',
      salary: 'Highest',
      vibe: 'Fast-paced, Stressful',
    },
    {
      name: 'Abuja',
      rent: 'Very High',
      rentPrice: '₦2M - ₦6M',
      transport: 'Medium',
      food: 'High',
      salary: 'High',
      vibe: 'Calm, Bureaucratic',
    },
    {
      name: 'Port Harcourt',
      rent: 'High',
      rentPrice: '₦1.2M - ₦4M',
      transport: 'Medium',
      food: 'High',
      salary: 'High',
      vibe: 'Industrial',
    },
    {
      name: 'Ibadan',
      rent: 'Low',
      rentPrice: '₦400k - ₦1M',
      transport: 'Low',
      food: 'Low',
      salary: 'Medium',
      vibe: 'Relaxed, Traditional',
    },
    {
      name: 'Kano',
      rent: 'Low',
      rentPrice: '₦300k - ₦800k',
      transport: 'Low',
      food: 'Low',
      salary: 'Medium',
      vibe: 'Commercial Hub',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="bg-primary/5 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link href="/job-market" className="text-sm text-secondary hover:text-primary mb-4 inline-block">
              ← Back to Job Market
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">City Cost of Living Comparison</h1>
            <p className="text-xl text-secondary max-w-2xl">
              Compare the cost of living and earning potential across major Nigerian cities.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="p-6 font-bold text-secondary">City</th>
                    <th className="p-6 font-bold text-secondary">Rent (2-Bed)</th>
                    <th className="p-6 font-bold text-secondary">Transport</th>
                    <th className="p-6 font-bold text-secondary">Food Cost</th>
                    <th className="p-6 font-bold text-secondary">Earning Potential</th>
                    <th className="p-6 font-bold text-secondary">Lifestyle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cities.map((city) => (
                    <tr key={city.name} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-6 font-bold text-foreground">{city.name}</td>
                      <td className="p-6">
                        <div className="font-medium text-foreground">{city.rentPrice}</div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          city.rent === 'Very High' ? 'bg-red-100 text-red-700' :
                          city.rent === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-green-100 text-green-700'
                        }`}>{city.rent}</span>
                      </td>
                      <td className="p-6 text-secondary">{city.transport}</td>
                      <td className="p-6 text-secondary">{city.food}</td>
                      <td className="p-6">
                        <span className={`font-medium ${
                          city.salary === 'Highest' ? 'text-green-600' :
                          city.salary === 'High' ? 'text-blue-600' :
                          'text-gray-600'
                        }`}>{city.salary}</span>
                      </td>
                      <td className="p-6 text-secondary">{city.vibe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
