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
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, including your name, email address, phone number, company name, and job title when you fill out forms, subscribe to newsletters, or contact us. We also automatically collect certain technical information when you visit our website, including IP address, browser type, operating system, referring URLs, device information, and pages visited.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services; to send you technical notices, updates, security alerts, and support messages; to respond to your comments, questions, and requests; to communicate with you about products, services, events, and other news; to monitor and analyze trends, usage, and activities; and to detect, investigate, and prevent fraudulent transactions and abuse.",
  },
  {
    title: "AI & Data Processing",
    content:
      "As an AI engineering company, we may process data through AI models and systems for the purpose of delivering our services. Any client data processed through our AI systems is handled in accordance with strict confidentiality agreements and is never used to train or improve public-facing models without explicit written consent. We implement technical safeguards including data encryption, access controls, and audit logging for all AI-processed data.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell your personal information. We may share your information with trusted third-party service providers who perform services on our behalf, such as hosting, analytics, payment processing, and email delivery. These providers are contractually bound to protect your information and use it only for the purposes we specify. We may also disclose information if required by law or to protect our rights, property, or safety.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures including encryption in transit (TLS 1.3) and at rest (AES-256), regular security audits, access controls, and incident response procedures. Our infrastructure is hosted on AWS, GCP, and Azure with SOC 2 compliant data centers. Despite these measures, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "We use essential cookies for website functionality and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. We do not use cookies for targeted advertising. Our analytics tools (including Vercel Analytics) are configured to collect minimal data necessary for performance monitoring.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by law. When we no longer have a legitimate business need to process your information, we securely delete or anonymize it. Client project data is retained per contractual terms and securely purged upon project completion or contract termination.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, update, or delete your personal information; to object to or restrict processing; to data portability; and to withdraw consent at any time. To exercise these rights, please contact us at privacy@verido.co. We will respond to your request within 30 days.",
  },
  {
    title: "International Transfers",
    content:
      "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place through Standard Contractual Clauses, Data Processing Agreements, and adequacy decisions where applicable. By using our services, you consent to such transfers in accordance with this policy.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the effective date. We encourage you to review this policy periodically. Your continued use of our services after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer at privacy@verido.co or write to us at: Verido, Attn: Privacy, [Your Office Address]. We are committed to resolving your privacy concerns promptly and transparently.",
  },
];

export default function PrivacyPage() {
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
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
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
              Privacy Policy
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
              At Verido, we take your privacy seriously. This policy describes
              how we collect, use, process, and protect your personal information
              in connection with our Agentic AI engineering services.
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
              Questions?
            </div>
            <h2 className="mb-5 font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1]">
              Have a Privacy Concern?
            </h2>
            <p className="mb-10 text-lg text-white/80">
              Contact our Data Protection Officer — we&apos;re committed to
              resolving your concerns promptly and transparently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:privacy@verido.co"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-bold text-indigo-700 shadow-xl transition hover:bg-indigo-50"
              >
                privacy@verido.co
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
