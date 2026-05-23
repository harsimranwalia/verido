import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "../components/providers/LenisProvider.jsx";
import { Header } from "../components/header.jsx";
import { FooterSection } from "../components/sections/FooterSection.jsx";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

import { baseMetadata } from '../lib/metadata';

export const metadata = {
  ...baseMetadata,
  title: "Verido — AI Visibility, Measurable",
  description:
    "Track how your clients show up across AI platforms. Uncover missed visibility and prove impact with data you can actually report.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Verido — AI Visibility, Measurable",
    description:
      "Track how your clients show up across AI platforms. Uncover missed visibility and prove impact with data you can actually report.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Verido — AI Visibility, Measurable",
    description:
      "Track how your clients show up across AI platforms. Uncover missed visibility and prove impact with data you can actually report.",
  },
  // Additional metadata for theme-color and icons
  themeColor: '#4338ca',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  // RSS feed link
  links: [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: '/rss.xml',
      title: 'Verido Thought Leadership RSS Feed',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} antialiased`}
    >
      <body className="font-sans">
        <LenisProvider>
          <div className="fixed left-0 top-0 z-50 w-full px-4 pt-4 pb-3 md:px-8 md:pt-6 md:pb-4">
            <Header />
          </div>
          <div className="grain-overlay" aria-hidden="true" />
          <div>
            {children}
          </div>
          <FooterSection />
        </LenisProvider>
      </body>
    </html>
  );
}
