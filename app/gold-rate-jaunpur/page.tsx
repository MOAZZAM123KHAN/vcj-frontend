import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ShieldCheck, CheckCircle2, RefreshCcw, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: "Gold Rate Today in Jaunpur – Live 22kt & 24kt Price | VCJ Jewellers",
  description: "Check today's gold rate in Jaunpur. Live 22 carat & 24 carat gold price per gram and per tola updated daily by VCJ Jewellers – Jaunpur's trusted jeweller since 1960.",
  alternates: {
    canonical: "https://vcjjewellers.com/gold-rate-jaunpur",
  },
  openGraph: {
    title: "Gold Rate Today in Jaunpur – Live 22kt & 24kt Price | VCJ Jewellers",
    description: "Check today's gold rate in Jaunpur. Live 22 carat & 24 carat gold price per gram and per tola updated daily by VCJ Jewellers – Jaunpur's trusted jeweller since 1960.",
    url: "https://vcjjewellers.com/gold-rate-jaunpur",
    siteName: "VCJ Jewellers",
    images: [{ url: "/images/og-jewellery.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function GoldRateJaunpur() {
  const currentDate = new Date().toLocaleDateString('en-IN', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
  const dateModified = new Date().toISOString();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is today's gold rate in Jaunpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Today's 24kt gold rate in Jaunpur is ₹7,200 per gram and 22kt is ₹6,600 per gram. Rates are updated daily at VCJ Jewellers showroom, Nakhas Jaunpur."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy BIS Hallmarked gold jewellery in Jaunpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VCJ Jewellers at Sadbhavna Bridge Mod, Nakhas, Jaunpur offers 100% BIS Hallmarked gold jewellery with free purity testing since 1960."
        }
      },
      {
        "@type": "Question",
        "name": "Does VCJ Jewellers offer gold rate booking in Jaunpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, VCJ Jewellers offers Gold Rate Booking — lock today's rate for future purchases. Visit vcjjewellers.com/offers/rate-booking or call +91-6390901876."
        }
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Gold Rate Today in Jaunpur – Live 22kt & 24kt Price | VCJ Jewellers",
    "url": "https://vcjjewellers.com/gold-rate-jaunpur",
    "dateModified": dateModified
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Header />
      
      <main className="min-h-screen bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Gold Rate Today in Jaunpur – {currentDate}
            </h1>
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
              Rates are indicative. Visit showroom or call for exact buying rate.
            </p>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base border-b border-slate-700">Purity</th>
                    <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base border-b border-slate-700">Per Gram</th>
                    <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base border-b border-slate-700">Per 10 Gram (Tola)</th>
                    <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm md:text-base border-b border-slate-700 hidden sm:table-cell">Per Sovereign (8g)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-6 font-semibold text-slate-800">24 Karat (999)</td>
                    <td className="p-4 md:p-6 font-medium text-slate-700">₹7,200</td>
                    <td className="p-4 md:p-6 font-medium text-slate-700">₹72,000</td>
                    <td className="p-4 md:p-6 font-medium text-slate-700 hidden sm:table-cell">₹57,600</td>
                  </tr>
                  <tr className="bg-yellow-50/50 hover:bg-yellow-50 transition-colors relative">
                    <td className="p-4 md:p-6 font-semibold text-slate-800 flex flex-wrap items-center gap-2">
                      22 Karat (916)
                      <span className="bg-yellow-500 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap">
                        Most Popular
                      </span>
                    </td>
                    <td className="p-4 md:p-6 font-bold text-yellow-700">₹6,600</td>
                    <td className="p-4 md:p-6 font-bold text-yellow-700">₹66,000</td>
                    <td className="p-4 md:p-6 font-bold text-yellow-700 hidden sm:table-cell">₹52,800</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-6 font-semibold text-slate-800">18 Karat (750)</td>
                    <td className="p-4 md:p-6 font-medium text-slate-700">₹5,400</td>
                    <td className="p-4 md:p-6 font-medium text-slate-700">₹54,000</td>
                    <td className="p-4 md:p-6 font-medium text-slate-700 hidden sm:table-cell">₹43,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Trust Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-slate-900">BIS Hallmark Certified</h3>
              <p className="text-sm text-slate-500">100% purity guaranteed on all our gold jewellery.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-bold text-slate-900">Free Purity Testing</h3>
              <p className="text-sm text-slate-500">Test your old gold purity for free using our karat meter.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
                <RefreshCcw size={24} />
              </div>
              <h3 className="font-bold text-slate-900">100% Buyback</h3>
              <p className="text-sm text-slate-500">Get complete value on exchanging your old VCJ gold.</p>
            </div>
          </div>

          {/* SEO Text Content */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">
              Buy Gold Jewellery in Jaunpur
            </h2>
            <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
              <p>
                When looking for the finest <strong>gold jewellery Jaunpur</strong> has to offer, purity and trust are paramount. At <strong>Vimal Chhaganlal Jewellers</strong>, we pride ourselves on being the most reliable <strong>jewellery shop Jaunpur</strong> families have trusted for generations. <strong>Trusted since 1960</strong>, we ensure every piece of jewellery you purchase reflects impeccable craftsmanship and transparent pricing based on the live market gold rate.
              </p>
              <p>
                Conveniently located at <strong>Nakhas Jaunpur</strong>, near the Sadbhavna Bridge Mod, our showroom houses an exquisite collection of 22-karat and 18-karat hallmark gold, alongside diamond and silver masterpieces. Whether you are investing in gold coins or buying bridal collections, VCJ Jewellers guarantees authentic quality and a seamless buying experience at today&apos;s best rates.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="premium" className="h-14 px-8 text-sm font-bold tracking-widest uppercase text-center flex items-center justify-center">
                <Link href="/offers/rate-booking">Book Gold Rate</Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 text-sm font-bold tracking-widest uppercase border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-center flex items-center justify-center">
                <Link href="/contact">Visit Showroom</Link>
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-slate-900 cursor-pointer list-none">
                  What is today's gold rate in Jaunpur?
                  <span className="transition group-open:rotate-180 text-slate-400">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                  Today's 24kt gold rate in Jaunpur is ₹7,200 per gram and 22kt is ₹6,600 per gram. Rates are updated daily at VCJ Jewellers showroom, Nakhas Jaunpur.
                </div>
              </details>
              
              <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-slate-900 cursor-pointer list-none">
                  Where can I buy BIS Hallmarked gold jewellery in Jaunpur?
                  <span className="transition group-open:rotate-180 text-slate-400">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                  VCJ Jewellers at Sadbhavna Bridge Mod, Nakhas, Jaunpur offers 100% BIS Hallmarked gold jewellery with free purity testing since 1960.
                </div>
              </details>

              <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-slate-900 cursor-pointer list-none">
                  Does VCJ Jewellers offer gold rate booking in Jaunpur?
                  <span className="transition group-open:rotate-180 text-slate-400">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                  Yes, VCJ Jewellers offers Gold Rate Booking — lock today's rate for future purchases. Visit vcjjewellers.com/offers/rate-booking or call +91-6390901876.
                </div>
              </details>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
