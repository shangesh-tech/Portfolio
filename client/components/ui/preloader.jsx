"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Opening curtain: the name assembles from its initials, holds, then lifts.
 * Skipped entirely for readers who prefer reduced motion.
 */
export default function Preloader({ first = "Shangesh", last = "S" }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const id = setTimeout(() => setDone(true), 1900);

    return () => {
      clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  const reveal = {
    hidden: { width: 0, opacity: 0 },
    show: {
      width: "auto",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.25 },
    },
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[99999] bg-[var(--color-background)] flex flex-col items-center justify-center pointer-events-none"
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex items-baseline text-5xl md:text-8xl lg:text-9xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)] tracking-tighter leading-[1.15] relative z-10">
            <span className="flex-shrink-0">S</span>
            {/* The width reveal needs overflow-hidden, so the box is padded
                below the baseline to keep descenders (the "g") intact. */}
            <motion.span
              className="overflow-hidden whitespace-pre pb-[0.22em] -mb-[0.22em]"
              variants={reveal}
              initial="hidden"
              animate="show"
            >
              {first.slice(1)}
            </motion.span>
            <span className="flex-shrink-0 ml-4 md:ml-6">{last}</span>
            <motion.span
              className="text-[var(--color-primary)]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 1, type: "spring" } }}
            >
              .
            </motion.span>
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-[0.04] dot-grid" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
