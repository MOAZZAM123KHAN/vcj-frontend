'use client';

import { useState } from 'react';
import { IProduct } from '@/interfaces';
import { ProductCard } from './ProductCard';
import { FILTERS } from '@/data/filters';
import { FilterSelect } from './FilterSelect';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ProductListContentProps {
    initialProducts: IProduct[];
}

export function ProductListContent({ initialProducts }: ProductListContentProps) {
    // STEP 3 — Add Filter State
    const [filters, setFilters] = useState({
        category: "all",
        material: "all",
        gender: "all",
        occasion: "all"
    });

    const clearFilters = () => {
        setFilters({
            category: "all",
            material: "all",
            gender: "all",
            occasion: "all"
        });
    };

    const isFiltering = Object.values(filters).some(v => v !== "all");

    // STEP 4 — Filtering Logic
    const filteredProducts = initialProducts.filter(product => {
        if (filters.category !== "all" && product.category.toLowerCase() !== filters.category.toLowerCase())
            return false;

        if (filters.material !== "all" && product.material?.toLowerCase() !== filters.material.toLowerCase())
            return false;

        if (filters.gender !== "all" && product.gender?.toLowerCase() !== filters.gender.toLowerCase())
            return false;

        if (filters.occasion !== "all" && product.occasion?.toLowerCase() !== filters.occasion.toLowerCase())
            return false;

        return true;
    });

    return (
        <div className="space-y-12">
            {/* STEP 5 — Render Filters UI */}
            <div className="bg-white border border-slate-100 p-8 shadow-sm">
                <div className="flex flex-wrap items-end gap-6">
                    <FilterSelect
                        label="Category"
                        options={FILTERS.category}
                        value={filters.category}
                        onChange={(val) => setFilters(prev => ({ ...prev, category: val }))}
                    />
                    <FilterSelect
                        label="Material"
                        options={FILTERS.material}
                        value={filters.material}
                        onChange={(val) => setFilters(prev => ({ ...prev, material: val }))}
                    />
                    <FilterSelect
                        label="Gender"
                        options={FILTERS.gender}
                        value={filters.gender}
                        onChange={(val) => setFilters(prev => ({ ...prev, gender: val }))}
                    />
                    <FilterSelect
                        label="Occasion"
                        options={FILTERS.occasion}
                        value={filters.occasion}
                        onChange={(val) => setFilters(prev => ({ ...prev, occasion: val }))}
                    />

                    {/* STEP 7 — Clear Filters Button */}
                    {isFiltering && (
                        <Button
                            variant="ghost"
                            onClick={clearFilters}
                            className="h-14 px-6 text-[10px] font-extrabold tracking-[0.2em] uppercase text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-none border border-transparent hover:border-rose-100 transition-all gap-2"
                        >
                            <X size={14} strokeWidth={2.5} />
                            Clear Filters
                        </Button>
                    )}
                </div>
            </div>

            {/* Inventory Count Bar */}
            <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                <div className="space-y-1">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Inventory Presence</p>
                    <p className="font-serif text-xl md:text-2xl text-slate-900">
                        Revealing <span className="text-yellow-700">{filteredProducts.length}</span> Masterpieces
                    </p>
                </div>
            </div>

            {/* STEP 6 — Product Rendering */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border border-slate-100 bg-slate-50/50 flex flex-col items-center px-4">
                    <div className="h-px w-12 bg-yellow-600 mb-6" />
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">A Unique Discovery</h3>
                    <p className="text-slate-500 mb-10 max-w-sm mx-auto font-light">We currently don&apos;t have pieces matching your exact criteria. Allow us to curate something special for you.</p>
                    <Button
                        variant="premium"
                        className="rounded-none h-14 px-10 text-[11px] font-bold tracking-widest uppercase"
                        onClick={clearFilters}
                    >
                        Reset Filters
                    </Button>
                </div>
            )}
        </div>
    );
}
