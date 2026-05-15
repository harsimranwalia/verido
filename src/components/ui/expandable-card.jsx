"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Link as LinkIcon } from "lucide-react";

export function ExpandableCard({
  title,
  src,
  description,
  badge,
  oneLiner,
  linkHref,
  linkLabel,
  children,
  className,
  classNameExpanded,
  ...props
}) {
  const [active, setActive] = React.useState(false);
  const id = React.useId();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      {mounted && createPortal(
        <AnimatePresence>
          {active && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(false)}
                className="fixed inset-0 z-[999] bg-slate-900/40 backdrop-blur-sm cursor-pointer"
              />
              <div className="fixed inset-0 z-[1000] grid place-items-center pointer-events-none p-4 sm:p-0">
                <motion.div
                  layoutId={`card-${title}-${id}`}
                  data-lenis-prevent="true"
                  className={cn(
                    "w-full max-w-[550px] h-[90vh] flex flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-white shadow-2xl relative pointer-events-auto",
                    classNameExpanded,
                  )}
                  {...props}
                >
                  <button
                    onClick={() => setActive(false)}
                    className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <motion.div layoutId={`image-${title}-${id}`} className="shrink-0 h-0 flex-1 min-h-0 w-full overflow-hidden bg-slate-100">
                    <img
                      src={src}
                      alt={title}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                  <div className="relative p-6 sm:p-8 flex flex-col gap-2 flex-1 overflow-y-auto min-h-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div>
                      {badge && (
                        <motion.div layoutId={`badge-${title}-${id}`} className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold tracking-widest text-slate-600 uppercase shadow-sm">
                          {badge}
                        </motion.div>
                      )}
                      <motion.p
                        layoutId={`description-${description}-${id}`}
                        className="mb-1 text-[12px] font-bold tracking-widest text-indigo-600 uppercase"
                      >
                        {description}
                      </motion.p>
                      <motion.h3
                        layoutId={`title-${title}-${id}`}
                        className="text-[1.5rem] font-bold text-slate-900 leading-tight"
                      >
                        {title}
                      </motion.h3>
                      {oneLiner && (
                        <motion.div
                          layoutId={`oneLiner-${title}-${id}`}
                          className="mt-2 text-[15px] font-semibold leading-relaxed text-slate-800"
                        >
                          {oneLiner}
                        </motion.div>
                      )}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1 }}
                      className="mt-2 flex flex-col gap-3 text-[14px] leading-relaxed text-slate-600"
                    >
                      {children}
                    </motion.div>
                    {linkHref && (
                      <a
                        href={linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-indigo-600 transition-colors hover:text-indigo-800"
                        title={linkLabel || "LinkedIn Profile"}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LinkIcon size={20} />
                      </a>
                    )}
                  </div>
                 </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "group flex h-full w-full max-w-[400px] cursor-pointer flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]",
          className,
        )}
      >
        <motion.div layoutId={`image-${title}-${id}`} className="relative h-[240px] w-full overflow-hidden shrink-0 bg-slate-100">
          <img
            src={src}
            alt={title}
            className="h-full w-full object-cover object-[25%_20%] transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <div className="flex flex-col p-6 text-left flex-1 relative">
          {badge && (
            <motion.div layoutId={`badge-${title}-${id}`} className="mb-3 inline-block self-start rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-600 uppercase shadow-sm">
              {badge}
            </motion.div>
          )}
          <motion.p
            layoutId={`description-${description}-${id}`}
            className="mb-1 text-[11px] font-bold tracking-widest text-indigo-500 uppercase"
          >
            {description}
          </motion.p>
          <motion.h3
            layoutId={`title-${title}-${id}`}
            className="font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 leading-tight"
          >
            {title}
          </motion.h3>
          {oneLiner && (
            <motion.div
               layoutId={`oneLiner-${title}-${id}`}
               className="mt-3 text-[14px] font-medium leading-relaxed text-slate-600"
            >
              {oneLiner}
            </motion.div>
          )}
         {linkHref && (
           <a
             href={linkHref}
             target="_blank"
             rel="noopener noreferrer"
             onClick={(event) => event.stopPropagation()}
             className="mt-4 inline-flex items-center gap-2 text-indigo-600 transition-colors hover:text-indigo-800"
             title={linkLabel || "LinkedIn Profile"}
           >
             <LinkIcon size={20} />
           </a>
         )}
        </div>
      </motion.div>
    </>
  );
}
