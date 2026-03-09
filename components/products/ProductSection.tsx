import { IProduct } from '@/interfaces';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ProductSectionProps {
    title: string;
    subtitle?: string;
    products: IProduct[];
    viewAllLink: string;
    className?: string;
    badge?: string;
}

export function ProductSection({
    title,
    subtitle,
    products,
    viewAllLink,
    className = "",
    badge
}: ProductSectionProps) {
    return (
        <section className={`py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    {badge && (
                        <div className="flex items-center gap-3 w-full justify-center">
                            <div className="h-[1px] w-8 bg-yellow-400" />
                            <span className="text-yellow-700 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                                {badge}
                            </span>
                            <div className="h-[1px] w-8 bg-yellow-400" />
                        </div>
                    )}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight max-w-4xl">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-slate-500 max-w-2xl text-base md:text-lg font-light leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link
                        href={viewAllLink}
                        className="group flex flex-col items-center gap-1 text-[11px] font-bold tracking-[0.3em] uppercase text-slate-900 hover:text-yellow-700 transition-all"
                    >
                        <span>Explore the Full Collection</span>
                        <div className="h-[1.5px] w-12 bg-yellow-600 group-hover:w-24 transition-all duration-500" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
