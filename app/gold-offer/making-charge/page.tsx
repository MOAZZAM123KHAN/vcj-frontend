import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { FloatingButtons } from '@/components/home/FloatingButtons';
import {
  ShieldCheck,
  Sparkles,
  Heart,
  MapPin,
  BadgePercent,
  Scale,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Clock,
  Award
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { HomeTestimonialSection } from '@/components/home/HomeTestimonialSection';
import TrustBar from '@/components/TrustBar';
import JsonLd from '@/components/JsonLd';
import { getOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Gold Jewellery Making Charges Only 3.5% | Best Jewellery Shop In Jaunpur',
  description: 'Get Gold Jewellery Making Charges Starting From Only 3.5% At VCJ Jewellers Jaunpur. Visit The Best Gold Jewellery Showroom In Jaunpur For Hallmarked Gold, Bridal Jewellery, Wedding Collections & Latest Designs.',
  alternates: {
    canonical: 'https://vcjjewellers.com/gold-offer/making-charge',
  },
  openGraph: {
    title: 'Gold Jewellery Making Charges Only 3.5% | VCJ Jewellers',
    description: 'Limited-Time Gold Jewellery Offer At VCJ Jewellers Jaunpur. Making Charges Starting From Only 3.5%. Offer Valid Till 30 June.',
    url: 'https://vcjjewellers.com/gold-offer/making-charge',
    siteName: 'VCJ Jewellers',
    images: [
      {
        url: '/images/og-jewellery.jpg',
        width: 1200,
        height: 630,
        alt: 'VCJ Jewellers Jaunpur Making Charges Offer',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Jewellery Making Charges Only 3.5% | VCJ Jewellers',
    description: 'Limited-Time Gold Jewellery Offer At VCJ Jewellers Jaunpur. Making Charges Starting From Only 3.5%. Offer Valid Till 30 June.',
    images: ['/images/og-jewellery.jpg'],
  }
};

export default function MakingChargeOfferPage() {
  const orgSchema = getOrganizationSchema();

  // Breadcrumb list schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vcjjewellers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gold Offer",
        "item": "https://vcjjewellers.com/gold-offer/making-charge"
      }
    ]
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the current gold jewellery making charge offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VCJ Jewellers is offering exclusive gold jewellery making charges starting from only 3.5%. This is a limited-time promotional offer designed to offer maximum value to our customers in Jaunpur."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 3.5% making charge offer available on all jewellery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The making charges starting from 3.5% are applicable on selected gold jewellery collections. Please visit our flagship showroom in Jaunpur to see the complete list of applicable designs."
        }
      },
      {
        "@type": "Question",
        "name": "Where is VCJ Jewellers located in Jaunpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VCJ Jewellers showroom is located at Sadbhavna Bridge Mod, Kachari Road, Nakhas, Jaunpur, Uttar Pradesh 222002. It is easily accessible from all parts of the city."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer hallmarked gold jewellery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every single piece of gold jewellery at VCJ Jewellers is 100% BIS Hallmarked. We prioritize certified purity and offer free testing using our advanced Karatometer."
        }
      },
      {
        "@type": "Question",
        "name": "Is the offer valid till 30 June?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the gold jewellery making charges starting from 3.5% offer is a limited-time promotion valid till 30 June. Be sure to visit before the offer ends."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose VCJ Jewellers in Jaunpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VCJ Jewellers has been Jaunpur's trusted jewellery showroom since 1960. We offer BIS Hallmarked gold, transparent pricing, 100% buyback guarantee, lifetime free repairs, and exceptional customer service across 4 generations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have bridal jewellery collections?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have an extensive collection of bridal and wedding jewellery, including antique gold sets, Kundan necklaces, Polki designs, gold bangles, and bridal rings."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "VCJ Jewellers",
    "description": "Exclusive gold jewellery making charges starting from only 3.5% at VCJ Jewellers Jaunpur. Limited time offer valid till 30 June.",
    "image": "https://vcjjewellers.com/images/jwellry CDN 1.jpg",
    "telephone": BUSINESS_INFO.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.streetAddress,
      "addressLocality": BUSINESS_INFO.address.addressLocality,
      "postalCode": BUSINESS_INFO.address.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.geo.latitude,
      "longitude": BUSINESS_INFO.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    },
    "priceRange": BUSINESS_INFO.priceRange
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=VCJ+Jewellers+Sadbhavna+Bridge+Mod+Nakhas+Jaunpur`;
  const whatsappMsgUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace('+', '')}?text=Hi%20VCJ%20Jewellers,%20I%20am%20interested%20in%20your%20Gold%20Jewellery%20Making%20Charges%20Offer%20(starting%20from%203.5%).%20Please%20guide%20me.`;

  return (
    <>
      {/* Schema Markups */}
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />

      <Header />

      <main className="min-h-screen bg-slate-50">
        
        {/* ===== HERO SECTION ===== */}
        <section className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[70vh] md:min-h-[80vh] flex items-center">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/jwellry CDN 1.jpg"
              alt="Luxury bridal gold jewellery showcase"
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-35 object-center scale-105"
            />
            {/* Dark radial overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.85)_100%)]" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10 py-16 md:py-24 max-w-6xl">
            <div className="max-w-3xl space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 bg-yellow-500/80" />
                <span className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase">Exclusive Celebration Offer</span>
                <div className="h-px w-8 bg-yellow-500/80" />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-[1.15] text-balance">
                  Gold Jewellery Making Charges <span className="text-yellow-500 text-glow">Only 3.5%</span>
                </h1>
                <p className="text-yellow-600 font-serif text-lg sm:text-2xl font-semibold tracking-wide italic">
                  Limited Time Offer Valid Till 30 June
                </p>
              </div>

              <p className="text-slate-300 max-w-xl text-base sm:text-lg font-light leading-relaxed">
                Discover premium hallmarked gold jewellery collections with exclusive making charges starting from only 3.5% at VCJ Jewellers Jaunpur. Handcrafted elegance backed by a legacy of purity since 1960.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="premium" className="h-12 md:h-14 px-8 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg hover:scale-105 transition-all" asChild>
                  <a href="#showroom-visit">Visit Showroom</a>
                </Button>
                
                <Button variant="outline" className="h-12 md:h-14 px-8 rounded-full text-xs font-bold tracking-widest uppercase border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all" asChild>
                  <a href={`tel:${BUSINESS_INFO.contact.phone}`}>
                    <Phone className="mr-2" size={14} /> Call Now
                  </a>
                </Button>

                <Button variant="outline" className="h-12 md:h-14 px-8 rounded-full text-xs font-bold tracking-widest uppercase border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 transition-all" asChild>
                  <a href={whatsappMsgUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={14} /> WhatsApp Now
                  </a>
                </Button>

                <Button variant="outline" className="h-12 md:h-14 px-8 rounded-full text-xs font-bold tracking-widest uppercase border-slate-700 text-slate-300 hover:text-white hover:border-white/20 transition-all" asChild>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2" size={14} /> Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== URGENCY BANNER ===== */}
        <section className="bg-yellow-600 text-black py-4 font-bold tracking-[0.25em] text-center text-xs sm:text-sm uppercase shadow-md relative z-20">
          <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
            <span>⌛ Offer Ends On 30 June – Visit Today</span>
            <span className="hidden sm:inline">|</span>
            <Link href="#showroom-visit" className="underline hover:text-slate-900 transition-colors">Book Private Consultation →</Link>
          </div>
        </section>

        <TrustBar />

        {/* ===== OFFER HIGHLIGHTS SECTION ===== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <span className="text-yellow-600 text-xs font-bold tracking-[0.4em] uppercase">Value Unveiled</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Why This Offer Is Special</h2>
              <div className="w-12 h-0.5 bg-yellow-500/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Gold Jewellery Making Charges Starting From 3.5%",
                  desc: "Unbelievably low making charges on premium gold items. Maximize your savings and purchase value.",
                  icon: <BadgePercent className="w-6 h-6 text-yellow-700" />
                },
                {
                  title: "Hallmarked Gold Jewellery",
                  desc: "Every single piece is 100% BIS Hallmarked. We guarantee certified metal purity for total peace of mind.",
                  icon: <ShieldCheck className="w-6 h-6 text-yellow-700" />
                },
                {
                  title: "Latest Gold Designs",
                  desc: "Access our fresh, cataloged collections featuring the newest international and national design trends.",
                  icon: <Sparkles className="w-6 h-6 text-yellow-700" />
                },
                {
                  title: "Bridal & Wedding Collections",
                  desc: "Stunning heavy sets, Polki masterpieces, and bespoke traditional wear optimized for grand celebrations.",
                  icon: <Heart className="w-6 h-6 text-yellow-700" />
                },
                {
                  title: "Trusted Jewellery Showroom In Jaunpur",
                  desc: "Serving generations of families since 1960. Four decades of unmatched heritage and local reliability.",
                  icon: <MapPin className="w-6 h-6 text-yellow-700" />
                },
                {
                  title: "Transparent Pricing",
                  desc: "No hidden fees, no extra margins. Detailed invoice breakdown showing exact gold weight, rate, and GST.",
                  icon: <Scale className="w-6 h-6 text-yellow-700" />
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-lg">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURED COLLECTIONS SECTION ===== */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <span className="text-yellow-600 text-xs font-bold tracking-[0.4em] uppercase">The Lookbook</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Explore Our Gold Jewellery Collections</h2>
              <div className="w-12 h-0.5 bg-yellow-500/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Bridal Jewellery", link: "/products?category=Bridal" },
                { name: "Wedding Jewellery", link: "/products?category=Bridal" },
                { name: "Gold Rings", link: "/products?material=Gold&category=Rings" },
                { name: "Gold Chains", link: "/products?material=Gold&category=Chains" },
                { name: "Earrings", link: "/products?category=Earrings" },
                { name: "Bangles", link: "/products?category=Bangles" },
                { name: "Daily Wear Jewellery", link: "/products?category=Daily+Wear" },
                { name: "Diamond Jewellery", link: "/products?material=Diamond" },
                { name: "Silver Jewellery", link: "/products?material=Silver" }
              ].map((item, idx) => (
                <Link key={idx} href={item.link} className="group relative bg-white border border-slate-100 p-8 flex justify-between items-center hover:border-yellow-600/50 hover:shadow-sm transition-all duration-300">
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-slate-900 text-lg group-hover:text-yellow-700 transition-colors">{item.name}</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Handcrafted Collection</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-yellow-700 group-hover:border-yellow-500 group-hover:bg-yellow-50 transition-all">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE VCJ SECTION ===== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/images/jwellry CDN2.jpg"
                  alt="Crafting premium gold jewellery at VCJ showroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                  <p className="text-yellow-500 text-[10px] font-bold tracking-widest uppercase">Purity Certified</p>
                  <p className="font-serif font-bold text-lg">BIS Hallmarked Legacy since 1960</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <span className="text-yellow-600 text-xs font-bold tracking-[0.4em] uppercase">Generations of Trust</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Why Choose VCJ Jewellers</h2>
                  <div className="w-12 h-0.5 bg-yellow-500/30" />
                </div>

                <p className="text-slate-500 font-light leading-relaxed text-sm sm:text-base">
                  For over 60 years, VCJ Jewellers has been a symbol of luxury and integrity. Our relationship with our clients is built on mutual respect and transparency in pricing.
                </p>

                <ul className="space-y-4">
                  {[
                    "Trusted Jewellery Showroom In Jaunpur Since 1960",
                    "100% BIS Hallmarked Gold Jewellery with Certified Purity",
                    "Premium Craftsmanship and High-end Hand Finishing",
                    "Transparent Pricing Structure with Detailed Invoice Breakdown",
                    "Latest & Trending Gold, Diamond and Silver Designs",
                    "Excellent & Personalized Customer Service Team",
                    "Highly Renowned & Trusted Local Brand in Uttar Pradesh"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                      <div className="w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center shrink-0 text-yellow-700 mt-0.5">
                        <Award size={12} />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LOCAL SEO CONTENT SECTION ===== */}
        <section className="py-20 md:py-28 bg-slate-50 border-t border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12 space-y-4">
              <span className="text-yellow-600 text-xs font-bold tracking-[0.4em] uppercase">Discover Jaunpur</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Best Gold Jewellery Showroom In Jaunpur</h2>
              <div className="w-12 h-0.5 bg-yellow-500/30 mx-auto" />
            </div>

            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-light space-y-6 text-sm sm:text-base">
              <p>
                Finding the perfect blend of trust, purity, and exquisite artistry is essential when looking for a reliable <strong>gold jewellery shop in jaunpur</strong>. For over six decades, VCJ Jewellers (Vimal Chhaganlal Jewellers) has stood as a beacon of unmatched quality and transparency, earning the reputation of being the <strong>best jewellery showroom in jaunpur</strong>. Whether you are looking for classic everyday wear or searching for the finest <strong>hallmarked gold jewellery in jaunpur</strong>, our showroom brings you an unparalleled collection crafted to perfection.
              </p>
              <p>
                If you are searching for a <strong>gold jewellery near me</strong> or a <strong>jewellery shop near me</strong> in Uttar Pradesh, our flagship showroom is conveniently located at Sadbhavna Bridge Mod, Nakhas, Jaunpur. Step inside to explore a world of luxury where tradition meets contemporary style. We understand that purchasing gold is not just a style choice but also a significant family investment. That is why we provide a state-of-the-art Karatometer for free purity testing, ensuring that you get absolute transparency on every purchase.
              </p>

              <h3 className="text-lg font-serif font-bold text-slate-800 pt-4">The Ultimate Destination for Bridal & Wedding Collections</h3>
              <p>
                Planning a wedding requires meticulous detail, especially when selecting bridal jewellery that will be passed down for generations. As a leading <strong>bridal jewellery shop in jaunpur</strong>, VCJ Jewellers houses an extensive array of wedding masterpieces. Our showroom displays everything from traditional antique gold, intricate Kundan work, and majestic Polki sets, to contemporary diamond settings.
              </p>
              <p>
                From heavy neckpieces and wedding chokers to delicate bangles, matching earrings, and ornate rings, our collection is curated to make every bride shine on her special day. When searching for a trusted <strong>wedding jewellery showroom in jaunpur</strong>, families choose VCJ Jewellers for our legacy of design superiority and certified purity. Every single piece is 100% BIS Hallmarked, assuring you of the highest standards of metal quality.
              </p>

              <h3 className="text-lg font-serif font-bold text-slate-800 pt-4">Why VCJ Jewellers is the Most Trusted Jeweller in Jaunpur</h3>
              <p>
                In the jewellery industry, trust is the single most valuable asset. Since 1960, VCJ Jewellers has served as a cornerstone of reliability, making us one of the most <strong>trusted jewellers in jaunpur</strong>. We build relationships across generations by offering key customer benefits:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>100% Purity Guarantee:</strong> We only showcase hallmarked jewellery.</li>
                <li><strong>100% Exchange Value:</strong> Exchange your old gold at full market value with transparent melt-loss assessment.</li>
                <li><strong>Lifetime Free Repair & Polishing:</strong> Enjoy lifetime maintenance on all items bought from our showroom.</li>
                <li><strong>Transparent Pricing:</strong> Clear breakdown of gold rate, making charges, and GST.</li>
              </ul>
              <p>
                With our current promotional offer of making charges starting from <strong>only 3.5%</strong>, there has never been a better time to visit our store. Whether you are coming from Sadbhavna Bridge, Kachari Road, Nakhas, or nearby cities, finding the best <strong>gold showroom near me</strong> leads directly to our doors. Discover our latest collections, check today&apos;s live gold rate, and invest in timeless elegance at VCJ Jewellers today.
              </p>
            </div>
          </div>
        </section>

        {/* ===== DYNAMIC TESTIMONIALS & TRUST BADGES ===== */}
        <HomeTestimonialSection title="Customer Testimonials" limit={3} className="bg-white" />

        {/* Trust Badges Details */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <h3 className="font-serif text-xl font-bold text-slate-800">Our Certifications & Quality Badges</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600 text-sm">
              <span className="flex items-center gap-1.5 font-medium">✔️ BIS Hallmark 916 Gold</span>
              <span className="flex items-center gap-1.5 font-medium">✔️ GIA/IGI Certified Diamonds</span>
              <span className="flex items-center gap-1.5 font-medium">✔️ 100% Purity Karatometer Checked</span>
              <span className="flex items-center gap-1.5 font-medium">✔️ Google Verified Business Reviews (5⭐ Rating)</span>
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16 space-y-4">
              <span className="text-yellow-600 text-xs font-bold tracking-[0.4em] uppercase">Clarifications</span>
              <h2 className="text-3xl font-serif font-bold text-slate-900">Frequently Asked Questions</h2>
              <div className="w-12 h-0.5 bg-yellow-500/30 mx-auto" />
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What is the current gold jewellery making charge offer?",
                  a: "VCJ Jewellers is offering exclusive gold jewellery making charges starting from only 3.5%. This is a limited-time promotional offer designed to offer maximum value to our customers in Jaunpur."
                },
                {
                  q: "Is the 3.5% making charge offer available on all jewellery?",
                  a: "The making charges starting from 3.5% are applicable on selected gold jewellery collections. Please visit our flagship showroom in Jaunpur to see the complete list of applicable designs."
                },
                {
                  q: "Where is VCJ Jewellers located in Jaunpur?",
                  a: "VCJ Jewellers showroom is located at Sadbhavna Bridge Mod, Kachari Road, Nakhas, Jaunpur, Uttar Pradesh 222002. It is easily accessible from all parts of the city."
                },
                {
                  q: "Do you offer hallmarked gold jewellery?",
                  a: "Yes, every single piece of gold jewellery at VCJ Jewellers is 100% BIS Hallmarked. We prioritize certified purity and offer free testing using our advanced Karatometer."
                },
                {
                  q: "Is the offer valid till 30 June?",
                  a: "Yes, the gold jewellery making charges starting from 3.5% offer is a limited-time promotion valid till 30 June. Be sure to visit before the offer ends."
                },
                {
                  q: "Why choose VCJ Jewellers in Jaunpur?",
                  a: "VCJ Jewellers has been Jaunpur's trusted jewellery showroom since 1960. We offer BIS Hallmarked gold, transparent pricing, 100% buyback guarantee, lifetime free repairs, and exceptional customer service across 4 generations."
                },
                {
                  q: "Do you have bridal jewellery collections?",
                  a: "Yes, we have an extensive collection of bridal and wedding jewellery, including antique gold sets, Kundan necklaces, Polki designs, gold bangles, and bridal rings."
                }
              ].map((faq, idx) => (
                <details key={idx} className="group overflow-hidden rounded-xl border border-slate-200 bg-white [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-slate-900 hover:text-yellow-700 transition-colors">
                    {faq.q}
                    <span className="text-slate-400 transition group-open:rotate-180">
                      <ChevronDown size={20} />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 leading-relaxed text-slate-600 text-sm font-light">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT & LEAD CAPTURE SECTION ===== */}
        <section id="showroom-visit" className="py-20 bg-slate-900 text-white relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-yellow-500 text-xs font-bold tracking-[0.4em] uppercase">Private Booking</span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">Schedule Your Showroom Visit</h2>
                <p className="text-slate-400 max-w-lg font-light text-sm sm:text-base leading-relaxed">
                  Book a private viewing session to browse our collections with our dedicated consultants and avail the making charges starting from 3.5%.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600/10 p-3 rounded-full text-yellow-500 shrink-0"><MapPin size={20} /></div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Our Location</h4>
                      <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.postalCode}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600/10 p-3 rounded-full text-yellow-500 shrink-0"><Phone size={20} /></div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Personal Assistant</h4>
                      <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                        <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:underline hover:text-white transition-all">
                          {BUSINESS_INFO.contact.displayPhone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600/10 p-3 rounded-full text-yellow-500 shrink-0"><Clock size={20} /></div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Business Hours</h4>
                      <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{BUSINESS_INFO.openingHours}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="premium" className="h-12 px-6 rounded-full text-xs font-bold tracking-widest uppercase" asChild>
                    <a href={`tel:${BUSINESS_INFO.contact.phone}`}>Call Showroom</a>
                  </Button>
                  <Button variant="outline" className="h-12 px-6 rounded-full text-xs font-bold tracking-widest uppercase border-white/20 text-white hover:bg-white/10" asChild>
                    <a href={whatsappMsgUrl} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                  </Button>
                </div>
              </div>

              {/* Map Embed Frame */}
              <div className="space-y-6">
                <div className="bg-slate-800 rounded-3xl overflow-hidden h-[300px] sm:h-[380px] border border-white/10 relative shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.5!2d82.68!3d25.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AVCJ!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VCJ Jewellers Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
