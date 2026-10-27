import Script from 'next/script';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "VCJ Jewellers – Vimal Chhaganlal Jewellers",
    "url": "https://vcjjewellers.com",
    "telephone": "+916390901876",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sadbhawana Pul Mod, Olandganj, Kachahari Road, Nakhas",
      "addressLocality": "Jaunpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "222002",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "19:00"
      }
    ],
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
