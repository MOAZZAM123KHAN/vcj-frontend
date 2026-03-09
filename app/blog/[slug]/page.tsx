import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { getBlogBySlug, getBlogs } from '@/services/blog.service';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const { data: post } = await getBlogBySlug(slug);

        if (!post) {
            return { title: 'Post Not Found' };
        }

        return {
            title: `${post.title} | VCJ Blog`,
            description: post.excerpt,
            openGraph: {
                type: 'article',
                title: post.title,
                description: post.excerpt,
                publishedTime: post.createdAt,
                authors: [post.author || 'Admin'],
            }
        };
    } catch (e) {
        return { title: 'Post Not Found' };
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post;
    try {
        const response = await getBlogBySlug(slug);
        post = response.data;
    } catch (e) {
        notFound();
    }

    if (!post) {
        notFound();
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": "https://vcjjewellers.com/placeholder-blog.jpg", // Mock
        "datePublished": post.createdAt,
        "author": {
            "@type": "Person",
            "name": post.author || 'Admin'
        },
        "description": post.excerpt
    };

    return (
        <>
            <JsonLd data={articleSchema} />
            <Header />
            <main className="min-h-screen bg-white">
                <article className="max-w-3xl mx-auto px-4 py-16">
                    <header className="mb-8 text-center">
                        <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-4">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.createdAt).toLocaleDateString()}</span>
                            <span className="flex items-center gap-1"><User size={14} /> {post.author || 'Admin'}</span>
                            <span className="text-yellow-600 font-bold uppercase tracking-wider">{post.category || 'Jewellery'}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>
                    </header>

                    <div className="aspect-video bg-slate-100 rounded-2xl mb-12 flex items-center justify-center text-slate-400">
                        <span className="font-serif italic font-xl">Cover Image</span>
                    </div>

                    <div
                        className="prose prose-lg prose-slate prose-headings:font-serif prose-a:text-yellow-600 mx-auto"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-slate-100">
                            <div className="flex items-center gap-2">
                                <Tag size={16} className="text-slate-400" />
                                <span className="text-sm font-bold text-slate-900">Tags:</span>
                                <div className="flex gap-2">
                                    {(post.tags || []).map((tag: string) => (
                                        <span key={tag} className="text-sm bg-slate-100 px-2 py-1 rounded text-slate-600">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <Link href="/blog" className="text-yellow-600 font-medium hover:underline">
                            &larr; Back to all articles
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
