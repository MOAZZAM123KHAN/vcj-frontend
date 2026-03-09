import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-[100] flex flex-col items-center justify-center gap-4">
            <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-yellow-600 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-yellow-700 uppercase tracking-widest">VCJ</span>
                </div>
            </div>
            <p className="text-slate-500 text-xs font-bold tracking-[0.3em] uppercase animate-pulse">
                Crafting Excellence...
            </p>
        </div>
    );
}
