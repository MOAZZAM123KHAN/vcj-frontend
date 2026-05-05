// 'use client';

// import Link from 'next/link';
// import { useState, Suspense } from 'react';
// import { Menu, X, Phone, MapPin, Search, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { BUSINESS_INFO } from '@/data/business';
// import { ProductSearch } from './ProductSearch';
// import { Logo } from '@/components/logo/Logo';

// export function Header() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <header className="sticky top-0 z-50 w-full transition-all duration-300">
//             {/* Top Bar - More elegant and minimal */}
//             <div className="bg-[#1a1a1a] text-white py-2 px-4 border-b border-white/10">
//                 <div className="container mx-auto flex justify-between items-center text-[9px] md:text-[11px] font-medium tracking-[0.1em] md:tracking-[0.15em] uppercase">
//                     <div className="flex gap-4 md:gap-6">
//                         <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
//                             <Phone size={10} className="text-yellow-500 md:w-3 md:h-3" /> {BUSINESS_INFO.contact.displayPhone}
//                         </a>
//                         <span className="hidden sm:flex items-center gap-1.5">
//                             <MapPin size={10} className="text-yellow-500 md:w-3 md:h-3" /> Nakhas, Jaunpur
//                         </span>
//                     </div>
//                     <div className="flex gap-4 md:gap-6 items-center">
//                         <Link href="/about" className="hover:text-yellow-400 transition-colors">Legacy</Link>
//                         <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
//                         <div className="h-3 w-[1px] bg-white/20 mx-1 hidden xs:block" />
//                         <span className="text-yellow-500 hidden xs:block">100% Purity</span>
//                     </div>
//                 </div>
//             </div>

//             Main Navigation - Balanced and Spacious
//             <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm relative z-40">
//                 <div className="container mx-auto px-4 lg:px-10 py-4 flex items-center justify-between gap-4 md:gap-12">
//                     {/* Search - Left on Desktop */}
//                     <div className="hidden lg:flex flex-1 max-w-[320px]">
//                         <Suspense fallback={<div className="w-full h-11 bg-slate-50 rounded-full animate-pulse" />}>
//                             <ProductSearch />
//                         </Suspense>
//                     </div>

//                     {/* Logo - Centered and Prominent */}
//                     <div className="flex shrink-0 px-2">
//                         <Link href="/" className="group transition-transform hover:scale-105 duration-500">
//                             <Logo className="scale-85 md:scale-95 lg:scale-110 origin-center" />
//                         </Link>
//                     </div>



//                     {/* Nav Links + Icons - Right */}
//                     <div className="flex-1 flex items-center justify-end gap-8 md:gap-12">
//                         <nav className="hidden xl:flex items-center gap-12">
//                             {['Collections', 'Gallery', 'Story'].map((item) => (
//                                 <Link
//                                     key={item}
//                                     href={item === 'Story' ? '/about' : item === 'Collections' ? '/products' : `/${item.toLowerCase()}`}
//                                     className="text-[12px] font-black tracking-[0.25em] uppercase text-slate-500 hover:text-yellow-700 transition-all relative group/nav"
//                                 >
//                                     {item}
//                                     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-yellow-600 transition-all group-hover/nav:w-8" />
//                                 </Link>
//                             ))}
//                         </nav>

//                         {/* <div className="flex items-center gap-4">
//                             <Button variant="premium" className="hidden sm:flex h-12 px-8 rounded-none text-[12px] font-black tracking-[0.15em] uppercase shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all" asChild>
//                                 <Link href="/contact">Book Visit</Link>
//                             </Button> */}

//                         <div className="flex items-center gap-4">
//                             <Button
//                                 variant="premium"
//                                 className="hidden sm:flex h-12 px-8 rounded-full text-[12px] font-semibold tracking-[0.15em] uppercase shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//                                 asChild
//                             >
//                                 <Link href="/contact">Book Visit</Link>
//                             </Button>


//                             {/* Mobile Toggle */}
//                             <button
//                                 className="xl:hidden p-2 text-slate-800 hover:text-yellow-700 transition-colors focus:outline-none"
//                                 onClick={() => setIsOpen(!isOpen)}
//                                 aria-label="Toggle menu"
//                             >
//                                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Nav - Elegant Overlay */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-40 p-6"
//                     >
//                         <div className="mb-8">
//                             <Suspense fallback={<div className="w-full h-12 bg-slate-50 rounded-full animate-pulse" />}>
//                                 <ProductSearch />
//                             </Suspense>
//                         </div>
//                         <nav className="flex flex-col gap-6">
//                             {[
//                                 { name: 'Home', link: '/' },
//                                 { name: 'Our Collections', link: '/products' },
//                                 { name: 'Exclusive Gallery', link: '/gallery' },
//                                 { name: 'Our Heritage', link: '/about' },
//                                 { name: 'Contact Us', link: '/contact' }
//                             ].map((item) => (
//                                 <Link
//                                     key={item.name}
//                                     href={item.link}
//                                     className="text-lg font-serif font-bold text-slate-800 hover:text-yellow-600 border-b border-slate-50 pb-2 flex justify-between items-center"
//                                     onClick={() => setIsOpen(false)}
//                                 >
//                                     {item.name}
//                                     <ChevronRight size={18} className="text-yellow-600" />
//                                 </Link>
//                             ))}
//                             <Button className="w-full h-14 rounded-none text-xs font-bold tracking-[0.2em] uppercase bg-slate-900 border-none mt-4">
//                                 <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="flex items-center gap-2">
//                                     <Phone size={16} /> Call Showroom
//                                 </a>
//                             </Button>
//                         </nav>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </header >
//     );
// }


