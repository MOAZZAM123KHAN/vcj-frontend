import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Calendar,
  Gift,
  Tag,
  Navigation
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BUSINESS_INFO } from '@/data/business';
import { festiveOffer } from '@/data/festive-offer';

// Google Business Profile (GBP) Campaign Reference Note:
// Links from GBP posts to this page should use:
// ?utm_source=google&utm_medium=gbp_post&utm_campaign=dhanteras2026
// The canonical URL below points to the clean non-www path.

const CANONICAL_URL = 'https://vcjjewellers.com/dhanteras-diwali-jewellery-jaunpur';
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=VCJ+Jewellers+-+Vimal+Chhaganlal+Jewellers,+Sadbhawana+Pul+Mod,+Olandganj,+Kachahari+Road,+Nakhas,+Jaunpur,+Uttar+Pradesh+222002`;
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.3721798363715!2d82.6845!3d25.7478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990373400000001%3A0x6b77dfb890c2eb71!2sVCJ%20Jewellers%20(Vimal%20Chhaganlal%20Jewellers)!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin`;

export const metadata: Metadata = {
  title: 'Dhanteras & Diwali Jewellery in Jaunpur | VCJ Jewellers',
  description:
    'Celebrate Dhanteras and Diwali in Jaunpur with VCJ Jewellers. Explore festive jewellery collections, making charge offers, live gold rate, and showroom timings at Nakhas.',
  keywords: [
    'Dhanteras jewellery Jaunpur',
    'Diwali jewellery Jaunpur',
    'Dhanteras gold offers Jaunpur',
    'Jewellery shop in Jaunpur',
    'VCJ Jewellers Jaunpur',
    'Vimal Chhaganlal Jewellers Nakhas'
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: 'Dhanteras & Diwali Jewellery in Jaunpur | VCJ Jewellers',
    description:
      'Celebrate Dhanteras and Diwali in Jaunpur with VCJ Jewellers. Explore festive jewellery collections, making charge offers, live gold rate, and showroom timings at Nakhas.',
    url: CANONICAL_URL,
    siteName: 'VCJ Jewellers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-jewellery.jpg',
        width: 1200,
        height: 630,
        alt: 'Dhanteras & Diwali Jewellery at VCJ Jewellers Jaunpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanteras & Diwali Jewellery in Jaunpur | VCJ Jewellers',
    description:
      'Celebrate Dhanteras and Diwali in Jaunpur with VCJ Jewellers. Explore festive jewellery collections, making charge offers, and showroom timings at Nakhas.',
    images: ['/images/og-jewellery.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DhanterasDiwaliJewelleryJaunpur() {
  const hasEndDate = Boolean(festiveOffer.endDate && festiveOffer.endDate.trim().length > 0);
  const validityText = hasEndDate ? `Valid till ${festiveOffer.endDate}` : 'Limited period offer';

  // Hours logic: festiveHours if filled, otherwise business hours from data/business.ts
  const hasCustomFestiveHours = Boolean(festiveOffer.festiveHours && festiveOffer.festiveHours.trim().length > 0);
  const festiveHoursText = hasCustomFestiveHours ? festiveOffer.festiveHours : null;

  // Build FAQ list respecting flags
  const faqList: Array<{ question: string; answer: string }> = [
    {
      question: 'What is traditionally bought on Dhanteras?',
      answer:
        'On the auspicious occasion of Dhanteras (Dhantrayodashi), purchasing precious metals is considered a sacred tradition to invite prosperity and the blessings of Goddess Lakshmi and Lord Kubera. Families traditionally buy gold jewellery such as gold chains, rings, bangles, and earrings, as well as pure gold and silver coins, and silver puja items.',
    },
    {
      question: 'How are jewellery making charges explained?',
      answer:
        'Making charges cover the artisanal labor, design craftsmanship, and handling required to transform precious bullion into finished jewellery. They are calculated either as a percentage of the metal value or as a per-gram rate depending on the complexity of the design. During promotional periods, making charge discounts directly lower this labor cost on your invoice.',
    },
    {
      question: 'How can customers check and verify gold hallmarking?',
      answer:
        'In India, gold jewellery hallmarking is regulated by the Bureau of Indian Standards (BIS). Every hallmarked article features three distinct marks: the BIS logo, the gold purity mark (such as 22K916 or 18K750), and a unique 6-digit alphanumeric HUID (Hallmark Unique Identification) code. Consumers can verify the authenticity and details of any hallmarked piece by entering this 6-digit HUID into the official BIS CARE mobile app published by the Government of India.' +
        (festiveOffer.hallmarkClaimEnabled
          ? ' At VCJ Jewellers, customers can also verify gold purity instantly on our in-store Karatometer.'
          : ''),
    },
    ...(festiveOffer.advanceBookingEnabled
      ? [
          {
            question: 'Is advance booking available for Dhanteras and Diwali jewellery?',
            answer:
              'Yes, advance booking is available to allow customers to select designs early and ensure convenient delivery for Dhanteras and Diwali celebrations. Please visit our showroom or contact us via phone or WhatsApp for details.',
          },
        ]
      : []),
  ];

  // 1. JewelryStore Schema (Reusing verified business details - no AggregateRating or review schema)
  const jewelryStoreSchema = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    '@id': `${CANONICAL_URL}#store`,
    name: BUSINESS_INFO.name,
    image: [
      'https://vcjjewellers.com/images/jwellry%20CDN%201.jpg',
      'https://vcjjewellers.com/images/jwellry%20CDN2.jpg',
      'https://vcjjewellers.com/images/jwellry%20cdn%203.jpg',
    ],
    url: CANONICAL_URL,
    telephone: BUSINESS_INFO.contact.phone,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '19:00',
      },
    ],
    hasMap: GOOGLE_MAPS_DIRECTIONS_URL,
    sameAs: [BUSINESS_INFO.social.instagram, BUSINESS_INFO.social.facebook],
  };

  // 2. Offer Schema: Add Offer schema only if enabled is true AND endDate is not empty
  const shouldRenderOfferSchema = Boolean(festiveOffer.enabled && hasEndDate);
  const offerSchema = shouldRenderOfferSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        name: 'Dhanteras & Diwali Jewellery Making Charge Offer',
        description: `Gold making charges: ${festiveOffer.goldMakingOff}% OFF, Silver making charges: ${festiveOffer.silverMakingOff}% OFF, Diamond making charges: ${festiveOffer.diamondMakingOff}% OFF. ${festiveOffer.terms}`,
        validThrough: festiveOffer.endDate,
        seller: {
          '@type': 'JewelryStore',
          name: BUSINESS_INFO.name,
          telephone: BUSINESS_INFO.contact.phone,
        },
      }
    : null;

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vcjjewellers.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Dhanteras & Diwali Jewellery in Jaunpur',
        item: CANONICAL_URL,
      },
    ],
  };

  // 4. FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <Script
        id="jewelry-store-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelryStoreSchema) }}
      />
      {offerSchema && (
        <Script
          id="festive-offer-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
        />
      )}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/90 to-slate-950 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 md:w-[500px] md:h-[500px] bg-yellow-500/10 blur-[100px] md:blur-[140px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center space-y-6 max-w-4xl">
            <Badge className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-slate-950 border-none px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none shadow-md inline-flex items-center gap-1.5">
              <Sparkles size={14} className="shrink-0" /> VCJ Jewellers • Jaunpur Since 1960
            </Badge>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-balance">
                Dhanteras &amp; Diwali Jewellery in Jaunpur | VCJ Jewellers
              </h1>
              <p className="text-yellow-400 font-sans text-sm md:text-base font-medium tracking-wide">
                धनतेरस और दीपावली पर आभूषणों की शुभ खरीदारी
              </p>
            </div>

            {/* Subheading with dates */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-white/5 border border-yellow-500/20 px-4 py-2.5 rounded-full text-xs md:text-sm text-yellow-200">
              <span className="flex items-center gap-1.5 font-semibold">
                <Calendar size={15} className="text-yellow-400 shrink-0" /> Dhanteras 6 November 2026
              </span>
              <span className="text-yellow-500/60 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold">
                <Calendar size={15} className="text-yellow-400 shrink-0" /> Diwali 8 November 2026
              </span>
            </div>

            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed text-balance pt-2">
              Celebrate the festival of lights and auspicious beginnings with timeless gold, diamond, and silver jewellery collections at our Nakhas showroom in Jaunpur.
            </p>

            {/* Direct Mobile-Friendly CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 max-w-md mx-auto sm:max-w-none">
              <Button
                asChild
                variant="premium"
                className="h-12 sm:h-14 px-6 sm:px-8 text-xs font-bold tracking-[0.2em] uppercase rounded-none shadow-lg w-full sm:w-auto"
              >
                <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  <Navigation size={14} className="mr-2" /> Get Directions
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 text-xs font-bold tracking-[0.2em] uppercase border-white/20 text-white hover:bg-white hover:text-slate-950 transition-all rounded-none w-full sm:w-auto"
              >
                <a href={`tel:${BUSINESS_INFO.contact.phone}`}>
                  <Phone size={14} className="mr-2 text-yellow-400" /> Call {BUSINESS_INFO.contact.displayPhone}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 text-xs font-bold tracking-[0.2em] uppercase border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all rounded-none w-full sm:w-auto"
              >
                <a href={BUSINESS_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={14} className="mr-2" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* OFFER BOX: Render ONLY if festiveOffer.enabled is true */}
        {festiveOffer.enabled && (
          <section className="py-12 md:py-20 bg-gradient-to-b from-yellow-50/70 via-amber-50/40 to-white border-b border-yellow-200/60">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="bg-white border-2 border-yellow-400/70 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col items-center text-center space-y-3 mb-8">
                  <div className="inline-flex items-center gap-1.5 text-yellow-800 text-xs font-bold tracking-widest uppercase bg-yellow-100/80 px-3 py-1 rounded-full">
                    <Tag size={13} /> Festive Making Charge Offers
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                    Special Festive Making Charge Discounts
                  </h2>
                  <p className="text-yellow-700 text-xs sm:text-sm font-medium">
                    मेकिंग चार्ज पर विशेष त्योहारी छूट
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-yellow-50 border border-yellow-300 text-yellow-900 text-xs font-semibold rounded-md">
                    {validityText}
                  </span>
                </div>

                {/* Offer Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {/* Gold */}
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50/50 border border-yellow-200 rounded-xl p-5 sm:p-6 text-center space-y-2 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-800 block mb-1">
                        Gold Jewellery
                      </span>
                      <div className="text-3xl sm:text-4xl font-serif font-extrabold text-yellow-700">
                        {festiveOffer.goldMakingOff}% OFF
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 font-light pt-2 border-t border-yellow-200/60">
                      On gold making charges
                    </p>
                  </div>

                  {/* Silver */}
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100/70 border border-slate-200 rounded-xl p-5 sm:p-6 text-center space-y-2 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-slate-700 block mb-1">
                        Silver Articles &amp; Jewellery
                      </span>
                      <div className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-800">
                        {festiveOffer.silverMakingOff}% OFF
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 font-light pt-2 border-t border-slate-200/80">
                      On silver making charges
                    </p>
                  </div>

                  {/* Diamond */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-yellow-500/30 rounded-xl p-5 sm:p-6 text-center space-y-2 flex flex-col justify-between shadow-md">
                    <div>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400 block mb-1">
                        Diamond Jewellery
                      </span>
                      <div className="text-3xl sm:text-4xl font-serif font-extrabold text-yellow-400">
                        {festiveOffer.diamondMakingOff}% OFF
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 font-light pt-2 border-t border-white/10">
                      On diamond making charges
                    </p>
                  </div>
                </div>

                {/* Terms text below the box */}
                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto font-light">
                    {festiveOffer.terms}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* WHAT TO BUY THIS DHANTERAS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.35em] uppercase">
                Festive Buying Guide
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                What to Buy This Dhanteras
              </h2>
              <p className="text-yellow-700 text-xs sm:text-sm font-medium">
                धनतेरस पर क्या खरीदें — शुभ खरीदारी विचार
              </p>
              <div className="w-12 h-0.5 bg-yellow-600/30 mt-2" />
              <p className="text-slate-500 text-xs sm:text-sm max-w-xl font-light">
                Explore popular jewellery and gift selections favoured for Dhantrayodashi and Diwali celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {festiveOffer.buyIdeas.map((idea, index) => (
                <div
                  key={index}
                  className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 sm:p-6 flex items-start gap-4 hover:border-yellow-500/50 hover:bg-yellow-50/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift size={18} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-full">
                        Idea 0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
                      {idea}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Auspicious festive pieces available in contemporary and traditional designs at our Jaunpur showroom.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEXTUAL LINK TO LIVE GOLD RATE PAGE */}
        <section className="py-12 bg-slate-50 border-y border-slate-200/60">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white border border-yellow-300/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-yellow-800 text-xs font-bold tracking-widest uppercase">
                  <TrendingUp size={15} /> Transparent Daily Rates
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  Planning Your Dhanteras Jewellery Budget?
                </h3>
                <p className="text-yellow-700 text-xs font-medium">
                  आज का ताज़ा सोने का भाव
                </p>
                <p className="text-slate-600 text-xs sm:text-sm max-w-xl font-light leading-relaxed">
                  Track today&apos;s updated 22k and 24k gold rates per gram in Jaunpur before visiting our showroom.
                </p>
              </div>
              <Button
                asChild
                variant="premium"
                className="h-12 px-6 text-xs font-bold tracking-widest uppercase rounded-none shrink-0 shadow-md w-full sm:w-auto"
              >
                <Link href="/gold-rate-jaunpur">
                  Check today&apos;s gold rate <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SHOWROOM HOURS BLOCK */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center space-y-3 mb-10">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.35em] uppercase">
                Plan Your Visit
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                Showroom Opening Hours
              </h2>
              <p className="text-yellow-700 text-xs sm:text-sm font-medium">
                शोरूम खुलने का समय
              </p>
              <div className="w-12 h-0.5 bg-yellow-600/30 mt-2" />
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex items-center gap-4 text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">
                      Showroom Schedule
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-0.5">
                      Sadbhawana Pul Mod, Nakhas, Jaunpur
                    </p>
                  </div>
                </div>

                <div className="text-center md:text-right text-sm">
                  {festiveHoursText ? (
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded mb-1">
                        Festive Hours
                      </span>
                      <p className="text-white font-medium">{festiveHoursText}</p>
                    </div>
                  ) : (
                    <div className="space-y-1 text-slate-300 font-light">
                      <p>
                        <strong className="text-white font-semibold">Monday – Saturday:</strong> 10:00 AM – 09:00 PM
                      </p>
                      <p>
                        <strong className="text-white font-semibold">Sunday:</strong> 11:00 AM – 07:00 PM
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/60">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.35em] uppercase">
                Customer Guidance
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-yellow-700 text-xs sm:text-sm font-medium">
                त्योहारी खरीदारी से जुड़े सामान्य प्रश्न
              </p>
              <div className="w-12 h-0.5 bg-yellow-600/30 mt-2" />
            </div>

            <div className="space-y-4">
              {faqList.map((faq, index) => (
                <details
                  key={index}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 sm:p-6 font-bold text-slate-900 hover:bg-slate-50 transition-colors select-none">
                    <span className="font-serif text-sm sm:text-base pr-4 text-balance">
                      {faq.question}
                    </span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0">
                      <ChevronDown size={18} />
                    </span>
                  </summary>
                  <div className="px-5 sm:px-6 pb-6 pt-2 leading-relaxed text-slate-600 text-xs sm:text-sm font-light border-t border-slate-100 bg-slate-50/40">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SHOWROOM LOCATION, MAP, ADDRESS, CALL & WHATSAPP */}
        <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <Badge className="bg-yellow-600 text-slate-950 border-none px-3 py-1 font-bold tracking-widest text-[10px] uppercase rounded-none">
                📍 Nakhas, Jaunpur
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold">
                Visit VCJ Jewellers Showroom
              </h2>
              <p className="text-yellow-400 text-xs sm:text-sm font-medium">
                नखास, जौनपुर शोरूम में आपका स्वागत है
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Showroom Details */}
              <div className="lg:col-span-5 space-y-6 text-sm">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-yellow-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-200">Showroom Address</h4>
                    <p className="text-slate-400 font-light mt-1 leading-relaxed text-xs sm:text-sm">
                      {BUSINESS_INFO.legalName}<br />
                      {BUSINESS_INFO.address.streetAddress}<br />
                      {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion} {BUSINESS_INFO.address.postalCode}, {BUSINESS_INFO.address.addressCountry}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="text-yellow-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-200">Phone &amp; WhatsApp Inquiries</h4>
                    <p className="text-slate-400 font-light mt-1 text-xs sm:text-sm">
                      Phone:{' '}
                      <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="text-yellow-400 hover:underline">
                        {BUSINESS_INFO.contact.displayPhone}
                      </a>
                      <br />
                      WhatsApp:{' '}
                      <a
                        href={BUSINESS_INFO.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        {BUSINESS_INFO.contact.displayPhone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    asChild
                    variant="premium"
                    className="h-12 px-6 text-xs font-bold tracking-widest uppercase rounded-none w-full sm:w-auto"
                  >
                    <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 px-6 text-xs font-bold tracking-widest uppercase border-white/20 text-white hover:bg-white hover:text-slate-950 rounded-none w-full sm:w-auto"
                  >
                    <a href={`tel:${BUSINESS_INFO.contact.phone}`}>Call Showroom</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 px-6 text-xs font-bold tracking-widest uppercase border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-none w-full sm:w-auto"
                  >
                    <a href={BUSINESS_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="lg:col-span-7 h-[320px] sm:h-[380px] relative border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  title="VCJ Jewellers Showroom Location Map, Nakhas Jaunpur"
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM FIXED/STICKY MOBILE ACTION BAR (~90% traffic is mobile) */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-yellow-500/30 p-2.5 flex items-center justify-around gap-2 shadow-2xl">
          <a
            href={`tel:${BUSINESS_INFO.contact.phone}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-yellow-500 text-slate-950 py-2.5 px-3 rounded text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform"
          >
            <Phone size={14} /> Call
          </a>
          <a
            href={BUSINESS_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 text-white py-2.5 px-3 rounded text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-slate-800 text-yellow-300 border border-yellow-500/40 py-2.5 px-3 rounded text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform"
          >
            <Navigation size={14} /> Map
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
