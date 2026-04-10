"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import { posts } from "@/data/posts";

const BlogSection = () => {
    const featuredPosts = posts.slice(0, 1);
    const recentPosts = posts.slice(1);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    const formatReadingTime = (title: string) => `${Math.max(5, Math.ceil(title.length / 14))} min read`;

    return (
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        SEO Articles & Practical Guides
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Focused writing on AI development tools, full-stack delivery, and topics that attract real client and hiring-manager search intent.
                    </motion.p>
                </motion.div>

                {/* Featured Posts */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-16"
                >
                    <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                        <BookOpen className="mr-3 text-blue-600" size={24} />
                        Featured Article
                    </motion.h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredPosts.map((post) => (
                            <motion.article
                                key={post.slug}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                                    <span className="text-white text-sm font-medium">Featured Post</span>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <Calendar size={16} className="mr-2" />
                                        {formatDate(post.publishedAt)}
                                        <Clock size={16} className="ml-4 mr-2" />
                                        {formatReadingTime(post.title)}
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h4>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {post.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['AI', 'Next.js', 'SEO'].map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                                            >
                                                <Tag size={12} className="mr-1" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <motion.a
                                        href={`/blog/${post.slug}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        Read More
                                        <ArrowRight size={16} className="ml-2" />
                                    </motion.a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>

                {/* All Posts */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        More Reading
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {recentPosts.length > 0 ? recentPosts.map((post) => (
                            <motion.article
                                key={post.slug}
                                variants={itemVariants}
                                whileHover={{ y: -3 }}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                                            Guide
                                        </span>
                                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                            <Clock size={12} className="mr-1" />
                                            {formatReadingTime(post.title)}
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h4>

                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {formatDate(post.publishedAt)}
                                        </span>
                                        <motion.a
                                            href={`/blog/${post.slug}`}
                                            whileHover={{ scale: 1.05 }}
                                            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                        >
                                            Read →
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.article>
                        )) : (
                            <div className="md:col-span-2 xl:col-span-3 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-gray-600 dark:text-gray-300">
                                More SEO-focused guides are coming soon.
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Follow my development journey and get notified when I publish new posts about learning, building, and growing as a developer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