'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/data/business';
import { ProductSearch } from './ProductSearch';
import { Logo } from '@/components/logo/Logo';

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

    return (
        <header className="sticky top-0 z-50 w-full">

            {/* ===== Top Bar ===== */}
            <div className="bg-[#1a1a1a] text-white py-1 px-4 border-b border-white/10">
                <div className="container mx-auto flex justify-between items-center text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase">

                    <div className="flex gap-6">
                        <a
                            href={`tel:${BUSINESS_INFO.contact.phone}`}
                            className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                        >
                            <Phone size={12} className="text-yellow-500" />
                            {BUSINESS_INFO.contact.displayPhone}
                        </a>

                        <span className="hidden sm:flex items-center gap-2 text-white/70">
                            <MapPin size={12} className="text-yellow-500" />
                            Nakhas, Jaunpur
                        </span>
                    </div>

                    <div className="hidden md:flex gap-6 items-center">
                        <Link href="/about" className="hover:text-yellow-400 transition-colors">
                            Legacy
                        </Link>
                        <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                            Contact
                        </Link>
                        <span className="text-yellow-500">100% Purity</span>
                    </div>

                </div>
            </div>

            {/* ===== Main Navigation ===== */}
            <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
                <div className="container mx-auto px-4 lg:px-10 py-2 flex items-center justify-between gap-8">

                    {/* LEFT - Logo */}
                    <div className="flex items-center shrink-0">
                        <Link href="/" className="transition-transform hover:scale-105 duration-300">
                            <Logo className="h-full w-auto" />
                        </Link>
                    </div>

                    {/* CENTER - Search */}
                    <div className="hidden lg:flex flex-1 max-w-md">
                        <Suspense fallback={<div className="w-full h-11 bg-slate-50 rounded-full animate-pulse" />}>
                            <ProductSearch />
                        </Suspense>
                    </div>

                    {/* RIGHT - Nav + Button */}
                    <div className="flex items-center gap-8 shrink-0">

                        {/* Desktop Nav */}
                        <nav className="hidden xl:flex items-center gap-10 text-[12px] font-semibold tracking-[0.2em] uppercase text-slate-600">
                            {['Collections', 'Gallery', 'Story'].map((item) => (
                                <Link
                                    key={item}
                                    href={
                                        item === 'Story'
                                            ? '/about'
                                            : item === 'Collections'
                                                ? '/products'
                                                : `/${item.toLowerCase()}`
                                    }
                                    className="hover:text-yellow-700 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>

                        {/* Book Visit Button */}
                        <Button
                            variant="premium"
                            className="hidden sm:flex h-11 px-8 rounded-full text-[12px] font-semibold tracking-[0.15em] uppercase shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Book Visit
                        </Button>

                        {/* Mobile Toggle */}
                        <button
                            className="xl:hidden p-2 text-slate-800 hover:text-yellow-700 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>

                    </div>
                </div>
            </div>

            {/* ===== Mobile Menu ===== */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="xl:hidden bg-white border-b border-slate-200 shadow-2xl"
                    >
                        <div className="p-6 flex flex-col gap-6">

                            <Suspense fallback={<div className="w-full h-11 bg-slate-50 rounded-full animate-pulse" />}>
                                <ProductSearch />
                            </Suspense>

                            {[
                                { name: 'Home', link: '/' },
                                { name: 'Our Collections', link: '/products' },
                                { name: 'Exclusive Gallery', link: '/gallery' },
                                { name: 'Our Heritage', link: '/about' },
                                { name: 'Contact Us', link: '/contact' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    className="flex justify-between items-center text-lg font-medium text-slate-800 hover:text-yellow-600 border-b border-slate-100 pb-3"
                                >
                                    {item.name}
                                    <ChevronRight size={18} className="text-yellow-600" />
                                </Link>
                            ))}

                            <Button
                                className="mt-4 rounded-full bg-black text-white py-3"
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsModalOpen(true);
                                }}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Phone size={16} />
                                    Book Visit
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
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                                    WhatsApp Order Enquiry
                                </h3>
                                <p className="text-slate-400 text-sm">
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
