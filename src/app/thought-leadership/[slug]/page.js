import Link from "next/link";
import { notFound } from "next/navigation";
import { THOUGHT_LEADERSHIP_ARTICLES, THOUGHT_LEADERSHIP_BY_SLUG } from "@/components/data/thought-leadership-data";

export async function generateStaticParams() {
  return THOUGHT_LEADERSHIP_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = THOUGHT_LEADERSHIP_BY_SLUG[slug];
  if (!article) return {};
  return {
    title: `${article.title} — 42Works`,
    description: article.excerpt,
  };
}

function KeyPointsSection({ points }) {
  if (!points?.length) return null;

  return (
    <section className="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-6 shadow-[0_12px_30px_rgba(79,70,229,0.1)]">
      <h2 className="mb-4 font-heading text-lg font-bold text-slate-900">Key Takeaways</h2>
      <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 text-indigo-600 font-bold">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ThoughtLeadershipDetailPage({ params }) {
  const { slug } = await params;
  const article = THOUGHT_LEADERSHIP_BY_SLUG[slug];

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_48%,#f8fbff_100%)] px-6 py-24 md:px-12 md:py-28 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/thought-leadership"
          className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-700 hover:text-indigo-900"
        >
          ← Back to Thought Leadership
        </Link>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">{article.category}</p>
        <h1 className="mb-4 font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight tracking-tight text-slate-900">
          {article.title}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-slate-600">{article.excerpt}</p>

        {article.tags?.length ? (
          <div className="mb-8 flex gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <img
          src={article.image}
          alt={article.title}
          className="mb-10 w-full rounded-2xl border border-white/70 bg-slate-100 object-cover shadow-[0_20px_50px_rgba(15,23,42,0.14)]"
          style={{ height: "400px" }}
        />

        {article.content?.length ? (
          <div className="space-y-5">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        <div className="mt-10">
          <KeyPointsSection points={article.keyPoints} />
        </div>
      </div>
    </main>
  );
}