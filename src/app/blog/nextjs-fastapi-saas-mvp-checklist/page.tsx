import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { posts } from "@/data/posts";

const post = posts.find((entry) => entry.slug === "nextjs-fastapi-saas-mvp-checklist")!;

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
                url: `/og?title=${encodeURIComponent(post.ogTitle ?? post.title)}&subtitle=${encodeURIComponent(post.ogSubtitle ?? "MVP scope • Backend choices • Launch mistakes")}`,
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
    const articleSchemaJson = JSON.stringify(articleSchema).replace(/</g, "\\u003c");

    return (
        <>
            <Script id="article-schema-mvp-checklist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchemaJson }} />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Header />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <article className="space-y-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Blog • Updated May 2026</p>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Next.js + FastAPI SaaS MVP Checklist (Before You Build)</h1>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            Most SaaS MVPs fail for one reason: teams start coding before agreeing on what &quot;done&quot; means. The stack is rarely the problem. Scope is.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            If you are building with Next.js on the frontend and FastAPI on the backend, you already have a strong technical base. The real win comes from making a few early product decisions that reduce rework in weeks 2 to 8.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1) Define the core user journey in one sentence</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Try this format: &quot;A [user type] can [important action] in under [time], without [major pain].&quot; Keep it specific. If the sentence is vague, your roadmap will be vague too.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Example: &quot;A customer support lead can summarize 50 tickets in under 3 minutes, without manually copying data into spreadsheets.&quot;
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2) Keep version one to 3 outcomes only</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>One way to create data.</li>
                            <li>One way to view and validate data.</li>
                            <li>One way to take action from that data.</li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Everything else should be parked in &quot;later&quot; by default, including advanced roles, dashboard polish, and deep notification settings.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3) Choose simple architecture, not clever architecture</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            For most MVPs, a straightforward setup works best: Next.js App Router, FastAPI REST endpoints, PostgreSQL, and token-based auth. This gives you predictable deployment and room to scale without adding complexity too early.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            You do not need microservices on day one. You need observability, reliable migrations, and clear endpoint contracts between frontend and backend.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4) Measure behavior from day one</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Analytics should answer one question: are users reaching the core outcome? Track activation events, drop-off points, and time-to-value. If your dashboard only tracks page views, it will not help product decisions.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5) Launch with a trust checklist</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Fast load time on mobile and average laptops.</li>
                            <li>Friendly empty states and actionable error messages.</li>
                            <li>Basic logging and alerting for backend failures.</li>
                            <li>Clear billing, data, and support expectations.</li>
                        </ul>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Early users forgive missing features. They do not forgive confusing behavior or broken trust.
                        </p>

                        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Need help planning or building your MVP?</h2>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                I help founders and teams ship practical SaaS products using Next.js, FastAPI, and production-focused architecture.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link href="/services/nextjs-development" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">Next.js service</Link>
                                <Link href="/services/fastapi-development" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">FastAPI service</Link>
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
