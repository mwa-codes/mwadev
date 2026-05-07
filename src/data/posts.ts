export type Post = {
    slug: string;
    title: string;
    description: string;
    publishedAt: string; // ISO date
    modifiedAt?: string; // ISO date
    ogTitle?: string;
    ogSubtitle?: string;
};

export const posts: Post[] = [
    {
        slug: 'technical-seo-checklist-nextjs-service-sites',
        title: 'Technical SEO Checklist for Next.js Service Websites',
        description:
            'A practical SEO checklist for Next.js service websites: metadata, internal links, Core Web Vitals, and content structure that improves visibility.',
        publishedAt: '2026-05-08',
        modifiedAt: '2026-05-08',
        ogTitle: 'Technical SEO for Next.js Sites',
        ogSubtitle: 'Indexing • Core Web Vitals • Internal links',
    },
    {
        slug: 'nextjs-fastapi-saas-mvp-checklist',
        title: 'Next.js + FastAPI SaaS MVP Checklist (Before You Build)',
        description:
            'A founder-friendly checklist for planning a SaaS MVP with Next.js and FastAPI, with clear scope, architecture, and launch decisions.',
        publishedAt: '2026-05-08',
        modifiedAt: '2026-05-08',
        ogTitle: 'Next.js + FastAPI MVP Checklist',
        ogSubtitle: 'MVP scope • Backend choices • Launch mistakes',
    },
    {
        slug: 'hire-nextjs-developer-remote-contract-work',
        title: 'Hire a Next.js Developer for Remote Contract Work',
        description:
            'What to look for when hiring a Next.js developer, how to evaluate delivery speed and SEO quality, and how to choose someone who can ship production-ready results.',
        publishedAt: '2026-03-28',
        modifiedAt: '2026-04-10',
        ogTitle: 'Hire a Next.js Developer',
        ogSubtitle: 'Remote contract work • SEO • Production delivery',
    },
    {
        slug: 'fastapi-supabase-development-services',
        title: 'FastAPI and Supabase Development: What to Hire For',
        description:
            'A practical guide to choosing FastAPI and Supabase for SaaS apps, APIs, and AI products, with advice on architecture, reliability, and scale.',
        publishedAt: '2026-03-20',
        modifiedAt: '2026-04-10',
        ogTitle: 'FastAPI + Supabase Development',
        ogSubtitle: 'API architecture • PostgreSQL • SaaS systems',
    },
    {
        slug: 'ultimate-guide-ai-development-tools',
        title: 'Ultimate Guide to AI Development Tools in 2025',
        description:
            'Build faster with the best AI development tools. Compare IDEs, codegen, testing, and CI/CD automation for real ROI in 2025.',
        publishedAt: '2025-10-01',
        modifiedAt: '2025-10-12',
        ogTitle: 'AI Development Tools in 2025',
        ogSubtitle: 'AI-powered IDEs • Copilot vs Tabnine • Automation',
    },
];
