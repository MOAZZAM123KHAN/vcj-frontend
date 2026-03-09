'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
    productName: string;
}

export function ShareButton({ productName }: ShareButtonProps) {
    const handleShare = async () => {
        const shareData = {
            title: `${productName} | VCJ Jewellers`,
            text: `Check out this exquisite piece from VCJ Jewellers: ${productName}`,
            url: typeof window !== 'undefined' ? window.location.href : '',
        };

        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    console.error("Error sharing:", err);
                }
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            className="w-16 h-16 flex items-center justify-center border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
            title="Share Product"
        >
            <Share2 size={24} strokeWidth={1.5} />
        </button>
    );
}
