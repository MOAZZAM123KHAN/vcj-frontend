import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, ShieldCheck, Banknote } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { RateBookingForm } from '@/components/RateBookingForm';

export const metadata: Metadata = {
    title: 'Gold Rate Booking Offer | Lock Today\'s Rate | VCJ Jewellers',
    description: 'Book gold at today\'s rate and stay protected from price hikes. If rate goes down, you pay the lower rate. Best gold purchase plan in Jaunpur.',
};

export default function RateBookingPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-50">
                {/* Offer Hero */}
                <div className="bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-purple-900/40"></div>
                    <div className="container mx-auto px-4 py-20 relative z-10">
                        <div className="max-w-3xl">
                            <span className="bg-yellow-500 text-black font-bold text-xs px-2 py-1 rounded inline-block mb-4">SMART INVESTMENT</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Book Gold at Today&apos;s Rate <br /> <span className="text-yellow-500">Shop Later</span></h1>
                            <p className="text-xl text-slate-300 mb-8 max-w-xl">
                                Protect yourself from rising gold prices. Lock the rate today with a small advance booking.
                            </p>
                            <Button size="lg" variant="premium" className="px-8" asChild>
                                <a href="#book-now">Book Rate Now</a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* How it works */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-slate-900">How It Works</h2>
                            <p className="text-slate-600">Simple, Transparent, and Customer Friendly</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center relative">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-slate-600">1</div>
                                <h3 className="font-bold text-lg mb-2">Book the Rate</h3>
                                <p className="text-sm text-slate-500">Pay a booking amount to lock actual gold rate of the day.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center relative">
                                <div className="absolute top-1/2 -left-4 hidden md:block text-slate-300 transform -translate-y-1/2">
                                    <ArrowRight />
                                </div>
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-slate-600">2</div>
                                <h3 className="font-bold text-lg mb-2">Wait & Relax</h3>
                                <p className="text-sm text-slate-500">Plan your purchase for wedding or festival without worrying about price hikes.</p>
                                <div className="absolute top-1/2 -right-4 hidden md:block text-slate-300 transform -translate-y-1/2">
                                    <ArrowRight />
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center relative">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-slate-600">3</div>
                                <h3 className="font-bold text-lg mb-2">Purchase Time</h3>
                                <p className="text-sm text-slate-500">
                                    If rate <strong>increases</strong>, you pay Booked Rate.<br />
                                    If rate <strong>decreases</strong>, you pay Current Rate.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scenario Table */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">Win-Win Scenarios</h2>

                        <div className="max-w-4xl mx-auto bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900 text-white">
                                    <tr>
                                        <th className="p-4">Scenario</th>
                                        <th className="p-4">Booking Rate</th>
                                        <th className="p-4">Rate on Purchase Day</th>
                                        <th className="p-4 bg-yellow-600 text-white font-bold">You Pay</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr>
                                        <td className="p-4 font-medium">Rate Increases 📈</td>
                                        <td className="p-4">₹75,000</td>
                                        <td className="p-4 text-red-600">₹80,000</td>
                                        <td className="p-4 font-bold text-green-700 bg-green-50">₹75,000 (Saved ₹5k)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Rate Decreases 📉</td>
                                        <td className="p-4">₹75,000</td>
                                        <td className="p-4 text-green-600">₹70,000</td>
                                        <td className="p-4 font-bold text-green-700 bg-green-50">₹70,000 (Lower Rate)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Lead Form */}
                <section id="book-now" className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-serif font-bold mb-4">Start Your Booking</h2>
                                <p className="text-slate-400 mb-8">
                                    Fill the form to express your interest. Our team will call you to complete the booking via verified payment methods or store visit.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3"><Check className="text-green-500" /> Benefit 100% passed to customer</li>
                                    <li className="flex items-center gap-3"><Check className="text-green-500" /> Valid for Gold & Diamond jewellery</li>
                                    <li className="flex items-center gap-3"><Check className="text-green-500" /> No hidden charges</li>
                                </ul>
                            </div>
                            <div className="bg-white text-slate-900 p-8 rounded-2xl">
                                <RateBookingForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
