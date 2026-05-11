import Link from "next/link";
import { CASE_STUDIES } from "@/components/data/case-studies-data";

export const metadata = {
  title: "Case Studies — 42Works",
  description: "Selected systems designed, built, and taken to production.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_48%,#f8fbff_100%)] px-6 py-24 md:px-12 md:py-28 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">Our Work</p>
        <h1 className="mb-4 font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold tracking-tight text-slate-900">
          Case Studies
        </h1>
        <p className="mb-14 max-w-3xl text-slate-600">
          Selected systems we&apos;ve designed, built, and taken to production.
        </p>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.slug}
              className="overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm"
            >
              <img
                src={study.image}
                alt={study.title}
                className="h-56 w-full object-contain bg-slate-100 p-2"
              />
              <div className="p-5">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600">
                  {study.category}
                </p>
                <h2 className="mb-3 font-heading text-lg font-bold text-slate-900">{study.title}</h2>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">{study.summary}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-indigo-700 transition-colors hover:text-indigo-900"
                >
                  Open Case Study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
