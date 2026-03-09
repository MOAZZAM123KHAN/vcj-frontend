'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';

export function ProductSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setQuery(searchParams.get('q') || '');
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            router.push(`/products?q=${encodeURIComponent(trimmedQuery)}`);
        } else {
            router.push('/products');
        }
    };

    const clearSearch = () => {
        setQuery('');
        router.push('/products');
    };

    return (
        <form
            onSubmit={handleSearch}
            className="relative flex items-center w-full group"
        >
            <div className="relative w-full">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Discover masterpieces..."
                    className="w-full h-11 pl-6 pr-12 border border-slate-200 bg-white rounded-full transition-all focus:outline-none focus:border-yellow-700/50 focus:ring-1 focus:ring-yellow-700/20 placeholder:text-slate-400 font-light text-[13px] tracking-wide shadow-sm hover:border-slate-300"
                />
                <button
                    type="submit"
                    className={`absolute right-1 top-1 h-9 w-9 flex items-center justify-center rounded-full transition-colors ${isFocused ? 'bg-yellow-700 text-white' : 'text-slate-400 group-hover:text-slate-600'}`}
                >
                    <Search className="w-4 h-4" strokeWidth={2} />
                </button>

                {query && (
                    <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-12 top-1/2 -translate-y-1/2 text-slate-300 hover:text-rose-500 p-1 transition-colors"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                )}
            </div>

        </form>
    );
}
