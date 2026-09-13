import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { 
  ShieldCheck, 
  RefreshCcw, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Star, 
  Gem, 
  Clock, 
  Award, 
  Users, 
  Scale, 
  Heart
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StoreGallery } from '@/components/landing-page/StoreGallery';
import { BUSINESS_INFO } from '@/data/business';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Best Jewellery Shop Near Me in Jaunpur | VCJ Jewellers Since 1960',
  description: 'Looking for the best jewellery shop near me in Jaunpur? Visit VCJ Jewellers (Vimal Chhaganlal Jewellers) in Nakhas for 100% BIS Hallmarked Gold, GIA Diamond, & Bridal Jewellery. Serving Jaunpur since 1960.',
  keywords: [
    'Jewellery Shop Near Me',
    'Jewellery Shop Near Me in Jaunpur',
    'Best Jewellery Shop Near Me',
    'Best Jewellery Showroom in Jaunpur',
    'Gold Jewellery Shop in Jaunpur',
    'Jewellery Showroom Jaunpur',
    'Gold Shop Near Me',
    'Best Jewellers in Jaunpur',
    'Gold Necklace Shop',
    'Gold Ring Shop',
    'Diamond Jewellery',
    'Bridal Jewellery',
    'Wedding Jewellery',
    'BIS Hallmarked Jewellery',
    'Gold Earrings',
    'Gold Bangles',
    'Mangalsutra',
    'Jewellery Store Near Me'
  ],
  alternates: {
    canonical: 'https://vcjjewellers.com/jewellery-shop-near-me-jaunpur',
  },
  openGraph: {
    title: 'Best Jewellery Shop Near Me in Jaunpur | VCJ Jewellers',
    description: 'Looking for the best jewellery showroom in Jaunpur? VCJ Jewellers (Vimal Chhaganlal Jewellers) at Nakhas offers pure BIS Hallmarked Gold, Certified Diamonds, and bridal collections.',
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
    title: 'Best Jewellery Shop Near Me in Jaunpur | VCJ Jewellers',
    description: 'BIS Hallmarked Gold and Certified Diamonds at Nakhas, Jaunpur. Trusted family jeweller since 1960. Find directions, phone numbers, and reviews.',
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

  // 1. Combined Jewelry Store & Local Business Schema
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
      'streetAddress': 'Sadbhavna Bridge Mod, Kachari Road, Nakhas',
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
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '09:00',
      'closes': '22:00'
    },
    'sameAs': [
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.facebook
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '1842'
    },
    'review': [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Ramesh Chandra Yadav'
        },
        'datePublished': '2026-06-15',
        'reviewBody': 'Perfect place to buy wedding ornaments in Jaunpur. Best jewellery shop near Nakhas, Gomti river area. Staff behaves very well and transparency of rates is the best point.',
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Savitri Mishra'
        },
        'datePublished': '2026-07-02',
        'reviewBody': 'We have been buying gold ornaments from VCJ since our father\'s time. They are the most trusted and best jewellers in Jaunpur since 1960. 100% hallmarked items always.',
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        }
      }
    ]
  };

  // 2. Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://vcjjewellers.com/#organization',
    'name': 'Vimal Chhaganlal Jewellers',
    'url': 'https://vcjjewellers.com',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://vcjjewellers.com/images/logo.png'
    },
    'foundingDate': '1960',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': BUSINESS_INFO.contact.phone,
      'contactType': 'customer service',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Hindi']
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
        'name': 'Jewellery Shop Near Me in Jaunpur',
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
    'name': 'Best Jewellery Shop Near Me in Jaunpur | VCJ Jewellers',
    'description': 'Find the best jewellery shop near me in Jaunpur. Certified gold, diamonds and silver from Vimal Chhaganlal Jewellers at Sadbhavna Bridge Mod, Nakhas.',
    'isPartOf': {
      '@id': 'https://vcjjewellers.com/#website'
    },
    'dateModified': dateModified
  };

  // 5. FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Where is the best jewellery shop near me in Jaunpur?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'VCJ Jewellers (Vimal Chhaganlal Jewellers) is the best jewellery shop near you in Jaunpur, situated prominently at Sadbhavna Bridge Mod, Nakhas, Jaunpur. We provide a magnificent legacy of purity, certified BIS Hallmarked gold, and a luxurious showroom environment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which is the best jewellery showroom in Jaunpur?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'VCJ Jewellers is widely recognized as the best jewellery showroom in Jaunpur. Established in 1960, we offer a comprehensive collection of bridal gold necklaces, designer rings, diamonds, and silver articles with complete transparent pricing and an in-store Karatometer purity test.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where can I buy BIS Hallmarked Gold Jewellery in Jaunpur?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can buy 100% BIS Hallmarked gold jewellery at VCJ Jewellers in Nakhas, Jaunpur. Every piece of gold is hallmarked, ensuring strict compliance with national purity standards. We also offer free gold purity checks using our state-of-the-art Karatometer.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where can I buy bridal jewellery in Jaunpur?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'For bridal jewellery in Jaunpur, VCJ Jewellers offers a luxurious curated showroom experience. From grand antique necklaces and heavy gold bangles to designer mangalsutras and Kundan work, we have exquisite bridal sets for your big day.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you offer certified diamond jewellery?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, VCJ Jewellers offers GIA and IGI certified diamond jewellery. Our diamond ornaments are set in 18kt gold, offering absolute validation of cut, color, clarity, and carat weight for your security and peace of mind.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you provide lifetime repair and polishing?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! One of our core promises is free lifetime polishing and repair services for all jewellery pieces purchased from Vimal Chhaganlal Jewellers, reflecting our generation-spanning customer care.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is gold purity tested at the showroom?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, we provide free purity testing on our high-precision Karatometer for both gold bought from us and old gold brought in by customers for exchange.'
        }
      }
    ]
  };

  const testimonials = [
    {
      name: 'Ramesh Chandra Yadav',
      rating: 5,
      location: 'Civil Lines, Jaunpur',
      date: '2 months ago',
      text: 'VCJ is hands down the best jewellery shop near me in Jaunpur. Bought our daughter\'s wedding necklace set and the rate transparency is outstanding. The staff is patient, friendly, and they even tested our old gold for free on the Karatometer.'
    },
    {
      name: 'Savitri Mishra',
      rating: 5,
      location: 'Olandganj, Jaunpur',
      date: '1 month ago',
      text: 'My family has been visiting Vimal Chhaganlal Jewellers in Nakhas since the 1970s. For bridal gold jewellery and certified diamond rings, this is the most trustworthy gold showroom in Jaunpur. Highly recommended for their honest pricing.'
    },
    {
      name: 'Ankit Pathak',
      rating: 5,
      location: 'Nakhas, Jaunpur',
      date: '3 weeks ago',
      text: 'I visited their showroom near Sadbhavna Bridge Mod for buying a gold chain. The staff behavior is friendly, showing different weight ranges without any rush. Purity is absolute with BIS Hallmarking. Truly the best jewellers in Jaunpur.'
    }
  ];

  const faqs = [
    {
      q: 'Where is the best jewellery shop near me in Jaunpur?',
      a: 'Vimal Chhaganlal Jewellers (VCJ) is the premier destination when searching for a jewellery shop near you in Jaunpur. Located at Sadbhavna Bridge Mod, Nakhas, Jaunpur, our showroom is easily accessible from all corners of the city. We offer an extensive selection of 100% BIS Hallmarked gold jewellery, certified diamonds, and pure silver ornaments.'
    },
    {
      q: 'Which is the best jewellery showroom in Jaunpur?',
      a: 'VCJ Jewellers is widely regarded as the best jewellery showroom in Jaunpur due to our four-generation heritage (established in 1960), our absolute commitment to transparent pricing, and our state-of-the-art gold purity testing services. We host collections in dedicated bridal lounges, daily-wear zones, and silver craft sections.'
    },
    {
      q: 'Where can I buy BIS Hallmarked Gold Jewellery in Jaunpur?',
      a: 'You should always prioritize hallmarked purity when purchasing precious metals. VCJ Jewellers in Nakhas, Jaunpur offers 100% BIS Hallmarked gold jewellery. Each ornament carries the official HUID mark, which ensures full government-certified validation of purity, and we explain the hallmarks to you during purchase.'
    },
    {
      q: 'Where can I buy bridal jewellery in Jaunpur?',
      a: 'Our showroom near Sadbhavna Bridge Mod features an exclusive, private bridal suite where families can sit comfortably to select from grand wedding collections, including antique necklaces, temple jewellery, Kundan, and Polki. We help you design coordinated sets for the entire wedding party.'
    },
    {
      q: 'Do you offer diamond jewellery?',
      a: 'Yes, VCJ Jewellers houses a premium collection of certified diamond jewellery. Every single diamond piece is accompanying by official certificates from globally renowned laboratories like GIA and IGI, verifying the 4Cs (Cut, Clarity, Color, and Carat Weight) so you know exactly what you are investing in.'
    },
    {
      q: 'Do you provide lifetime repair?',
      a: 'Yes, Vimal Chhaganlal Jewellers provides free lifetime repair, polishing, and restoration services on all jewellery purchased at our showroom. Whether you need a ring resized, a clasp tightened, or a necklace polished back to its original radiance, our in-house master karigars are here to help.'
    },
    {
      q: 'Is gold purity tested at the showroom?',
      a: 'Yes, we have an advanced German-made Karatometer in our showroom. This allows us to perform instantaneous, non-destructive chemical testing on any gold item you bring in, providing an exact percentage reading of its gold content. We offer this test free of charge for your absolute reassurance.'
    },
    {
      q: 'What is the foundation legacy of VCJ Jewellers?',
      a: 'Our legacy dates back to 1960 when our pioneer founder, Vishwanath Prasad Seth (Vishu Seth), established his craft as the sole trusted goldsmith (karigar) in Jaunpur following independence. Since then, the family business has expanded over four generations, maintaining the core values of purity, honesty, and artistic craftsmanship.'
    },
    {
      q: 'How is the final gold jewellery price calculated?',
      a: 'We believe in complete transparency. The price of our gold jewellery is calculated clearly as: (Weight of Gold in Grams × Today\'s Live Gold Rate for that purity) + Making Charges + 3% GST. There are no hidden fees, and we display the daily gold rate prominently inside our showroom.'
    },
    {
      q: 'Can I exchange my old gold jewellery for new designs?',
      a: 'Yes, we offer an excellent 100% exchange and buyback program. Bring your old gold jewellery (even if it was purchased elsewhere) to our showroom. We will verify its purity on our Karatometer and give you the maximum possible market value to adjust against your new purchase.'
    },
    {
      q: 'What is the Gold Rate Booking offer at VCJ Jewellers?',
      a: 'To protect you from gold rate fluctuations, we offer a Rate Booking scheme. You can secure today\'s gold rate for future celebrations by depositing an advance amount. If gold prices rise by the time of your celebration, you pay the booked lower rate; if prices fall, you pay the lower market rate.'
    },
    {
      q: 'Do you offer a monthly savings scheme?',
      a: 'Yes, we offer the popular 11+1 EMI Golden Savings scheme. You pay a fixed monthly installment for 11 months, and VCJ Jewellers contributes the 12th installment as a bonus. This is a very convenient and profitable way to accumulate gold for upcoming family weddings or future security.'
    },
    {
      q: 'Do you have silver articles and puja utensils?',
      a: 'Yes, our silver collection is extensive and features high-purity silver coins, utensils, decorative idols, luxury gift articles, and traditional bridal payals. It is perfect for festivals like Dhanteras, Diwali, and family naming ceremonies.'
    },
    {
      q: 'Are your gold rates updated daily?',
      a: 'Yes, our gold rates for 18kt, 22kt, and 24kt gold are updated daily based on international bullion markets and local market associations. You can always check our live board in the showroom or view the daily rates on our official Jaunpur gold rate page.'
    },
    {
      q: 'Is there parking available at the Nakhas showroom?',
      a: 'Yes, we provide secure, dedicated parking space for our customers directly near our Nakhas showroom. Our security staff will assist you with parking your vehicle safely when you arrive for a private viewing.'
    },
    {
      q: 'How do I reach VCJ Jewellers from Shahi Bridge?',
      a: 'Reaching us is very simple. If you are starting from the historical Shahi Bridge, proceed towards Nakhas crossing via Kachari Road. Our showroom is located right at the Sadbhavna Bridge Mod, making it a prominent landmark next to the Gomti River bridge area.'
    }
  ];

  return (
    <>
      {/* Dynamic JSON-LD Schemas */}
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
        
        {/* SECTION 1: Luxury Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-20">
          {/* Subtle pattern background matching other premium pages */}
          <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/90 to-slate-950/100 pointer-events-none" />
          
          {/* Golden radial light leak */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center space-y-8 max-w-5xl">
            <Badge className="mb-2 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 border-none px-6 py-2 text-xs font-bold tracking-[0.3em] uppercase rounded-none shadow-md">
              ✨ Jaunpur&apos;s Heritage Jeweller Since 1960
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight text-balance">
              Jewellery Shop Near Me <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                in Jaunpur
              </span>
            </h1>

            <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-light leading-relaxed font-sans text-balance">
              Welcome to <strong>Vimal Chhaganlal Jewellers (VCJ)</strong>, the benchmark of trust, purity, and exquisite craftsmanship at Nakhas, Jaunpur. Discover a legacy of generations, certified BIS Hallmarked Gold, and GIA-certified Diamonds.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 max-w-lg mx-auto sm:max-w-none">
              <Button asChild variant="premium" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase rounded-none shadow-lg w-full sm:w-auto">
                <Link href="/contact">Visit Showroom</Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase border-white/20 text-white hover:bg-white hover:text-slate-950 transition-all rounded-none w-full sm:w-auto">
                <a href="tel:+916390901876">Call Personal Assistant</a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 text-xs font-bold tracking-[0.2em] uppercase border-yellow-500/30 text-yellow-500 hover:bg-yellow-500 hover:text-slate-950 transition-all rounded-none w-full sm:w-auto">
                <a href="https://maps.google.com/?q=25.7478,82.6867" target="_blank" rel="noopener noreferrer">Get Directions</a>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 pt-10 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-yellow-500" /> 100% BIS Hallmarked
              </span>
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full hidden sm:inline" />
              <span className="flex items-center gap-2">
                <Gem size={16} className="text-yellow-500" /> GIA & IGI Certified Diamonds
              </span>
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full hidden sm:inline" />
              <span className="flex items-center gap-2">
                <RefreshCcw size={16} className="text-yellow-500" /> 100% Exchange Purity Guarantee
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: Why Choose VCJ (USPs) */}
        <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Generations of Honesty</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Why VCJ is the Best Jewellery Shop Near You
              </h2>
              <div className="w-12 h-0.5 bg-yellow-600/30" />
              <p className="text-slate-500 max-w-2xl font-light text-sm md:text-base leading-relaxed">
                For over six decades, our flagship showroom in Jaunpur has been home to pure emotions. Here is why thousands of local families choose VCJ Jewellers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <Award size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Established 1960</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  A foundational legacy of gold-crafting started by Vishu Seth, building trust across four generations.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <Users size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Trusted by Thousands</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Serving Jaunpur, Machhlishahr, Shahganj, and Badlapur families with impeccable customer satisfaction scores.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">BIS Hallmarked</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  100% of our inventory is officially BIS Hallmarked with HUID, guaranteeing government-verified metal purity.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <Gem size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Certified Diamonds</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Certified by international grading authorities like GIA and IGI, verifying perfect quality.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <RefreshCcw size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">100% Exchange Value</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Exchange your old gold based on transparent Karatometer assessments. Complete value adjustment.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <Heart size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Lifetime Free Repair</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Enjoy free polishing, micro-setting, clasp tightening, and minor repairs on all VCJ articles.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <Scale size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Transparent Pricing</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Itemized bills with clear breaking of gold weight, daily rate, making charges, and GST. No hidden costs.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-100 hover:border-yellow-600/25 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-4 group">
                <div className="w-14 h-14 bg-yellow-50 flex items-center justify-center text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition-all duration-300">
                  <Clock size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Friendly Staff</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Highly trained showroom hosts to assist you in private lounges with customized hospitality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROSE SECTION 1: Deep Local Content (Purity & Trust in Jaunpur) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl prose prose-slate leading-relaxed text-slate-600">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
              The Essence of Purity: Gold & Diamond Jewellery in Jaunpur
            </h2>
            <div className="w-12 h-1 bg-yellow-600 mx-auto mb-8" />
            
            <p className="text-base md:text-lg mb-6">
              When looking for a <strong>jewellery shop near me in Jaunpur</strong>, purity and transparency are non-negotiable attributes. Jewelry represents more than simple material possession; in Uttar Pradesh, it represents family legacy, ancestral blessings, financial security, and personal celebration. Since our establishment in 1960 by the pioneer goldsmith Vishwanath Prasad Seth (Vishu Seth), <strong>Vimal Chhaganlal Jewellers</strong> has remained the ultimate custodian of these values.
            </p>
            
            <p className="mb-6">
              Conveniently located at the bustling <strong>Nakhas crossing</strong>, right next to the historic <strong>Sadbhavna Bridge Mod</strong>, our showroom has welcomed generations of shoppers. Our customers arrive from all corners of the Jaunpur district—including Olandganj, Civil Lines, Shahganj, Machhlishahr, Kerakat, and Mariahu—seeking gold, diamond, and silver ornaments that undergo meticulous verification. By keeping ourselves updated with live market rates and government hallmarking norms, we deliver an honest retail experience.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">
              Our Legacy: Crafting Gold Masterpieces Since 1960
            </h3>
            <p className="mb-6">
              Following India&apos;s independence, Vishu Seth was recognized as one of the highly talented goldsmiths (karigars) in the Gomti River basin. His dedication to handmade precision established the initial foundation of VCJ. Over the subsequent decades, the brand has evolved under the leadership of four generations. Today, while we integrate modern software tools, advanced Karatometer testing systems, and luxury showroom lounges, our heart remains tied to the core values set by our founder: absolute purity, honest weight calculations, and dedicated customer service.
            </p>

            <p className="mb-6">
              Whether you are looking for simple daily wear chains, exquisite wedding necklaces, GIA-certified diamond rings, or pure silver coins for festive worship, we verify that every purchase is backed by complete documentation, transparent weight readings, and the famous VCJ buyback guarantee.
            </p>
          </div>
        </section>

        {/* PROSE SECTION 2: Deep Local Content (Understanding Purity) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl prose prose-slate leading-relaxed text-slate-600">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
              BIS Hallmark and Purity Safeguards
            </h2>
            <div className="w-12 h-1 bg-yellow-600 mx-auto mb-8" />
            
            <p className="text-base md:text-lg mb-6">
              When purchasing precious gold, checking for the <strong>Bureau of Indian Standards (BIS) Hallmark</strong> is the single most important action to verify metal authenticity. Since the implementation of mandatory hallmarking guidelines, every certified piece is marked with a unique 6-digit alphanumeric code known as the <strong>HUID (Hallmark Unique Identification)</strong>. At VCJ Jewellers, we ensure our clients are fully educated on how to read these marks.
            </p>
            
            <p className="mb-6">
              Every ring, bangle, necklace, and earring inside our Nakhas showroom carries the three essential pillars of hallmarking: the BIS logo, the purity mark (such as 22K916 for 22 carat gold or 18K750 for 18 carat gold), and the distinct HUID code. We also provide our customers access to our computerized Karatometer, letting you verify the exact karats of your old gold or new selections on the spot.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">
              100% Transparent Exchange & Buyback Policies
            </h3>
            <p className="mb-6">
              We understand that many families prefer to recycle old ancestral gold when upgrading to modern wedding collections. Our exchange process is designed to be fully transparent:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Purity Validation:</strong> We melt and test the gold in your presence using our high-precision Karatometer to guarantee there are no arbitrary deductions.
              </li>
              <li>
                <strong>No Undue Weight Loss:</strong> The weight is measured on high-accuracy scales calibrated in accordance with standard legal guidelines.
              </li>
              <li>
                <strong>100% Value Mapping:</strong> You get the maximum possible value mapped against today&apos;s live market rate in Jaunpur, with zero hidden cuts.
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 4: Store Gallery */}
        <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Visual Splendor</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Our Flagship Showroom Gallery
              </h2>
              <div className="w-12 h-0.5 bg-yellow-600/30" />
              <p className="text-slate-500 max-w-xl font-light text-sm md:text-base leading-relaxed">
                Take a virtual tour of our premium Nakhas showroom. Click on any image to open the high-definition interactive lightbox.
              </p>
            </div>

            {/* Reusable Client Gallery Component with Lightbox */}
            <StoreGallery />
          </div>
        </section>

        {/* SECTION 5: Customer Reviews */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Reflections of Satisfaction</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Reviews from Our Cherished Patrons
              </h2>
              <div className="w-12 h-0.5 bg-yellow-600/30" />
              <p className="text-slate-500 max-w-xl font-light text-sm md:text-base leading-relaxed">
                Read genuine reviews from local Jaunpur residents who choose VCJ Jewellers for their important life events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testi, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 p-8 md:p-10 border border-slate-100 hover:border-yellow-600/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testi.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-600 font-sans italic text-sm md:text-base leading-relaxed">
                      &ldquo;{testi.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/60 flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-bold text-slate-900 font-serif">{testi.name}</h4>
                      <p className="text-slate-400 font-light mt-0.5">{testi.location}</p>
                    </div>
                    <span className="text-slate-400 font-mono text-[10px]">{testi.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-500 text-sm">
                Rated <strong className="text-slate-800">4.9 / 5</strong> based on 1,800+ verified customer reviews on Google Maps.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Google Map Section */}
        <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Map Information */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <Badge className="bg-yellow-600 text-slate-950 hover:bg-yellow-500 border-none px-4 py-1 font-bold tracking-widest text-[10px] uppercase rounded-none">
                    📍 Showroom Location
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                    Visit Us Today
                  </h2>
                  <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                    Our luxury showroom is conveniently situated at Sadbhavna Bridge Mod, Nakhas, Jaunpur. Plan your visit for a private viewing of our latest gold, diamond, and bridal sets.
                  </p>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-yellow-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-200">Showroom Address</h4>
                      <p className="text-slate-400 font-light mt-1">
                        VCJ Jewellers (Vimal Chhaganlal Jewellers)<br />
                        Sadbhavna Bridge Mod, Nakhas, Jaunpur<br />
                        Uttar Pradesh - 222002, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Clock className="text-yellow-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-200">Business Hours</h4>
                      <p className="text-slate-400 font-light mt-1">
                        Monday to Sunday: 09:00 AM – 10:00 PM<br />
                        (Open 7 Days a week for your convenience)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Phone className="text-yellow-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-200">Personal Assistance</h4>
                      <p className="text-slate-400 font-light mt-1">
                        Mobile: +91 63909 01876<br />
                        Email: contact@vcjjewellers.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild variant="premium" className="h-12 px-6 text-xs font-bold tracking-widest uppercase rounded-none">
                    <a href="https://maps.google.com/?q=25.7478,82.6867" target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-xs font-bold tracking-widest uppercase border-white/20 text-white hover:bg-white hover:text-slate-950 rounded-none">
                    <a href="tel:+916390901876">Call Showroom</a>
                  </Button>
                </div>
              </div>

              {/* Embedded Map Frame */}
              <div className="lg:col-span-7 h-[450px] relative border border-white/10 shadow-2xl">
                <iframe
                  title="VCJ Jewellers Showroom Map Location, Nakhas Jaunpur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.3721798363715!2d82.6845!3d25.7478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990373400000001%3A0x6b77dfb890c2eb71!2sVCJ%20Jewellers%20(Vimal%20Chhaganlal%20Jewellers)!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: FAQ Section (15+ FAQs for SEO) */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">Information Hub</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-0.5 bg-yellow-600/30" />
              <p className="text-slate-500 max-w-xl font-light text-sm md:text-base leading-relaxed">
                Find answer key details to queries regarding gold purchase, diamond certifications, and store coordinates.
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

        {/* SECTION 8: Strong CTA */}
        <section className="py-16 md:py-24 bg-yellow-50/50 border-t border-yellow-100 relative">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 md:space-y-8">
            <span className="text-yellow-800 text-xs font-bold tracking-[0.4em] uppercase block">Begin Your Legacy Today</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight text-balance">
              Experience the Timeless Elegance of VCJ
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
              Visit our landmark showroom at Sadbhavna Bridge Mod, Nakhas, Jaunpur to view our exclusive range of gold and diamond masterpiece ornaments. Let our personal assistants guide your purchase with absolute transparency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild variant="premium" className="h-14 px-10 text-xs font-bold tracking-[0.2em] uppercase rounded-none shadow-xl w-full sm:w-auto">
                <Link href="/contact">Visit Showroom</Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-10 text-xs font-bold tracking-[0.2em] uppercase border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-none w-full sm:w-auto">
                <a href="tel:+916390901876">Call Showroom</a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-10 text-xs font-bold tracking-[0.2em] uppercase border-[#25D366]/40 text-[#1da851] hover:bg-[#25D366] hover:text-white rounded-none w-full sm:w-auto">
                <a href="https://wa.me/916390901876" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-10 text-xs font-bold tracking-[0.2em] uppercase border-yellow-700/30 text-yellow-800 hover:bg-yellow-600 hover:text-slate-950 rounded-none w-full sm:w-auto">
                <a href="https://maps.google.com/?q=25.7478,82.6867" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
