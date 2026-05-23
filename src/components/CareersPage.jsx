"use client";

import { useState, useRef } from "react";
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

const jobsData = [
  {
    id: "associate-product-manager",
    title: "Associate Product Manager",
    location: "Remote / Dubai, UAE",
    type: "Full-Time",
    department: "Product",
    posted: "March 2026",
    description:
      "We're looking for a proactive Associate Product Manager to help define and deliver AI-powered products that create real impact for our clients. You'll work closely with engineering, design, and business stakeholders to translate complex technical capabilities into clear, valuable product experiences.",
    responsibilities: [
      "Define and maintain product roadmaps in collaboration with senior product leadership and engineering teams.",
      "Translate client business requirements into detailed product specifications, user stories, and acceptance criteria.",
      "Conduct user research, competitive analysis, and market research to inform product decisions.",
      "Prioritize features based on business value, technical feasibility, and user impact using data-driven frameworks.",
      "Facilitate sprint planning, retrospectives, and stakeholder demos across cross-functional teams.",
      "Track and analyze product KPIs, user engagement metrics, and OKR progress to guide iteration cycles.",
      "Manage stakeholder communication, ensuring alignment between client expectations and delivery timelines.",
      "Support go-to-market strategy including launch documentation, internal training, and client onboarding materials.",
    ],
    requirements: [
      "2+ years of experience in product management, business analysis, or a related role in a technology-driven environment.",
      "Strong understanding of Agile/Scrum methodologies and experience with tools like Jira, Linear, or Notion.",
      "Excellent written and verbal communication skills with the ability to articulate complex concepts to diverse audiences.",
      "Analytical mindset with experience using data to drive product decisions (SQL, Mixpanel, Amplitude, or similar).",
      "Familiarity with AI/ML concepts, SaaS products, or developer tools is strongly preferred.",
      "Bachelor's degree in Computer Science, Business, Engineering, or a related field.",
      "Ability to work effectively in a fast-paced, remote-first startup environment.",
    ],
    benefits: [
      "Competitive salary with equity options.",
      "Remote-first culture with flexible working hours.",
      "Annual learning & development budget.",
      "Health insurance coverage.",
      "Annual team retreats and offsites.",
      "Latest tools and equipment to do your best work.",
    ],
    applyEmail: "careers@42works.com",
  },
  {
    id: "agentic-ai-architect",
    title: "Agentic AI Architect",
    location: "Remote / London, UK",
    type: "Full-Time",
    department: "Engineering",
    posted: "March 2026",
    description:
      "We're seeking a visionary Agentic AI Architect to design and lead the development of autonomous AI agent systems for enterprise clients. You'll architect multi-agent orchestration frameworks, define agent communication protocols, and push the boundaries of what's possible with LLM-based autonomous systems.",
    responsibilities: [
      "Design and architect multi-agent AI systems that autonomously plan, reason, and execute complex multi-step workflows.",
      "Define agent topologies including tool use, memory architectures, handoff protocols, and error recovery strategies.",
      "Lead technical design reviews and establish architecture best practices for agent-based systems across the organization.",
      "Build and optimize agent orchestration frameworks using LangChain, LangGraph, CrewAI, or custom implementations.",
      "Design evaluation frameworks for measuring agent performance, reliability, and safety across diverse scenarios.",
      "Collaborate with research teams to integrate state-of-the-art techniques including ReAct, chain-of-thought, and tool-augmented reasoning.",
      "Establish monitoring, observability, and guardrail systems for production agent deployments.",
      "Mentor engineering teams on agent architecture patterns and responsible AI development practices.",
      "Contribute to client pitches, technical proposals, and thought leadership content on agentic AI.",
    ],
    requirements: [
      "5+ years of software engineering experience with at least 2 years focused on AI/LLM systems.",
      "Deep expertise in Python and experience with AI/ML frameworks (PyTorch, LangChain, LlamaIndex, or similar).",
      "Proven track record of designing and deploying production-grade AI agent systems.",
      "Strong understanding of LLM architectures, prompt engineering, RAG systems, and model fine-tuning.",
      "Experience with vector databases (Pinecone, Weaviate, Chroma) and embedding pipelines.",
      "Knowledge of agent evaluation, red-teaming, and safety alignment for autonomous systems.",
      "Excellent system design skills with experience building scalable, distributed microservice architectures.",
      "Experience with cloud platforms (AWS, GCP, or Azure) and containerization (Docker, Kubernetes).",
      "Strong communication skills with the ability to explain complex AI concepts to non-technical stakeholders.",
    ],
    benefits: [
      "Competitive senior-level salary with significant equity package.",
      "Remote-first culture with flexible working hours.",
      "Generous annual learning & development budget for conferences and courses.",
      "Health, dental, and vision insurance coverage.",
      "Annual team retreats and offsites.",
      "Latest tools and equipment plus cloud compute budget for experimentation.",
      "Opportunity to publish research and speak at industry conferences.",
    ],
    applyEmail: "careers@42works.com",
  },
  {
    id: "community-development-outreach",
    title: "Community Development and Outreach Executive",
    location: "Remote / Dubai, UAE",
    type: "Full-Time",
    department: "Marketing & Community",
    posted: "March 2026",
    description:
      "We're looking for a dynamic Community Development and Outreach Executive to build, nurture, and grow the 42Works community across AI and developer ecosystems. You'll be the voice of 42Works in key communities, driving engagement, partnerships, and brand awareness through authentic relationship-building.",
    responsibilities: [
      "Develop and execute a comprehensive community strategy that grows 42Works' presence across developer forums, social platforms, and industry events.",
      "Build and moderate online communities on Discord, Telegram, LinkedIn, and developer platforms (GitHub, Stack Overflow, Dev.to).",
      "Organize and host virtual and in-person events including workshops, hackathons, webinars, and meetups.",
      "Identify and cultivate relationships with key community influencers, developers, and industry partners.",
      "Create engaging content including technical tutorials, blog posts, newsletters, and social media content that resonates with developer and business audiences.",
      "Collect and synthesize community feedback to inform product and marketing decisions.",
      "Develop and manage ambassador and advocacy programs to empower community champions.",
      "Track and report on community KPIs including engagement, growth, sentiment, and conversion metrics.",
      "Represent 42Works at industry conferences, hackathons, and networking events globally.",
    ],
    requirements: [
      "3+ years of experience in community management, developer relations, or outreach roles in technology.",
      "Strong understanding of AI and developer ecosystems with existing network in these communities.",
      "Excellent written and verbal communication skills with a talent for storytelling and content creation.",
      "Experience managing communities on Discord, Telegram, and social media platforms with measurable growth results.",
      "Proven track record of planning and executing successful virtual and in-person events.",
      "Familiarity with community management tools (Discourse, Circle, Common Room, or similar).",
      "Self-starter with the ability to work independently in a remote-first environment.",
      "Willingness to travel for events and conferences (approximately 20-30% travel).",
      "Bachelor's degree in Marketing, Communications, Business, or a related field preferred.",
    ],
    benefits: [
      "Competitive salary with performance bonuses.",
      "Remote-first culture with flexible working hours.",
      "Annual learning & development budget.",
      "Health insurance coverage.",
      "Annual team retreats and offsites.",
      "Event and conference travel budget.",
      "Latest tools and equipment to do your best work.",
    ],
    applyEmail: "careers@42works.com",
  },
];

