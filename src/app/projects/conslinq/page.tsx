import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { projects } from '@/data/projects';
import ProjectCaseStudy from '@/components/sections/ProjectCaseStudy';

export const metadata: Metadata = {
    title: 'Conslinq — Multi-Tenant Case Management Platform',
    description:
        'Conslinq is a live, tenant-aware immigration case management platform built with Next.js, FastAPI, Supabase PostgreSQL, Railway, and Vercel.',
    alternates: { canonical: '/projects/conslinq' },
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
            {project && (
                <ProjectCaseStudy
                    project={project}
                    eyebrow="Case Study"
                    intro="Conslinq is a tenant-aware case management platform that shows how I build secure, business-focused web apps for complex workflows."
                    challengeTitle="The challenge"
                    challengeBody="The system needed to support multiple roles, data isolation, and secure access to sensitive immigration workflows without sacrificing usability or speed."
                    solutionTitle="The solution"
                    solutionBody="I structured the app with Next.js on the frontend, FastAPI for backend logic, and Supabase PostgreSQL for secure, tenant-aware data access."
                    outcomeTitle="What this delivered"
                    outcomeBullets={[
                        'A clearer product story for users and stakeholders',
                        'Secure multi-role access patterns with row-level security',
                        'A strong proof page for people searching for Next.js and FastAPI work',
                    ]}
                    primaryCtaLabel="Need a similar multi-tenant product?"
                    primaryCtaHref="/#contact"
                    proofLinks={[
                        { label: 'View the Next.js service page', href: '/services/nextjs-development' },
                        { label: 'View the Supabase service page', href: '/services/supabase-development' },
                    ]}
                />
            )}
            <Footer />
            <Script
                id="schema-softwareapp-conslinq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
            />
        </div>
    );
}
