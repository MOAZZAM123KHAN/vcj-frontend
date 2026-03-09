import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { BUSINESS_INFO } from '@/data/business';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'Contact VCJ Jewellers | Jaunpur',
    description: 'Visit Vimal Chhaganlal Jewellers in Nakhas, Jaunpur. Call us at 6390901876 for pure gold jewellery enquiries.',
};

export default function ContactPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "JewelryStore",
        "name": BUSINESS_INFO.name,
        "image": "https://vcjjewellers.com/store.jpg",
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
        }
    };

    return (
        <>
            <JsonLd data={localBusinessSchema} />
            <Header />
            <main className="bg-slate-50 min-h-screen">
                <div className="bg-slate-900 text-white py-12 md:py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3 md:mb-4">Contact Us</h1>
                        <p className="text-sm md:text-base text-slate-400 px-4">We&apos;d love to hear from you. Visit us or drop a message.</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6 md:space-y-8">
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-yellow-100 p-3 rounded-full text-yellow-700 shrink-0"><MapPin size={22} /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm md:text-base">Visit Showroom</h3>
                                            <p className="text-slate-600 text-sm md:text-base w-full md:w-3/4">{BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.postalCode}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-yellow-100 p-3 rounded-full text-yellow-700 shrink-0"><Phone size={22} /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm md:text-base">Call Us</h3>
                                            <p className="text-slate-600 text-sm md:text-base"><a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-yellow-600">{BUSINESS_INFO.contact.displayPhone}</a></p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-yellow-100 p-3 rounded-full text-yellow-700 shrink-0"><Mail size={24} /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Email Us</h3>
                                            <p className="text-slate-600"><a href={`mailto:${BUSINESS_INFO.contact.email}`} className="hover:text-yellow-600">{BUSINESS_INFO.contact.email}</a></p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-yellow-100 p-3 rounded-full text-yellow-700 shrink-0"><Clock size={22} /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm md:text-base">Opening Hours</h3>
                                            <p className="text-slate-600 text-sm md:text-base">{BUSINESS_INFO.openingHours}</p>
                                            <p className="text-[10px] md:text-xs text-green-600 font-medium mt-1">Open All Days (9 AM - 10 PM)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <Button className="w-full gap-2 h-12" variant="premium" asChild>
                                        <a href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle size={20} /> Chat on WhatsApp
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Map & Form */}
                        <div className="space-y-6 md:space-y-8">
                            {/* Google Map Embed */}
                            <div className="bg-slate-200 rounded-2xl overflow-hidden h-[250px] md:h-[300px] lg:h-[400px] relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.5!2d82.68!3d25.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AVCJ!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="VCJ Jewellers Location"
                                ></iframe>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="font-bold text-lg md:text-xl font-serif mb-6">Send us a Message</h3>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
