
'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export default function SalaryCalculatorPage() {
  const [grossSalary, setGrossSalary] = useState<string>('');
  const [period, setPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [result, setResult] = useState<any>(null);

  const calculateTax = () => {
    const salary = parseFloat(grossSalary.replace(/,/g, ''));
    if (!salary) return;

    // Convert to Annual for calculation
    const annualGross = period === 'monthly' ? salary * 12 : salary;

    // 1. Pension (8% of Gross - Simplified assumption that Gross = BHT)
    // In reality, it's 8% of Basic + Housing + Transport. We'll assume BHT is 80% of Gross for simplicity if not specified.
    // Let's stick to standard practice: Pension is roughly 8% of Gross.
    const pension = annualGross * 0.08;

    // 2. NHF (2.5% of Basic - Basic is usually 40% of Gross)
    const nhf = (annualGross * 0.4) * 0.025;

    // 3. CRA (Consolidated Relief Allowance)
    // Higher of 200k or 1% of Gross... PLUS 20% of Gross
    const craFixed = Math.max(200000, annualGross * 0.01);
    const craVariable = annualGross * 0.20;
    const cra = craFixed + craVariable;

    // 4. Taxable Income
    const taxableIncome = Math.max(0, annualGross - pension - nhf - cra);

    // 5. PAYE Calculation
    let tax = 0;
    let remaining = taxableIncome;

    // First 300k @ 7%
    if (remaining > 0) {
      const tranche = Math.min(remaining, 300000);
      tax += tranche * 0.07;
      remaining -= tranche;
    }
    // Next 300k @ 11%
    if (remaining > 0) {
      const tranche = Math.min(remaining, 300000);
      tax += tranche * 0.11;
      remaining -= tranche;
    }
    // Next 500k @ 15%
    if (remaining > 0) {
      const tranche = Math.min(remaining, 500000);
      tax += tranche * 0.15;
      remaining -= tranche;
    }
    // Next 500k @ 19%
    if (remaining > 0) {
      const tranche = Math.min(remaining, 500000);
      tax += tranche * 0.19;
      remaining -= tranche;
    }
    // Next 1.6m @ 21%
    if (remaining > 0) {
      const tranche = Math.min(remaining, 1600000);
      tax += tranche * 0.21;
      remaining -= tranche;
    }
    // Above 3.2m @ 24%
    if (remaining > 0) {
      tax += remaining * 0.24;
    }

    const annualNet = annualGross - pension - nhf - tax;

    setResult({
      gross: annualGross,
      pension,
      nhf,
      tax,
      net: annualNet,
      monthlyNet: annualNet / 12
    });
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(val);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="bg-primary/5 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link href="/job-market" className="text-sm text-secondary hover:text-primary mb-4 inline-block">
              ← Back to Job Market
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">Nigerian Salary Calculator</h1>
            <p className="text-xl text-secondary max-w-2xl">
              Estimate your take-home pay after Tax (PAYE), Pension, and NHF deductions.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Gross Income (Salary + Allowances)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                    <input
                      type="number"
                      value={grossSalary}
                      onChange={(e) => setGrossSalary(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="e.g. 500000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Payment Period</label>
                  <div className="flex p-1 bg-gray-100 rounded-xl">
                    <button
                      onClick={() => setPeriod('monthly')}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        period === 'monthly' ? 'bg-white shadow-sm text-primary' : 'text-secondary hover:text-foreground'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setPeriod('annual')}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        period === 'annual' ? 'bg-white shadow-sm text-primary' : 'text-secondary hover:text-foreground'
                      }`}
                    >
                      Annual
                    </button>
                  </div>
                </div>

                <button
                  onClick={calculateTax}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Calculate My Pay
                </button>
              </div>
            </div>

            {result && (
              <div className="bg-gray-50 p-8 border-t border-gray-100">
                <div className="text-center mb-8">
                  <div className="text-sm text-secondary mb-1">Estimated Monthly Take-Home</div>
                  <div className="text-4xl font-bold text-green-600">{formatCurrency(result.monthlyNet)}</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary">Gross Income (Annual)</span>
                    <span className="font-medium">{formatCurrency(result.gross)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-red-500">
                    <span>Pension (8%)</span>
                    <span>-{formatCurrency(result.pension)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-red-500">
                    <span>NHF (2.5% of Basic)</span>
                    <span>-{formatCurrency(result.nhf)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-red-500">
                    <span>Tax (PAYE)</span>
                    <span>-{formatCurrency(result.tax)}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 flex justify-between font-bold text-foreground">
                    <span>Net Income (Annual)</span>
                    <span>{formatCurrency(result.net)}</span>
                  </div>
                </div>
                
                <p className="mt-6 text-xs text-gray-400 text-center">
                  *Disclaimer: This is an estimate based on the Finance Act 2020. Actual deductions may vary based on your specific contract and state of residence.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
