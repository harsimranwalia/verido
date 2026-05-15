import HelpPage from "../../components/HelpPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Help Center | 42Works',
  description: 'Visit our help center for guides, FAQs, and support resources for 42Works AI and Web3 solutions.',
  openGraph: {
    title: 'Help Center | 42Works',
    description: 'Visit our help center for guides, FAQs, and support resources for 42Works AI and Web3 solutions.',
  },
  twitter: {
    title: 'Help Center | 42Works',
    description: 'Visit our help center for guides, FAQs, and support resources for 42Works AI and Web3 solutions.',
  },
});

export default function Help() {
  return <HelpPage />;
}
