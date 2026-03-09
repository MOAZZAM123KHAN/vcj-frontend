import { getProducts } from "@/services/product.service";
import { ProductSection } from "./ProductSection";
import { SkeletonSection } from "@/components/products/SkeletonSection";
import { Suspense } from "react";

interface AsyncProductSectionProps {
    title: string;
    subtitle?: string;
    badge?: string;
    filter: (p: any) => boolean;
    viewAllLink: string;
    className?: string;
    limit?: number;
    // If set, only products with ALL these tags will appear
    tags?: string[];
    // If true, will sort by priority then by discount
    sortFeatured?: boolean;
}

async function ProductDataFetcher({
    title,
    subtitle,
    badge,
    filter,
    viewAllLink,
    className,
    limit = 4,
    tags = [],
    sortFeatured = false
}: AsyncProductSectionProps) {
    try {
        const response = await getProducts();
        const products = JSON.parse(JSON.stringify(response.data || []));
        const now = new Date();

        const filtered = products
            .filter((p: any) => {
                // Base filter passed via props
                if (!filter(p)) return false;

                // Stock check
                if (p.stock === 0) return false;

                // Expiry date check
                if (p.expiryDate && new Date(p.expiryDate) < now) return false;

                // Tag check (if tags are specified)
                if (tags.length > 0) {
                    const productTags = p.tags || [];
                    if (!tags.every(t => productTags.includes(t))) return false;
                }

                return true;
            })
            .sort((a: any, b: any) => {
                if (sortFeatured) {
                    if ((b.priority || 0) !== (a.priority || 0)) {
                        return (b.priority || 0) - (a.priority || 0);
                    }
                    return (b.offer || 0) - (a.offer || 0);
                }
                // Default sort (by recently added if available, or just keep order)
                return (new Date(b.createdAt as string).getTime() || 0) - (new Date(a.createdAt as string).getTime() || 0);
            });

        return (
            <ProductSection
                title={title}
                subtitle={subtitle}
                badge={badge}
                products={filtered.slice(0, limit)}
                viewAllLink={viewAllLink}
                className={className}
            />
        );
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return null;
    }
}

export function AsyncProductSection(props: AsyncProductSectionProps) {
    return (
        <Suspense fallback={<SkeletonSection title={props.title} subtitle={props.subtitle} badge={props.badge} className={props.className} />}>
            <ProductDataFetcher {...props} />
        </Suspense>
    );
}
