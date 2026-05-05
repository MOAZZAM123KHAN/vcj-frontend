// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Sparkles, Info } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface Slide {
//     id: number;
//     title: string;
//     subtitle: string;
//     description: string;
//     image: string;
//     ctaText: string;
//     ctaLink: string;
//     badge: string;
// }

// const slides: Slide[] = [
//     {
//         id: 1,
//         badge: "✨ Since 1960",
//         title: "Legacy of <br /> <span class='bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-300 bg-clip-text text-transparent'>Pure Craftsmanship</span>",
//         subtitle: "Traditional Gold Collection",
//         description: "Discover Jaunpur's finest collection of certified Hallmark Gold jewellery. Where tradition meets trust across 4 generations.",
//         image: "https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?q=80&w=2070&auto=format&fit=crop",
//         ctaText: "Explore Gold",
//         ctaLink: "/products?material=gold",
//     },
//     {
//         id: 2,
//         badge: "💎 Certified Brilliance",
//         title: "Elegance in <br /> <span class='bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-300 bg-clip-text text-transparent'>Every Diamond</span>",
//         subtitle: "Luxury Diamond Range",
//         description: "Exquisite GIA certified diamonds set in 18K white and rose gold. Timeless pieces for your most precious moments.",
//         image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2042&auto=format&fit=crop",
//         ctaText: "View Diamonds",
//         ctaLink: "/products?material=diamond",
//     },
//     {
//         id: 3,
//         badge: "🏛️ Visit Our Showroom",
//         title: "A Tradition of <br /> <span class='bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent'>Excellence</span>",
//         subtitle: "Premium Jewelry Experience",
//         description: "Step into our world of luxury in Nakhas, Jaunpur. Experience personalized service and unmatched transparency.",
//         image: "https://images.unsplash.com/photo-1573408212130-9b4b73b22e17?q=80&w=2070&auto=format&fit=crop",
//         ctaText: "Contact Us",
//         ctaLink: "/contact",
//     },
//     {
//         id: 4,
//         badge: "💍 Wedding Specials",
//         title: "Your Journey <br /> <span class='bg-gradient-to-r from-rose-300 via-pink-500 to-rose-300 bg-clip-text text-transparent'>Begins Here</span>",
//         subtitle: "Bridal Masterpieces",
//         description: "Complete bridal sets featuring antique Polki and Kundan work. Make your special day truly unforgettable.",
//         image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=2070&auto=format&fit=crop",
//         ctaText: "Shop Bridal",
//         ctaLink: "/products?category=Necklaces",
//     }
// ];

// export function HeroCarousel() {
//     const [current, setCurrent] = useState(0);
//     const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//     const nextSlide = useCallback(() => {
//         setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, []);

//     const prevSlide = () => {
//         setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

//     useEffect(() => {
//         if (!isAutoPlaying) return;
//         const interval = setInterval(nextSlide, 6000);
//         return () => clearInterval(interval);
//     }, [isAutoPlaying, nextSlide]);

//     return (
//         <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-slate-950">
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={current}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 1.5, ease: "easeInOut" }}
//                     className="absolute inset-0"
//                 >
//                     {/* Cinematic Background */}
//                     <div className="relative w-full h-full">
//                         <Image
//                             src={slides[current].image}
//                             alt={slides[current].subtitle}
//                             fill
//                             unoptimized
//                             className="object-cover opacity-70 scale-105 animate-slow-zoom"
//                             priority
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
//                         {/* Dramatic Light Overlay */}
//                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
//                     </div>

//                     {/* Majestic Content */}
//                     <div className="container relative z-10 h-full flex items-center justify-center px-4 md:px-8 mx-auto">
//                         <div className="max-w-4xl text-center space-y-8 flex flex-col items-center">
//                             <motion.div
//                                 initial={{ y: 20, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.3 }}
//                                 className="flex items-center gap-4 justify-center"
//                             >
//                                 <div className="h-[1px] w-12 bg-yellow-400/50" />
//                                 <span className="text-yellow-500 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase whitespace-nowrap">{slides[current].badge}</span>
//                                 <div className="h-[1px] w-12 bg-yellow-400/50" />
//                             </motion.div>

