import Script from 'next/script';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "VCJ Jewellers – Vimal Chhaganlal Jewellers",
    "url": "https://vcjjewellers.com",
    "telephone": "+91-6390901876",
    "address": "Sadbhavna Bridge Mod, Kachari Road, Nakhas, Jaunpur, Uttar Pradesh 222002",
    "openingHours": "Mo-Su 09:00-22:00",
    "priceRange": "₹₹₹"
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
