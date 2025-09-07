"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage(data.message);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setSubmitMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setSubmitMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/muhammed-waqar",
            description: "Check out my code and projects"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://linkedin.com/in/muhammed-waqar",
            description: "Connect with me professionally"
        },
        {
            name: "Twitter",
            icon: Twitter,
            href: "https://twitter.com/muhammed_waqar",
            description: "Follow my development journey"
        },
        {
            name: "Email",
            icon: Mail,
            href: "mailto:muhammed@mwadev.me",
            description: "Send me a direct message"
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

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let&apos;s Connect
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Whether you want to collaborate on a project, share ideas, or just say hello, I&apos;d love to hear from you!
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
                    >
                        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Send me a message
                        </motion.h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="What's this about?"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                                    placeholder="Tell me about your project, idea, or just say hello..."
                                />
                            </motion.div>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl'
                                    } text-white`}
                            >
                                <Send size={20} className="mr-2" />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>

                            {/* Submit Message */}
                            {submitMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-4 p-4 rounded-lg ${submitMessage.includes('Thank you')
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200'
                                            : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200'
                                        }`}
                                >
                                    {submitMessage}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info & Social */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Contact Info */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Get in touch
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">muhammed@mwadev.me</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Available for remote work</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Response Time</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Usually within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Connect with me
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                            <link.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {link.name}
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">
                                                {link.description}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Currently Available
                                </h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                I&apos;m actively looking for collaboration opportunities, freelance projects, and open to discussing new ideas.
                                Feel free to reach out for anything from technical discussions to project partnerships!
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
