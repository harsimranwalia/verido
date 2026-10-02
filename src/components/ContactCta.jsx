import Link from "next/link";

// Closing call-to-action for article and case-study pages. `source` is the
// page path (e.g. "thought-leadership/my-slug"); the contact form tags the
// enquiry with it so we can tell which pages bring people in.
export default function ContactCta({ source, heading, body }) {
  return (
    <section className="mt-12 rounded-2xl border border-indigo-200 bg-white/90 p-6 shadow-[0_12px_30px_rgba(79,70,229,0.12)] md:p-8">
      <h2 className="mb-3 font-heading text-xl font-bold text-slate-900">{heading}</h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-700">{body}</p>
      <Link
        href={`/contact?source=${encodeURIComponent(source)}`}
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Talk to us about your workflow →
      </Link>
    </section>
  );
}
