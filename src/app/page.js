import CiklumPage from "../components/CiklumPage";
import { generateMetadataOverride } from '../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Home | Verido',
  description: 'Verido is a global, AI-powered Experience Engineering Company. Track how your clients show up across AI platforms. Uncover missed visibility and prove impact with data you can actually report.',
  openGraph: {
    title: 'Home | Verido',
    description: 'Verido is a global, AI-powered Experience Engineering Company. Track how your clients show up across AI platforms. Uncover missed visibility and prove impact with data you can actually report.',
  },
  twitter: {
    title: 'Home | Verido',
    description: 'Verido is a global, AI-powered Experience Engineering Company. Track how your clients show up across AI platforms. Uncover missed visibility and prove impact with data you can actually report.',
  },
});

export default function Home() {
  return <CiklumPage />;
}
