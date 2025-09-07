"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { name: "Home", href: "#home" },
            { name: "Journey", href: "#journey" },
            { name: "Projects", href: "#projects" },
            { name: "Blog", href: "#blog" },
            { name: "Contact", href: "#contact" },
        ],
        resources: [
            { name: "Resume", href: "/resume.pdf" },
            { name: "Blog RSS", href: "/rss.xml" },
            { name: "Site Map", href: "/sitemap.xml" },
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
                            className="flex items-center space-x-3 mb-4"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">MW</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">mwadev.me</h3>
                                <p className="text-sm text-gray-400">Always Developing</p>
                            </div>
                        </motion.div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Following my journey from student to professional developer.
                            Building, learning, and sharing experiences in web development, AI, and IoT.
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
                        © {currentYear} Muhammed Waqar. All rights reserved.
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
