// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { siteUrl } from '../lib/site-url';
import { SERVICES_DATA } from '../components/data/services-data';
import { THOUGHT_LEADERSHIP_ARTICLES } from '../components/data/thought-leadership-data';
import { CASE_STUDIES } from '../components/data/case-studies-data';
import { INDUSTRIES_DATA } from '../components/data/industries-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  
  // Static routes
  const staticRoutes = ['', '/about', '/contact', '/case-studies', '/thought-leadership', '/services', '/industries', '/careers', '/help', '/privacy', '/terms'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (
        route === ''
          ? 'daily'
          : ['/about', '/contact'].includes(route)
            ? 'monthly'
            : 'weekly'
      ) as 'daily' | 'monthly' | 'weekly',
      priority: 
        route === '' 
          ? 1.0 
          : ['/about', '/contact'].includes(route) 
            ? 0.6 
            : 0.9,
    })
  );

  // Services routes
  const servicesRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9 as const,
  }));

  // Case studies routes
  const caseStudiesRoutes = CASE_STUDIES.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8 as const,
  }));

  // Thought leadership routes
  const thoughtLeadershipRoutes = THOUGHT_LEADERSHIP_ARTICLES.map((article) => ({
    url: `${baseUrl}/thought-leadership/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7 as const,
  }));

  // Industries routes
  const industriesRoutes = Object.keys(INDUSTRIES_DATA).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8 as const,
  }));

  // Combine all routes
  return [
    ...staticRoutes,
    ...servicesRoutes,
    ...caseStudiesRoutes,
    ...thoughtLeadershipRoutes,
    ...industriesRoutes,
  ];
}