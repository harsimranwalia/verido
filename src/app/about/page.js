import AboutPage from "../../components/AboutPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'About | Verido',
  description: 'Verido is a global, AI-powered Experience Engineering Company helping businesses leverage AI visibility and measurable impact.',
  openGraph: {
    title: 'About | Verido',
    description: 'Verido is a global, AI-powered Experience Engineering Company helping businesses leverage AI visibility and measurable impact.',
  },
  twitter: {
    title: 'About | Verido',
    description: 'Verido is a global, AI-powered Experience Engineering Company helping businesses leverage AI visibility and measurable impact.',
  },
});

export default function About() {
  return <AboutPage />;
}
