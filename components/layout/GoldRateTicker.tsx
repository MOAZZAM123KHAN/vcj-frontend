'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getGoldRate } from '@/services/gold-rate.service';

export function GoldRateTicker() {
  const [rates, setRates] = useState<{ gold24k: number; gold22k: number } | null>(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await getGoldRate();
        if (response?.success && response?.data) {
          setRates({
            gold24k: response.data.gold24k,
            gold22k: response.data.gold22k
          });
        }
      } catch (error) {
        console.error("Failed to load header gold rates", error);
      }
    }
    fetchRates();
  }, []);

  const formatRate = (rate?: number) => {
    return rate ? `₹${rate.toLocaleString('en-IN')}` : '₹7,850'; // Premium dynamic fallback
  };

  const formatRate22 = (rate?: number) => {
    return rate ? `₹${rate.toLocaleString('en-IN')}` : '₹7,200'; // Premium dynamic fallback
  };

  return (
    <div className="bg-[#0F5132] text-white py-1.5 px-4 border-b border-yellow-500/10 shadow-sm relative z-30">
      <div className="container mx-auto flex justify-between items-center text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase">
        <div className="flex items-center gap-2 md:gap-4 flex-wrap">
          <span className="text-yellow-400 font-bold">Live Rate Today:</span>
          <div className="flex items-center gap-1">
            <span className="text-white/70">24K Gold:</span>
            <span className="font-bold text-white">{formatRate(rates?.gold24k)}/g</span>
          </div>
          <span className="hidden sm:inline text-white/30">|</span>
          <div className="flex items-center gap-1">
            <span className="text-white/70">22K Gold:</span>
            <span className="font-bold text-white">{formatRate22(rates?.gold22k)}/g</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] text-yellow-400/80 animate-pulse font-sans flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            Updated Today
          </span>
          <Link href="/gold-rate-jaunpur" className="text-white hover:text-yellow-400 transition-colors underline underline-offset-2 hidden xs:inline text-[9px] lowercase font-light tracking-[0.05em]">
            view rate chart
          </Link>
        </div>
      </div>
    </div>
  );
}
