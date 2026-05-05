import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getProductBySlug, getProducts } from '@/services/product.service';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Heart, Share2, ShieldCheck, Truck, RefreshCw, Star } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ProductSection } from '@/components/products/ProductSection';
import { ProductEnquiry } from '@/components/products/ProductEnquiry';
import { ShareButton } from '@/components/products/ShareButton';
import { Suspense } from 'react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const { data: product } = await getProductBySlug(slug);
        if (!product) return { title: 'Product Not Found | VCJ Jewellers' };

        const url = `https://vcjjewellers.com/products/${slug}`;
        const title = `${product.name} | VCJ Jewellers Jaunpur`;
        const description = product.description || `Buy ${product.name} at VCJ Jewellers. Premium ${product.material} jewellery available at our Nakhas, Jaunpur showroom.`;
        const image = product.imageUrls?.[0] || '/images/og-jewellery.jpg';

        return {
            title,
            description,
            alternates: {
                canonical: url,
            },
            openGraph: {
                title,
                description,
                url,
                siteName: "VCJ Jewellers",
                images: [{ url: image, width: 1200, height: 630 }],
            },
            twitter: {
                card: "summary_large_image",
                title,
                description,
                images: [image],
            },
        };
    } catch (e) {
        return { title: 'Product Not Found | VCJ Jewellers' };
    }
}

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params;
    let product;
    try {
        const response = await getProductBySlug(slug);
        product = response.data;
    } catch (e) {
        notFound();
    }

    if (!product) {
        notFound();
    }

    const hasDiscount = !!(product.offer && product.offer > 0);
    const displayImage = product.imageUrls?.[0] || '';

    return (
        <Content product={product} hasDiscount={hasDiscount} displayImage={displayImage} />
    );
}

async function Recommendations({ currentProduct }: { currentProduct: any }) {
    let products: any[] = [];
    try {
        const response = await getProducts();
        products = JSON.parse(JSON.stringify(response.data || []));
    } catch (e) {
        console.error("Recommendations fetch failed:", e);
    }

    const filtered = products.filter((p: any) =>
        p.slug !== currentProduct.slug &&
        (p.category === currentProduct.category || p.material === currentProduct.material)
    ).slice(0, 4);

    return (
        <ProductSection
            title="Complementary Designs"
            subtitle="Pieces that share the same soul and craftsmanship heritage."
            badge="Inspired Collection"
            products={filtered}
            viewAllLink="/products"
            className="bg-slate-50/50"
        />
    );
}

