// src/lib/metadata.js
import { siteUrl } from './site-url';

export const baseMetadata = {
  title: 'Verido',
  description: 'Verido is a global, AI-powered Experience Engineering Company.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Verido',
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Verido - AI Visibility, Measurable',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verido',
    description: 'Verido is a global, AI-powered Experience Engineering Company.',
    images: [`${siteUrl}/opengraph-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export function generateMetadataOverride(overrides) {
  return {
    ...baseMetadata,
    ...overrides,
    // Ensure Open Graph and Twitter images are absolute URLs
    openGraph: {
      ...baseMetadata.openGraph,
      ...(overrides.openGraph || {}),
      images: overrides.openGraph?.images
        ? overrides.openGraph.images.map(img => ({
            ...img,
            url: img.url.startsWith('http') ? img.url : `${siteUrl}${img.url}`,
          }))
        : baseMetadata.openGraph.images,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...(overrides.twitter || {}),
      images: overrides.twitter?.images
        ? overrides.twitter.images.map(img =>
            img.startsWith('http') ? img : `${siteUrl}${img}`
          )
        : baseMetadata.twitter.images,
    },
    alternates: {
      ...baseMetadata.alternates,
      ...(overrides.alternates || {}),
    },
  };
}