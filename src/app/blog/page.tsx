import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Post = {
    title: string;
    slug: string;
    excerpt: string;
    date: string; // ISO
    readingMinutes: number;
    tags: string[];
};

const posts: Post[] = [
    {
        title: "The Ultimate Guide to AI Development Tools",
        slug: "ultimate-guide-ai-development-tools",
        excerpt:
            "A practical, up-to-date guide to AI development tools, AI-powered IDEs, GitHub Copilot vs. Tabnine, and the best AI tools for automating coding tasks.",
        date: "2025-10-12",
        readingMinutes: 10,
        tags: ["AI", "Dev Tools", "Guide"],
    },
];

export default function BlogIndexPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <header className="mb-10">
                    <p className="text-sm text-gray-500">Articles & Guides</p>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-2">
                        Blog
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
                        Deep dives on modern engineering, AI productivity, and developer workflows.
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
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString(undefined, {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                    })}
                                </time>
                                <span>•</span>
                                <span>{post.readingMinutes} min read</span>
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
                                {post.excerpt}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
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