function Content({ product, hasDiscount, displayImage }: { product: any, hasDiscount: boolean, displayImage: string }) {
    const url = `https://vcjjewellers.com/products/${product.slug}`;
    
    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": product.imageUrls?.[0] || "",
        "description": product.description || `Buy ${product.name} at VCJ Jewellers.`,
        "sku": product.slug,
        "brand": {
            "@type": "Brand",
            "name": "VCJ Jewellers"
        },
        "offers": {
            "@type": "Offer",
            "url": url,
            "priceCurrency": "INR",
            "price": product.price || 0,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vcjjewellers.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Collections",
                "item": "https://vcjjewellers.com/products"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": url
            }
        ]
    };

    return (
        <>
            <Script
                id="product-schema"
                type="application/ld+json"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Header />
            <main className="min-h-screen bg-white">
                <div className="container mx-auto px-4 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Image Gallery - Cinematic */}
                        <div className="space-y-6">
                            <div className="aspect-[1/1] relative overflow-hidden bg-slate-50 border border-slate-100 group">
                                <Image
                                    src={displayImage}
                                    alt={product.name}
                                    fill
                                    unoptimized
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                    priority
                                />
                                {product.isTrending && (
                                    <div className="absolute top-8 left-8">
                                        <span className="bg-amber-500/90 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 tracking-[0.2em] uppercase shadow-lg">
                                            Trending Now
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-4 gap-4">
                                {(product.imageUrls || []).map((img: string, idx: number) => (
                                    <div key={idx} className={`aspect-square relative overflow-hidden border ${idx === 0 ? 'border-yellow-600' : 'border-slate-100'} bg-slate-50 cursor-pointer`}>
                                        <Image src={img} alt={`${product.name} detail view`} fill unoptimized className="object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info - Elegant & Narrative */}
                        <div className="flex flex-col pt-4">
                            <nav aria-label="Breadcrumb" className="mb-10">
                                <ol className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-slate-400">
                                    <li>
                                        <Link href="/" className="hover:text-yellow-700 transition-colors">Home</Link>
                                    </li>
                                    <li className="text-slate-200" aria-hidden="true">/</li>
                                    <li>
                                        <Link href="/products" className="hover:text-yellow-700 transition-colors">Collections</Link>
                                    </li>
                                    <li className="text-slate-200" aria-hidden="true">/</li>
                                    <li className="text-slate-900" aria-current="page">
                                        {product.name}
                                    </li>
                                </ol>
                            </nav>

                            <div className="mb-6">
                                <span className="text-[11px] font-bold text-yellow-700 uppercase tracking-[0.3em] bg-yellow-50 px-4 py-1.5 border border-yellow-100">
                                    {product.material} • {product.category}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                                {product.name}
                            </h1>

                            <div className="flex items-center gap-6 mb-12">
                                <div className="text-3xl font-serif font-medium text-slate-900">
                                    {product.price ? `₹${product.price.toLocaleString()}` : 'Price on Request'}
                                </div>
                                {hasDiscount && (
                                    <div className="px-3 py-1 bg-rose-50 text-rose-600 text-[10px] font-bold tracking-widest uppercase border border-rose-100">
                                        {product.offer}% Special Offer
                                    </div>
                                )}
                            </div>

                            <div className="space-y-8 mb-16">
                                <p className="text-slate-500 text-lg font-light leading-relaxed italic">
                                    &ldquo;{product.description}&rdquo;
                                </p>

                                <div className="grid grid-cols-2 gap-y-10 gap-x-12 pt-8 border-t border-slate-100">
                                    <div className="space-y-1">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Gross Weight</span>
                                        <div className="text-base font-serif font-bold text-slate-800">{product.weight || 'Contact Expert'}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Composition</span>
                                        <div className="text-base font-serif font-bold text-slate-800">{product.material || 'Jewellery'} {product.purity || ''}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Purity Check</span>
                                        <div className="text-base font-serif font-bold text-slate-800">BIS Hallmarked</div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Designed For</span>
                                        <div className="text-base font-serif font-bold text-slate-800">{product.occasion || 'Everyday Luxury'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 mb-16">
                                <ProductEnquiry productName={product.name} />
                                <div className="flex gap-4">
                                    <button className="w-16 h-16 flex items-center justify-center border border-slate-200 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-colors group">
                                        <Heart size={24} strokeWidth={1.5} className="group-hover:fill-current" />
                                    </button>
                                    <ShareButton productName={product.name} />
                                </div>
                            </div>

                            {/* Trust Signals - Refined */}
                            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-100">
                                {[
                                    { icon: <ShieldCheck size={20} strokeWidth={1.5} />, label: "Certified" },
                                    { icon: <Truck size={20} strokeWidth={1.5} />, label: "Insured" },
                                    { icon: <RefreshCw size={20} strokeWidth={1.5} />, label: "Exchange" }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3 text-center">
                                        <div className="text-yellow-700">{item.icon}</div>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <Suspense fallback={<div className="h-96 bg-slate-50 animate-pulse" />}>
                    <Recommendations currentProduct={product} />
                </Suspense>

                {/* Experience Detail CTA */}
                <section className="bg-slate-950 py-32 text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
                        <span className="text-yellow-500 text-xs font-bold tracking-[0.4em] uppercase">The Showroom Experience</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold max-w-4xl mx-auto leading-tight">Your legacy deserves a private viewing.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Some masterpieces are best admired with your own eyes. Visit our Nakhas, Jaunpur showroom for a private consultation with our experts.
                        </p>
                        <Button variant="premium" className="h-16 px-12 rounded-full text-sm font-bold tracking-[0.2em] uppercase mt-8" asChild>
                            <Link href="/contact">Book a Private Viewing</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
