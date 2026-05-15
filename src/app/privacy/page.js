import PrivacyPage from "../../components/PrivacyPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Privacy Policy | 42Works',
  description: '42Works Privacy Policy — how we collect, use, and protect your personal data across our AI and Web3 solutions.',
  openGraph: {
    title: 'Privacy Policy | 42Works',
    description: '42Works Privacy Policy — how we collect, use, and protect your personal data across our AI and Web3 solutions.',
  },
  twitter: {
    title: 'Privacy Policy | 42Works',
    description: '42Works Privacy Policy — how we collect, use, and protect your personal data across our AI and Web3 solutions.',
  },
});

export default function Privacy() {
  return <PrivacyPage />;
}
