import PrivacyPage from "../../components/PrivacyPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Privacy Policy | Verido',
  description: 'Verido Privacy Policy — how we collect, use, and protect your personal data across our Agentic AI solutions.',
  openGraph: {
    title: 'Privacy Policy | Verido',
    description: 'Verido Privacy Policy — how we collect, use, and protect your personal data across our Agentic AI solutions.',
  },
  twitter: {
    title: 'Privacy Policy | Verido',
    description: 'Verido Privacy Policy — how we collect, use, and protect your personal data across our Agentic AI solutions.',
  },
});

export default function Privacy() {
  return <PrivacyPage />;
}
