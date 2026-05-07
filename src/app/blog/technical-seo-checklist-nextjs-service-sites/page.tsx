import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { posts } from "@/data/posts";

const post = posts.find((entry) => entry.slug === "technical-seo-checklist-nextjs-service-sites")!;

export const metadata: Metadata = {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
        title: post.ogTitle,
        description: post.description,
        type: "article",
        url: `https://mwadev.me/blog/${post.slug}`,
        images: [
            {
                url: `/og?title=${encodeURIComponent(post.ogTitle ?? post.title)}&subtitle=${encodeURIComponent(post.ogSubtitle ?? "Indexing • Core Web Vitals • Internal links")}`,
                width: 1200,
                height: 630,
                alt: post.title,
            },
        ],
    },
};

export default function Page() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        author: {
            "@type": "Person",
            name: "Muhammed Waqar Ahmed",
            url: "https://mwadev.me",
        },
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt ?? post.publishedAt,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://mwadev.me/blog/${post.slug}`,
        },
    };

    return (
        <>
            <Script id="article-schema-seo-checklist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Header />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <article className="space-y-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Blog • Updated May 2026</p>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Technical SEO Checklist for Next.js Service Websites</h1>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            Service websites lose rankings in small, avoidable ways: duplicate titles, weak internal links, and pages that are technically valid but hard to understand for search engines.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            If your site uses Next.js, you already have a solid foundation. This checklist focuses on the details that usually make the difference between &quot;indexed&quot; and &quot;visible.&quot;
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1) Give every important page a clear intent</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Your homepage is not enough. Each service page should target one search intent with a direct title, a helpful introduction, and proof that the service is real (projects, outcomes, testimonials, or process details).
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2) Fix metadata before writing more content</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Unique title and description for each page.</li>
                            <li>Correct canonical URL, especially if similar pages exist.</li>
                            <li>Open Graph image that matches the page topic.</li>
                            <li>Consistent H1 and page title alignment.</li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Metadata does not guarantee rankings, but poor metadata absolutely causes missed opportunities.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3) Build a practical internal linking system</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think in clusters: service pages link to related project pages, and blog articles link back to relevant services. This helps crawlers understand topical relevance and helps users move toward contact actions.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4) Watch performance metrics that matter</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Core Web Vitals still influence experience and crawl efficiency. Prioritize stable layout, fast first render, optimized images, and minimal script bloat on landing pages.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5) Keep content useful, not stuffed</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Search systems reward clarity and usefulness over keyword repetition. Write like a specialist talking to a real client: explain trade-offs, timelines, expected outcomes, and what happens after launch.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            If someone can read your page and understand whether you are the right fit, your content is doing its job.
                        </p>

                        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Want technical SEO improvements on your site?</h2>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                I build and optimize Next.js websites for speed, search visibility, and conversion-focused structure.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link href="/services/nextjs-development" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">Next.js service</Link>
                                <Link href="/blog" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read more articles</Link>
                                <Link href="/#contact" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact me</Link>
                            </div>
                        </div>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    );
}
