import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogs } from '@/services/blog.service';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jewellery Tips & Trends Blog | VCJ Jewellers Jaunpur',
    description: 'Read the latest trends in jewellery, care tips, and exclusive offers from VCJ Jewellers Jaunpur.',
};

export default async function BlogListingPage() {
    const { data: blogPosts } = await getBlogs();

    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-50">
                <div className="bg-white border-b border-slate-100 py-16 text-center">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">The VCJ Journal</h1>
                    <p className="text-slate-500">Insights, Trends, and Stories from Jaunpur&apos;s Jewellery World.</p>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(blogPosts || []).map((post) => (
                            <article key={post._id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full">
                                <div className="h-48 bg-slate-200 relative flex items-center justify-center text-slate-400">
                                    <span className="font-serif italic">Cover Image</span>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex gap-2 mb-4">
                                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{post.category || 'Jewellery'}</Badge>
                                    </div>
                                    <h2 className="text-xl font-serif font-bold mb-3 line-clamp-2">
                                        <Link href={`/blog/${post.slug || post.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-yellow-600 transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.createdAt).toLocaleDateString()}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {post.author || 'Admin'}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
