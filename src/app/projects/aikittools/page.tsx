import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'AI Kit Tools — Free AI Career Tools & Utilities | Next.js, OpenAI, SaaS',
    description:
        'AI Kit Tools is a free platform offering AI-powered career tools including cover letter generator, resume optimizer, ATS checker, interview prep, and developer utilities. No signup required, powered by OpenAI.',
    alternates: { canonical: '/projects/aikittools' },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Kit Tools",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "description": "Free AI-powered career tools and utilities for job seekers and developers. Generate cover letters, optimize resumes, check ATS compatibility, and access utility tools.",
    "url": "https://mwadev.me/projects/aikittools",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "author": {
        "@type": "Person",
        "name": "Muhammed Waqar Ahmed",
        "url": "https://mwadev.me"
    }
};

export default function Page() {
    const project = projects.find(p => p.slug === 'aikittools');
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <nav className="mb-6 text-sm">
                    <Link href="/#projects" className="text-blue-600 hover:underline">← Back to projects</Link>
                </nav>
                {project && (
                    <>
                        <div className="mb-6">
                            <Image src={project.image} alt={project.title} width={1024} height={576} className="rounded-lg w-full h-auto object-cover" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">{tag}</span>
                            ))}
                        </div>
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Features</h2>
                            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                                {project.features.map((f, i) => (<li key={i}>{f}</li>))}
                            </ul>
                        </div>
                        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">About This Project</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                AI Kit Tools is a comprehensive suite of free utilities designed for job seekers and developers. Built with Next.js and powered by OpenAI&apos;s API, the platform provides instant, browser-based solutions with no signup required. Every tool runs entirely in your browser, ensuring your data stays private and secure.
                            </p>
                        </div>
                        <div className="flex gap-3 mb-8">
                            {project.demo && project.demo !== '#' && <Link href={project.demo} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Visit Live Demo</Link>}
                        </div>
                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.screenshots.map((shot, i) => (
                                    <div key={i} className="relative w-full h-40 sm:h-48 rounded overflow-hidden">
                                        <Image src={shot.src} alt={shot.alt} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </main>
            <Footer />
            <Script id="schema-softwareapp-aikittools" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        </div>
    );
}
