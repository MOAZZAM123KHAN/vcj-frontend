import { getProducts } from '@/services/product.service';
import { IProduct } from '@/interfaces';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductListContent } from '@/components/products/ProductListContent';

export const metadata = {
    title: 'Jewellery Collection | VCJ Jewellers',
    description: 'Browse our exclusive collection of Gold, Diamond, and Silver jewellery including necklaces, rings, bangles and more.',
};

export default async function ProductsPage() {
    let products: IProduct[] = [];
    try {
        const response = await getProducts();
        const rawData = response.data || [];
        products = JSON.parse(JSON.stringify(rawData));
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }

    return (
        <>
            <Header />
            <main className="bg-white min-h-screen pb-32">
                {/* Page Header — Cinematic & Minimal */}
                <div className="relative h-[45vh] min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-900/40 to-slate-900/60" />

                    <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <div className="h-px w-8 bg-yellow-500/50" />
                            <span className="text-yellow-500 text-xs font-bold tracking-[0.5em] uppercase">Private Collections</span>
                            <div className="h-px w-8 bg-yellow-500/50" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
                            Handcrafted <span className="italic text-yellow-500/90">Radiance</span>
                        </h1>
                        <p className="text-slate-100 max-w-2xl mx-auto text-lg md:text-xl font-light italic opacity-90 leading-relaxed drop-shadow-lg">
                            Where every piece tells a story of tradition, purity, and timeless elegance.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 -mt-16 relative z-20">
                    <ProductListContent initialProducts={products} />
                </div>
            </main>
            <Footer />
        </>
    );
}
