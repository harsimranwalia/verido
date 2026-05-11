import Link from "next/link";
import { THOUGHT_LEADERSHIP_ARTICLES } from "@/components/data/thought-leadership-data";

export const metadata = {
  title: "Thought Leadership — 42Works",
  description: "Perspectives on AI, cloud modernization, and digital operating models.",
};

export default function ThoughtLeadershipPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_48%,#f8fbff_100%)] px-6 py-24 md:px-12 md:py-28 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">Thought Leadership</p>
        <h1 className="mb-4 font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold tracking-tight text-slate-900">
          Perspectives That Matter
        </h1>
        <p className="mb-14 max-w-3xl text-slate-600">
          Strategic viewpoints and practical frameworks for building resilient, AI-enabled systems.
        </p>

        <div className="grid gap-7 md:grid-cols-2">
          {THOUGHT_LEADERSHIP_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm"
            >
              <img src={article.image} alt={article.title} className="h-60 w-full object-cover" />
              <div className="p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600">{article.category}</p>
                <h2 className="mb-3 font-heading text-xl font-bold leading-snug text-slate-900">{article.title}</h2>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                <Link
                  href={`/thought-leadership/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-indigo-700 transition-colors hover:text-indigo-900"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
