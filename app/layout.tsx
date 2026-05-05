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
import { GlobalTracking } from "@/components/GlobalTracking";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://vcjjewellers.com'),
  title: {
    default: 'VCJ Jewellers – Best Jewellery Shop in Jaunpur Since 1960',
    template: '%s | VCJ Jewellers'
  },
  description: 'VCJ Jewellers (Vimal Chhaganlal Jewellers) – Trusted jewellery shop in Jaunpur since 1960. Premium Gold, Silver, Diamond & Bridal Jewellery. Visit our showroom near Sadbhavna Bridge, Nakhas Jaunpur.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vcjjewellers.com',
    siteName: 'VCJ Jewellers',
    title: 'VCJ Jewellers – Best Jewellery Shop in Jaunpur Since 1960',
    description: 'Trusted jewellery shop in Jaunpur since 1960. Premium Gold, Silver, Diamond & Bridal Jewellery.',
    images: [
      {
        url: '/images/og-jewellery.jpg',
        width: 1200,
        height: 630,
        alt: 'VCJ Jewellers Jaunpur',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VCJ Jewellers – Premium Jewellery Store in Jaunpur',
    description: 'Gold, Silver & Diamond Jewellery. Trusted since 1960. Visit our showroom in Nakhas Jaunpur.',
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
  verification: {
    google: 'PASTE_GSC_CODE_HERE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFFGQJJS');`,
          }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "font-sans antialiased min-h-screen bg-white text-slate-900"
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFFGQJJS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Schema Markup for Google Rich Results */}
        <LocalBusinessSchema />

        {/* Global Event Tracking */}
        <GlobalTracking />

        {children}
      </body>
    </html>
  );
}