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

function getServiceRoutes(): string[] {
    const servicesRoot = path.join(process.cwd(), 'src/app/services');
    if (!fs.existsSync(servicesRoot)) return [];
    const entries = fs.readdirSync(servicesRoot, { withFileTypes: true });
    const slugs: string[] = [];
    for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const pageTsx = path.join(servicesRoot, ent.name, 'page.tsx');
        const pageTs = path.join(servicesRoot, ent.name, 'page.ts');
        if (fs.existsSync(pageTsx) || fs.existsSync(pageTs)) {
            slugs.push(`/services/${ent.name}`);
        }
    }

    const rootPage = path.join(servicesRoot, 'page.tsx');
    const rootPageTs = path.join(servicesRoot, 'page.ts');
    if (fs.existsSync(rootPage) || fs.existsSync(rootPageTs)) {
        slugs.unshift('/services');
    }

    return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = 'https://mwadev.me';
    const now = new Date().toISOString();

    const staticRoutes = ['/', '/blog', '/resume.html', '/Muhammed_Waqar_Ahmed_CV.pdf', '/robots.txt', '/llms.txt'];
    const blogRoutes = getBlogRoutes();
    const projectRoutes = getProjectRoutes();
    const serviceRoutes = getServiceRoutes();

    return [
        ...staticRoutes.map((route) => ({
            url: `${siteUrl}${route}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority:
                route === '/'
                    ? 1.0
                    : route === '/resume.html' || route === '/Muhammed_Waqar_Ahmed_CV.pdf'
                      ? 0.7
                      : 0.8,
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
        ...serviceRoutes.map((route) => ({
            url: `${siteUrl}${route}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: route === '/services' ? 0.9 : 0.75,
        })),
    ];
}
