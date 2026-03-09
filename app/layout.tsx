// import type { Metadata } from 'next';
// import { Inter, Playfair_Display } from 'next/font/google';
// import '../styles/globals.css';
// import { cn } from '@/lib/utils';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

// export const metadata: Metadata = {
//   metadataBase: new URL('https://vcjjewellers.com'), // Placeholder, should be the real domain
//   title: {
//     default: 'VCJ Jewellers - Jaunpur\'s Trusted Jeweller Since 1960',
//     template: '%s | VCJ Jewellers',
//   },
//   description: 'Vimal Chhaganlal Jewellers (VCJ) in Jaunpur. 4 generations of trust. Gold, Silver, Diamond jewellery. 100% return on old jewellery. Visit us at Sadbhavna Bridge Mod.',
//   keywords: [
//     'Jewellery shop in Jaunpur',
//     'VCJ Jewellers',
//     'Gold jewellery Jaunpur',
//     'Diamond jewellery Nakhas',
//     'Bridal jewellery Jaunpur',
//     'Best jeweller Jaunpur',
//     'best jwellery near me',
//     'Gold jwellry near me',
//     'Pure gold jewellery shop near Sadbhavna Bridge',
//     'Trusted jeweller in Jaunpur since 1960'
//   ],
//   authors: [{ name: 'VCJ Jewellers' }],
//   creator: 'VCJ Jewellers',
//   publisher: 'VCJ Jewellers',
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   openGraph: {
//     title: 'VCJ Jewellers - Jaunpur\'s Trusted Jeweller Since 1960',
//     description: 'Explore the finest collection of Gold, Silver, and Diamond jewellery at VCJ Jewellers, Jaunpur. Serving since 1960 with 100% purity guarantee.',
//     url: 'https://vcjjewellers.com',
//     siteName: 'VCJ Jewellers',
//     locale: 'en_IN',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'VCJ Jewellers - Premium Jewellery in Jaunpur',
//     description: 'Trusted since 1960. Gold, Silver, Diamond, and more. Visit our store in Nakhas, Jaunpur.',
//     creator: '@vimalchhaganlaljewelers', // Using the handle from instructions if available, otherwise generic.
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   alternates: {
//     canonical: '/',
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={cn(inter.variable, playfair.variable, "font-sans antialiased min-h-screen bg-white text-slate-900")}>
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vcjjewellers.com"),

  title: {
    default: "VCJ Jewellers – Best Jewellery Shop in Jaunpur Since 1960",
    template: "%s | VCJ Jewellers",
  },

  description:
    "VCJ Jewellers (Vimal Chhaganlal Jewellers) – Trusted jewellery shop in Jaunpur since 1960. Premium Gold, Silver, Diamond & Bridal Jewellery. Visit our showroom near Sadbhavna Bridge, Nakhas Jaunpur.",

  keywords: [
    "VCJ Jewellers",
    "Jewellery shop in Jaunpur",
    "Best jeweller in Jaunpur",
    "Gold jewellery shop Jaunpur",
    "Diamond jewellery Jaunpur",
    "Bridal jewellery Jaunpur",
    "Jewellery shop Nakhas Jaunpur",
    "Gold jewellery near Sadbhavna Bridge",
    "Trusted jeweller Jaunpur since 1960",
    "Gold shop near me Jaunpur",
    "Best jewellery store Jaunpur UP"
  ],

  authors: [{ name: "VCJ Jewellers" }],
  creator: "VCJ Jewellers",
  publisher: "VCJ Jewellers",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "VCJ Jewellers – Premium Gold & Diamond Jewellery in Jaunpur",
    description:
      "Explore premium gold, silver and diamond jewellery at VCJ Jewellers. Trusted by families in Jaunpur since 1960.",
    url: "https://vcjjewellers.com",
    siteName: "VCJ Jewellers",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/images/og-jewellery.jpg",
        width: 1200,
        height: 630,
        alt: "VCJ Jewellers Jaunpur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VCJ Jewellers – Premium Jewellery Store in Jaunpur",
    description:
      "Gold, Silver & Diamond Jewellery. Trusted since 1960. Visit our showroom in Nakhas Jaunpur.",
    images: ["/images/og-jewellery.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://vcjjewellers.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "VCJ Jewellers",
    image: "https://vcjjewellers.com/images/og-jewellery.jpg",
    url: "https://vcjjewellers.com",
    telephone: "+916390901876",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sadbhavna Bridge Mod, Nakhas",
      addressLocality: "Jaunpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "222001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.7464",
      longitude: "82.6837",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/vimalchhaganlaljewelers/?hl=en",
      "https://www.facebook.com/profile.php?id=100016570952719#"
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "font-sans antialiased min-h-screen bg-white text-slate-900"
        )}
      >
        {/* Schema Markup for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}