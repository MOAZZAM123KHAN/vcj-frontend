import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/data/business';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us - 4 Generations of Trust | VCJ Jewellers',
    description: 'Learn about Vimal Chhaganlal Jewellers (VCJ), a 65-year-old family legacy in Jaunpur offering pure gold, silver, and diamond jewellery.',
};


export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="bg-white min-h-screen">
                {/* Story Hero */}
                <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Badge className="mb-4 md:mb-6 bg-yellow-500 text-black hover:bg-yellow-400 border-none px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-widest uppercase text-balance">✨ Established 1960</Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-balance">
                            A Legacy of <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">Trust</span> and <br className="hidden md:block" /> Timeless Elegance
                        </h1>
                        <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                            A Legacy of Fine Jewelry Since 1960. VCJ isn’t just a brand—it’s a four-generation legacy born in Jaunpur, built on craftsmanship, trust, and evolving with time.
                        </p>
                    </div>
                </section>

                {/* The Timeline / Heritage */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute left-1/2 -translate-x-1/2 top-48 bottom-48 w-px bg-slate-200 hidden md:block" />

                    <div className="container mx-auto px-4">
                        <div className="space-y-16 md:space-y-24">
                            {/* 1st Generation */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
                                <div className="md:w-1/2 md:text-right order-2 md:order-1 relative">
                                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yellow-500 z-10 hidden md:block group-hover:scale-125 transition-transform" />
                                    <span className="text-yellow-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-2 block">1960s • The Foundation</span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">The Pioneer Karigar</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-lg md:ml-auto text-sm md:text-base">
                                        Our story began in the 1960s with Vishwanath Prasad Seth (affectionately known as <strong>Vishu Seth</strong>), the only karigar in Jaunpur in the years following India’s independence. Working with his hands and heart, he set the foundation of what would later become a trusted name in the world of jewelry.
                                    </p>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2 w-full">
                                    <div className="relative aspect-[16/9] bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                        <Image src="/images/jwellry CDN 1.jpg" alt="Traditional craft" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                    </div>
                                </div>
                            </div>

                            {/* 2nd Generation */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
                                <div className="md:w-1/2 order-2 md:order-1 w-full">
                                    <div className="relative aspect-[16/9] bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                        <Image src="/images/jwellry CDN2.jpg" alt="Timeless Gold" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                    </div>
                                </div>
                                <div className="md:w-1/2 relative order-1 md:order-2">
                                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yellow-500 z-10 hidden md:block group-hover:scale-125 transition-transform" />
                                    <span className="text-yellow-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-2 block">1970s • The Identity</span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">Chagganlal Seth</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-lg text-sm md:text-base">
                                        In the 1970s, his son <strong>Chagganlal Seth</strong> formally established the family business, continuing the traditional way of jewelry-making with an uncompromising commitment to purity and ethics.
                                    </p>
                                </div>
                            </div>

                            {/* 3rd Generation */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
                                <div className="md:w-1/2 md:text-right order-2 md:order-1 relative">
                                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yellow-500 z-10 hidden md:block group-hover:scale-125 transition-transform" />
                                    <span className="text-yellow-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-2 block">1993 • The Expansion</span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">Vimal Seth</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-lg md:ml-auto text-sm md:text-base">
                                        In 1993, <strong>Vimal Seth</strong> opened our first retail showroom in Jaunpur, ushering VCJ into a new era of customer service and accessibility. This physical store became a beacon for quality jewelry seekers in the region.
                                    </p>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2 w-full">
                                    <div className="relative aspect-[16/9] bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                        <Image src="/images/jwellry cdn 3.jpg" alt="Retail Showroom" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                    </div>
                                </div>
                            </div>

                            {/* 4th Generation */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
                                <div className="md:w-1/2 order-2 md:order-1 w-full">
                                    <div className="relative aspect-[16/9] bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                        <Image src="/images/jwellry CDN 1.jpg" alt="Modern Brand" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                    </div>
                                </div>
                                <div className="md:w-1/2 relative order-1 md:order-2">
                                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yellow-500 z-10 hidden md:block group-hover:scale-125 transition-transform" />
                                    <span className="text-yellow-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-2 block">2022 • The Modern Vision</span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">Mohit Seth</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-lg text-sm md:text-base">
                                        Carrying the legacy forward, <strong>Mohit Seth</strong> launched our second showroom in 2022, with a renewed vision: to transform our heritage into a modern, premium brand. Under the banner of VCJ, we now operate across manufacturing, wholesale, and retail.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Offerings */}
                <section className="py-16 md:py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 underline decoration-yellow-500 underline-offset-8">What We Offer</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {[
                                { title: "HUID Gold", desc: "22kt & 18kt HUID Hallmarked Gold Jewelry" },
                                { title: "Cert. Diamond", desc: "Certified Diamond Jewelry and solitaires" },
                                { title: "Branded Silver", desc: "925 Sterling and Branded Silver Jewelry" },
                                { title: "Custom Bridal", desc: "Custom Bridal & Occasion Jewelry designs" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-1 bg-yellow-500 mb-6 rounded-full" />
                                    <h3 className="font-serif text-lg md:text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing Statement */}
                <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
                            <p className="text-xl md:text-2xl font-serif text-slate-800 leading-relaxed italic text-balance">
                                "At VCJ, we combine traditional artistry with contemporary style, offering jewelry that celebrates life’s most meaningful moments—crafted with care, and backed by generations of trust."
                            </p>
                            <div className="w-24 h-px bg-yellow-500 mx-auto" />
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed px-4">
                                We invite you to experience the story, the service, and the sparkle that make VCJ more than just a jewelry brand.
                            </p>
                            <div className="pt-4 md:pt-8 w-full flex justify-center">
                                <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-yellow-600 transition-colors shadow-lg">
                                    Visit Our Showroom <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
