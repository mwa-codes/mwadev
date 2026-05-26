"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    source: "linkedin" | "upwork";
    relationship: string;
    date: string;
    text: string;
    highlight?: boolean;
    rating?: number;
}

const testimonials: Testimonial[] = [
    {
        name: "Asad Ijaz",
        role: "Founder @ Reebooot",
        company: "Immersive Bootcamps · 3,000+ Alumni",
        source: "linkedin",
        relationship: "Managed Muhammed directly",
        date: "May 2026",
        text: "I know Waqar for a long time and have collaborated with him on multiple projects. He always delivers excellent results without exception. His ability to understand requirements at a broader scale is outstanding — he brings strong analytical thinking and problem-solving to every task. Above his technical capabilities, Waqar is someone you can genuinely rely on. He honours his commitments, respects timelines, and never looks for excuses to fall short. I would not hesitate to recommend him.",
        highlight: true,
    },
    {
        name: "Umer Farooq",
        role: "Backend Developer & Freelancer",
        company: "Gresys Technologies · 8+ Years Experience",
        source: "linkedin",
        relationship: "Worked together at Gresys Technologies",
        date: "July 2025",
        text: "I had the pleasure of working with M. Waqar Ahmed at Gresys Technologies Pvt. Ltd., where his skills as a developer were exceptional. Waqar consistently delivered robust, high-quality solutions, showcasing his deep expertise in developing and optimizing web applications. His ability to tackle complex coding challenges with creativity and precision, combined with his collaborative approach, made him an invaluable team member. His technical proficiency, problem-solving abilities, and dedication to excellence make him a standout professional.",
        highlight: false,
    },
    {
        name: "Fazeelat Suleman",
        role: "Lead Frontend & WordPress Developer",
        company: "Shopify & WordPress Specialist",
        source: "linkedin",
        relationship: "Worked closely together for 2 years",
        date: "August 2023",
        text: "I wholeheartedly recommend Waqar for any software engineering role. Having worked closely with him for 2 years, his technical proficiency and problem-solving skills are truly impressive. He consistently delivers high-quality code and collaborates effectively within the team. His ability to adapt to new technologies and contribute innovative ideas are exceptional. Waqar would be a valuable asset to any software development project.",
        highlight: false,
    },
    {
        name: "Atta Ur Rehman",
        role: "Software Engineer",
        company: "Former Colleague",
        source: "linkedin",
        relationship: "Worked together on multiple projects",
        date: "January 2023",
        text: "There is no better colleague than Muhammad Waqar Ahmed. He is one of the most dedicated professionals I've worked with and is willing to put in that extra help whenever you need it. His expertise as a developer is considerable, and it helped our team come up with more efficient solutions on different projects. I highly recommend Muhammad Waqar Ahmed and would love to work with him again.",
        highlight: false,
    },
    {
        name: "Upwork Client",
        role: "Verified Client",
        company: "Upwork · 5.0 ★ Rating",
        source: "upwork",
        relationship: "Verified Upwork Project · Completed on time",
        date: "Aug 2025",
        text: "Develop Chat-GPT Like Web App for PDF QnA — delivered a complete AI-powered PDF question and answer web application. Project completed successfully with a perfect 5-star rating.",
        rating: 5,
        highlight: false,
    },
    {
        name: "Upwork Client",
        role: "Verified Client",
        company: "Upwork · 5.0 ★ Rating",
        source: "upwork",
        relationship: "Verified Upwork Project · Delivered in 2 days",
        date: "Jul 2025",
        text: "AI-Powered PDF Chatbot for Document Q&A and Search — delivered a working chatbot for document search and Q&A. Completed in 2 days with a perfect 5-star rating.",
        rating: 5,
        highlight: false,
    },
];

const stats = [
    { value: "6", label: "Recommendations" },
    { value: "2", label: "Upwork Reviews" },
    { value: "5.0", label: "Average Rating" },
    { value: "5", label: "Live products shipped" },
];

const TEXT_TRUNCATE_THRESHOLD = 220;

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

const getInitials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

const getSourceBadgeClasses = (source: Testimonial["source"]) => {
    if (source === "linkedin") {
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
    }
    return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
};

const getSourceLabel = (source: Testimonial["source"]) =>
    source === "linkedin" ? "LinkedIn" : "Upwork";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const isLong = testimonial.text.length > TEXT_TRUNCATE_THRESHOLD;

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`relative bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${testimonial.highlight ? "ring-2 ring-blue-500/30" : ""
                }`}
        >
            <span
                className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-semibold ${getSourceBadgeClasses(testimonial.source)}`}
            >
                {getSourceLabel(testimonial.source)}
            </span>

            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>

            <div className="pr-16 mb-4">
                <p
                    className={`text-sm sm:text-base text-gray-600 dark:text-gray-300 ${!expanded && isLong ? "line-clamp-4" : ""
                        }`}
                >
                    {testimonial.text}
                </p>
                {isLong && (
                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {expanded ? "Read less" : "Read more"}
                    </button>
                )}
            </div>

            {testimonial.source === "upwork" && testimonial.rating === 5 && (
                <p className="text-amber-400 text-sm mb-4 tracking-wide" aria-label="5 out of 5 stars">
                    ★★★★★
                </p>
            )}

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-base">
                            {getInitials(testimonial.name)}
                        </span>
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                    </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{testimonial.relationship}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.date}</p>
            </div>
        </motion.div>
    );
};

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4"
                    >
                        What Clients & Colleagues Say
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
                    >
                        Real feedback from clients, managers, and teammates across 10+ years of professional work.
                    </motion.p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <motion.div key={stat.label} variants={itemVariants} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">{stat.value}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {stat.label}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={`${testimonial.name}-${testimonial.date}`}
                            testimonial={testimonial}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
