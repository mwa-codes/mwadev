"use client";

import { motion } from "framer-motion";
import { GraduationCap, Hammer, Briefcase, Trophy, ArrowRight } from "lucide-react";

const JourneySection = () => {
    const phases = [
        {
            id: "student",
            title: "Student Phase",
            subtitle: "Learning & Experimenting",
            icon: GraduationCap,
            status: "current",
            period: "2023 - Present",
            description: "Building foundational skills in full-stack development, AI, and IoT. Documenting my learning journey through blog posts and experimental projects.",
            highlights: [
                "Learning Next.js, React, and modern web development",
                "Experimenting with AI and machine learning",
                "Building IoT projects and hardware integrations",
                "Writing technical blog posts and tutorials"
            ],
            color: "from-green-500 to-emerald-600"
        },
        {
            id: "builder",
            title: "Builder Phase",
            subtitle: "Creating & Shipping",
            icon: Hammer,
            status: "upcoming",
            period: "2024 - 2025",
            description: "Transitioning from learning to building. Creating portfolio projects that solve real problems and demonstrate technical proficiency.",
            highlights: [
                "AI PDF Chatbot with advanced document processing",
                "IoT Dashboard for smart home automation",
                "ERP System concept and prototype",
                "Open source contributions and collaborations"
            ],
            color: "from-blue-500 to-cyan-600"
        },
        {
            id: "freelancer",
            title: "Freelancer Phase",
            subtitle: "Serving Clients",
            icon: Briefcase,
            status: "planned",
            period: "2025 - 2026",
            description: "Offering development services to clients while building a reputation and portfolio. Learning business skills alongside technical growth.",
            highlights: [
                "Client project portfolio and case studies",
                "Service offerings and pricing strategies",
                "Client testimonials and success stories",
                "Business development and networking"
            ],
            color: "from-purple-500 to-violet-600"
        },
        {
            id: "professional",
            title: "Professional Phase",
            subtitle: "Scaling & Leading",
            icon: Trophy,
            status: "vision",
            period: "2026+",
            description: "Establishing myself as a professional developer with expertise in multiple domains. Leading projects and potentially building SaaS products.",
            highlights: [
                "SaaS product development and launch",
                "Team leadership and mentoring",
                "Speaking at conferences and events",
                "Building sustainable business ventures"
            ],
            color: "from-orange-500 to-red-600"
        }
    ];

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

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "current":
                return "border-green-500 bg-green-50 dark:bg-green-900/20";
            case "upcoming":
                return "border-blue-500 bg-blue-50 dark:bg-blue-900/20";
            case "planned":
                return "border-purple-500 bg-purple-50 dark:bg-purple-900/20";
            case "vision":
                return "border-orange-500 bg-orange-50 dark:bg-orange-900/20";
            default:
                return "border-gray-300 bg-gray-50 dark:bg-gray-800";
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "current":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                        Current
                    </span>
                );
            case "upcoming":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Next
                    </span>
                );
            case "planned":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Planned
                    </span>
                );
            case "vision":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                        Vision
                    </span>
                );
            default:
                return null;
        }
    };

    return (
        <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        My Development Journey
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        From student to professional - a roadmap of continuous growth and evolution in technology
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 via-purple-500 to-orange-500 rounded-full hidden lg:block"></div>

                    <div className="space-y-12">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={phase.id}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 max-w-lg">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`p-6 rounded-xl border-2 ${getStatusStyle(phase.status)} shadow-lg`}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-3 rounded-lg bg-gradient-to-r ${phase.color} text-white`}>
                                                <phase.icon size={24} />
                                            </div>
                                            {getStatusBadge(phase.status)}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {phase.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                                            {phase.subtitle}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            {phase.period}
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                                            {phase.description}
                                        </p>

                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">
                                                Key Focus Areas:
                                            </h4>
                                            <ul className="space-y-1">
                                                {phase.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                                        <ArrowRight size={14} className="mr-2 text-gray-400" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Timeline Node */}
                                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-900 border-4 border-gray-300 dark:border-gray-600 rounded-full shadow-lg relative z-10">
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${phase.color}`}></div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 max-w-lg hidden lg:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Want to follow along on this journey?
                    </p>
                    <motion.a
                        href="#blog"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Read My Blog
                        <ArrowRight size={20} className="ml-2" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneySection;
