"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Brain, Home, Database } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        { id: "all", name: "All Projects", icon: Code },
        { id: "ai", name: "AI & ML", icon: Brain },
        { id: "iot", name: "IoT", icon: Home },
        { id: "web", name: "Web Apps", icon: Database },
    ];

    const projects = [
        {
            id: "ai-pdf-chatbot",
            title: "AI PDF Chatbot",
            description: "QPDF is a full-stack AI PDF chatbot that lets users interact with documents using natural language. I built it using FastAPI, React, PostgreSQL, and OpenAI APIs. It extracts and chunks PDF content, generates embeddings, and semantically matches user queries to relevant document sections. Features include file upload, smart chunking, and a chat interface. Ideal for students, researchers, and professionals who want quick insights from lengthy PDFs.",
            image: "/images/projects/QPDF.png",
            tags: ["Next.js", "OpenAI", "FastAPI", "PostgreSQL"],
            category: "ai",
            status: "live",
            github: "https://github.com/mwa-codes/QPDF",
            demo: "https://www.qpdf.tech",
            features: [
                "PDF document processing and chunking",
                "Vector embeddings for semantic search",
                "Real-time chat interface",
                "Context-aware responses"
            ]
        },
        {
            id: "ai-resumecraft",
            title: "Complete AI Resume Analysis Platform",
            description: "Developed and deployed a complete AI Resume Analysis Platform, featuring both instant Guest Mode analysis for lead generation and a full User Account system with dashboards for registered users. This production-ready solution includes progress tracking, analysis history, PDF/text export, and mobile responsiveness. Built with Next.js 15, OpenAI GPT-4, Supabase, TypeScript, and Tailwind CSS, it offers a professional, scalable, and immediate business asset for career coaches, HR, and resume consultants. Saved clients 97%+ over custom development.",
            image: "/images/projects/ResumeCraft.png",
            tags: ["Next.js", "Sass Development", "Supabase", "AI Development", "Vercel"],
            category: "ai",
            status: "live",
            github: "https://github.com/mwa-codes/ResumeCraft",
            demo: "https://resumecraft-rose.vercel.app",
            features: [
                "Instant resume analysis in Guest Mode for quick insights",
                "User accounts with personalized dashboards and history",
                "Detailed AI-driven feedback with scoring and suggestions",
                "Export analysis results as PDF or text for easy sharing",
                "Progress tracking across multiple resumes",
                "Mobile-friendly responsive design",
                "Built for career coaches, HR professionals, and job seekers"
            ]
        },
        {
            id: "ai-math-tutor",
            title: "AI-Powered Math Teaching Assistant for WordPress",
            description: "I developed a WordPress site featuring an AI-powered Math Teaching Assistant. Utilizing the OpenAI API, this assistant can solve and explain a wide range of math problems, from basic arithmetic to advanced calculus. The site offers an intuitive user interface, customizable lessons, and real-time feedback. This project highlights my skills in WordPress development, AI integration, and educational technology, creating a scalable and interactive platform for personalized math tutoring.",
            image: "/images/projects/Math-tutor.png",
            tags: ["WordPress Development", "API Integration", "Artificial Intelligence", "Responsive Design"],
            category: "web",
            status: "live",
            github: "#",
            demo: "https://artinvtech.com/math-ai/",
            features: [
                "AI-powered math problem solving with step-by-step explanations",
                "Covers topics from basic arithmetic to advanced calculus",
                "Interactive and intuitive WordPress-based user interface",
                "Customizable lessons tailored to different learning levels",
                "Real-time feedback for student queries",
                "Scalable and responsive design for desktop and mobile",
                "Seamless OpenAI API integration for educational use"
            ]
        },
        {
            id: "BartanERP",
            title: "BartanERP – Lightweight ERP for Small Manufacturers",
            description: "BartanERP is a lightweight, modular ERP system designed specifically for small-scale manufacturing units like aluminum utensil factories. It streamlines day-to-day operations and replaces manual record-keeping with a simple, digital workflow.",
            image: "/images/projects/BatanERP.png",
            tags: ["React", "PostgreSQL", "FastAPI", "Tailwind"],
            category: "web",
            status: "in-development",
            github: "https://github.com/mwa-codes/BartanERP.git",
            demo: "#",
            features: [
                "Employee & attendance management",
                "Vendor & customer records",
                "Inventory & stock tracking",
                "Manufacturing process monitoring (e.g., rolling, production steps)",
                "Order & delivery management",
                "Reporting & analytics dashboards"
            ]
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "live":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
            case "in-development":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
            case "planned":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
            case "concept":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "live":
                return "Live";
            case "in-development":
                return "In Development";
            case "planned":
                return "Planned";
            case "concept":
                return "Concept";
            default:
                return "Unknown";
        }
    };

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

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

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4">
                        Projects & Experiments
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                        A collection of projects that showcase my journey from learning to building real-world applications
                    </motion.p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === filter.id
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            <filter.icon size={18} className="mr-2" />
                            {filter.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-0"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                                            {getStatusText(project.status)}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Key Features:
                                    </h4>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        {project.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    <motion.a
                                        href={project.github}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <Github size={16} className="mr-2" />
                                        Code
                                    </motion.a>
                                    {project.status === "live" && (
                                        <motion.a
                                            href={project.demo}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <ExternalLink size={16} className="mr-2" />
                                            Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        More projects coming soon as I progress through my development journey!
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Let&apos;s Collaborate
                        <ExternalLink size={20} className="ml-2" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
