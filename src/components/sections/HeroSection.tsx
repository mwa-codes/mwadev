"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Code2 } from "lucide-react";

const HeroSection = () => {
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
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Profile Image Placeholder */}
                    <motion.div variants={itemVariants} className="flex justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                            <Code2 size={48} className="text-white" />
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                            I Build AI-Powered Web Apps — Fast
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto px-4">
                            Next.js, FastAPI, and Supabase developer who ships production-ready
                            products using AI-assisted workflows. Available for remote contract work.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center px-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                            Worldwide Remote Collaboration
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                            Typical Response: Within 24 Hours
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                            Contract and Full-Time Opportunities
                        </span>
                    </motion.div>

                    {/* Current Status */}
                    <motion.div variants={itemVariants} className="space-y-4 px-4">
                        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                            <span className="text-sm sm:text-base text-blue-800 dark:text-blue-300 font-medium text-center">
                                Open for new projects and remote roles
                            </span>
                        </div>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                            From API architecture to frontend delivery, I help teams launch faster with clean code, measurable performance, and dependable communication.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                        >
                            Discuss Your Project
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-center"
                        >
                            View Case Studies
                        </motion.a>
                        <motion.a
                            href="/resume.html"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-700 dark:text-blue-300 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-center"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="flex justify-center space-x-6">
                        {[
                            { icon: Github, href: "https://github.com/mwa-codes", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/mwaqarahmed/", label: "LinkedIn" },
                            { icon: MessageCircle, href: "https://wa.me/923016636557", label: "WhatsApp" },
                            { icon: Mail, href: "mailto:m.waqar.ahmed@gmail.com", label: "Email" },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                whileHover={{ y: -3 }}
                                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                aria-label={label}
                            >
                                <Icon size={24} className="text-gray-700 dark:text-gray-300" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom--1 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="flex flex-col items-center text-gray-400 dark:text-gray-600"
                        >
                            <span className="text-sm mb-2">Scroll to explore</span>
                            <ArrowDown size={20} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
