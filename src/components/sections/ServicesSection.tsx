"use client";

import { motion } from "framer-motion";
import { Code, Brain, Smartphone, Database, Globe, Users, CheckCircle, ArrowRight } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            id: "web-development",
            title: "Full-Stack Web Development",
            description: "Custom web applications built with modern technologies like Next.js, React, and Node.js. From simple websites to complex enterprise solutions.",
            icon: Globe,
            features: [
                "Responsive & Mobile-First Design",
                "Modern JavaScript Frameworks",
                "Database Integration",
                "API Development & Integration",
                "Performance Optimization",
                "SEO & Analytics Setup"
            ],
            technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
            pricing: "Starting from $500",
            deliveryTime: "2-6 weeks",
            category: "development"
        },
        {
            id: "ai-solutions",
            title: "AI & Machine Learning Solutions",
            description: "Intelligent applications using OpenAI, custom ML models, and automation tools. Turn your data into actionable insights.",
            icon: Brain,
            features: [
                "AI Chatbots & Virtual Assistants",
                "Document Processing & Analysis",
                "Custom AI Workflows",
                "Data Analysis & Insights",
                "Process Automation",
                "API Integration with AI Services"
            ],
            technologies: ["OpenAI", "Python", "FastAPI", "Vector Databases", "LangChain"],
            pricing: "Starting from $1,000",
            deliveryTime: "3-8 weeks",
            category: "ai"
        },
        {
            id: "mobile-apps",
            title: "Mobile App Development",
            description: "Cross-platform mobile applications with native performance. Built with React Native and modern mobile development practices.",
            icon: Smartphone,
            features: [
                "iOS & Android Development",
                "Cross-Platform Solutions",
                "Native Performance",
                "Push Notifications",
                "Offline Functionality",
                "App Store Deployment"
            ],
            technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
            pricing: "Starting from $2,000",
            deliveryTime: "4-10 weeks",
            category: "mobile"
        },
        {
            id: "erp-systems",
            title: "Custom ERP & Business Systems",
            description: "Lightweight, modular ERP systems designed for small to medium businesses. Streamline operations and replace manual processes.",
            icon: Database,
            features: [
                "Inventory Management",
                "Employee & Attendance Tracking",
                "Customer Relationship Management",
                "Financial Reporting",
                "Custom Workflows",
                "Multi-User Access Control"
            ],
            technologies: ["React", "PostgreSQL", "FastAPI", "Tailwind CSS"],
            pricing: "Starting from $1,000",
            deliveryTime: "6-12 weeks",
            category: "enterprise"
        },
        {
            id: "consulting",
            title: "Technical Consulting & Code Review",
            description: "Strategic guidance on technology decisions, code architecture review, and mentoring for development teams.",
            icon: Users,
            features: [
                "Architecture Planning",
                "Code Quality Assessment",
                "Technology Stack Selection",
                "Performance Optimization",
                "Team Mentoring",
                "Project Planning & Estimation"
            ],
            technologies: ["Various Technologies", "Best Practices", "Code Standards"],
            pricing: "$50-100/hour",
            deliveryTime: "Flexible",
            category: "consulting"
        },
        {
            id: "maintenance",
            title: "Website Maintenance & Support",
            description: "Ongoing support, updates, and maintenance for existing web applications. Keep your digital assets running smoothly.",
            icon: Code,
            features: [
                "Regular Updates & Security Patches",
                "Performance Monitoring",
                "Bug Fixes & Improvements",
                "Content Management",
                "Backup & Recovery",
                "24/7 Support Available"
            ],
            technologies: ["Any Technology Stack"],
            pricing: "$100-1,500/month",
            deliveryTime: "Ongoing",
            category: "support"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "We discuss your requirements, goals, and timeline to create a detailed project plan."
        },
        {
            step: "02",
            title: "Design & Development",
            description: "I build your solution using modern technologies and best practices, with regular updates."
        },
        {
            step: "03",
            title: "Testing & Deployment",
            description: "Thorough testing and deployment to ensure everything works perfectly in production."
        },
        {
            step: "04",
            title: "Support & Maintenance",
            description: "Ongoing support and maintenance to keep your solution running smoothly."
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

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "development":
                return "from-blue-500 to-cyan-500";
            case "ai":
                return "from-purple-500 to-pink-500";
            case "mobile":
                return "from-green-500 to-emerald-500";
            case "enterprise":
                return "from-orange-500 to-red-500";
            case "consulting":
                return "from-indigo-500 to-blue-500";
            case "support":
                return "from-gray-500 to-slate-500";
            default:
                return "from-blue-500 to-purple-500";
        }
    };

    return (
        <section id="services" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4">
                        Services & Solutions
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                        From web development to AI solutions, I help businesses and individuals bring their digital ideas to life
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 px-4 sm:px-0"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center mb-4`}>
                                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {service.title}
                            </h3>

                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                                {service.description}
                            </p>

                            <div className="space-y-2 mb-4">
                                {service.features.slice(0, 3).map((feature, index) => (
                                    <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                                <div className="flex justify-between items-center text-sm mb-2">
                                    <span className="text-gray-500 dark:text-gray-400">Starting Price:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">{service.pricing}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Timeline:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">{service.deliveryTime}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Process Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-16"
                >
                    <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        How I Work
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step) => (
                            <motion.div
                                key={step.step}
                                variants={itemVariants}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">{step.step}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                >
                    <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Start Your Project?
                    </motion.h3>
                    <motion.p variants={itemVariants} className="text-lg mb-6 opacity-90">
                        Let&apos;s discuss your requirements and turn your ideas into reality
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get Free Consultation
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.a>
                        <motion.a
                            href="mailto:m.waqar.ahmed@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Email Me Directly
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
