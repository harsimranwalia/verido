"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/components/data/case-studies-data";

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragConstraint, setDragConstraint] = useState(0);
  const [cardStep, setCardStep] = useState(300);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (trackRef.current && containerRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        const maxOffset = Math.max(0, trackWidth - containerWidth);
        const gap = parseFloat(getComputedStyle(trackRef.current).gap || "0");
        const firstCardWidth = trackRef.current.firstElementChild?.getBoundingClientRect().width || 300;
        const step = firstCardWidth + gap;
        const computedMaxIndex = step > 0 ? Math.ceil(maxOffset / step) : 0;

        setDragConstraint(-maxOffset);
        setMaxTranslate(maxOffset);
        setCardStep(step);
        setMaxIndex(computedMaxIndex);
        setActiveIndex((i) => Math.min(i, computedMaxIndex));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_48%,#f8fbff_100%)] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal>
            <span className="mb-6 inline-block rounded-full border border-teal-300/70 bg-teal-400/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(20,184,166,0.25)]">
              Success Stories
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              Where Ideas Become Impact
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600">
              Behind every product we build is a story of transformation. From
              reimagining customer experiences to reinventing industries, these
              are the moments where ambition became impact.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <motion.a
              href="/case-studies"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(79,70,229,0.3)] transition hover:brightness-110"
            >
              View All
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                →
              </span>
            </motion.a>
          </Reveal>
        </div>

        {/* Cards row with prev/next arrows */}
        <Reveal delay={0.2}>
          <div className="relative">
            {/* Prev arrow */}
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-500 shadow-[0_10px_28px_rgba(79,70,229,0.18)] transition-all hover:border-indigo-200 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Previous"
            >
              ←
            </button>

            {/* Cards container */}
            <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
              <motion.div
                ref={trackRef}
                className="flex gap-5"
                drag="x"
                dragConstraints={{ left: dragConstraint, right: 0 }}
                dragElastic={0.08}
                animate={{ x: -Math.min(activeIndex * cardStep, maxTranslate) }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                {CASE_STUDIES.map((study) => (
                  <motion.div
                    key={study.slug}
                    className="flex-shrink-0 w-[280px] md:w-[300px]"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  >
                    <div className="group overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_22px_60px_rgba(79,70,229,0.2)]">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <img
                          src={study.image}
                          alt={study.title}
                          loading="lazy"
                          className="h-full w-full object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600">
                          {study.category}
                        </p>
                        <h3 className="font-heading text-sm font-bold text-slate-900 leading-snug mb-4">
                          {study.title}
                        </h3>
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="nav-link-underline inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-indigo-700 hover:text-indigo-900 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              disabled={activeIndex >= maxIndex}
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-500 shadow-[0_10px_28px_rgba(79,70,229,0.18)] transition-all hover:border-indigo-200 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
