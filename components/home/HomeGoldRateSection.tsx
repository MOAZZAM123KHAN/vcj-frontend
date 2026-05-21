import Link from 'next/link';
import { getGoldRate } from '@/services/gold-rate.service';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export async function HomeGoldRateSection() {
  const rateData = await getGoldRate();
  
  if (!rateData || !rateData.rates) {
    return null; // Fallback if rates cannot be fetched
  }

  const { rate18k, rate22k, rate24k, lastUpdated } = rateData.rates;
  
  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(lastUpdated));

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-yellow-600 text-xs font-bold tracking-[0.4em] uppercase">Today Gold Rate in Jaunpur</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 text-balance">
            Check Live 22K & 24K Gold Prices
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light text-sm md:text-base">
            Updated Daily. Rates are indicative and subject to change. Last Updated: {formattedDate}
          </p>
        </div>

        {/* Rate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          
          {/* 18K Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-lg font-bold text-slate-500 mb-2 uppercase tracking-widest">18K Gold Rate</h3>
            <p className="text-3xl font-serif font-bold text-slate-900">₹{rate18k?.toLocaleString('en-IN')}</p>
            <p className="text-xs text-slate-400 mt-2">per gram</p>
          </div>

          {/* 22K Card - Highlighted */}
          <div className="bg-gradient-to-b from-yellow-50 to-white border border-yellow-200 rounded-2xl p-8 text-center shadow-md relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-yellow-700 mb-2 uppercase tracking-widest">22K Gold Rate</h3>
            <p className="text-4xl font-serif font-bold text-slate-900">₹{rate22k?.toLocaleString('en-IN')}</p>
            <p className="text-xs text-slate-500 mt-2">per gram</p>
          </div>

          {/* 24K Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-lg font-bold text-slate-500 mb-2 uppercase tracking-widest">24K Gold Rate</h3>
            <p className="text-3xl font-serif font-bold text-slate-900">₹{rate24k?.toLocaleString('en-IN')}</p>
            <p className="text-xs text-slate-400 mt-2">per gram</p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Button variant="premium" className="h-14 px-10 text-sm font-bold tracking-[0.2em] uppercase rounded-full shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all" asChild>
            <Link href="/gold-rate-jaunpur" className="flex items-center gap-2">
              Check Live Gold Rate <ChevronRight size={18} />
            </Link>
          </Button>
        </div>

        {/* SEO Content Block */}
        <div className="max-w-4xl mx-auto bg-slate-50/50 rounded-3xl p-8 md:p-12 border border-slate-100 text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-800">
            Trusted Gold Price Updates in Jaunpur
          </h3>
          <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
            Stay informed with the most accurate <Link href="/gold-rate-jaunpur" className="text-yellow-700 font-medium hover:underline">today gold rate in Jaunpur</Link>. 
            Whether you are planning to invest in the <Link href="/gold-rate-jaunpur" className="text-yellow-700 font-medium hover:underline">live gold price</Link> or looking for the finest craftsmanship for your next celebration, VCJ Jewellers provides transparent pricing. 
            We update the <Link href="/gold-rate-jaunpur" className="text-yellow-700 font-medium hover:underline">22K gold rate jaunpur</Link> and <Link href="/gold-rate-jaunpur" className="text-yellow-700 font-medium hover:underline">24K gold price jaunpur</Link> daily to ensure you get the best value for your trust. Visit our showroom to explore pure, BIS Hallmarked jewellery at the current <Link href="/gold-rate-jaunpur" className="text-yellow-700 font-medium hover:underline">gold rate jaunpur</Link>.
          </p>
        </div>

      </div>
    </section>
  );
}
