export interface Product {
    id: string;
    name: string;
    slug: string;
    category: 'Necklaces' | 'Rings' | 'Bangles' | 'Earrings' | 'Pendants' | 'Bracelets' | 'Chains' | 'Mangalsutra';
    material: 'Gold' | 'Diamond' | 'Silver' | 'Platinum' | 'Kundan' | 'Polki';
    purity?: string; // e.g., "22K", "18K", "925 Sterling"
    weight?: string;
    price?: number;
    discountPercentage?: number;
    description: string;
    images: string[];
    gender?: 'Women' | 'Men' | 'Unisex' | 'Kids';
    occasion?: 'Bridal' | 'Daily Wear' | 'Party' | 'Festival';
    inStock: boolean;
    featured?: boolean;
    isTrending?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Royal Kundan Bridal Set',
        slug: 'royal-kundan-bridal-set',
        category: 'Necklaces',
        material: 'Kundan',
        purity: '22K Gold Base',
        weight: '85g',
        description: 'Exquisite handcrafted Kundan bridal set featuring intricate Meenakari work. Perfect for weddings.',
        images: ['https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=2070&auto=format&fit=crop'],
        gender: 'Women',
        occasion: 'Bridal',
        inStock: true,
        featured: true,
        isTrending: true
    },
    {
        id: '2',
        name: 'Classic Diamond Solitaire Ring',
        slug: 'classic-diamond-solitaire-ring',
        category: 'Rings',
        material: 'Diamond',
        purity: '18K Gold / VVS1',
        weight: '3g',
        description: 'Timeless solitaire diamond ring set in 18K white gold. GIA certified diamond.',
        images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop'],
        gender: 'Women',
        occasion: 'Daily Wear',
        inStock: true,
        featured: true,
        discountPercentage: 10
    },
    {
        id: '3',
        name: 'Traditional Gold Jhumka',
        slug: 'traditional-gold-jhumka',
        category: 'Earrings',
        material: 'Gold',
        purity: '22K',
        weight: '15g',
        description: 'Heavy gold Jhumkas with traditional temple design. Hallmarked 916 gold.',
        images: ['https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=2163&auto=format&fit=crop'],
        gender: 'Women',
        occasion: 'Festival',
        inStock: true,
        featured: true,
        isTrending: true
    },
    {
        id: '4',
        name: 'Men\'s Platinum Band',
        slug: 'mens-platinum-band',
        category: 'Rings',
        material: 'Platinum',
        purity: '950 Platinum',
        weight: '8g',
        description: 'Sleek and modern platinum band for men. Durable and hypoallergenic.',
        images: ['https://images.unsplash.com/photo-1599643477877-537eb83abc2e?q=80&w=1974&auto=format&fit=crop'],
        gender: 'Men',
        occasion: 'Daily Wear',
        inStock: true,
        discountPercentage: 15
    },
    {
        id: '5',
        name: 'Antique Silver Anklets',
        slug: 'antique-silver-anklets',
        category: 'Chains',
        material: 'Silver',
        purity: '925 Sterling',
        weight: '40g',
        description: 'Oxidized silver anklets with traditional motifs.',
        images: ['https://images.unsplash.com/photo-1610419409848-bc3615f20626?q=80&w=2070&auto=format&fit=crop'],
        gender: 'Women',
        occasion: 'Daily Wear',
        inStock: true,
        isTrending: true
    },
    {
        id: '6',
        name: 'Polki Choker Necklace',
        slug: 'polki-choker-necklace',
        category: 'Necklaces',
        material: 'Polki',
        purity: '22K Gold',
        weight: '45g',
        description: 'Uncut diamond (Polki) choker necklace with emerald beads.',
        images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop'],
        gender: 'Women',
        occasion: 'Party',
        inStock: true,
        featured: true,
        discountPercentage: 5
    },
    {
        id: '7',
        name: 'Rose Gold Bracelet',
        slug: 'rose-gold-bracelet',
        category: 'Bracelets',
        material: 'Gold',
        purity: '18K Rose Gold',
        weight: '12g',
        description: 'Contemporary rose gold bracelet with minimalist design.',
        images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop'],
        gender: 'Women',
        occasion: 'Daily Wear',
        inStock: true,
        isTrending: true
    },
    {
        id: '8',
        name: 'Gold Mangalsutra',
        slug: 'gold-mangalsutra',
        category: 'Mangalsutra',
        material: 'Gold',
        purity: '22K',
        weight: '20g',
        description: 'Traditional black bead mangalsutra with diamond pendant.',
        images: ['https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?q=80&w=2070&auto=format&fit=crop'],
        gender: 'Women',
        occasion: 'Daily Wear',
        inStock: true,
        discountPercentage: 20
    }
];
