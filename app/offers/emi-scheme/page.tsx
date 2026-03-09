import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Calculator, Calendar, PiggyBank } from 'lucide-react';

export const metadata: Metadata = {
    title: '10+2 Gold Jewellery EMI Scheme | VCJ Jewellers',
    description: 'Plan your jewellery purchase smartly. Pay for 10 months and get 100% benefit on 11th and 12th month installments.',
};

export default function EMISchemePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-50">
                {/* Hero */}
                <div className="bg-slate-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <span className="bg-green-600 text-white font-bold text-xs px-2 py-1 rounded inline-block mb-4 uppercase tracking-wider">Swarn Nidhi Plan</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">10 + 2 <span className="text-yellow-500">EMI Scheme</span></h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            The smartest way to buy jewellery. Invest small monthly amounts and get a huge bonus at the end of the year.
                        </p>
                    </div>
                </div>

                {/* Calculator Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/2 p-8 bg-slate-50 border-r border-slate-100">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Calculator className="text-yellow-600" /> Calculate Benefits
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Installment Amount (₹)</label>
                                        <input type="range" min="1000" max="50000" step="1000" defaultValue="5000" className="w-full accent-yellow-600 mb-2" />
                                        <div className="flex justify-between text-xs text-slate-500">
                                            <span>₹1,000</span>
                                            <span>₹50,000</span>
                                        </div>
                                        <div className="mt-2 text-center">
                                            <span className="text-3xl font-bold text-slate-900">₹5,000</span>
                                            <span className="text-sm text-slate-500">/month</span>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">You Pay (10 Months)</span>
                                            <span className="font-medium">₹50,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">VCJ Adds (2 Months)</span>
                                            <span className="font-bold text-green-600">+ ₹10,000</span>
                                        </div>
                                        <div className="pt-2 mt-2 border-t border-yellow-200 flex justify-between items-end">
                                            <span className="font-bold text-slate-900">Total Jewellery Value</span>
                                            <span className="text-2xl font-bold text-yellow-700">₹60,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <h3 className="text-xl font-bold mb-4">Plan Benefits</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-3">
                                        <div className="bg-green-100 p-2 rounded-full text-green-700 h-fit"><PiggyBank size={20} /></div>
                                        <div>
                                            <h4 className="font-bold text-sm">High Returns</h4>
                                            <p className="text-xs text-slate-500">Get roughly 20% benefit on your investment.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="bg-yellow-100 p-2 rounded-full text-yellow-700 h-fit"><Calendar size={20} /></div>
                                        <div>
                                            <h4 className="font-bold text-sm">Flexible Duration</h4>
                                            <p className="text-xs text-slate-500">Just 10 months installment period.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Button variant="premium" className="w-full">Start Plan Now</Button>
                                <p className="text-xs text-center text-slate-400 mt-4">*Terms & Conditions Apply</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Investment Slab Table */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-2xl font-bold font-serif text-center mb-8">Popular Monthly Plans</h2>
                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <table className="w-full text-left text-sm md:text-base">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="p-4">Monthly (₹)</th>
                                        <th className="p-4 hidden sm:table-cell">Total Paid (10m)</th>
                                        <th className="p-4 hidden sm:table-cell">Bonus (2m)</th>
                                        <th className="p-4">You Get Jewellery Worth</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[2000, 5000, 10000, 20000, 50000].map(amount => (
                                        <tr key={amount} className="hover:bg-slate-50">
                                            <td className="p-4 font-medium">₹{amount.toLocaleString()}</td>
                                            <td className="p-4 text-slate-500 hidden sm:table-cell">₹{(amount * 10).toLocaleString()}</td>
                                            <td className="p-4 text-green-600 font-medium hidden sm:table-cell">+ ₹{(amount * 2).toLocaleString()}</td>
                                            <td className="p-4 font-bold text-yellow-700">₹{(amount * 12).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
