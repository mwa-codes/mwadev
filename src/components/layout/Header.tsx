"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Dynamic navigation based on current page
    const navItems = isHomePage ? [
        { name: "About", href: "#about" },
        { name: "Journey", href: "#journey" },
        { name: "Projects", href: "#projects" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "/blog" },
    ] : [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Journey", href: "/#journey" },
        { name: "Projects", href: "/#projects" },
        { name: "Services", href: "/#services" },
        { name: "Contact", href: "/#contact" },
        { name: "Blog", href: "/blog" },
    ];

    const scrollToSection = (href: string) => {
        if (isHomePage) {
            // On home page, scroll to section
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // On other pages, navigate to home page with hash
            window.location.href = href.startsWith('/#') ? href : `/${href}`;
        }
        setIsOpen(false);
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 cursor-pointer"
                        >
                            <div className="w-12 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">MWA</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Muhammed Waqar Ahmed
                                </h1>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Learning, building, evolving — in code and in life
                                </p>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isHash = item.href.startsWith("#");

                            if (isHash && isHomePage) {
                                // On home page, use smooth scrolling for hash links
                                return (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        whileHover={{ y: -2 }}
                                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                    >
                                        {item.name}
                                    </motion.a>
                                );
                            } else {
                                // For all other links, use Next.js Link
                                return (
                                    <motion.div key={item.name} whileHover={{ y: -2 }}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            }
                        })}
                    </nav>

                    {/* Theme Toggle and Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="flex flex-col space-y-2 pt-4">
                            {navItems.map((item) => {
                                const isHash = item.href.startsWith("#");

                                if (isHash && isHomePage) {
                                    // On home page, use smooth scrolling for hash links
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(item.href);
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    );
                                } else {
                                    // For all other links, use Next.js Link
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
}
