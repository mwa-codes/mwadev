export type Project = {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: 'ai' | 'web' | 'iot';
    status: 'live' | 'in-development' | 'planned' | 'concept';
    github: string;
    demo: string;
    features: string[];
    screenshots?: { src: string; alt: string }[];
};

export const projects: Project[] = [
    {
        id: 'ai-kit-tools',
        slug: 'aikittools',
        title: 'AI Kit Tools',
        description:
            'Free AI-powered career tools and utilities for job seekers and developers. Generate cover letters, optimize resume bullets, check ATS compatibility, prep for interviews, and access utility tools—all powered by OpenAI.',
        image: '/images/projects/aikittools.png',
        tags: ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind CSS', 'SaaS'],
        category: 'ai',
        status: 'live',
        github: 'https://github.com/mwa-codes/aikittools',
        demo: 'https://www.aikittools.com',
        features: [
            'AI Cover Letter Generator',
            'Resume Bullet Point Generator',
            'ATS Resume Checker',
            'Interview Question Generator',
            'LinkedIn Summary Generator',
            'AI Text Summarizer',
            'Developer utilities (Word Counter, Case Converter, Invoice Generator, JSON Formatter, QR Code Generator)',
            'No signup required - runs in browser',
        ],
        screenshots: [
            { src: '/images/projects/aikittools.png', alt: 'AI Kit Tools interface' },
        ],
    },
    {
        id: 'conslinq-case-management-platform',
        slug: 'conslinq',
        title: 'Conslinq',
        description:
            'Conslinq is a live, tenant-aware immigration case management platform built for admins, vendors, resellers, team members, and clients to manage complete case workflows in one secure system.',
        image: '/images/projects/Conslinq.png',
        tags: ['Next.js', 'FastAPI', 'TypeScript', 'Supabase', 'PostgreSQL', 'Railway', 'Vercel', 'Resend'],
        category: 'web',
        status: 'live',
        github: '#',
        demo: 'https://www.consulinq.com',
        features: [
            'Multi-role authentication and authorization',
            'Tenant-aware routing and data isolation with row-level security',
            'FastAPI backend on Railway and Next.js frontend on Vercel',
            'Supabase PostgreSQL with JWT-based auth and protected APIs',
            'Operational diagnostics endpoints for environment and connectivity checks',
        ],
        screenshots: [
            { src: '/images/projects/Conslinq.png', alt: 'Conslinq login and product overview' },
        ],
    },
    {
        id: 'ai-pdf-chatbot',
        slug: 'qpdf',
        title: 'AI PDF Chatbot',
        description:
            'QPDF is a full-stack AI PDF chatbot that lets users interact with documents using natural language. It extracts and chunks PDF content, generates embeddings, and semantically matches user queries to relevant document sections.',
        image: '/images/projects/QPDF.png',
        tags: ['Next.js', 'OpenAI', 'FastAPI', 'PostgreSQL'],
        category: 'ai',
        status: 'live',
        github: 'https://github.com/mwa-codes/QPDF',
        demo: 'https://www.qpdf.tech',
        features: [
            'PDF document processing and chunking',
            'Vector embeddings for semantic search',
            'Real-time chat interface',
            'Context-aware responses',
        ],
        screenshots: [
            { src: '/images/projects/QPDF.png', alt: 'QPDF interface' },
        ],
    },
    {
        id: 'xaqiz',
        slug: 'xaqiz',
        title: 'Anonymous Confession Platform with AI Transformations',
        description:
            'Xaqiz is a live anonymous confession platform where users can share their deepest secrets without revealing their identity. The platform uses AI to transform each confession into mysterious dark poetry, ancient prophecies, short stories, or haunting rap verses.',
        image: '/images/projects/xaqiz.png',
        tags: ['Next.js', 'FastAPI', 'Supabase', 'AI', 'SaaS'],
        category: 'ai',
        status: 'live',
        github: 'https://github.com/mwa-codes/xaqiz',
        demo: 'https://www.xaqiz.com',
        features: [
            'Anonymous submission system',
            'Real-time AI transformation',
            'Responsive UI with dark aesthetic',
            'FastAPI + Supabase backend',
        ],
        screenshots: [
            { src: '/images/projects/xaqiz.png', alt: 'Xaqiz UI' },
        ],
    },
    {
        id: 'ai-resumecraft',
        slug: 'resumecraft',
        title: 'Complete AI Resume Analysis Platform',
        description:
            'Production-ready AI Resume Analysis Platform with Guest Mode, user dashboards, and export features. Built with Next.js 15, OpenAI, Supabase, and Tailwind CSS.',
        image: '/images/projects/ResumeCraft.png',
        tags: ['Next.js', 'SaaS Development', 'Supabase', 'AI Development', 'Vercel'],
        category: 'ai',
        status: 'live',
        github: 'https://github.com/mwa-codes/ResumeCraft',
        demo: 'https://resumecraft-rose.vercel.app',
        features: [
            'Guest Mode instant analysis',
            'User dashboards and history',
            'Export results as PDF/text',
            'Responsive design',
        ],
        screenshots: [
            { src: '/images/projects/ResumeCraft.png', alt: 'ResumeCraft UI' },
        ],
    },
    {
        id: 'ai-math-tutor',
        slug: 'math-tutor',
        title: 'AI-Powered Math Teaching Assistant for WordPress',
        description:
            'WordPress site with an AI Math Assistant using OpenAI API—solves and explains problems from arithmetic to calculus, with real-time feedback.',
        image: '/images/projects/Math-tutor.png',
        tags: ['WordPress Development', 'API Integration', 'Artificial Intelligence', 'Responsive Design'],
        category: 'web',
        status: 'live',
        github: '#',
        demo: 'https://artinvtech.com/math-ai/',
        features: [
            'Step-by-step explanations',
            'Covers topics up to calculus',
            'Responsive, mobile-friendly',
        ],
        screenshots: [
            { src: '/images/projects/Math-tutor.png', alt: 'AI Math Tutor UI' },
        ],
    },
    {
        id: 'BartanERP',
        slug: 'bartanerp',
        title: 'BartanERP – Lightweight ERP for Small Manufacturers',
        description:
            'Lightweight, modular ERP designed for small-scale manufacturing units like aluminum utensil factories—digitizes everyday operations.',
        image: '/images/projects/BatanERP.png',
        tags: ['React', 'PostgreSQL', 'FastAPI', 'Tailwind'],
        category: 'web',
        status: 'in-development',
        github: 'https://github.com/mwa-codes/BartanERP.git',
        demo: '#',
        features: [
            'Attendance and employee management',
            'Inventory and stock tracking',
            'Process monitoring and orders',
            'Reporting dashboards',
        ],
        screenshots: [
            { src: '/images/projects/BatanERP.png', alt: 'BartanERP UI' },
        ],
    },
];
