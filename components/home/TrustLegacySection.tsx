import Link from 'next/link';
import { BUSINESS_INFO } from '@/data/business';

export function TrustLegacySection() {
  const jewelryStoreSchema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "@id": "https://vcjjewellers.com/#jewelrystore",
    "name": BUSINESS_INFO.name,
    "url": "https://vcjjewellers.com",
    "logo": "https://vcjjewellers.com/logo.png",
    "image": [
      "https://vcjjewellers.com/images/store-front.jpg",
      "https://vcjjewellers.com/images/interior.jpg"
    ],
    "description": "VCJ Jewellers (Vimal Chhaganlal Jewellers) is the best jewellery shop in Jaunpur, offering 100% BIS hallmarked gold jewellery, certified diamonds, and heritage bridal collections since 1960.",
    "telephone": BUSINESS_INFO.contact.phone,
    "priceRange": BUSINESS_INFO.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.streetAddress,
      "addressLocality": BUSINESS_INFO.address.addressLocality,
      "addressRegion": BUSINESS_INFO.address.addressRegion,
      "postalCode": BUSINESS_INFO.address.postalCode,
      "addressCountry": BUSINESS_INFO.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.geo.latitude,
      "longitude": BUSINESS_INFO.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    },
    "sameAs": [
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.facebook
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://vcjjewellers.com/#faqpage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best jewellery shop in Jaunpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VCJ Jewellers is widely considered the best jewellery shop in Jaunpur, serving customers since 1960. We are renowned for our heritage of trust, BIS hallmarked gold, certified diamonds, and exceptional bridal designs."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy hallmarked gold jewellery in Jaunpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can buy 100% BIS hallmarked gold jewellery at VCJ Jewellers flagship showroom in Nakhas, Jaunpur. Every piece of gold is certified with the HUID (Hallmark Unique Identification) code to guarantee purity."
        }
      },
      {
        "@type": "Question",
        "name": "Does VCJ Jewellers provide gold exchange and buyback?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, VCJ Jewellers offers a 100% buyback assurance and exchange policy. We offer transparent valuation and computerized Karatometer testing for verification."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find bridal jewellery in Jaunpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VCJ Jewellers is the premier destination for bridal jewellery in Jaunpur. We offer an extensive selection of bridal necklaces, chokers, bangles, and bridal collections designed for your special day."
        }
      },
      {
        "@type": "Question",
        "name": "Does VCJ Jewellers offer diamond jewellery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, VCJ Jewellers offers a certified range of diamond jewellery including diamond rings, necklaces, bangles, and custom solitaire settings."
        }
      }
    ]
  };

  const trustCards = [
    { emoji: "🏆", title: "Since 1960", desc: "More than six decades of trust and excellence." },
    { emoji: "💎", title: "BIS Hallmarked Jewellery", desc: "Certified purity and transparent pricing." },
    { emoji: "⭐", title: "Trusted By Generations", desc: "Preferred by families across Jaunpur." },
    { emoji: "♻️", title: "100% Buyback Assurance", desc: "Confidence and long-term value." },
    { emoji: "👑", title: "Latest Bridal Collection", desc: "Timeless jewellery for special occasions." },
    { emoji: "📍", title: "Trusted Jewellery Destination In Jaunpur", desc: "Serving customers from across the district." }
  ];

  const jaunpurLocations = [
    "Olandganj", "Line Bazar", "Sipah", "Wazidpur", "Husainabad",
    "Shahganj", "Kerakat", "Badlapur", "Madiyahu", "Machhlishahr"
  ];

  const collections = [
    { name: "Gold Jewellery", sub: "Heritage", href: "/gold-jewellery-jaunpur" },
    { name: "Bridal Jewellery", sub: "Bridal Couture", href: "/bridal-jewellery-jaunpur" },
    { name: "Diamond Jewellery", sub: "Solitaires", href: "/diamond-jewellery-jaunpur" },
    { name: "Mangalsutra Collection", sub: "Traditional", href: "/mangalsutra-collection-jaunpur" },
    { name: "Gold Bangles", sub: "Artistry", href: "/gold-bangles-jaunpur" },
    { name: "Earrings Collection", sub: "Elegant", href: "/earrings-collection-jaunpur" },
    { name: "Gold Rings", sub: "Timeless", href: "/gold-rings-jaunpur" },
    { name: "Silver Jewellery", sub: "Exquisite", href: "/silver-jewellery-jaunpur" }
  ];

  const popularSearches = [
    { label: "Best Jewellery Shop in Jaunpur", href: "/about" },
    { label: "Gold Jewellery Shop in Jaunpur", href: "/gold-jewellery-jaunpur" },
    { label: "Bridal Jewellery in Jaunpur", href: "/bridal-jewellery-jaunpur" },
    { label: "Diamond Jewellery in Jaunpur", href: "/diamond-jewellery-jaunpur" },
    { label: "Gold Bangles in Jaunpur", href: "/gold-bangles-jaunpur" },
    { label: "Mangalsutra Shop in Jaunpur", href: "/mangalsutra-collection-jaunpur" },
    { label: "Jewellery Showroom Near Me", href: "/contact" },
    { label: "Gold Jewellery Near Me", href: "/products" }
  ];

  return (
    <>
      {/* Structural Data Scripts */}
      <script
        id="jewelrystore-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelryStoreSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#0F5132] via-[#072F1C] to-[#050B08]">
        {/* Soft Gold Blur Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Header Block */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
              TRUST • LEGACY • CRAFTSMANSHIP
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              Why Families Trust VCJ Jewellers Since 1960
            </h2>
            <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
              For generations, VCJ Jewellers has been one of the most trusted jewellery showrooms in Jaunpur, offering BIS hallmarked gold jewellery, certified diamond jewellery, bridal collections and exceptional craftsmanship.
            </p>
          </div>

          {/* Premium Trust Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
            {trustCards.map((card, idx) => (
              <div
                key={idx}
                tabIndex={0}
                className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out group relative rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-md p-8 shadow-md shadow-yellow-500/2 hover:border-yellow-500/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(234,179,8,0.1)] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 cursor-default"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(234,179,8,0.1)] shrink-0 mb-5 group-hover:scale-110 transition-transform">
                  {card.emoji}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Local Authority Section */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out border-t border-yellow-500/10 pt-16 mb-20 md:mb-24 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-8">
              Serving Customers Across Jaunpur
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {jaunpurLocations.map((loc, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-yellow-500/10 hover:border-yellow-500/30 text-slate-300 hover:text-white transition-all text-xs font-semibold tracking-wider uppercase font-sans cursor-default shadow-sm shadow-yellow-500/2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 animate-pulse" />
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Explore Collections Grid */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out border-t border-yellow-500/10 pt-16 mb-20 md:mb-24">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              Explore Our Jewellery Collections
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {collections.map((coll, idx) => (
                <Link
                  key={idx}
                  href={coll.href}
                  className="group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all duration-300 hover:border-yellow-500/50 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(234,179,8,0.05)] hover:-translate-y-1 block"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[9px] font-extrabold tracking-[0.2em] uppercase text-yellow-500 mb-1.5 block">
                        {coll.sub}
                      </span>
                      <h4 className="font-serif text-base md:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors leading-tight">
                        {coll.name}
                      </h4>
                    </div>
                    <span className="w-7 h-7 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SEO Content Block */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out border-t border-yellow-500/10 pt-16 mb-20 md:mb-24">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] border border-yellow-500/10 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Best Jewellery Shop in Jaunpur
              </h2>
              <div className="space-y-6 text-slate-300 text-sm md:text-base font-light leading-relaxed">
                <p>
                  For over six decades, finding the <strong className="text-yellow-400 font-medium">best jewellery shop in Jaunpur</strong> has led discerning families directly to VCJ Jewellers. Established in 1960, our showroom has grown to become the most respected <strong className="text-yellow-400 font-medium">jewellery showroom in Jaunpur</strong>, serving as a sanctuary of trust, uncompromising quality, and heritage craftsmanship. Located in the heart of Nakhas, we invite you to experience a legacy where every piece of jewellery tells a story of devotion, purity, and artistic excellence.
                </p>
                <p>
                  As the premier <strong className="text-yellow-400 font-medium">gold jewellery shop in Jaunpur</strong>, we ensure that every single item in our collection is backed by certified authenticity. We exclusively offer 100% <strong className="text-yellow-400 font-medium">hallmarked gold jewellery in Jaunpur</strong> featuring the official Bureau of Indian Standards (BIS) hallmark and Hallmark Unique Identification (HUID) code. This ensures complete transparency in purity and pricing, allowing you to invest with absolute peace of mind. From heavy bridal necklaces to daily wear accessories, our collection is curated for lifetime value.
                </p>
                <p>
                  For brides preparing for their special day, our curated <strong className="text-yellow-400 font-medium">bridal jewellery in Jaunpur</strong> offers a spectacular range of hand-carved chokers, traditional kundan sets, and detailed bangles that capture the romance of marriage. Furthermore, our certified <strong className="text-yellow-400 font-medium">diamond jewellery in Jaunpur</strong> presents breathtaking designs set with precision-cut stones that sparkle with eternal radiance. Supported by our transparent 100% buyback assurance and computerized Karatometer testing, we are dedicated to providing the ultimate luxury shopping experience.
                </p>
                <p>
                  Whether you are visiting from Olandganj, Line Bazar, Shahganj, or Kerakat, VCJ Jewellers remains your trusted local partner for fine jewellery. We pride ourselves on creating lifelong relationships across generations of families who value authenticity, transparent exchange values, and exquisite design. Visit our showroom today to explore our new collections and find the perfect masterpiece.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out border-t border-yellow-500/10 pt-16 mb-16">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              
              <details className="group border border-yellow-500/10 rounded-2xl bg-white/5 backdrop-blur-md hover:border-yellow-500/30 transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer select-none font-serif text-base md:text-lg font-bold text-white group-hover:text-yellow-400 group-open:text-yellow-400 list-none [&::-webkit-details-marker]:hidden focus:outline-none focus:ring-1 focus:ring-yellow-500/50 rounded-2xl">
                  <span>Which is the best jewellery shop in Jaunpur?</span>
                  <span className="text-yellow-500 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-yellow-500/10 text-slate-300 font-light leading-relaxed text-sm md:text-base">
                  VCJ Jewellers is widely considered the best jewellery shop in Jaunpur, serving customers since 1960 from our showroom in Nakhas. We are renowned for our exceptional craftsmanship, 100% BIS hallmarked gold, and legacy of trust spanning over six decades.
                </div>
              </details>

              <details className="group border border-yellow-500/10 rounded-2xl bg-white/5 backdrop-blur-md hover:border-yellow-500/30 transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer select-none font-serif text-base md:text-lg font-bold text-white group-hover:text-yellow-400 group-open:text-yellow-400 list-none [&::-webkit-details-marker]:hidden focus:outline-none focus:ring-1 focus:ring-yellow-500/50 rounded-2xl">
                  <span>Where can I buy hallmarked gold jewellery in Jaunpur?</span>
                  <span className="text-yellow-500 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-yellow-500/10 text-slate-300 font-light leading-relaxed text-sm md:text-base">
                  You can buy 100% BIS hallmarked gold jewellery at VCJ Jewellers showroom located in Nakhas, Jaunpur. Every piece of gold we sell is certified with the HUID (Hallmark Unique Identification) code to guarantee purity and transparent value.
                </div>
              </details>

              <details className="group border border-yellow-500/10 rounded-2xl bg-white/5 backdrop-blur-md hover:border-yellow-500/30 transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer select-none font-serif text-base md:text-lg font-bold text-white group-hover:text-yellow-400 group-open:text-yellow-400 list-none [&::-webkit-details-marker]:hidden focus:outline-none focus:ring-1 focus:ring-yellow-500/50 rounded-2xl">
                  <span>Does VCJ Jewellers provide gold exchange and buyback?</span>
                  <span className="text-yellow-500 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-yellow-500/10 text-slate-300 font-light leading-relaxed text-sm md:text-base">
                  Yes, VCJ Jewellers provides 100% buyback assurance and exchange value on our jewellery. We also offer free purity testing on our advanced computerized Karatometer to ensure complete transparency during transactions.
                </div>
              </details>

              <details className="group border border-yellow-500/10 rounded-2xl bg-white/5 backdrop-blur-md hover:border-yellow-500/30 transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer select-none font-serif text-base md:text-lg font-bold text-white group-hover:text-yellow-400 group-open:text-yellow-400 list-none [&::-webkit-details-marker]:hidden focus:outline-none focus:ring-1 focus:ring-yellow-500/50 rounded-2xl">
                  <span>Where can I find bridal jewellery in Jaunpur?</span>
                  <span className="text-yellow-500 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-yellow-500/10 text-slate-300 font-light leading-relaxed text-sm md:text-base">
                  VCJ Jewellers is the premier bridal showroom in Jaunpur, featuring an extensive range of bridal necklaces, chokers, bangles, and rings. Our bridal collections are designed for special occasions, marrying traditional Jaunpur heritage with modern elegance.
                </div>
              </details>

              <details className="group border border-yellow-500/10 rounded-2xl bg-white/5 backdrop-blur-md hover:border-yellow-500/30 transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer select-none font-serif text-base md:text-lg font-bold text-white group-hover:text-yellow-400 group-open:text-yellow-400 list-none [&::-webkit-details-marker]:hidden focus:outline-none focus:ring-1 focus:ring-yellow-500/50 rounded-2xl">
                  <span>Does VCJ Jewellers offer diamond jewellery?</span>
                  <span className="text-yellow-500 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-yellow-500/10 text-slate-300 font-light leading-relaxed text-sm md:text-base">
                  Yes, we offer a certified range of diamond jewellery including solitaires, rings, necklaces, and nose pins. Every diamond is certified to ensure maximum clarity, color, and cut quality.
                </div>
              </details>

            </div>
          </div>

          {/* Popular Searches Section */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out border-t border-yellow-500/10 pt-12 text-center">
            <h4 className="font-serif text-lg font-bold text-white mb-6">Popular Jewellery Searches</h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs md:text-sm font-sans tracking-wide">
              {popularSearches.map((search, idx) => (
                <Link
                  key={idx}
                  href={search.href}
                  className="text-slate-400 hover:text-yellow-400 transition-colors duration-200 underline underline-offset-4 hover:no-underline"
                >
                  {search.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Vanilla Script for Scroll Reveal using Intersection Observer */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function initReveal() {
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                      entry.target.classList.remove('opacity-0', 'translate-y-8');
                      observer.unobserve(entry.target);
                    }
                  });
                }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
                document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                  observer.observe(el);
                });
              }
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initReveal);
              } else {
                initReveal();
              }
            })();
          `
        }}
      />
    </>
  );
}
