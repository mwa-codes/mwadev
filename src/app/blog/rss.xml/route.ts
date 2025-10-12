import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';

const SITE = 'https://mwadev.me';

export async function GET() {
    const items = posts
        .map((p) => {
            const url = `${SITE}/blog/${p.slug}`;
            const pub = new Date(p.publishedAt).toUTCString();
            const mod = p.modifiedAt ? new Date(p.modifiedAt).toUTCString() : undefined;
            return `
  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${url}</link>
    <guid>${url}</guid>
    <pubDate>${pub}</pubDate>
    ${mod ? `<lastBuildDate>${mod}</lastBuildDate>` : ''}
    <description><![CDATA[${p.description}]]></description>
  </item>`;
        })
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title><![CDATA[M W A Dev — Blog]]></title>
    <link>${SITE}/blog</link>
    <description><![CDATA[Insights on AI development tools, full-stack engineering, and productivity.]]></description>
    <language>en-us</language>
    <ttl>60</ttl>
    ${items}
  </channel>
</rss>`;

    return new NextResponse(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
        },
    });
}
