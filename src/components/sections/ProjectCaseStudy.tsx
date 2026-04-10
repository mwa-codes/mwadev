import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/data/projects';

type ProjectCaseStudyProps = {
    project: Project;
    eyebrow: string;
    intro: string;
    challengeTitle: string;
    challengeBody: string;
    solutionTitle: string;
    solutionBody: string;
    outcomeTitle: string;
    outcomeBullets: string[];
    primaryCtaLabel: string;
    primaryCtaHref: string;
    proofLinks: Array<{ label: string; href: string }>;
};

export default function ProjectCaseStudy({
    project,
    eyebrow,
    intro,
    challengeTitle,
    challengeBody,
    solutionTitle,
    solutionBody,
    outcomeTitle,
    outcomeBullets,
    primaryCtaLabel,
    primaryCtaHref,
    proofLinks,
}: ProjectCaseStudyProps) {
    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <nav className="mb-6 text-sm">
                <Link href="/#projects" className="text-blue-600 hover:underline">
                    ← Back to projects
                </Link>
            </nav>

            <header className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{eyebrow}</p>
                <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                    {intro}
                </p>
            </header>

            <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 shadow-sm">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            <section className="grid gap-6 md:grid-cols-2 mb-10">
                <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{challengeTitle}</h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">{challengeBody}</p>
                </article>
                <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{solutionTitle}</h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">{solutionBody}</p>
                </article>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] mb-10">
                <article className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                    <h2 className="text-2xl font-bold">{outcomeTitle}</h2>
                    <ul className="mt-4 space-y-3 text-blue-100 list-disc pl-5">
                        {outcomeBullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                </article>
                <aside className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why this matters</h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        This case study is written to help search engines and buyers understand the problem, the solution, and the business value in one clear page.
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                        {proofLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 px-4 py-3 font-semibold text-blue-700 dark:text-blue-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </aside>
            </section>

            <section className="mb-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project details</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <article>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key features</h3>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                            {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </article>
                    <article>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Best fit services</h3>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                            <li>Next.js full-stack development</li>
                            <li>FastAPI backend development</li>
                            <li>Supabase and PostgreSQL architecture</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{primaryCtaLabel}</h2>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                    If you want similar work for your product, the best next step is to talk through scope, goals, and timeline.
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                    <Link href={primaryCtaHref} className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
                        Discuss a project
                    </Link>
                    <Link href="/services" className="rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        View services
                    </Link>
                </div>
            </section>
        </main>
    );
}