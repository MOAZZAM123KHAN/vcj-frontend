import { MetadataRoute } from 'next';
import { getProducts } from '@/services/product.service';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let products: any[] = [];
  try {
    const response = await getProducts();
    products = response.data || [];
  } catch (error) {
    console.error("Failed to fetch products for sitemap:", error);
  }

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `https://vcjjewellers.com/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    { url: 'https://vcjjewellers.com/', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://vcjjewellers.com/gold-rate-jaunpur', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://vcjjewellers.com/products', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://vcjjewellers.com/products?category=gold', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://vcjjewellers.com/products?category=bridal', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://vcjjewellers.com/products?category=diamond', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://vcjjewellers.com/products?category=silver', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://vcjjewellers.com/offers/rate-booking', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://vcjjewellers.com/offers/emi-scheme', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://vcjjewellers.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://vcjjewellers.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://vcjjewellers.com/gallery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  return [...staticEntries, ...productEntries];
}
