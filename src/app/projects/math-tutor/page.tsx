import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'AI Math Tutor — WordPress + OpenAI | EdTech Assistant',
    description:
        'An AI-powered Math Teaching Assistant for WordPress using OpenAI API. Solves and explains topics from arithmetic to calculus with real-time feedback.',
    alternates: { canonical: '/projects/math-tutor' },
    openGraph: {
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'MWA Dev – AI Full-Stack Developer',
            },
        ],
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Math Tutor",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "description": "AI Math Teaching Assistant for WordPress providing step-by-step explanations across many topics.",
    "url": "https://mwadev.me/projects/math-tutor",
    "author": {
        "@type": "Person",
        "name": "Muhammed Waqar Ahmed",
        "url": "https://mwadev.me"
    }
};

export default function Page() {
    const project = projects.find(p => p.slug === 'math-tutor');
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
                        <div className="flex gap-3 mb-8">
                            {project.github && <Link href={project.github} className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg">View Code</Link>}
                            {project.demo && project.demo !== '#' && <Link href={project.demo} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Live Demo</Link>}
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
            <Script id="schema-softwareapp-math-tutor" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        </div>
    );
}
