"use client";

import { motion } from "framer-motion";

const JourneySection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
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

    return (
        <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4">
                        About Me
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-3xl mx-auto px-4 sm:px-0"
                >
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-7 sm:leading-relaxed text-center">
                        I&apos;m Muhammed Waqar — a full-stack and AI developer based in Pakistan, building production-ready web products for remote clients. I specialize in Next.js, FastAPI, and Supabase, and I use AI-assisted workflows (Claude, Cursor, GitHub Copilot) to ship faster without cutting corners. I&apos;ve built live products including an immigration case management platform, an AI PDF chatbot, and multiple SaaS tools — all deployed and in active use.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneySection;
