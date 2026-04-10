import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'FastAPI Backend Development Services',
    description: 'Hire a FastAPI developer for secure APIs, business logic, integration layers, and scalable backend architecture.',
    alternates: {
        canonical: '/services/fastapi-development',
    },
};

export default function FastapiDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">FastAPI Service</p>
                <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Hire a FastAPI Developer for APIs and Backend Systems
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                    I build reliable backend systems for product teams that need speed, structure, and clean API design.
                </p>

                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Best for</h2>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                            <li>REST APIs and business logic</li>
                            <li>Third-party integrations</li>
                            <li>AI backend orchestration</li>
                            <li>Internal tools and automation</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What you achieve</h2>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                            <li>Reliable backend that scales with your product</li>
                            <li>Cleaner separation of frontend and backend work</li>
                            <li>Faster development with fewer bugs</li>
                            <li>One focused page for this keyword cluster</li>
                        </ul>
                    </div>
                </section>

                <section className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                    <h2 className="text-2xl font-bold">Relevant proof</h2>
                    <p className="mt-3 text-blue-100">
                        My work includes FastAPI-backed products like Conslinq and AI-oriented systems.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link href="/projects/conslinq" className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700">
                            Conslinq case study
                        </Link>
                        <Link href="/projects/qpdf" className="rounded-lg border border-white px-4 py-2 font-semibold text-white">
                            QPDF case study
                        </Link>
                    </div>
                </section>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Link href="/#contact" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
                        Discuss a FastAPI project
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
