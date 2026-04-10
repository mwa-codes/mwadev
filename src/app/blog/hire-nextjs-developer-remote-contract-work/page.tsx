import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { posts } from "@/data/posts";

const post = posts.find((entry) => entry.slug === 'hire-nextjs-developer-remote-contract-work')!;

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
                url: `/og?title=${encodeURIComponent(post.ogTitle ?? post.title)}&subtitle=${encodeURIComponent(post.ogSubtitle ?? 'Remote contract work • SEO • Production delivery')}`,
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
            <Script id="article-schema-nextjs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\u003c') }} />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Header />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="space-y-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Blog • Updated Apr 2026</p>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hire a Next.js Developer for Remote Contract Work</h1>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            If you are searching for a Next.js developer, the real question is not just who knows the framework. The question is who can ship a fast, SEO-friendly product that helps you get leads, buyers, or users.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Good candidates should understand App Router, metadata, Core Web Vitals, image optimization, and how to turn a homepage into a conversion page. If your goal is remote contract work or long-term collaboration, you want someone who can build both the UI and the business case behind it.
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What to look for</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Can they explain how they improve speed, SEO, and conversion together?</li>
                            <li>Do they build real case studies and not just pretty demo pages?</li>
                            <li>Can they connect service pages to proof pages and contact actions?</li>
                            <li>Do they understand analytics and lead tracking?</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why this matters for leads</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            A generic portfolio often gets traffic but not inquiries. A focused Next.js service page plus case-study pages gives search engines a clearer topic map and gives buyers a clearer reason to contact you.
                        </p>
                        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Relevant services</h2>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link href="/services/nextjs-development" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">Next.js service</Link>
                                <Link href="/services/ai-development" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">AI service</Link>
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