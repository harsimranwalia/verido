import CareersPage from "../../components/CareersPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Careers | 42Works',
  description: 'Join 42Works — explore open positions including Associate Product Manager, Agentic AI Architect, and Community Development & Outreach Executive.',
  openGraph: {
    title: 'Careers | 42Works',
    description: 'Join 42Works — explore open positions including Associate Product Manager, Agentic AI Architect, and Community Development & Outreach Executive.',
  },
  twitter: {
    title: 'Careers | 42Works',
    description: 'Join 42Works — explore open positions including Associate Product Manager, Agentic AI Architect, and Community Development & Outreach Executive.',
  },
});

export default function Careers() {
  return <CareersPage />;
}
