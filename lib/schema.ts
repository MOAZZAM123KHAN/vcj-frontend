import { BUSINESS_INFO } from '@/data/business';

export function getLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "JewelryStore",
        "name": BUSINESS_INFO.name,
        "image": [
            "https://vcjjewellers.com/images/store-front.jpg",
            "https://vcjjewellers.com/images/interior.jpg"
        ],
        "@id": "https://vcjjewellers.com",
        "url": "https://vcjjewellers.com",
        "telephone": BUSINESS_INFO.contact.phone,
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
        "priceRange": BUSINESS_INFO.priceRange,
        "sameAs": [
            BUSINESS_INFO.social.instagram,
            BUSINESS_INFO.social.facebook
        ]
    };
}

export function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": BUSINESS_INFO.name,
        "url": "https://vcjjewellers.com",
        "logo": "https://vcjjewellers.com/logo.png",
        "foundingDate": BUSINESS_INFO.foundingDate,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": BUSINESS_INFO.contact.phone,
            "contactType": "customer service"
        },
        "sameAs": [
            BUSINESS_INFO.social.instagram,
            BUSINESS_INFO.social.facebook
        ]
    };
}
