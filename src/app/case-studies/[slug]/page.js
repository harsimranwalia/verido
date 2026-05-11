import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, CASE_STUDIES_BY_SLUG } from "@/components/data/case-studies-data";

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES_BY_SLUG[slug];
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
  };
}

function BulletSection({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="rounded-2xl border border-white/70 bg-white/85 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.07)]">
      <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">{title}</h2>
      <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 text-indigo-600">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES_BY_SLUG[slug];

  if (!study) notFound();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_48%,#f8fbff_100%)] px-6 py-24 md:px-12 md:py-28 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/case-studies"
          className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-700 hover:text-indigo-900"
        >
          ← Back to Case Studies
        </Link>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">{study.category}</p>
        <h1 className="mb-4 font-heading text-[clamp(2rem,5vw,3.6rem)] font-bold leading-tight tracking-tight text-slate-900">
          {study.title}
        </h1>
        {study.subtitle ? <p className="mb-6 text-lg font-semibold text-slate-700">{study.subtitle}</p> : null}
        <p className="mb-10 max-w-4xl text-slate-600">{study.summary}</p>

        <img
          src={study.image}
          alt={study.title}
          className="mb-10 h-[340px] w-full rounded-2xl border border-white/70 bg-slate-100 object-contain p-3 shadow-[0_20px_50px_rgba(15,23,42,0.14)] md:h-[440px]"
        />

        {study.overview?.length ? (
          <section className="mb-8 rounded-2xl border border-white/70 bg-white/85 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.07)]">
            <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">Project Overview</h2>
            <div className="space-y-3 text-sm leading-relaxed text-slate-700">
              {study.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ) : null}

        <div className="grid gap-7 md:grid-cols-2">
          <BulletSection title="Scope & Responsibilities" items={study.responsibilities} />
          <BulletSection title="Key Features" items={study.keyFeatures} />
          <BulletSection title="Technology Highlights" items={study.techHighlights} />
          <BulletSection title="Technical Considerations" items={study.technicalConsiderations} />
        </div>

        {study.outcome ? (
          <section className="mt-8 rounded-2xl border border-indigo-200 bg-white/90 p-6 shadow-[0_12px_30px_rgba(79,70,229,0.12)]">
            <h2 className="mb-3 font-heading text-xl font-bold text-slate-900">Outcome</h2>
            <p className="text-sm leading-relaxed text-slate-700">{study.outcome}</p>
          </section>
        ) : null}
      </div>
    </main>
  );
}
