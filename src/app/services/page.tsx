import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Services for Hire | Next.js, FastAPI, Supabase, AI Development',
    description: 'Explore my remote web and AI development services for startups, founders, and businesses that need reliable delivery and measurable outcomes.',
    alternates: {
        canonical: '/services',
    },
};

const services = [
    {
        title: 'Next.js Full-Stack Development',
        href: '/services/nextjs-development',
        summary: 'Production websites, SaaS apps, dashboards, and conversion-focused landing pages built for performance and SEO.',
    },
    {
        title: 'FastAPI Backend Development',
        href: '/services/fastapi-development',
        summary: 'Secure APIs, business logic, integrations, and scalable backend systems for product teams and startups.',
    },
    {
        title: 'Supabase & PostgreSQL Architecture',
        href: '/services/supabase-development',
        summary: 'Data modeling, authentication, row-level security, and backend architecture that supports long-term growth.',
    },
    {
        title: 'AI Chatbot & Automation Development',
        href: '/services/ai-development',
        summary: 'OpenAI-powered chatbots, document workflows, and automation tools that save time and add product value.',
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <header className="max-w-3xl mb-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Services</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Hire a Remote Developer for Next.js, FastAPI, Supabase, and AI Work
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        These pages are built to rank for high-intent searches and guide visitors to the exact service they need.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <article key={service.href} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-300">{service.summary}</p>
                            <div className="mt-5 flex items-center gap-4">
                                <Link href={service.href} className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition-colors">
                                    View service page
                                </Link>
                                <Link href="/#contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                                    Discuss a project
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                    <h2 className="text-2xl font-bold">What you get from these landing pages</h2>
                    <p className="mt-3 max-w-3xl text-blue-100">
                        Each page targets one search intent, explains one service clearly, links to one proof project, and sends users to one conversion action. That is much stronger than one generic homepage for SEO and lead quality.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
