import { getTestimonials } from "@/services/testimonial.service";
import { ITestimonial } from "@/interfaces";
import Image from "next/image";
import { Star, Quote, Heart } from "lucide-react";

interface TestimonialSectionProps {
    limit?: number;
    title?: string;
    subtitle?: string;
    className?: string;
}

export async function HomeTestimonialSection({
    limit = 3,
    title = "Client Love",
    subtitle = "Hear from our cherished patrons who chose VCJ to be a part of their eternal bond.",
    className = "",
}: TestimonialSectionProps) {
    const response = await getTestimonials();
    const testimonials: ITestimonial[] = response?.success
        ? (response?.data || []).slice(0, limit)
        : [];

    if (testimonials.length === 0) return null;

    return (
        <section className={`py-24 md:py-32 bg-slate-50 relative overflow-hidden ${className}`}>
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 blur-[120px] -z-0" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-yellow-500/5 blur-[120px] -z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-4">
                    <div className="flex items-center gap-2 text-yellow-600 mb-2">
                        <Heart size={16} className="fill-current" />
                        <span className="font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Reflections of Trust</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight">
                        {title}
                    </h2>
                    <div className="w-12 h-0.5 bg-yellow-500/30 mx-auto" />
                    <p className="text-slate-500 max-w-xl mx-auto font-light text-base md:text-lg leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testi) => (
                        <div
                            key={testi._id}
                            className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col group hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="flex items-center gap-5 mb-10">
                                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm group-hover:border-yellow-500/20 transition-all duration-500">
                                    <Image
                                        src={
                                            (testi.imageUrls && testi.imageUrls[0]) ||
                                            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80"
                                        }
                                        alt={testi.customerName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-serif font-bold text-slate-900">
                                        {testi.customerName}
                                    </h4>
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={
                                                    i < testi.rating
                                                        ? "fill-yellow-500 text-yellow-500"
                                                        : "text-slate-200"
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-8 flex flex-col justify-between">
                                <div className="relative">
                                    <Quote
                                        size={40}
                                        className="text-yellow-500/10 absolute -top-6 -left-4"
                                    />
                                    <p className="text-slate-700 italic font-light leading-relaxed text-lg relative z-10 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                                        &ldquo;{testi.description}&rdquo;
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-slate-50 mt-auto">
                                    <span className="text-yellow-700 text-[11px] font-bold tracking-[0.3em] uppercase block">
                                        {testi.treatment || "Special Occasion"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
