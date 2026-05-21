import { getGoldRate } from '@/services/gold-rate.service';

export async function HomeGoldRateSection() {
  const response = await getGoldRate();
  
  const rates = response?.data || {
      gold24k: 7200,
      gold22k: 6600,
      gold18k: 5400,
  };

  const { gold18k, gold22k, gold24k } = rates;
  
  const updatedAt = response?.data?.updatedAt;
  
  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(updatedAt ? new Date(updatedAt) : new Date());

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
            <p className="text-3xl font-serif font-bold text-slate-900">₹{gold18k?.toLocaleString('en-IN')}</p>
            <p className="text-xs text-slate-400 mt-2">per gram</p>
          </div>

          {/* 22K Card - Highlighted */}
          <div className="bg-gradient-to-b from-yellow-50 to-white border border-yellow-200 rounded-2xl p-8 text-center shadow-md relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-yellow-700 mb-2 uppercase tracking-widest">22K Gold Rate</h3>
            <p className="text-4xl font-serif font-bold text-slate-900">₹{gold22k?.toLocaleString('en-IN')}</p>
            <p className="text-xs text-slate-500 mt-2">per gram</p>
          </div>

          {/* 24K Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-lg font-bold text-slate-500 mb-2 uppercase tracking-widest">24K Gold Rate</h3>
            <p className="text-3xl font-serif font-bold text-slate-900">₹{gold24k?.toLocaleString('en-IN')}</p>
            <p className="text-xs text-slate-400 mt-2">per gram</p>
          </div>

        </div>



      </div>
    </section>
  );
}
