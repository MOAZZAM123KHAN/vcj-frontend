import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { Logo } from '@/components/logo/Logo';

export function Footer() {
    return (
        <footer className="bg-[#111] text-slate-300 pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="group">
                            <Logo className="items-center md:items-start" />
                        </Link>
                        <p className="text-sm text-slate-500 max-w-xs leading-relaxed font-light">
                            {BUSINESS_INFO.description}
                        </p>
                        <div className="flex gap-6 pt-2">
                            <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition-all transform hover:-translate-y-1">
                                <Facebook size={20} strokeWidth={1.5} />
                            </a>
                            <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition-all transform hover:-translate-y-1">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="font-serif text-xl font-bold text-white mb-8">The Experience</h4>
                        <ul className="space-y-4 text-[11px] font-bold tracking-widest uppercase text-slate-500">
                            <li><Link href="/products" className="hover:text-yellow-600 transition-colors">Collections</Link></li>
                            <li><Link href="/offers/rate-booking" className="hover:text-yellow-600 transition-colors">Price Booking</Link></li>
                            <li><Link href="/offers/emi-scheme" className="hover:text-yellow-600 transition-colors">Savings Schemes</Link></li>
                            <li><Link href="/gallery" className="hover:text-yellow-600 transition-colors">Curated Lookbook</Link></li>
                            <li><Link href="/about" className="hover:text-yellow-600 transition-colors">Our Legacy</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="font-serif text-xl font-bold text-white mb-8">Specialized</h4>
                        <ul className="space-y-4 text-[11px] font-bold tracking-widest uppercase text-slate-500">
                            <li><Link href="/products?category=gold" className="hover:text-yellow-600 transition-colors">Gold Masterpieces</Link></li>
                            <li><Link href="/products?category=diamond" className="hover:text-yellow-600 transition-colors">Diamond Solitaires</Link></li>
                            <li><Link href="/products?category=silver" className="hover:text-yellow-600 transition-colors">Silver Articles</Link></li>
                            <li><Link href="/products?category=bridal" className="hover:text-yellow-600 transition-colors">Bridal Couture</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="font-serif text-xl font-bold text-white mb-8">Connect With Us</h4>
                        <ul className="space-y-6 text-sm font-light text-slate-400">
                            <li className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                                <MapPin className="text-yellow-600 shrink-0" size={20} strokeWidth={1.5} />
                                <span className="leading-relaxed">{BUSINESS_INFO.address.streetAddress}, <br /> {BUSINESS_INFO.address.addressLocality}, Jaunpur</span>
                            </li>
                            <li className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                                <Phone className="text-yellow-600 shrink-0" size={20} strokeWidth={1.5} />
                                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-yellow-600 transition-colors font-bold">+91 63909 01876</a>
                            </li>
                            <li className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                                <Clock className="text-yellow-600 shrink-0" size={20} strokeWidth={1.5} />
                                <span>{BUSINESS_INFO.openingHours}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600">
                        © {new Date().getFullYear()} {BUSINESS_INFO.name}. Crafted for Generations.
                    </p>
                    <div className="flex gap-8 text-[10px] font-bold tracking-[0.1em] uppercase text-slate-600">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