//                             <motion.h1
//                                 initial={{ y: 30, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.5, duration: 0.8 }}
//                                 className="text-3xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight text-balance"
//                                 dangerouslySetInnerHTML={{ __html: slides[current].title }}
//                             />

//                             <motion.p
//                                 initial={{ y: 20, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.7 }}
//                                 className="text-sm md:text-xl text-slate-200 leading-relaxed font-light max-w-2xl mx-auto italic opacity-90 px-4"
//                             >
//                                 {slides[current].description}
//                             </motion.p>

//                             <motion.div
//                                 initial={{ y: 20, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.9 }}
//                                 className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6 items-center w-full sm:w-auto"
//                             >
//                                 <Button size="lg" variant="premium" className="h-12 md:h-14 px-8 md:px-12 text-xs md:text-sm font-bold tracking-widest uppercase rounded-none border-none shadow-2xl hover:scale-105 transition-transform w-full sm:w-auto" asChild>
//                                     <Link href={slides[current].ctaLink}>{slides[current].ctaText}</Link>
//                                 </Button>
//                                 <Link
//                                     href="/gallery"
//                                     className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase border-b border-white/30 pb-1 hover:border-yellow-500 hover:text-yellow-500 transition-all"
//                                 >
//                                     View Lookbook
//                                 </Link>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Elegant Navigation Controls */}
//             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
//                 <div className="flex gap-4">
//                     {slides.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => { setCurrent(index); setIsAutoPlaying(false); }}
//                             className={`group relative h-10 w-1 flex items-center justify-center`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         >
//                             <div className={`h-full w-[2px] transition-all duration-700 ${current === index ? 'bg-yellow-500 h-10' : 'bg-white/20 h-4 group-hover:bg-white/40'}`} />
//                         </button>
//                     ))}
//                 </div>

//                 <div className="flex items-center gap-12">
//                     <button
//                         onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
//                         className="text-white/50 hover:text-yellow-500 transition-colors"
//                         aria-label="Previous slide"
//                     >
//                         <ChevronLeft size={32} strokeWidth={1} />
//                     </button>
//                     <button
//                         onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
//                         className="text-white/50 hover:text-yellow-500 transition-colors"
//                         aria-label="Next slide"
//                     >
//                         <ChevronRight size={32} strokeWidth={1} />
//                     </button>
//                 </div>
//             </div>

//             {/* Ornate Corner Elements */}
//             <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-yellow-500/20 m-8 pointer-events-none hidden md:block" />
//             <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-yellow-500/20 m-8 pointer-events-none hidden md:block" />
//         </section>
//     );
// }

// // Add these to your globals.css or keep them as inline style if needed
// // @keyframes slow-zoom {
// //   from { transform: scale(1.05); }
// //   to { transform: scale(1.15); }
// // }
// // .animate-slow-zoom {
// //   animation: slow-zoom 20s infinite alternate linear;
// // }


'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    ctaText: string;
    ctaLink: string;
    badge: string;
}