function JobCard({ job, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeUp delay={index * 0.08}>
      <div className="group rounded-2xl border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all hover:shadow-[0_12px_40px_rgba(79,70,229,0.1)]">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-8 py-6 text-left"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-700">
                {job.title}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {job.location}
                </span>
                <span className="text-slate-300">·</span>
                <span>{job.type}</span>
                <span className="text-slate-300">·</span>
                <span>{job.department}</span>
                <span className="text-slate-300">·</span>
                <span>Posted {job.posted}</span>
              </div>
            </div>
            <span
              className={`flex shrink-0 items-center gap-2 text-sm font-medium transition-colors ${
                expanded
                  ? "text-indigo-600"
                  : "text-slate-400 group-hover:text-indigo-600"
              }`}
            >
              {expanded ? "Show Less" : "View Details"}
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
        </button>

        {expanded && (
          <div className="border-t border-slate-100 px-8 pb-8 pt-2">
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  About the Role
                </h4>
                <p className="text-base leading-relaxed text-slate-600">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3 text-base text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-600">
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-base text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  What We Offer
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm text-slate-700"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`mailto:${job.applyEmail}?subject=Application: ${job.title}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(79,70,229,0.25)] transition hover:brightness-110"
                >
                  Apply for this Position
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
                <a
                  href={`mailto:${job.applyEmail}?subject=Question: ${job.title}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </FadeUp>
  );
}

export default function CareersPage() {
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
        className="relative flex min-h-[90svh] items-center overflow-hidden bg-slate-50 pt-28 md:pt-32 pb-16"
      >
        {/* Parallax BG */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
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
              Join Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 font-heading text-[clamp(2.2rem,4.8vw,4rem)] font-bold leading-[1.04] tracking-tight text-slate-900"
            >
              Shape the Future of{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                Agentic AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              At 42Works, we build the frontier — autonomous AI agents, intelligent
              systems, and Agentic AI products that redefine what&apos;s
              possible. We&apos;re looking for people who want to ship, learn, and
              grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#open-positions"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-[0_14px_28px_rgba(79,70,229,0.28)] transition hover:brightness-110"
              >
                View Open Positions
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
                href="#why-join"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white"
              >
                Why Join Us?
              </a>
            </motion.div>
          </div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { value: "42 days", label: "Avg. delivery time" },
              { value: "Remote", label: "First culture" },
              { value: "4 hubs", label: "Global presence" },
              { value: "15+", label: "Tech stacks" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur-sm"
              >
                <div className="font-heading text-xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── OPEN POSITIONS ───────────────────────────────────────────────── */}
      <section id="open-positions" className="bg-[#f8fafc] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <FadeUp>
            <div className="mb-14">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
                Hiring
              </div>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900">
                Open Positions
              </h2>
              <p className="mt-3 text-lg text-slate-500">
                Join a team building at the frontier of Agentic AI.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-4">
            {jobsData.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN US ──────────────────────────────────────────────────── */}
      <section id="why-join" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeUp className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Culture
            </div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900">
              Why Join 42Works?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              We believe in shipping fast, learning constantly, and building
              things that matter.
            </p>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Ship at Startup Speed",
                desc: "We deliver in weeks, not months. You'll see your work go live fast and make a real impact from day one.",
                icon: "🚀",
              },
              {
                title: "Work on the Frontier",
                desc: "From autonomous AI agents to DeFi protocols, you'll work on cutting-edge technologies that define the next decade.",
                icon: "⚡",
              },
              {
                title: "Own Your Growth",
                desc: "Learning budget, conference access, and real ownership. We invest in your growth as much as you invest in ours.",
                icon: "📈",
              },
              {
                title: "Remote-First, People-First",
                desc: "Flexible hours, async communication, and regular team offsites. We care about output, not hours.",
                icon: "🌍",
              },
              {
                title: "Global Team, Local Impact",
                desc: "Work with talented people across Dubai, London, and beyond. Diverse perspectives make our work stronger.",
                icon: "🤝",
              },
              {
                title: "Build With the Best",
                desc: "Work alongside senior engineers and AI researchers who are leaders in their fields.",
                icon: "🏆",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)]">
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <FadeUp>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-bold tracking-widest text-indigo-400 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              Our Promise
            </div>
            <h2 className="mb-5 font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1]">
              Don&apos;t See the Right Role?
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg text-slate-400">
              We&apos;re always looking for talented people. Send us your CV and
              tell us how you can contribute.
            </p>
            <a
              href="mailto:careers@42works.com?subject=General Application"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-[0_14px_28px_rgba(79,70,229,0.28)] transition hover:brightness-110"
            >
              Send Your CV
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
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
