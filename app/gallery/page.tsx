import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { getTestimonials } from '@/services/testimonial.service';
import { getReels } from '@/services/reel.service';
import { ITestimonial, IReel } from '@/interfaces';
import Image from 'next/image';
import { Star, Quote, Heart, Play, Instagram, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Gallery & Client Stories | VCJ Jewellers',
    description: 'Experience our masterpieces as seen on Instagram and read the heartfelt stories from our cherished patrons.',
};

export default async function GalleryPage() {
    // Parallel data fetching for optimal performance
    const [testimonialsRes, reelsRes] = await Promise.all([
        getTestimonials(),
        getReels()
    ]);

    const testimonials: ITestimonial[] = testimonialsRes?.success ? (testimonialsRes?.data || []) : [];
    const reels: IReel[] = reelsRes?.success ? (reelsRes?.data || []) : [];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Luxury Hero Section */}
                <div className="relative h-[45vh] flex items-center justify-center bg-slate-950 text-white text-center overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <Image
                            src="https://images.unsplash.com/photo-1616745302203-5cb3b54ca018?auto=format&fit=crop&q=80"
                            alt="Luxury Heritage Background"
                            fill
                            className="object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 space-y-4">
                        <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                            <Instagram size={16} />
                            <span className="font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">The VCJ Experience</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">Gallery <span className="text-yellow-500 italic">&</span> Stories</h1>
                        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed">
                            A curated collection of our latest social highlights and the eternal bonds shared with our patrons.
                        </p>
                    </div>
                </div>

                {/* SECTION 1: Seen on Instagram */}
                {reels.length > 0 && (
                    <section className="py-24 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col items-center text-center mb-20 space-y-4">
                                <div className="p-3 bg-yellow-50 rounded-2xl mb-2">
                                    <Instagram className="text-yellow-600 w-6 h-6" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Seen on Instagram</h2>
                                <div className="w-12 h-0.5 bg-yellow-500/30" />
                                <p className="text-slate-500 max-w-xl font-light text-lg">
                                    Explore our latest jewellery masterpieces as seen on our official social channel.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {reels.map((reel) => (
                                    <div key={reel._id} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700">
                                        {/* Thumbnail with Luxury Play Overlay */}
                                        <div className="relative aspect-[9/16] overflow-hidden bg-slate-50">
                                            <Image
                                                src={reel.thumbnailUrl}
                                                alt={reel.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            {/* Luxury Play Overlay Link */}
                                            <a
                                                href={reel.reelUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center cursor-pointer"
                                            >
                                                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/40 transform group-hover:scale-110 transition-all duration-700 shadow-2xl">
                                                    <Play size={36} className="fill-current ml-1.5" />
                                                </div>
                                            </a>
                                            {/* Content Label Badge */}
                                            <div className="absolute top-6 left-6">
                                                <Badge className="bg-white/10 backdrop-blur-md border border-white/20 text-white uppercase tracking-widest text-[9px] px-3 py-1">
                                                    Premium Content
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Engagement Footer */}
                                        <div className="p-8 md:p-10 space-y-8 flex-1 flex flex-col">
                                            <h3 className="text-2xl font-serif font-bold text-slate-900 leading-snug group-hover:text-yellow-700 transition-colors duration-300">
                                                {reel.title}
                                            </h3>

                                            <div className="flex flex-col gap-4 mt-auto">
                                                <a
                                                    href={reel.reelUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full h-14 rounded-full border border-slate-200 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-slate-50 hover:border-slate-300 transition-all text-slate-900 group/btn"
                                                >
                                                    <Instagram size={18} className="group-hover/btn:scale-110 transition-transform" /> Watch Reel
                                                </a>
                                                <a
                                                    href={`https://wa.me/916390901876?text=Hi%20I%20saw%20this%20design%20on%20your%20website%20and%20want%20more%20details%20-%20${encodeURIComponent(reel.title)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full h-14 rounded-full bg-slate-950 text-white flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-yellow-700 transition-all shadow-xl hover:shadow-yellow-700/20 group/btn"
                                                >
                                                    <MessageCircle size={18} className="group-hover/btn:scale-110 transition-transform" /> Enquire on WhatsApp
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION 2: Client Stories */}
                {testimonials.length > 0 && (
                    <section className="py-32 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full" />

                        <div className="container mx-auto px-4 relative z-10">
                            <div className="flex flex-col items-center text-center mb-24 space-y-4">
                                <div className="p-3 bg-white shadow-sm rounded-2xl mb-2">
                                    <Heart className="text-yellow-600 w-6 h-6 fill-yellow-600/10" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">Client Stories</h2>
                                <div className="w-12 h-0.5 bg-yellow-500/30" />
                                <p className="text-slate-500 max-w-xl font-light text-lg">
                                    Hear from our cherished patrons who chose VCJ to be a part of their eternal bond.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {testimonials.map((testi) => (
                                    <div key={testi._id} className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col group hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500">
                                        {/* User Narrative Top */}
                                        <div className="flex items-center gap-5 mb-10">
                                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm group-hover:border-yellow-500/20 transition-all duration-500">
                                                <Image
                                                    src={(testi.imageUrls && testi.imageUrls[0]) || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80'}
                                                    alt={testi.customerName}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xl font-serif font-bold text-slate-900">{testi.customerName}</h4>
                                                <div className="flex gap-0.5">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <Star key={i} size={14} className={i < testi.rating ? "fill-yellow-500 text-yellow-500" : "text-slate-200"} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Luxury Testimonial Body */}
                                        <div className="flex-1 space-y-8 flex flex-col justify-between">
                                            <div className="relative">
                                                <Quote size={40} className="text-yellow-500/10 absolute -top-6 -left-4" />
                                                <p className="text-slate-700 italic font-light leading-relaxed text-lg lg:text-xl relative z-10 italic">
                                                    &ldquo;{testi.description}&rdquo;
                                                </p>
                                            </div>

                                            <div className="pt-8 border-t border-slate-50">
                                                <span className="text-yellow-700 text-[11px] font-bold tracking-[0.3em] uppercase block">
                                                    {testi.treatment || 'Special Occasion'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Legacy Archive CTA */}
                <section className="bg-white py-28 md:py-40">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto space-y-10">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                                Craft your own <span className="text-yellow-500 italic">legacy</span>.
                            </h2>
                            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed px-6">
                                Every masterpiece at VCJ tells a unique story. We invite you to create your own cherished memories with our high-end jewellery.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                                <a href="/products" className="h-16 px-14 bg-slate-950 text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center hover:bg-yellow-700 transition-all shadow-2xl hover:shadow-yellow-700/30">
                                    Explore Collection
                                </a>
                                <a href="/contact" className="h-16 px-14 border border-slate-200 text-slate-900 rounded-full text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center hover:bg-slate-50 transition-all">
                                    Book Private Viewing
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
