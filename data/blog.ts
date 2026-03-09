export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML string or Markdown
    coverImage: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'best-jewellery-showroom-in-jaunpur',
        title: 'Best Jewellery Showroom in Jaunpur – Why VCJ Stands Out',
        excerpt: 'Discover why Vimal Chhaganlal Jewellers has been the most trusted name in Jaunpur for over 65 years.',
        content: `
      <p>Finding the right jeweller is not just about buying gold; it's about trust, purity, and legacy. In the heart of Jaunpur, Vimal Chhaganlal Jewellers has stood as a beacon of trust since 1960.</p>
      <h2>A Legacy of Trust</h2>
      <p>For four generations, our family has served the community of Jaunpur/Nakhas with unwavering commitment to quality. We don't just sell jewellery; we build relationships that last generations.</p>
      <h2>Certified Purity</h2>
      <p>We were among the first in Jaunpur to introduce Hallmarked Gold transparency. Every piece you buy comes with a guarantee of purity, verifiable on our advanced Karatometer.</p>
      <h2>Conclusion</h2>
      <p>Visit our showroom at Sadbhavna Bridge Mod today and experience the difference.</p>
    `,
        coverImage: '/images/blog/store-front.jpg',
        date: '2025-01-15',
        author: 'VCJ Team',
        category: 'Local Guide',
        tags: ['Jaunpur', 'Trust', 'Gold']
    },
    {
        slug: 'festival-offers-2025',
        title: 'Festival Offers 2025 at VCJ Jewellers',
        excerpt: 'Celebrate this wedding season with exclusive offers on Diamond and Polki jewellery.',
        content: `
      <p>The wedding season is around the corner, and VCJ Jewellers is ready to make your special days even brighter.</p>
      <h2>This Season's Highlights</h2>
      <ul>
        <li>Up to 20% off on Diamond Jewellery making charges</li>
        <li>Special Rate Booking options for upcoming weddings</li>
        <li>New lightweight collection for daily wear</li>
      </ul>
      <p>Don't miss out on our "Swarn Nidhi" EMI plan to plan your purchase smartly.</p>
    `,
        coverImage: '/images/blog/festival.jpg',
        date: '2025-01-10',
        author: 'VCJ Team',
        category: 'Offers',
        tags: ['Offers', 'Wedding', 'Diamond']
    },
    {
        slug: 'understanding-gold-purity',
        title: 'Understanding Gold Purity - A Buyer\'s Guide',
        excerpt: 'What is the difference between 22K and 24K gold? Learn everything about gold purity before your next purchase.',
        content: `
      <p>Gold purchase is an investment. It is crucial to understand what you are paying for.</p>
      <h3>24K Gold (99.9%)</h3>
      <p>This is the purest form of gold. It is soft and usually not suitable for intricate jewellery, but perfect for coins and bars.</p>
      <h3>22K Gold (91.6%)</h3>
      <p>The standard for jewellery making. It contains 91.6% gold and other metals like copper/silver for strength. This is what we call "Hallmark 916".</p>
      <h3>18K Gold (75%)</h3>
      <p>Ideal for diamond and stone-studded jewellery as it holds the stones securely.</p>
    `,
        coverImage: '/images/blog/gold-bars.jpg',
        date: '2025-01-05',
        author: 'VCJ Team',
        category: 'Education',
        tags: ['Education', 'Gold Purity', 'Tips']
    }
];
