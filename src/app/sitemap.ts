import { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';

function getBlogRoutes(): string[] {
    const blogRoot = path.join(process.cwd(), 'src/app/blog');
    if (!fs.existsSync(blogRoot)) return [];
    const entries = fs.readdirSync(blogRoot, { withFileTypes: true });
    const slugs: string[] = [];

    for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const pageTsx = path.join(blogRoot, ent.name, 'page.tsx');
        const pageTs = path.join(blogRoot, ent.name, 'page.ts');
        if (fs.existsSync(pageTsx) || fs.existsSync(pageTs)) {
            slugs.push(`/blog/${ent.name}`);
        }
    }
    return slugs;
}

function getProjectRoutes(): string[] {
    const projRoot = path.join(process.cwd(), 'src/app/projects');
    if (!fs.existsSync(projRoot)) return [];
    const entries = fs.readdirSync(projRoot, { withFileTypes: true });
    const slugs: string[] = [];
    for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const pageTsx = path.join(projRoot, ent.name, 'page.tsx');
        const pageTs = path.join(projRoot, ent.name, 'page.ts');
        if (fs.existsSync(pageTsx) || fs.existsSync(pageTs)) {
            slugs.push(`/projects/${ent.name}`);
        }
    }
    return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = 'https://mwadev.me';
    const now = new Date().toISOString();

    const staticRoutes = ['/', '/blog', '/resume.html'];
    const blogRoutes = getBlogRoutes();
    const projectRoutes = getProjectRoutes();

    return [
        ...staticRoutes.map((route) => ({
            url: `${siteUrl}${route}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: route === '/' ? 1.0 : route === '/resume.html' ? 0.7 : 0.8,
        })),
        ...blogRoutes.map((route) => ({
            url: `${siteUrl}${route}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        ...projectRoutes.map((route) => ({
            url: `${siteUrl}${route}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];
}
