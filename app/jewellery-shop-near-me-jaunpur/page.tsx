import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { 
  ShieldCheck, 
  RefreshCcw, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Gem, 
  Clock, 
  Award, 
  Users, 
  Scale, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  MessageCircle
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StoreGallery } from '@/components/landing-page/StoreGallery';
import { BUSINESS_INFO } from '@/data/business';

// Verified Google Maps directions destination URL
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=VCJ+Jewellers+-+Vimal+Chhaganlal+Jewellers,+Sadbhawana+Pul+Mod,+Olandganj,+Kachahari+Road,+Nakhas,+Jaunpur,+Uttar+Pradesh+222002`;

// SEO Metadata
export const metadata: Metadata = {
  title: 'Jewellery Shop in Jaunpur | VCJ Jewellers Since 1960',
  description: 'Visit VCJ Jewellers in Jaunpur for gold, diamond and silver jewellery, bridal collections and more. Explore our showroom and get directions.',
  keywords: [
    'Jewellery Shop in Jaunpur',
    'Best Jewellery Showroom in Jaunpur',
    'Gold Jewellery Shop in Jaunpur',
    'Jewellery Store Near Me',
    'VCJ Jewellers Jaunpur',
    'Vimal Chhaganlal Jewellers',
    'Bridal Jewellery Jaunpur',
    'Diamond Jewellery Jaunpur',
    'BIS Hallmarked Gold Jaunpur',
    'Gold Bangles Jaunpur',
    'Gold Rings Jaunpur',
    'Mangalsutra Jaunpur'
  ],
  alternates: {
    canonical: 'https://vcjjewellers.com/jewellery-shop-near-me-jaunpur',
  },
  openGraph: {
    title: 'Jewellery Shop in Jaunpur | VCJ Jewellers Since 1960',
    description: 'Visit VCJ Jewellers in Jaunpur for gold, diamond and silver jewellery, bridal collections and more. Explore our showroom and get directions.',
    url: 'https://vcjjewellers.com/jewellery-shop-near-me-jaunpur',
    siteName: 'VCJ Jewellers',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og-jewellery.jpg',
        width: 1200,
        height: 630,
        alt: 'VCJ Jewellers Showroom Jaunpur',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jewellery Shop in Jaunpur | VCJ Jewellers Since 1960',
    description: 'Visit VCJ Jewellers in Jaunpur for gold, diamond and silver jewellery, bridal collections and more. Explore our showroom and get directions.',
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
    }
  }
};

export default function JewelleryShopNearMeJaunpur() {
  const dateModified = new Date().toISOString();

  // 1. Schema.org JewelryStore (Verified business details only - no fabricated ratings or reviews)
  const jewelryStoreSchema = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    '@id': 'https://vcjjewellers.com/jewellery-shop-near-me-jaunpur#store',
    'name': 'VCJ Jewellers - Vimal Chhaganlal Jewellers',
    'image': [
      'https://vcjjewellers.com/images/jwellry%20CDN%201.jpg',
      'https://vcjjewellers.com/images/jwellry%20CDN2.jpg',
      'https://vcjjewellers.com/images/jwellry%20cdn%203.jpg'
    ],
    'url': 'https://vcjjewellers.com/jewellery-shop-near-me-jaunpur',
    'telephone': BUSINESS_INFO.contact.phone,
    'priceRange': '₹₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sadbhawana Pul Mod, Olandganj, Kachahari Road, Nakhas',
      'addressLocality': 'Jaunpur',
      'addressRegion': 'Uttar Pradesh',
      'postalCode': '222002',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': BUSINESS_INFO.geo.latitude,
      'longitude': BUSINESS_INFO.geo.longitude
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        'opens': '10:00',
        'closes': '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '11:00',
        'closes': '19:00'
      }
    ],
    'hasMap': GOOGLE_MAPS_DIRECTIONS_URL,
    'sameAs': [
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.facebook
    ]
  };

  // 2. Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://vcjjewellers.com/#organization',
    'name': 'VCJ Jewellers - Vimal Chhaganlal Jewellers',
    'url': 'https://vcjjewellers.com',
    'logo': 'https://vcjjewellers.com/logo.png',
    'foundingDate': '1960',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': BUSINESS_INFO.contact.phone,
      'contactType': 'customer service',
      'areaServed': 'IN',
      'availableLanguage': ['Hindi', 'English']
    }
  };

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://vcjjewellers.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Jewellery Shop in Jaunpur',
        'item': 'https://vcjjewellers.com/jewellery-shop-near-me-jaunpur'
      }
    ]
  };

  // 4. WebPage Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://vcjjewellers.com/jewellery-shop-near-me-jaunpur#webpage',
    'url': 'https://vcjjewellers.com/jewellery-shop-near-me-jaunpur',
    'name': 'Jewellery Shop in Jaunpur | VCJ Jewellers Since 1960',
    'description': 'Visit VCJ Jewellers in Jaunpur for gold, diamond and silver jewellery, bridal collections and more. Explore our showroom and get directions.',
    'isPartOf': {
      '@id': 'https://vcjjewellers.com/#website'
    },
    'dateModified': dateModified
  };

  // 5. FAQPage Schema (Helpful, authentic answers without keyword stuffing)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Where is VCJ Jewellers located in Jaunpur?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'VCJ Jewellers (Vimal Chhaganlal Jewellers) is located at Sadbhawana Pul Mod, Olandganj, Kachahari Road, Nakhas, Jaunpur, Uttar Pradesh 222002, India.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the showroom opening hours of VCJ Jewellers?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our showroom is open Monday through Saturday from 10:00 AM to 09:00 PM, and on Sunday from 11:00 AM to 07:00 PM.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does VCJ Jewellers sell 100% BIS Hallmarked gold jewellery?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, all our gold jewellery is 100% BIS Hallmarked with valid HUID codes, ensuring government-certified purity standards.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What jewellery collections are available at VCJ Jewellers showroom in Jaunpur?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We offer a wide collection of 22k and 18k gold jewellery, certified diamond jewellery, pure silver articles, and extensive bridal wedding sets including necklaces, bangles, rings, earrings, and mangalsutras.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I check today\'s live gold rate before visiting the showroom?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can check our daily updated 22k and 24k gold rates online on our dedicated live gold rate page at vcjjewellers.com/gold-rate-jaunpur or by calling our showroom directly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I contact VCJ Jewellers for showroom visits and appointments?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can call our showroom directly at +91 63909 01876 or message us on WhatsApp at wa.me/916390901876.'
        }
      }
    ]
  };

  const collections = [
    {
      title: 'Gold Jewellery',
      subtitle: '22k & 18k BIS Hallmarked',
      description: 'Handcrafted gold necklaces, chains, bracelets, and ornaments certified with 100% BIS Hallmarking and HUID.',
      href: '/gold-jewellery-jaunpur',
      tag: 'Hallmark Gold'
    },
    {
      title: 'Bridal Jewellery',
      subtitle: 'Wedding & Festive Sets',
      description: 'Exquisite bridal chokers, raani haars, kundan, and polki creations designed for your unforgettable wedding celebrations.',
      href: '/bridal-jewellery-jaunpur',
      tag: 'Bridal Couture'
    },
    {
      title: 'Diamond Jewellery',
      subtitle: 'Certified Solitaires & Sets',
      description: 'Stunning diamond rings, pendants, earrings, and nose pins certified for color, cut, and clarity.',
      href: '/diamond-jewellery-jaunpur',
      tag: 'Certified Diamonds'
    },
    {
      title: 'Gold Bangles & Kadas',
      subtitle: 'Traditional & Modern',
      description: 'Intricately designed gold bangles, lightweight daily wear kadas, and antique statement bangles.',
      href: '/gold-bangles-jaunpur',
      tag: 'Bangles'
    },
    {
      title: 'Gold & Diamond Rings',
      subtitle: 'Engagement & Casual',
      description: 'Timeless engagement rings, couple bands, solitaire rings, and traditional gold ring designs.',
      href: '/gold-rings-jaunpur',
      tag: 'Rings'
    },
    {
      title: 'Earrings Collection',
      subtitle: 'Jhumkas, Drops & Studs',
      description: 'Classic gold jhumkas, chandelier drops, everyday studs, and sui dhaga designs tailored to every occasion.',
      href: '/earrings-collection-jaunpur',
      tag: 'Earrings'
    },
    {
      title: 'Mangalsutra Collection',
      subtitle: 'Auspicious Craftsmanship',
      description: 'Sacred traditional black-bead mangalsutras and contemporary diamond-accented designs for modern brides.',
      href: '/mangalsutra-collection-jaunpur',
      tag: 'Mangalsutra'
    },
    {
      title: 'Silver Jewellery & Articles',
      subtitle: 'Purity for Puja & Gifts',
      description: 'Fine silver ornaments, payals, silver coins, and sacred puja utensils for festive and celebratory gifting.',
      href: '/silver-jewellery-jaunpur',
      tag: 'Pure Silver'
    }
  ];

  const faqs = [
    {
      q: 'Where is VCJ Jewellers showroom located in Jaunpur?',
      a: 'VCJ Jewellers is centrally located at Sadbhawana Pul Mod, Olandganj, Kachahari Road, Nakhas, Jaunpur, Uttar Pradesh 222002. Our showroom is easily accessible from all key parts of Jaunpur, including Civil Lines, Line Bazar, Shahganj, and Machhlishahr.'
    },
    {
      q: 'What are the showroom opening hours?',
      a: 'Our showroom is open Monday to Saturday from 10:00 AM to 09:00 PM, and on Sunday from 11:00 AM to 07:00 PM, allowing comfortable shopping hours throughout the week.'
    },
    {
      q: 'Is all gold jewellery at VCJ Jewellers hallmarked?',
      a: 'Yes. Every gold ornament at VCJ Jewellers is 100% BIS Hallmarked with a Hallmark Unique Identification (HUID) number. Purity can also be verified instantly on our in-store Karatometer.'
    },
    {
      q: 'What jewellery collections can I view in the showroom?',
      a: 'We offer an extensive selection of 22k and 18k gold jewellery, bridal chokers, raani haars, diamond rings, solitaire pendants, gold bangles, earrings, mangalsutras, and pure silver utensils and articles.'
    },
    {
      q: 'Can I check the daily gold rate before visiting the showroom?',
      a: 'Yes, we provide live daily gold rates for Jaunpur. You can check the live 22kt and 24kt rates on our official Jaunpur Gold Rate page (vcjjewellers.com/gold-rate-jaunpur) or call our showroom staff directly at +91 63909 01876.'
    },
    {
      q: 'How do I get directions to VCJ Jewellers showroom?',
      a: 'You can click the "Get Directions" button on this page to open Google Maps navigation directly to VCJ Jewellers at Sadbhawana Pul Mod, Nakhas. Our showroom is situated near the Gomti River bridge approach road.'
    },
    {
      q: 'Can I contact the showroom via WhatsApp?',
      a: 'Yes, you can easily chat with our customer assistance team on WhatsApp at +91 63909 01876 or via wa.me/916390901876 to inquire about designs, appointments, or custom jewellery requirements.'
    },
    {
      q: 'Does VCJ Jewellers accept exchange of old gold?',
      a: 'Yes, we offer transparent exchange and buyback evaluations for old gold jewellery with computerized purity assessment on our Karatometer.'
    }
  ];

  return (
    <>
      {/* Schema.org JSON-LD Markup */}
      <Script
        id="jewelry-store-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelryStoreSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-white">
        
        {/* SECTION 1: Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-20">
          <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/90 to-slate-950/100 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center space-y-8 max-w-5xl">
            <Badge className="mb-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-slate-950 border-none px-6 py-2 text-xs font-bold tracking-[0.3em] uppercase rounded-none shadow-md">
              ✨ VCJ Jewellers • Trusted Since 1960
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight text-balance">
              Jewellery Shop in Jaunpur
            </h1>

            <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-light leading-relaxed font-sans text-balance">
              Visit <strong>VCJ Jewellers (Vimal Chhaganlal Jewellers)</strong> in Jaunpur for certified gold, diamond and silver jewellery, heritage bridal collections, and transparent pricing. Serving generations since 1960 at Nakhas.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 max-w-lg mx-auto sm:max-w-none">
              <Button asChild variant="premium" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase rounded-none shadow-lg w-full sm:w-auto">
                <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase border-white/20 text-white hover:bg-white hover:text-slate-950 transition-all rounded-none w-full sm:w-auto">
                <a href="tel:+916390901876">Call Showroom: +91 63909 01876</a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all rounded-none w-full sm:w-auto">
                <a href="https://wa.me/916390901876" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-10 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-yellow-500" /> 100% BIS Hallmarked
              </span>
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full hidden sm:inline" />
              <span className="flex items-center gap-2">
                <Gem size={16} className="text-yellow-500" /> Certified Diamonds
              </span>
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full hidden sm:inline" />
              <span className="flex items-center gap-2">
                <RefreshCcw size={16} className="text-yellow-500" /> 100% Buyback Assurance
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: Heritage & Trust since 1960 */}
        <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Generations of Trust</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Jaunpur&apos;s Trusted Jewellery Showroom Since 1960
              </h2>
              <div className="w-12 h-0.5 bg-yellow-600/30" />
              <p className="text-slate-500 max-w-2xl font-light text-sm md:text-base leading-relaxed">
                Founded in 1960, VCJ Jewellers has been a trusted cornerstone for Jaunpur families, known for hallmark purity, transparent weight calculations, and heirloom craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <Award size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Heritage Since 1960</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Over six decades of excellence and four generations of goodwill in the heart of Jaunpur.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">100% BIS Hallmarked</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Every gold piece carries verified Bureau of Indian Standards hallmarks and the authentic HUID identifier.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <Scale size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Transparent Pricing</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Clear itemized invoices with exact gold weight, daily live rates, making charges, and taxes.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <RefreshCcw size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Free Karatometer Testing</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Free instant purity testing on our precision Karatometer for your new or old gold jewellery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Contextual Gold Rate Link */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-r from-yellow-50 via-amber-50/70 to-yellow-50 border border-yellow-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-yellow-800 text-xs font-bold tracking-widest uppercase">
                  <TrendingUp size={16} /> Live Market Transparency
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">
                  Check Today&apos;s Live Gold Rate in Jaunpur
                </h3>
                <p className="text-slate-600 text-sm max-w-2xl font-light">
                  Planning to visit our showroom? Track today&apos;s live 22k and 24k gold rates per gram and tola updated daily at VCJ Jewellers.
                </p>
              </div>
              <Button asChild variant="premium" className="h-12 px-6 text-xs font-bold tracking-widest uppercase rounded-none shrink-0 shadow-md">
                <Link href="/gold-rate-jaunpur">
                  View Gold Rate Today <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 4: Jewellery Collections Grid with Direct Route Links */}
        <section className="py-20 md:py-28 bg-slate-50/60">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Masterpiece Showcase</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Explore Our Fine Jewellery Collections
              </h2>
              <div className="w-12 h-0.5 bg-yellow-600/30" />
              <p className="text-slate-500 max-w-xl font-light text-sm md:text-base leading-relaxed">
                Discover handcrafted collections in gold, diamond, and silver at our Jaunpur showroom.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-xl p-6 flex flex-col justify-between hover:border-yellow-600/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-yellow-700 bg-yellow-50 px-2.5 py-1 rounded-sm inline-block">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-yellow-800/80 font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link 
                      href={item.href}
                      className="inline-flex items-center text-xs font-bold text-yellow-700 tracking-wider uppercase group-hover:text-yellow-800 transition-colors gap-1.5"
                    >
                      Explore Collection <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Bridal & Wedding Jewellery Focus */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-none">
                  Wedding Couture
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Bridal & Wedding Jewellery in Jaunpur
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                  A wedding is a sacred milestone, and bridal jewellery embodies emotion, heritage, and auspicious blessings. At VCJ Jewellers, our dedicated bridal showcase presents magnificent 22k antique gold necklaces, chokers, raani haars, kundan sets, and handcrafted bangles.
                </p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                  Each set is designed to complement traditional bridal attire with unmatched grandeur and guaranteed purity.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="premium" className="h-12 px-6 text-xs font-bold tracking-widest uppercase rounded-none">
                    <Link href="/bridal-jewellery-jaunpur">View Bridal Collection</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-xs font-bold tracking-widest uppercase border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-none">
                    <Link href="/contact">Book Bridal Consultation</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />
                <h3 className="font-serif text-2xl font-bold text-yellow-400">
                  The VCJ Bridal Promise
                </h3>
                <ul className="space-y-4 text-xs md:text-sm text-slate-300 font-light">
                  <li className="flex items-start gap-3">
                    <Sparkles size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                    <span>Complete bridal sets matching engagement, sangeet, and wedding day ensembles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                    <span>100% BIS Hallmarked gold with complete purity transparency and HUID tags.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RefreshCcw size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                    <span>Free Karatometer check and honest valuation when exchanging family gold.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                    <span>Comfortable private showroom viewing for families in Nakhas, Jaunpur.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Store Gallery */}
        <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Visual Tour</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Our Flagship Showroom Gallery
              </h2>
              <div className="w-12 h-0.5 bg-yellow-600/30" />
              <p className="text-slate-500 max-w-xl font-light text-sm md:text-base leading-relaxed">
                Take a look inside our showroom at Nakhas, Jaunpur. Experience comfort, privacy, and exceptional hospitality.
              </p>
            </div>

            <StoreGallery />
          </div>
        </section>

        {/* SECTION 7: Showroom Location, Hours & Google Map */}
        <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Showroom Information */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <Badge className="bg-yellow-600 text-slate-950 hover:bg-yellow-500 border-none px-4 py-1 font-bold tracking-widest text-[10px] uppercase rounded-none">
                    📍 Showroom Location
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                    Visit Our Showroom
                  </h2>
                  <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                    Our showroom is conveniently located at Sadbhawana Pul Mod, Nakhas in Jaunpur. Plan your visit today for a personalized jewellery viewing.
                  </p>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-yellow-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-200">Showroom Address</h4>
                      <p className="text-slate-400 font-light mt-1 leading-relaxed">
                        VCJ Jewellers - Vimal Chhaganlal Jewellers<br />
                        Sadbhawana Pul Mod, Olandganj, Kachahari Road, Nakhas<br />
                        Jaunpur, Uttar Pradesh 222002, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Clock className="text-yellow-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-200">Opening Hours</h4>
                      <p className="text-slate-400 font-light mt-1 leading-relaxed">
                        Monday – Saturday: 10:00 AM – 09:00 PM<br />
                        Sunday: 11:00 AM – 07:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Phone className="text-yellow-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-200">Contact & Inquiries</h4>
                      <p className="text-slate-400 font-light mt-1">
                        Phone: <a href="tel:+916390901876" className="text-yellow-500 hover:underline">+91 63909 01876</a><br />
                        WhatsApp: <a href="https://wa.me/916390901876" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+91 63909 01876</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild variant="premium" className="h-12 px-6 text-xs font-bold tracking-widest uppercase rounded-none">
                    <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-xs font-bold tracking-widest uppercase border-white/20 text-white hover:bg-white hover:text-slate-950 rounded-none">
                    <a href="tel:+916390901876">Call Showroom</a>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-xs font-bold tracking-widest uppercase border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-none">
                    <a href="https://wa.me/916390901876" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="lg:col-span-7 h-[420px] md:h-[460px] relative border border-white/10 shadow-2xl rounded-sm overflow-hidden">
                <iframe
                  title="VCJ Jewellers Showroom Location Map, Nakhas Jaunpur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.3721798363715!2d82.6845!3d25.7478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990373400000001%3A0x6b77dfb890c2eb71!2sVCJ%20Jewellers%20(Vimal%20Chhaganlal%20Jewellers)!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
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

        {/* SECTION 8: Frequently Asked Questions */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Customer Information</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-0.5 bg-yellow-600/30" />
              <p className="text-slate-500 max-w-xl font-light text-sm md:text-base leading-relaxed">
                Everything you need to know about visiting VCJ Jewellers, gold purity, collections, and rates.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group overflow-hidden rounded-none border border-slate-200 bg-white transition-all [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-slate-900 hover:bg-slate-50 transition-colors select-none">
                    <span className="font-serif text-base md:text-lg pr-4">{faq.q}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0">
                      <ChevronDown size={20} />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2 leading-relaxed text-slate-600 text-sm md:text-base font-light border-t border-slate-50 bg-slate-50/30">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: Bottom Contact & Navigation CTA */}
        <section className="py-16 md:py-24 bg-yellow-50/50 border-t border-yellow-100 relative">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 md:space-y-8">
            <span className="text-yellow-800 text-xs font-bold tracking-[0.4em] uppercase block">Visit VCJ Jewellers</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight text-balance">
              Experience Jaunpur&apos;s Heritage Jewellery
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
              Visit our showroom at Sadbhawana Pul Mod, Olandganj, Kachahari Road, Nakhas, Jaunpur to explore our latest gold, diamond, and bridal jewellery collections with dedicated customer hospitality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild variant="premium" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase rounded-none shadow-xl w-full sm:w-auto">
                <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-none w-full sm:w-auto">
                <a href="tel:+916390901876">
                  Call +91 63909 01876
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase border-[#25D366]/40 text-[#1da851] hover:bg-[#25D366] hover:text-white rounded-none w-full sm:w-auto">
                <a href="https://wa.me/916390901876" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={14} className="mr-2" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase border-yellow-700/30 text-yellow-800 hover:bg-yellow-600 hover:text-slate-950 rounded-none w-full sm:w-auto">
                <Link href="/gold-rate-jaunpur">
                  Live Gold Rate
                </Link>
              </Button>
            </div>

            <div className="pt-2">
              <Link
                href="/dhanteras-diwali-jewellery-jaunpur"
                className="inline-flex items-center gap-2 text-xs font-bold text-yellow-800 hover:text-yellow-900 tracking-wider uppercase bg-yellow-100/80 hover:bg-yellow-200 px-4 py-2 rounded-full transition-colors"
              >
                <Sparkles size={14} className="text-yellow-600" />
                Dhanteras &amp; Diwali Jewellery in Jaunpur <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
