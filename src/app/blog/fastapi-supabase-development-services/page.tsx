import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { posts } from "@/data/posts";

const post = posts.find((entry) => entry.slug === 'fastapi-supabase-development-services')!;

export const metadata: Metadata = {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
        title: post.ogTitle,
        description: post.description,
        type: 'article',
        url: `https://mwadev.me/blog/${post.slug}`,
        images: [
            {
                url: `/og?title=${encodeURIComponent(post.ogTitle ?? post.title)}&subtitle=${encodeURIComponent(post.ogSubtitle ?? 'API architecture • PostgreSQL • SaaS systems')}`,
                width: 1200,
                height: 630,
                alt: post.title,
            },
        ],
    },
};

export default function Page() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        author: {
            '@type': 'Person',
            name: 'Muhammed Waqar Ahmed',
            url: 'https://mwadev.me',
        },
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt ?? post.publishedAt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://mwadev.me/blog/${post.slug}`,
        },
    };

    return (
        <>
            <Script id="article-schema-fastapi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\u003c') }} />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Header />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="space-y-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Blog • Updated Apr 2026</p>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">FastAPI and Supabase Development: What to Hire For</h1>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            FastAPI and Supabase are a strong combination for SaaS products, internal tools, and AI apps that need a reliable backend without unnecessary complexity.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            FastAPI is ideal when your project needs clean API design, async performance, or integrations. Supabase works well when you want PostgreSQL, auth, storage, and row-level security in one stack.
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">When to choose this stack</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>You need a backend for a Next.js frontend.</li>
                            <li>You want secure user roles and database access control.</li>
                            <li>You need a path to scale from MVP to production.</li>
                            <li>You want an architecture that supports AI workflows or automation.</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What to ask before hiring</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Ask whether the developer can explain row-level security, API structure, database migrations, and how the backend supports actual business goals. That is the difference between a demo and a real product.
                        </p>
                        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Relevant services</h2>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link href="/services/fastapi-development" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">FastAPI service</Link>
                                <Link href="/services/supabase-development" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Supabase service</Link>
                                <Link href="/#contact" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact me</Link>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}