'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '@/interfaces';
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';

export function ProductCard({ product }: { product: IProduct }) {
    const hasDiscount = (product.offer ?? 0) > 0;
    const slug = product.slug || product.name.toLowerCase().replace(/\s+/g, '-');
    const imageUrl = (product.imageUrls && product.imageUrls.length > 0) ? product.imageUrls[0] : '/images/placeholder-jewellery.jpg';

    return (
        <Link href={`/products/${slug}`} className="block group h-full">
            <div className="relative bg-white transition-all duration-500 flex flex-col h-full overflow-hidden">
                {/* Image Area - More focused */}
                <div className="aspect-[1/1] relative overflow-hidden bg-slate-50 border border-slate-100">
                    <Image
                        src={imageUrl}
                        alt={product.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />

                    {/* Minimalist Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1.5 pointer-events-none">
                        {product.isTrending && (
                            <span className="bg-amber-500/90 text-white text-[8px] font-bold px-2 py-0.5 tracking-widest uppercase">
                                Trending
                            </span>
                        )}
                        {hasDiscount && (
                            <span className="bg-rose-500/90 text-white text-[8px] font-bold px-2 py-0.5 tracking-widest uppercase">
                                {product.offer}% OFF
                            </span>
                        )}
                    </div>

                    {/* Wishlist Icon - Refined */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                        <button
                            className="p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-rose-50 hover:text-rose-600 transition-colors pointer-events-auto"
                            aria-label="Add to wishlist"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <Heart size={14} />
                        </button>
                    </div>
                </div>

                {/* Content - Elegant Typography */}
                <div className="pt-4 pb-6 px-1 flex-1 flex flex-col items-center text-center">
                    <span className="text-[9px] text-yellow-700 font-bold uppercase tracking-[0.2em] mb-2 px-2 py-0.5 bg-yellow-50/50 border border-yellow-100/50">
                        {product.material || 'Jewellery'} • {product.category}
                    </span>

                    <h3 className="font-serif text-base md:text-lg font-medium text-slate-900 mb-2 line-clamp-1 group-hover:text-yellow-800 transition-colors px-2">
                        {product.name}
                    </h3>

                    <div className="mt-auto space-y-1">
                        {product.price ? (
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Starting Price</span>
                                <div className="text-sm md:text-base font-bold text-slate-900 tracking-tight">
                                    ₹{product.price.toLocaleString()}
                                </div>
                            </div>
                        ) : (
                            <span className="text-xs font-bold text-yellow-700 uppercase tracking-widest px-4 py-1 border border-yellow-200">Price on Request</span>
                        )}
                    </div>

                    {/* Subtle "Discover" indicator */}
                    <div className="mt-4 overflow-hidden h-5 relative w-full flex justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-700 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                            Discover Details
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
