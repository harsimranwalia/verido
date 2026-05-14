import AboutPage from "../../components/AboutPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'About | 42Works',
  description: '42Works is a global, AI-powered Experience Engineering Company helping businesses leverage AI visibility and measurable impact.',
  openGraph: {
    title: 'About | 42Works',
    description: '42Works is a global, AI-powered Experience Engineering Company helping businesses leverage AI visibility and measurable impact.',
  },
  twitter: {
    title: 'About | 42Works',
    description: '42Works is a global, AI-powered Experience Engineering Company helping businesses leverage AI visibility and measurable impact.',
  },
});

export default function About() {
  return <AboutPage />;
}
