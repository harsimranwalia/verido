import HelpPage from "../../components/HelpPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Help Center | Verido',
  description: 'Visit our help center for guides, FAQs, and support resources for Verido Agentic AI solutions.',
  openGraph: {
    title: 'Help Center | Verido',
    description: 'Visit our help center for guides, FAQs, and support resources for Verido Agentic AI solutions.',
  },
  twitter: {
    title: 'Help Center | Verido',
    description: 'Visit our help center for guides, FAQs, and support resources for Verido Agentic AI solutions.',
  },
});

export default function Help() {
  return <HelpPage />;
}
