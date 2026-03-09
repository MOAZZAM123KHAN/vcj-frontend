interface SkeletonSectionProps {
    title: string;
    subtitle?: string;
    badge?: string;
    className?: string;
}

export function SkeletonSection({ title, subtitle, badge, className = "" }: SkeletonSectionProps) {
    return (
        <section className={`py-16 md:py-24 ${className} animate-pulse`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16 space-y-4 opacity-50">
                    <div className="h-4 w-32 bg-slate-200 rounded-full" />
                    <div className="h-10 md:h-16 w-full max-w-2xl bg-slate-200 rounded-lg mx-auto" />
                    <div className="h-4 w-full max-w-lg bg-slate-100 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-4">
                            <div className="aspect-square bg-slate-100 border border-slate-200 rounded-lg" />
                            <div className="h-4 w-3/4 bg-slate-100 rounded-full mx-auto" />
                            <div className="h-6 w-1/2 bg-slate-200 rounded-full mx-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
