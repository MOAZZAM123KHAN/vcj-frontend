export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    offer: number;
    category: string;
    boughtQuantity: number;
    imageUrls: string[];
    discountedPrice: number;
    createdAt: string;
    updatedAt: string;
    // UI helper fields (optional/calculated)
    slug?: string;
    material?: string;
    purity?: string;
    weight?: string;
    occasion?: string;
    gender?: string;
    isTrending?: boolean;
}

export interface IBlog {
    _id: string;
    title: string;
    excerpt?: string;
    content: string;
    slug?: string;
    category?: string;
    author?: string;
    tags?: string[];
    createdAt: string;
    updatedAt: string;
}

export interface ITestimonial {
    _id: string;
    customerName: string;
    rating: number;
    description: string;
    treatment: string;
    imageUrls?: string[];
    links?: string[];
    date?: string;
    createdAt: string;
    updatedAt: string;
}

export interface IReel {
    _id: string;
    title: string;
    reelUrl: string;
    thumbnailUrl: string;
    createdAt: string;
    updatedAt: string;
}
