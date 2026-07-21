'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/data/business';
import { ProductSearch } from './ProductSearch';
import { Logo } from '@/components/logo/Logo';
import { GoldRateTicker } from './GoldRateTicker';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phone = BUSINESS_INFO.contact.phone.replace(/\D/g, '');
        const text = `*New Order/Visit Enquiry*\n\n*Name:* ${name}\n*Message:* ${message}`;
        
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({ event: 'whatsapp_click' });

        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
        setIsModalOpen(false);
        setName('');
        setMessage('');
    };

    const navItems = [
        { name: 'Gold Jewellery', link: '/gold-jewellery-jaunpur' },
        { name: 'Bridal Jewellery', link: '/bridal-jewellery-jaunpur' },
        { name: 'Diamond Jewellery', link: '/diamond-jewellery-jaunpur' },
        { name: 'Gold Rate', link: '/gold-rate-jaunpur' },
        { name: 'Gallery', link: '/gallery' },
        { name: 'About VCJ', link: '/about' }
    ];

    const mobileNavItems = [
        { name: 'Home', link: '/' },
        { name: 'Gold Jewellery', link: '/gold-jewellery-jaunpur' },
        { name: 'Bridal Jewellery', link: '/bridal-jewellery-jaunpur' },
        { name: 'Diamond Jewellery', link: '/diamond-jewellery-jaunpur' },
        { name: 'Gold Rate', link: '/gold-rate-jaunpur' },
        { name: 'Gallery', link: '/gallery' },
        { name: 'About VCJ', link: '/about' },
        { name: 'Contact Us', link: '/contact' }
    ];

    return (
        <header className="sticky top-0 z-50 w-full">

            {/* ===== Top Bar ===== */}
            <div className="bg-[#151515] text-white/90 py-2.5 px-4 border-b border-yellow-500/15">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-medium tracking-[0.18em] uppercase gap-2 md:gap-0">
                    
                    {/* LEFT - Phone */}
                    <a
                        href={`tel:${BUSINESS_INFO.contact.phone}`}
                        className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-200"
                    >
                        <Phone size={11} className="text-yellow-500" />
                        {BUSINESS_INFO.contact.displayPhone}
                    </a>

                    {/* CENTER - Purity Signals */}
                    <div className="hidden sm:flex items-center gap-4 text-slate-300">
                        <span>BIS Hallmarked Gold Jewellery</span>
                        <span className="w-1 h-1 rounded-full bg-yellow-500/60" />
                        <span>Trusted By Generations</span>
                    </div>

                    {/* RIGHT - SEO Authority Text */}
                    <div className="text-yellow-500 font-semibold tracking-[0.18em] flex items-center gap-1.5">
                        Best Jewellery Shop In Jaunpur
                    </div>

                </div>
            </div>

            {/* ===== Main Navigation ===== */}
            <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm relative z-40">
                <div className="container mx-auto px-4 lg:px-10 py-3 flex items-center justify-between gap-6">

                    {/* LEFT - Logo + Heritage Branding */}
                    <div className="flex items-center shrink-0">
                        <Link href="/" className="transition-transform hover:scale-[1.02] duration-300 flex items-center gap-3">
                            <Logo iconOnly={true} className="h-10 w-10 md:h-12 md:w-12 shrink-0 min-w-fit" />
                            <div className="hidden md:flex flex-col border-l border-yellow-500/30 pl-3 py-0.5 text-left">
                                <span className="font-serif text-[10px] font-bold text-yellow-600 tracking-[0.22em] uppercase leading-none mb-1">Since 1960</span>
                                <span className="font-sans text-[8px] font-semibold text-slate-400 tracking-[0.15em] uppercase leading-none">Trusted By Generations</span>
                            </div>
                        </Link>
                    </div>

                    {/* CENTER - Desktop Nav Links */}
                    <nav className="hidden xl:flex items-center justify-center flex-1 gap-8 text-[11px] font-bold tracking-[0.25em] uppercase text-slate-600">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="hover:text-yellow-600 transition-colors duration-300 relative py-2 group/nav-link"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-yellow-600 transition-all duration-300 group-hover/nav-link:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* RIGHT - CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4 shrink-0">
                        
                        {/* Visit Showroom CTA Button */}
                        <Button
                            className="hidden sm:flex h-10 px-6 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-slate-900 border-none shadow-[0_4px_15px_rgba(202,138,4,0.15)] hover:shadow-[0_8px_25px_rgba(202,138,4,0.25)] hover:-translate-y-0.5"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Visit Showroom
                        </Button>

                        {/* Mobile Toggle */}
                        <button
                            className="xl:hidden p-2 text-slate-800 hover:text-yellow-700 transition-colors focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>

                    </div>
                </div>
            </div>

            {/* ===== Gold Rate Information Strip ===== */}
            <GoldRateTicker />

            {/* ===== Mobile Menu ===== */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="xl:hidden bg-white border-b border-slate-200 shadow-2xl relative z-30"
                    >
                        <div className="p-6 flex flex-col gap-6">

                            <Suspense fallback={<div className="w-full h-11 bg-slate-50 rounded-full animate-pulse" />}>
                                <ProductSearch />
                            </Suspense>

                            <nav className="flex flex-col gap-1">
                                {mobileNavItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.link}
                                        onClick={() => setIsOpen(false)}
                                        className="flex justify-between items-center text-base font-medium text-slate-800 hover:text-yellow-600 border-b border-slate-100 py-3 transition-colors duration-200"
                                    >
                                        {item.name}
                                        <ChevronRight size={18} className="text-yellow-600" />
                                    </Link>
                                ))}
                            </nav>

                            <Button
                                className="mt-4 rounded-full bg-black hover:bg-slate-800 text-white py-3 text-xs font-bold tracking-widest uppercase transition-colors"
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsModalOpen(true);
                                }}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Phone size={16} />
                                    Visit Showroom
                                </span>
                            </Button>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ===== WhatsApp Modal ===== */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8 shadow-2xl border border-yellow-500/20"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors focus:outline-none"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                                    WhatsApp Order Enquiry
                                </h3>
                                <p className="text-slate-400 text-sm font-light">
                                    Share your details and continue directly in WhatsApp.
                                </p>
                            </div>

                            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-yellow-500 font-bold ml-1">
                                        Full Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-yellow-500 font-bold ml-1">
                                        Visit / Order Message
                                    </label>
                                    <textarea
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
                                        placeholder="What would you like to enquire about?"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold uppercase tracking-widest transition-all mt-4"
                                >
                                    Continue to WhatsApp
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </header>
    );
}
