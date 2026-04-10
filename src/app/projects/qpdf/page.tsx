import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import { projects } from '@/data/projects';
import Footer from '@/components/layout/Footer';
import ProjectCaseStudy from '@/components/sections/ProjectCaseStudy';

export const metadata: Metadata = {
    title: 'QPDF — AI PDF Chatbot | Next.js, FastAPI, OpenAI',
    description:
        'QPDF lets you chat with PDFs using AI. Built with Next.js, FastAPI, PostgreSQL, and OpenAI for embeddings and semantic search.',
    alternates: { canonical: '/projects/qpdf' },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "QPDF",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description": "AI PDF chatbot enabling natural-language Q&A over documents using embeddings and semantic search.",
    "url": "https://mwadev.me/projects/qpdf",
    "author": {
        "@type": "Person",
        "name": "Muhammed Waqar Ahmed",
        "url": "https://mwadev.me"
    }
};

export default function Page() {
    const project = projects.find(p => p.slug === 'qpdf');
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            {project && (
                <ProjectCaseStudy
                    project={project}
                    eyebrow="Case Study"
                    intro="QPDF shows how I turn a document-heavy use case into a product people can actually use and understand."
                    challengeTitle="The challenge"
                    challengeBody="The product had to extract and process PDF content, support semantic matching, and present answers in a simple interface users could trust."
                    solutionTitle="The solution"
                    solutionBody="I combined Next.js, FastAPI, PostgreSQL, and OpenAI to build a document question-answering flow that handles both frontend experience and backend retrieval logic."
                    outcomeTitle="What this delivered"
                    outcomeBullets={[
                        'A strong example of AI chatbot and document workflow development',
                        'A clear proof page for searchers comparing AI developer options',
                        'Better internal SEO alignment with the AI development service page',
                    ]}
                    primaryCtaLabel="Need a document AI product?"
                    primaryCtaHref="/#contact"
                    proofLinks={[
                        { label: 'View the AI development service page', href: '/services/ai-development' },
                        { label: 'View the FastAPI service page', href: '/services/fastapi-development' },
                    ]}
                />
            )}
            <Footer />
            <Script id="schema-softwareapp-qpdf" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        </div>
    );
}
