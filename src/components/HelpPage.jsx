"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// ── Scroll reveal helper ─────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What does Verido do?",
        a: "Verido is an Agentic AI Engineering Company. We help businesses audit their AI landscape to surface high-impact opportunities, then build and launch production-ready Agentic AI solutions in as little as 42 days.",
      },
      {
        q: "How do I get started with Verido?",
        a: "Simply book a free AI Audit through our contact page. We'll schedule a discovery call to understand your business, assess your current digital landscape, and identify where Agentic AI can create the most value for you.",
      },
      {
        q: "What is an Opportunity Audit?",
        a: "An AI Audit is our structured discovery process where we analyze your business processes, data assets, and technology stack to identify high-impact Agentic AI opportunities. You receive a prioritized roadmap with clear ROI estimates.",
      },
      {
        q: "How long does it take to go from idea to live product?",
        a: "For MVPs and proof-of-concepts, we typically deliver in 4–6 weeks. More complex enterprise solutions may take 8–12 weeks. We follow a sprint-based methodology with demos at the end of each cycle so you always see progress.",
      },
    ],
  },
  {
    category: "Services & Process",
    questions: [
      {
        q: "What technologies do you use?",
        a: "We are platform-agnostic. Our tech stack spans React, Next.js, Node.js, Python, Go, PostgreSQL, MongoDB, Redis, LangChain, LlamaIndex, Pinecone, AWS, GCP, Azure, Kubernetes, and more. We select the best tools for each project.",
      },
      {
        q: "Do you only work with AI?",
        a: "Agentic AI is our core focus, but we also offer full-stack development, mobile apps, API development, UI/UX design, cloud transformation, and DevOps services. Every project leverages modern engineering practices regardless of domain.",
      },
      {
        q: "Can you work with our existing team?",
        a: "Absolutely. We regularly embed with client engineering teams, work alongside in-house developers, and integrate into existing workflows and codebases. We can operate as an extension of your team.",
      },
      {
        q: "What does 'Live in 42 days' mean?",
        a: "It's our commitment to rapid delivery. We structure our projects to deliver tangible, working results within 42 days — whether that's a proof-of-concept, an MVP, a standalone production feature, or a pilot program. Speed is built into our process.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "Do you provide post-launch support?",
        a: "Yes. Every project includes a 30-day post-launch support window for bug fixes, monitoring, and minor adjustments. Extended maintenance and ongoing support packages are available.",
      },
      {
        q: "How do you handle data security and privacy?",
        a: "Security is built into every engagement. We implement encryption in transit and at rest, role-based access controls, regular security audits, and compliance with applicable regulations. Client data is never used for model training without explicit consent.",
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "Yes. We specialize in integrating with existing tech stacks including CRMs, ERPs, databases, APIs, and legacy systems. Integration requirements are scoped during the discovery phase.",
      },
      {
        q: "What if we need to scale after launch?",
        a: "We build for scale from day one. Our architectures are designed to handle growth, and we can continue as your engineering partner as you scale. We also offer cloud optimization and performance engineering services.",
      },
    ],
  },
  {
    category: "Partnership & Billing",
    questions: [
      {
        q: "What engagement models do you offer?",
        a: "We offer fixed-price projects for well-defined scopes, time-and-materials for ongoing work, dedicated team extensions, and retainer-based partnerships for continuous innovation support.",
      },
      {
        q: "How is pricing structured?",
        a: "Pricing is project-dependent and based on scope, complexity, timeline, and team composition. We provide transparent pricing proposals after the discovery phase. Contact us for a custom quote.",
      },
      {
        q: "Do you work with startups?",
        a: "Yes! We work with startups at every stage — from pre-seed MVPs to Series A+ scale-ups. Our rapid delivery model is especially well-suited for startups that need to move fast and validate ideas.",
      },
      {
        q: "Can we visit your office?",
        a: "We operate as a distributed team with hubs in multiple locations. Contact us to arrange a visit to our nearest office or to schedule a virtual meeting with our team.",
      },
    ],
  },
];

export default function HelpPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-[80svh] items-center overflow-hidden bg-slate-50 pt-28 md:pt-32 pb-16"
      >
        {/* Parallax BG */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="h-full w-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_15%_20%,rgba(99,102,241,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_100%_75%,rgba(56,189,248,0.14),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.75),rgba(255,255,255,0.94))]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
              Support
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 font-heading text-[clamp(2.2rem,4.8vw,4rem)] font-bold leading-[1.04] tracking-tight text-slate-900"
            >
              Help Center
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              Find answers to common questions about our services, process, and
              technology. Can&apos;t find what you&apos;re looking for? Reach out
              to our team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-[0_14px_28px_rgba(79,70,229,0.28)] transition hover:brightness-110"
              >
                Contact Us
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white"
              >
                Browse FAQs
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── QUICK LINKS ──────────────────────────────────────────────────── */}
      <section className="border-y border-slate-200/60 bg-[#f8fafc] py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {faqCategories.map((cat, i) => (
              <motion.a
                key={cat.category}
                href={`#cat-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.7}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{cat.category}</div>
                  <div className="text-xs text-slate-500">{cat.questions.length} articles</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ CATEGORIES ──────────────────────────────────────────────────── */}
      <section id="faq" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          {faqCategories.map((category, catIndex) => (
            <div key={category.category} id={`cat-${catIndex}`} className="mb-20 last:mb-0">
              <FadeUp delay={catIndex * 0.06}>
                <div className="mb-10 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-teal-500 text-sm font-bold text-white shadow-md">
                    {catIndex + 1}
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-slate-900">
                    {category.category}
                  </h2>
                </div>
              </FadeUp>

              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <FadeUp
                    key={faq.q}
                    delay={catIndex * 0.06 + qIndex * 0.04}
                  >
                    <details className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 hover:shadow-md open:border-indigo-200 open:shadow-[0_4px_20px_rgba(79,70,229,0.08)]">
                      <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-[15px] font-bold text-slate-800 transition-colors hover:text-indigo-700 [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-open:rotate-180 group-open:bg-indigo-100 group-open:text-indigo-600">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                        <p className="text-base leading-relaxed text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </details>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-teal-600 py-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase">
              Still Need Help?
            </div>
            <h2 className="mb-5 font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1]">
              We&apos;re Here to Help
            </h2>
            <p className="mb-10 text-lg text-white/80">
              Our team is ready to assist you with any questions about our
              services, process, or technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-bold text-indigo-700 shadow-xl transition hover:bg-indigo-50"
              >
                Contact Us
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <a
                href="mailto:hello@Verido.co"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-10 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                hello@Verido.co
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
