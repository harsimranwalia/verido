import CareersPage from "../../components/CareersPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Careers | Verido',
  description: 'Join Verido — explore open positions including Associate Product Manager, Agentic AI Architect, and Community Development & Outreach Executive.',
  openGraph: {
    title: 'Careers | Verido',
    description: 'Join Verido — explore open positions including Associate Product Manager, Agentic AI Architect, and Community Development & Outreach Executive.',
  },
  twitter: {
    title: 'Careers | Verido',
    description: 'Join Verido — explore open positions including Associate Product Manager, Agentic AI Architect, and Community Development & Outreach Executive.',
  },
});

export default function Careers() {
  return <CareersPage />;
}
