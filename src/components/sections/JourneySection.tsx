"use client";

import { motion } from "framer-motion";
import { GraduationCap, Hammer, Briefcase, Trophy, ArrowRight } from "lucide-react";

const JourneySection = () => {
    const phases = [
        {
            id: "student",
            title: "Continuous Learning",
            subtitle: "Always Evolving & Growing",
            icon: GraduationCap,
            status: "active",
            description: "Constantly expanding my knowledge in emerging technologies, frameworks, and development practices. Learning never stops in tech.",
            highlights: [
                "Mastering Next.js, React, and modern web development",
                "Exploring AI/ML integration and automation",
                "Building IoT projects and hardware integrations",
                "Contributing to open source projects and communities"
            ],
            color: "from-green-500 to-emerald-600"
        },
        {
            id: "builder",
            title: "Active Building",
            subtitle: "Creating & Shipping Products",
            icon: Hammer,
            status: "active",
            description: "Actively developing and shipping projects that solve real problems. From MVPs to full-scale applications.",
            highlights: [
                "AI PDF Chatbot with advanced document processing",
                "IoT Dashboard for smart home automation",
                "ERP System solutions for small businesses",
                "SaaS experiments and product development"
            ],
            color: "from-blue-500 to-cyan-600"
        },
        {
            id: "freelancer",
            title: "Client Services",
            subtitle: "Delivering Professional Solutions",
            icon: Briefcase,
            status: "active",
            description: "Successfully delivering custom solutions for clients while building lasting business relationships and expanding my service portfolio.",
            highlights: [
                "Full-stack web applications for diverse clients",
                "E-commerce and business automation solutions",
                "Database design and API development",
                "Ongoing maintenance and optimization services"
            ],
            color: "from-purple-500 to-violet-600"
        },
        {
            id: "entrepreneur",
            title: "Business Ventures",
            subtitle: "Building & Scaling",
            icon: Trophy,
            status: "active",
            description: "Developing business ventures, exploring new markets, and building sustainable income streams through technology and innovation.",
            highlights: [
                "SaaS product development and market validation",
                "Digital agency and consulting services",
                "Passive income through digital products",
                "Strategic partnerships and collaborations"
            ],
            color: "from-orange-500 to-red-600"
        }
    ]; const containerVariants = {
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
            case "active":
                return "border-green-500 bg-green-50 dark:bg-green-900/20";
            default:
                return "border-gray-300 bg-gray-50 dark:bg-gray-800";
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "active":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                        Active
                    </span>
                );
            default:
                return null;
        }
    }; return (
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
                        My Life Journey
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                        Always learning, always evolving — in life and in technology.
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
                                <div className="flex-1 max-w-lg mx-4 lg:mx-0">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`p-4 sm:p-6 rounded-xl border-2 ${getStatusStyle(phase.status)} shadow-lg`}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${phase.color} text-white`}>
                                                <phase.icon size={20} className="sm:w-6 sm:h-6" />
                                            </div>
                                            {getStatusBadge(phase.status)}
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {phase.title}
                                        </h3>
                                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
                                            {phase.subtitle}
                                        </p>
                                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                                            {phase.description}
                                        </p>                                        <div className="space-y-2">
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
                        Ready to work together on your next project?
                    </p>
                    <motion.a
                        href="#services"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        View My Services
                        <ArrowRight size={20} className="ml-2" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneySection;
