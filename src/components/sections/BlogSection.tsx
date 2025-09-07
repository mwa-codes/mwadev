"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";

const BlogSection = () => {
    const blogPosts = [
        {
            id: "getting-started-nextjs",
            title: "Getting Started with Next.js 15: A Student's Journey",
            excerpt: "My experience learning Next.js 15 and the new features that make modern web development more accessible for beginners.",
            date: "2024-01-15",
            readTime: "5 min read",
            tags: ["Next.js", "React", "Learning", "Web Development"],
            category: "Learning",
            slug: "getting-started-nextjs",
            featured: true
        },
        {
            id: "ai-pdf-chatbot-journey",
            title: "Building an AI PDF Chatbot: Lessons Learned",
            excerpt: "Deep dive into the challenges and solutions while building an intelligent PDF processing chatbot using OpenAI and vector embeddings.",
            date: "2024-01-10",
            readTime: "8 min read",
            tags: ["AI", "OpenAI", "Vector DB", "TypeScript"],
            category: "Projects",
            slug: "ai-pdf-chatbot-journey",
            featured: false
        },
        {
            id: "iot-home-automation",
            title: "IoT Home Automation with Arduino and React",
            excerpt: "How I built a smart home dashboard to control IoT devices using Arduino, MQTT, and a React frontend.",
            date: "2024-01-05",
            readTime: "6 min read",
            tags: ["IoT", "Arduino", "React", "MQTT"],
            category: "Experiments",
            slug: "iot-home-automation",
            featured: false
        },
        {
            id: "student-to-developer-mindset",
            title: "The Student to Developer Mindset Shift",
            excerpt: "Reflections on transitioning from academic learning to practical development and the mental frameworks that help.",
            date: "2024-01-01",
            readTime: "4 min read",
            tags: ["Career", "Learning", "Mindset", "Growth"],
            category: "Thoughts",
            slug: "student-to-developer-mindset",
            featured: true
        }
    ];

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
                        Learning Blog & Notes
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Documenting my journey from student to professional developer, sharing lessons learned and experiments along the way
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
                        Featured Posts
                    </motion.h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {blogPosts.filter(post => post.featured).map((post) => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Featured Badge */}
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                                    <span className="text-white text-sm font-medium">Featured Post</span>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <Calendar size={16} className="mr-2" />
                                        {formatDate(post.date)}
                                        <Clock size={16} className="ml-4 mr-2" />
                                        {post.readTime}
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h4>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 3).map((tag) => (
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
                        Recent Posts
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {blogPosts.filter(post => !post.featured).map((post) => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                whileHover={{ y: -3 }}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                            <Clock size={12} className="mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h4>

                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {formatDate(post.date)}
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
                        ))}
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