const slides: Slide[] = [
    {
        id: 1,
        badge: "✨ Since 1960",
        title:
            "Legacy of <br /> <span class='bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-300 bg-clip-text text-transparent'>Pure Craftsmanship</span>",
        subtitle: "Traditional Gold Collection",
        description:
            "Discover Jaunpur's finest collection of certified Hallmark Gold jewellery. Where tradition meets trust across 4 generations.",
        image: "/images/jwellry CDN 1.jpg",
        ctaText: "Explore Gold",
        ctaLink: "/products?material=gold",
    },
    {
        id: 2,
        badge: "💎 Certified Brilliance",
        title:
            "Elegance in <br /> <span class='bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-300 bg-clip-text text-transparent'>Every Diamond</span>",
        subtitle: "Luxury Diamond Range",
        description:
            "Exquisite certified diamonds set in 18K white and rose gold. Timeless pieces for your most precious moments.",
        image: "/images/jwellry CDN2.jpg",
        ctaText: "View Diamonds",
        ctaLink: "/products?material=diamond",
    },
    {
        id: 3,
        badge: "🏛️ Visit Our Showroom",
        title:
            "A Tradition of <br /> <span class='bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent'>Excellence</span>",
        subtitle: "Premium Jewelry Experience",
        description:
            "Step into our world of luxury in Nakhas, Jaunpur. Experience personalized service and unmatched transparency.",
        image: "/images/jwellry cdn 3.jpg",
        ctaText: "Contact Us",
        ctaLink: "/contact",
    },
    {
        id: 4,
        badge: "💍 Wedding Specials",
        title:
            "Your Journey <br /> <span class='bg-gradient-to-r from-rose-300 via-pink-500 to-rose-300 bg-clip-text text-transparent'>Begins Here</span>",
        subtitle: "Bridal Masterpieces",
        description:
            "Complete bridal sets featuring antique Polki and Kundan work. Make your special day truly unforgettable.",
        image: "/images/jwellry CDN 1.jpg",
        ctaText: "Shop Bridal",
        ctaLink: "/products?category=Necklaces",
    },
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 4500);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-slate-950">
            <AnimatePresence>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    {/* Background */}
                    <div className="relative w-full h-full">
                        <Image
                            src={slides[current].image}
                            alt={slides[current].subtitle}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1400px"
                            quality={85}
                            priority={true}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAgIBBAMBAAAAAAAAAAAAAQIDBAUREiFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwAt19ma5btSRtJIzMzMzNjmdiW2XOc8nOScknJPPJPJ8DAILNaKaMxyoHXxgg//2Q=="
                            className="object-cover opacity-70 animate-slow-zoom"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                    </div>

                    {/* Content */}
                    <div className="container relative z-10 h-full flex items-center justify-center px-4 md:px-8 mx-auto">
                        <div className="max-w-4xl text-center space-y-8 flex flex-col items-center">

                            <motion.div
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 justify-center"
                            >
                                <div className="h-[1px] w-12 bg-yellow-400/50" />
                                <span className="text-yellow-500 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                                    {slides[current].badge}
                                </span>
                                <div className="h-[1px] w-12 bg-yellow-400/50" />
                            </motion.div>

                            <motion.h1
                                initial={{ y: 25, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-3xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight"
                                dangerouslySetInnerHTML={{ __html: slides[current].title }}
                            />

                            <motion.p
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-sm md:text-xl text-slate-200 leading-relaxed font-light max-w-2xl italic opacity-90 px-4"
                            >
                                {slides[current].description}
                            </motion.p>

                            <motion.div
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-6 pt-6 items-center"
                            >
                                <Button
                                    size="lg"
                                    variant="premium"
                                    className="h-12 md:h-14 px-10 text-xs md:text-sm font-bold tracking-widest uppercase rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                                    asChild
                                >
                                    <Link href={slides[current].ctaLink}>
                                        {slides[current].ctaText}
                                    </Link>
                                </Button>

                                <Link
                                    href="/gallery"
                                    className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase border-b border-white/30 pb-1 hover:border-yellow-500 hover:text-yellow-500 transition-all"
                                >
                                    View Lookbook
                                </Link>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
                <div className="flex gap-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => { setCurrent(index); setIsAutoPlaying(false); }}
                            className="group relative h-10 w-1 flex items-center justify-center"
                        >
                            <div className={`transition-all duration-500 ${current === index ? 'bg-yellow-500 h-10 w-[2px]' : 'bg-white/20 h-4 w-[2px] group-hover:bg-white/40'}`} />
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-12">
                    <button
                        onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
                        className="text-white/50 hover:text-yellow-500 transition-colors"
                    >
                        <ChevronLeft size={32} strokeWidth={1} />
                    </button>

                    <button
                        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
                        className="text-white/50 hover:text-yellow-500 transition-colors"
                    >
                        <ChevronRight size={32} strokeWidth={1} />
                    </button>
                </div>
            </div>

            {/* Corners */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-yellow-500/20 m-8 hidden md:block" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-yellow-500/20 m-8 hidden md:block" />
        </section>
    );
}