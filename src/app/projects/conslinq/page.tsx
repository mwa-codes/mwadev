import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
    title: 'Conslinq — Multi-Tenant Case Management Platform',
    description:
        'Conslinq is a live, tenant-aware immigration case management platform built with Next.js, FastAPI, Supabase PostgreSQL, Railway, and Vercel.',
    alternates: { canonical: '/projects/conslinq' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Conslinq',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
        'A secure, tenant-aware immigration operations platform for managing cases, users, products, documents, and approvals across multiple business roles.',
    url: 'https://mwadev.me/projects/conslinq',
    author: {
        '@type': 'Person',
        name: 'Muhammed Waqar Ahmed',
        url: 'https://mwadev.me',
    },
    featureList: [
        'Multi-role Authentication and Authorization',
        'Tenant-aware Routing and Data Isolation',
        'Supabase Row-level Security with JWT Claims',
        'FastAPI Backend',
        'Next.js Frontend',
        'Railway and Vercel Deployment',
        'Diagnostics and Health Endpoints',
    ],
};

export default function Page() {
    const project = projects.find((p) => p.slug === 'conslinq');

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <nav className="mb-6 text-sm">
                    <Link href="/#projects" className="text-blue-600 hover:underline">
                        ← Back to projects
                    </Link>
                </nav>
                {project && (
                    <>
                        <div className="mb-6">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1024}
                                height={576}
                                className="rounded-lg w-full h-auto object-cover"
                            />
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
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
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Key Features
                            </h2>
                            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-3 mb-8">
                            {project.demo && project.demo !== '#' && (
                                <Link href={project.demo} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                                    Live Demo
                                </Link>
                            )}
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
            <Script
                id="schema-softwareapp-conslinq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
            />
        </div>
    );
}
