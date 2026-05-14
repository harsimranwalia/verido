import ContactPage from "../../components/ContactPage";
import { generateMetadataOverride } from '../../lib/metadata';

export const metadata = generateMetadataOverride({
  title: 'Contact | 42Works',
  description: 'Get in touch with the 42Works team. We\'d love to hear about your project and discuss how we can help your business.',
  openGraph: {
    title: 'Contact | 42Works',
    description: 'Get in touch with the 42Works team. We\'d love to hear about your project and discuss how we can help your business.',
  },
  twitter: {
    title: 'Contact | 42Works',
    description: 'Get in touch with the 42Works team. We\'d love to hear about your project and discuss how we can help your business.',
  },
});

export default function ContactRoute() {
  return <ContactPage />;
}
