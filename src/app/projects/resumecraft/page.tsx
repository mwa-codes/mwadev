import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { projects } from '@/data/projects';
import ProjectCaseStudy from '@/components/sections/ProjectCaseStudy';

export const metadata: Metadata = {
    title: 'ResumeCraft — AI Resume Builder | Next.js, FastAPI, Supabase',
    description:
        'AI-powered resume builder using Next.js, FastAPI, and Supabase for secure, real-time resume guidance. Deployed on Vercel for global performance.',
    alternates: { canonical: '/projects/resumecraft' },
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
    "name": "ResumeCraft",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description": "An AI-powered resume builder using Next.js, FastAPI, and Supabase for secure storage, enabling tailored, production-ready resumes in minutes.",
    "url": "https://mwadev.me/projects/resumecraft",
    "author": {
        "@type": "Person",
        "name": "Muhammed Waqar Ahmed",
        "url": "https://mwadev.me"
    }
};

export default function Page() {
    const project = projects.find(p => p.slug === 'resumecraft');
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            {project && (
                <ProjectCaseStudy
                    project={project}
                    eyebrow="Case Study"
                    intro="ResumeCraft is a strong example of an AI-focused product where the goal was to turn a complex workflow into a clear, user-friendly experience."
                    challengeTitle="The challenge"
                    challengeBody="The product needed to guide users through resume analysis and feedback without making the experience feel overwhelming or technical."
                    solutionTitle="The solution"
                    solutionBody="I combined Next.js, FastAPI, Supabase, and OpenAI integration to create a responsive product flow that supports analysis, storage, and delivery."
                    outcomeTitle="What this delivered"
                    outcomeBullets={[
                        'A clear proof point for AI product development',
                        'A cleaner conversion story for job seekers and hiring managers',
                        'A relevant landing page for Next.js and AI search intent',
                    ]}
                    primaryCtaLabel="Need an AI product like this?"
                    primaryCtaHref="/#contact"
                    proofLinks={[
                        { label: 'View the AI development service page', href: '/services/ai-development' },
                        { label: 'View the Next.js service page', href: '/services/nextjs-development' },
                    ]}
                />
            )}
            <Footer />
            <Script id="schema-softwareapp" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        </div>
    );
}
