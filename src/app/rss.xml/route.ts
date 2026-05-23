// src/app/rss.xml/route.ts
import { NextResponse } from 'next/server';
import { siteUrl } from '../../lib/site-url';
import { THOUGHT_LEADERSHIP_ARTICLES } from '../../components/data/thought-leadership-data';

export async function GET() {
  const baseUrl = siteUrl;
  
  // Generate RSS XML
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Verido Thought Leadership</title>
    <link>${baseUrl}/thought-leadership</link>
    <description>Perspectives on AI, cloud modernization, and digital operating models from Verido</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    
    ${THOUGHT_LEADERSHIP_ARTICLES.map(article => `
    <item>
      <title>${article.title}</title>
      <link>${baseUrl}/thought-leadership/${article.slug}</link>
      <description>${article.excerpt}</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/thought-leadership/${article.slug}</guid>
      <category>${article.category}</category>
    </item>`).join('')}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}