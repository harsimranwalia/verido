"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// ── Scroll reveal helper ─────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
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

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the 42Works website, services, or platforms, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services. We may update these terms at any time, and continued use constitutes acceptance of the updated terms.",
  },
  {
    title: "Services Description",
    content:
      "42Works provides Agentic AI engineering and digital transformation services including but not limited to AI audits, generative AI solutions, AI agent development, RAG systems, full-stack development, mobile app development, API development, UI/UX design, product discovery, cloud transformation, and DevOps services. All services are delivered on a project-by-project basis as defined in the applicable Statement of Work (SOW) or Service Agreement.",
  },
  {
    title: "Intellectual Property Rights",
    content:
      "Upon full payment for services, we assign to you all intellectual property rights in the custom deliverables created specifically for your project, excluding any pre-existing tools, libraries, frameworks, or AI models owned by 42Works. We retain the right to use generalized knowledge, methodologies, and non-client-specific improvements developed during the engagement. You retain all rights to your pre-existing materials shared with us for the purpose of delivering services.",
  },
  {
    title: "AI & Data Processing Terms",
    content:
      "Our AI services may involve processing your data through AI models and systems. We implement technical and organizational measures to protect your data. Client data processed through our AI systems is handled confidentially and is not used to train or improve public-facing AI models without explicit written consent. We make no guarantees about the accuracy, completeness, or reliability of AI-generated outputs and recommend human review of all AI-generated content before use in critical business decisions.",
  },
  {
    title: "Client Responsibilities",
    content:
      "You agree to provide timely access to necessary resources, information, and personnel to facilitate the delivery of services. You are responsible for ensuring that any content, data, or materials you provide to us do not violate any laws or third-party rights. You agree to review and approve deliverables within the timeframes specified in the project timeline. Delays in client reviews or decision-making may impact project deadlines.",
  },
  {
    title: "Fees & Payment",
    content:
      "Fees for services are outlined in the applicable SOW or Service Agreement. Invoices are due within the payment terms specified. Late payments may incur interest at the rate specified in the agreement. All fees are exclusive of applicable taxes, which are the responsibility of the client. We reserve the right to suspend services for accounts that are more than 30 days past due.",
  },
  {
    title: "Confidentiality",
    content:
      "Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. Confidential information includes business plans, technical data, source code, trade secrets, and any information explicitly marked as confidential. These obligations survive the termination of the agreement for a period of three years. This section does not apply to information that is publicly available, independently developed, or required to be disclosed by law.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, 42Works' liability for any claim arising out of or relating to these terms or our services is limited to the total fees paid by you for the specific service giving rise to the claim. We are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, even if advised of the possibility of such damages. AI-generated outputs are provided 'as is' without warranty.",
  },
  {
    title: "Warranty Disclaimer",
    content:
      "Our services are provided 'as is' and 'as available' without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or that defects will be corrected. We make no warranty regarding the accuracy, reliability, or completeness of AI-generated content or any content accessed through our services. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusions may not apply to you.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate an engagement in accordance with the terms specified in the applicable SOW or Service Agreement. Upon termination, you are responsible for payment for all services rendered up to the date of termination. Sections relating to Intellectual Property, Confidentiality, Limitation of Liability, and Payment survive termination.",
  },
  {
    title: "Website Use",
    content:
      "You agree not to use our website for any unlawful purpose or in violation of these terms. You may not attempt to gain unauthorized access to our systems, interfere with the website's operation, or use automated tools to scrape or collect data from the website without our express permission. We reserve the right to restrict access to any part of the website at any time.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of the United Arab Emirates, without regard to its conflict of law provisions. Any disputes arising from these terms or our services shall be resolved through binding arbitration in Dubai, UAE. The United Nations Convention on Contracts for the International Sale of Goods does not apply to these terms.",
  },
  {
    title: "Contact & Legal Notices",
    content:
      "For legal notices or questions regarding these terms, contact us at legal@42works.com or write to: 42Works, Attn: Legal, [Office Address]. Legal notices must be sent in writing and will be deemed delivered upon receipt. We may provide general notices through our website or email.",
  },
];

export default function TermsPage() {
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
        className="relative flex min-h-[70svh] items-center overflow-hidden bg-slate-50 pt-28 md:pt-32 pb-16"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="h-full w-full object-cover opacity-[0.06]"
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
              Legal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 font-heading text-[clamp(2.2rem,4.8vw,4rem)] font-bold leading-[1.04] tracking-tight text-slate-900"
            >
              Terms &amp; Conditions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-2 text-lg leading-relaxed text-slate-500"
            >
              Last updated: January 2026
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-xl text-base leading-relaxed text-slate-600"
            >
              These terms govern your use of 42Works&apos; website, services, and
              platforms. Please read them carefully before engaging our services.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="space-y-16">
            {sections.map((section, i) => (
              <FadeUp key={section.title} delay={i * 0.04}>
                <div className="group border-l-2 border-transparent pl-6 transition-all hover:border-indigo-400">
                  <h2 className="font-heading text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-teal-500 text-[10px] font-bold text-white shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </h2>
                  <p className="pl-10 text-base leading-relaxed text-slate-600">
                    {section.content}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-teal-600 py-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase">
              Legal Notices
            </div>
            <h2 className="mb-5 font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1]">
              Have Questions About These Terms?
            </h2>
            <p className="mb-10 text-lg text-white/80">
              Contact our legal team — we&apos;re happy to clarify any questions
              about these terms and conditions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:legal@42works.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-bold text-indigo-700 shadow-xl transition hover:bg-indigo-50"
              >
                legal@42works.com
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
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-10 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
