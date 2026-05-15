"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function IndustriesListingPage({ industries }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-white">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-[#020617]"
      >
        <motion.div
          style={{ y: heroParallax }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(99,102,241,0.3),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(6,182,212,0.2),transparent_50%)]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="mb-6 inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs font-bold tracking-widest text-indigo-300 uppercase backdrop-blur-sm">
              Industries
            </span>
            <h1 className="mb-6 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.06] tracking-tight text-white">
              Where We Make an{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Impact
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
              Deep domain expertise across every major industry. We partner with
              you to understand your unique challenges and build solutions that
              deliver measurable results.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        />
      </section>

      {/* ── INDUSTRY CARDS ────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold text-slate-900">
                Every Industry. Every Challenge.
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
                We bring deep expertise across sectors, combining AI, Web3, and
                modern engineering to solve your most complex problems.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <FadeUp key={industry.slug} delay={i * 0.05}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200/80 hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.18)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.heroImage}
                      alt={industry.badge}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                        {industry.badge}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 font-heading text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {industry.valueStatement || industry.subtitle}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                      Explore Industry{" "}
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] px-6 py-24 md:px-12 md:py-32 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="mb-4 inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Not Sure Where to Start?
            </span>
            <h2 className="mb-6 font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight text-slate-900">
              Let&apos;s Talk About Your Industry
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
              No matter the sector, we have the expertise to help you move
              forward. Reach out and we&apos;ll map out a plan together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-10 py-4 text-base font-bold text-white shadow-[0_14px_28px_rgba(79,70,229,0.28)] transition hover:brightness-110"
            >
              Get in Touch <span>→</span>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
