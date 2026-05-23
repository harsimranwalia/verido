import TermsPage from "../../components/TermsPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Terms & Conditions | Verido',
  description: 'Verido Terms & Conditions — the terms governing your use of our Agentic AI engineering services and website.',
  openGraph: {
    title: 'Terms & Conditions | Verido',
    description: 'Verido Terms & Conditions — the terms governing your use of our Agentic AI engineering services and website.',
  },
  twitter: {
    title: 'Terms & Conditions | Verido',
    description: 'Verido Terms & Conditions — the terms governing your use of our Agentic AI engineering services and website.',
  },
});

export default function Terms() {
  return <TermsPage />;
}
