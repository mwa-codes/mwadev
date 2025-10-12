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
