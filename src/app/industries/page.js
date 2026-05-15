import { INDUSTRIES_DATA } from "../../components/data/industries-data";
import { IndustriesListingPage } from "../../components/IndustriesListingPage";

export const metadata = {
  title: "Industries We Serve — 42Works",
  description:
    "From banking and healthcare to telecom and energy, we deliver AI-powered solutions tailored to your industry.",
  openGraph: {
    title: "Industries We Serve — 42Works",
    description:
      "From banking and healthcare to telecom and energy, we deliver AI-powered solutions tailored to your industry.",
  },
};

export default function IndustriesPage() {
  const industries = Object.entries(INDUSTRIES_DATA).map(([slug, data]) => ({
    slug,
    badge: data.badge,
    title: data.title,
    subtitle: data.subtitle,
    valueStatement: data.valueStatement,
    heroImage: data.heroImage,
  }));

  return <IndustriesListingPage industries={industries} />;
}
