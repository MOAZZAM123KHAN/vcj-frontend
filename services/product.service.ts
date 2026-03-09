const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const getProducts = async () => {
    const res = await fetch(`${API_URL}/products`, {
        next: { revalidate: 60, tags: ['products'] }
    });
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
};

export const getProductById = async (id: string) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
        next: { revalidate: 60, tags: ['products', `product-${id}`] }
    });
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
};

export const getProductBySlug = async (slug: string) => {
    const res = await fetch(`${API_URL}/products/slug/${slug}`, {
        next: { revalidate: 60, tags: ['products', `product-${slug}`] }
    });
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
};
