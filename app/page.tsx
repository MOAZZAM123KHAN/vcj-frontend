import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroCarousel } from '@/components/layout/HeroCarousel';
import JsonLd from '@/components/JsonLd';
import { getLocalBusinessSchema, getOrganizationSchema } from '@/lib/schema';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, RefreshCw, Gem, Sparkles, MapPin, Phone, ArrowRight } from 'lucide-react';
import { getProducts } from '@/services/product.service';
import { ProductSection } from '@/components/products/ProductSection';
import { AsyncProductSection } from '@/components/products/AsyncProductSection';
import { HomeTestimonialSection } from '@/components/home/HomeTestimonialSection';
import { FloatingButtons } from '@/components/home/FloatingButtons';
import TrustBar from "@/components/TrustBar";

export default async function Home() {
  const businessSchema = getLocalBusinessSchema();
  const orgSchema = getOrganizationSchema();

  return (
    <>
      <JsonLd data={businessSchema} />
      <JsonLd data={orgSchema} />
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <TrustBar />

        {/* Trending Products */}
        <AsyncProductSection
          title="Trending Masterpieces"
          subtitle="Discover our most-loved pieces handcrafted to perfection for the modern connoisseur."
          badge="🔥 Hot Collection"
          filter={(p: any) => p.isTrending}
          viewAllLink="/products"
          className="bg-slate-50"
        />

        {/* Features / USPs */}
        <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
              <div className="group space-y-4 md:space-y-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110 text-yellow-600">
                  <RefreshCw size={28} className="md:w-9 md:h-9" strokeWidth={1.5} />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">100% Exchange Value</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">Get the full value of your old gold when you exchange with our latest designs. A commitment to transparency.</p>
                </div>
              </div>

              <div className="group space-y-4 md:space-y-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110 text-yellow-600">
                  <ShieldCheck size={28} className="md:w-9 md:h-9" strokeWidth={1.5} />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">Certified Purity</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">Every piece is BIS Hallmarked. We offer free purity testing on our advanced Karatometer for your absolute peace of mind.</p>
                </div>
              </div>

              <div className="group space-y-4 md:space-y-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110 text-yellow-600">
                  <Gem size={28} className="md:w-9 md:h-9" strokeWidth={1.5} />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">Lifetime Promise</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">We value our relationship across generations. Enjoy lifetime free repair and polishing services on every VCJ masterpiece.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>

        {/* Discounted Products - Curated Exclusives */}
        <AsyncProductSection
          title="Curated Exclusives"
          subtitle="Discover hidden gems from our collection at exceptional value."
          badge="Limited Time"
          filter={() => true}
          tags={['curated_exclusive']}
          limit={8}
          sortFeatured={true}
          viewAllLink="/products"
          className="bg-white"
        />

        {/* New Arrivals - The New Radiance */}
        <AsyncProductSection
          title="The New Radiance"
          subtitle="Explore our latest inspirations, where tradition meets contemporary allure."
          badge="Recently Unveiled"
          filter={() => true}
          tags={['new_radiance']}
          limit={10}
          sortFeatured={false}
          viewAllLink="/products"
          className="bg-slate-50/50"
        />

        {/* Offers Section - Elegant and Narrative */}
        <section className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 blur-[100px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-4">
              <span className="text-yellow-500 text-xs font-bold tracking-[0.4em] uppercase">Elegance of Planning</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-balance">Invest in Brighter Stories</h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-light text-sm md:text-base">Secure your legacy with our bespoke financial planning schemes, designed for the wise collector.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
              <div className="relative group p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-yellow-600/50">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 md:mb-10 gap-4">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold">Gold Rate Booking</h3>
                    <p className="text-slate-400 font-light leading-relaxed max-w-sm text-sm md:text-base">Secure today&apos;s gold rate for your future celebrations. Protection against market volatility with our price-lock guarantee.</p>
                  </div>
                  <span className="bg-yellow-600 text-[10px] font-bold px-3 py-1 tracking-widest uppercase shrink-0">Preferred</span>
                </div>
                <Link href="/offers/rate-booking" className="inline-flex items-center gap-2 text-yellow-500 font-bold text-xs tracking-[0.3em] uppercase group-hover:gap-4 transition-all">
                  Inquire Now <ArrowRight size={14} />
                </Link>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-600/10 -m-4 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="relative group p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-yellow-600/50">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 md:mb-10 gap-4">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold">The Golden Savings</h3>
                    <p className="text-slate-400 font-light leading-relaxed max-w-sm text-sm md:text-base">Our signature 10+2 scheme. Pay for 10 months and enjoy the benefit of two additional installments from our side.</p>
                  </div>
                  <span className="bg-white/10 text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase shrink-0">Legacy Plan</span>
                </div>
                <Link href="/offers/emi-scheme" className="inline-flex items-center gap-2 text-yellow-500 font-bold text-xs tracking-[0.3em] uppercase group-hover:gap-4 transition-all">
                  Calculate Benefits <ArrowRight size={14} />
                </Link>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-600/10 -m-4 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </section>

        {/* Visit Our Showroom - Elevated CTA */}
        <section className="py-16 md:py-24 lg:py-32 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="bg-yellow-50/50 p-8 md:p-20 flex flex-col items-center text-center space-y-6 md:space-y-8 border border-yellow-100/50">
              <div className="space-y-4">
                <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Private Viewing</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight text-balance">Visit our Flagship Showroom</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                  Immerse yourself in the world of VCJ. Experience our exclusive range of Bridal and Daily wear collection in a private, luxurious setting.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center pt-4">
                <div className="flex items-center gap-4 text-left group w-full sm:w-auto">
                  <div className="w-12 h-12 rounded-full border border-yellow-200 flex items-center justify-center text-yellow-700 transition-colors group-hover:bg-yellow-100 shrink-0"><MapPin size={24} strokeWidth={1.5} /></div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-1">Our Location</div>
                    <div className="font-serif font-bold text-slate-800">Nakhas, Jaunpur</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-4 text-left group w-full sm:w-auto">
                  <div className="w-12 h-12 rounded-full border border-yellow-200 flex items-center justify-center text-yellow-700 transition-colors group-hover:bg-yellow-100 shrink-0"><Phone size={24} strokeWidth={1.5} /></div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-1">Personal Assistant</div>
                    <div className="font-serif font-bold text-slate-800">+91 63909 01876</div>
                  </div>
                </div>
              </div>

              <Button variant="premium" className="h-14 md:h-16 px-10 md:px-12 text-sm font-bold tracking-[0.2em] uppercase rounded-none mt-4 md:mt-8 shadow-xl w-full sm:w-auto" asChild>
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <HomeTestimonialSection
          title="What Our Clients Say"
          limit={3}
          className="border-t border-slate-100"
        />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
