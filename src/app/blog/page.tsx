import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
    title: "Blog | AI Development Tools and Full-Stack Engineering",
    description: "Practical guides on AI development tools, Next.js, FastAPI, Supabase, and developer workflows.",
    alternates: { canonical: "/blog" },
};

const formatReadingTime = (title: string) => `${Math.max(5, Math.ceil(title.length / 14))} min read`;

export default function BlogIndexPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <header className="mb-10">
                    <p className="text-sm text-gray-500">Articles & Guides</p>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-2">
                        Practical Engineering Notes and Build Guides
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
                        Clear, experience-based writeups on building real products with Next.js, FastAPI, AI features, and technical SEO.
                    </p>
                </header>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <li
                            key={post.slug}
                            className="relative group rounded-2xl p-6 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 overflow-hidden"
                        >
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl" />
                            </div>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-3">
                                <time dateTime={post.publishedAt}>
                                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                    })}
                                </time>
                                <span>•</span>
                                <span>{formatReadingTime(post.title)}</span>
                            </div>
                            <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="hover:underline decoration-blue-500/60 underline-offset-4"
                                >
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                {post.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['AI', 'Next.js', 'FastAPI'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-5">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
}
