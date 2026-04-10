import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Next.js Full-Stack Development Services',
    description: 'Hire a Next.js developer for SaaS apps, dashboards, landing pages, and conversion-focused web products.',
    alternates: {
        canonical: '/services/nextjs-development',
    },
};

export default function NextjsDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Next.js Service</p>
                <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Hire a Next.js Developer for Production Web Apps
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                    I build fast, scalable, SEO-friendly frontend and full-stack applications for startups, agencies, and founders who need reliable delivery.
                </p>

                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Best for</h2>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                            <li>SaaS products and MVPs</li>
                            <li>Marketing websites and landing pages</li>
                            <li>Dashboards and admin portals</li>
                            <li>Performance and SEO upgrades</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What you achieve</h2>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                            <li>Higher conversion from search traffic</li>
                            <li>Clearer sales message for clients</li>
                            <li>Faster load times and better Core Web Vitals</li>
                            <li>One page Google can rank for this service</li>
                        </ul>
                    </div>
                </section>

                <section className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                    <h2 className="text-2xl font-bold">Relevant proof</h2>
                    <p className="mt-3 text-blue-100">
                        See my live product work in Conslinq, ResumeCraft, and AI PDF Chatbot.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link href="/projects/conslinq" className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700">
                            Conslinq case study
                        </Link>
                        <Link href="/projects/resumecraft" className="rounded-lg border border-white px-4 py-2 font-semibold text-white">
                            ResumeCraft case study
                        </Link>
                    </div>
                </section>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Link href="/#contact" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
                        Discuss a Next.js project
                    </Link>
                    <Link href="/services" className="rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Back to services hub
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
