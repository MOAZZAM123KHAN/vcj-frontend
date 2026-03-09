'use client';

import { useRouter } from 'next/navigation';
import { IProduct } from '@/interfaces';

interface FilterProps {
    products: IProduct[];
    currentCategory?: string;
    currentMaterial?: string;
}

export function MobileFilters({ products, currentCategory, currentMaterial }: FilterProps) {
    const router = useRouter();
    const categories = [...new Set((products || []).map((p) => p.category))];
    const materials = ['Gold', 'Diamond', 'Silver', 'Platinum'];

    const handleFilterChange = (type: 'category' | 'material', value: string) => {
        const params = new URLSearchParams(window.location.search);
        if (value === 'all') {
            params.delete(type);
        } else {
            params.set(type, value.toLowerCase());
        }
        router.push(`/products?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="lg:hidden flex flex-wrap gap-4 mb-8 w-full">
            <div className="w-full flex justify-between items-center bg-white p-4 shadow-sm border border-slate-100">
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Filters</span>
                <div className="flex gap-4">
                    <select
                        className="text-[10px] font-bold tracking-widest uppercase border-none bg-slate-50 p-2 cursor-pointer outline-none focus:ring-1 focus:ring-yellow-600"
                        onChange={(e) => handleFilterChange('material', e.target.value)}
                        value={currentMaterial || 'all'}
                    >
                        <option value="all">All Materials</option>
                        {materials.map(m => (
                            <option key={m} value={m.toLowerCase()}>{m}</option>
                        ))}
                    </select>
                    <select
                        className="text-[10px] font-bold tracking-widest uppercase border-none bg-slate-50 p-2 cursor-pointer outline-none focus:ring-1 focus:ring-yellow-600"
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        value={currentCategory || 'all'}
                    >
                        <option value="all">All Collections</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export function SortDropdown({ currentSort = 'curation' }: { currentSort?: string }) {
    const router = useRouter();

    const handleSortChange = (value: string) => {
        const params = new URLSearchParams(window.location.search);
        if (value === 'curation') {
            params.delete('sort');
        } else {
            params.set('sort', value);
        }
        router.push(`/products?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Sort By</span>
            <select
                className="text-[10px] font-bold tracking-widest uppercase border-none bg-slate-50 p-3 rounded-none focus:ring-1 focus:ring-yellow-600 cursor-pointer outline-none"
                value={currentSort}
                onChange={(e) => handleSortChange(e.target.value)}
            >
                <option value="curation">Curation Choice</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
            </select>
        </div>
    );
}
