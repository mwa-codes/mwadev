"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { name: "Home", href: "/" },
            { name: "Projects", href: "/#projects" },
            { name: "Services", href: "/#services" },
            { name: "Contact", href: "/#contact" },
            { name: "Blog", href: "/blog" },
        ],
        resources: [
            { name: "Resume", href: "/resume.html" },
            { name: "View Services", href: "#services" },
            { name: "Get In Touch", href: "#contact" },
        ]
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-4 mb-4"
                        >
                            <Link href="/" aria-label="Go to homepage">
                                <Image
                                    src="/logo.png"
                                    alt="MWA Dev"
                                    width={92}
                                    height={92}
                                    className="object-contain shrink-0"
                                />
                            </Link>
                            <div>
                                <h3 className="text-xl font-bold">Muhammed Waqar Ahmed</h3>
                                <p className="text-sm text-gray-400">Remote AI and full-stack developer for startups and growing teams</p>
                            </div>
                        </motion.div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            I help founders and teams ship reliable products with Next.js, FastAPI, Supabase, and PostgreSQL.
                            Available for contract projects and long-term remote roles.
                        </p>
                        <div className="flex items-center text-sm text-gray-400">
                            <span>Made with</span>
                            <Heart size={16} className="mx-2 text-red-500" />
                            <span>using Next.js & Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    {link.href.startsWith("/") ? (
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 sm:mb-0">
                        © {currentYear} Muhammed Waqar Ahmed. All rights reserved.
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                        <ArrowUp size={16} className="mr-2" />
                        Back to top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
