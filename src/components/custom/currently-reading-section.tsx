"use client";

import {
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react";
import { BookOpenText } from "lucide-react";

const BOOK_URL = "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/";

export function CurrentlyReading() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 group no-underline"
        aria-label="Currently reading: Designing Machine Learning Systems"
        initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.94 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: easeOut,
          delay: 1.8,
        }}
      >
        <m.div
          className="glass flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 supports-[hover:hover]:group-hover:shadow-xl supports-[hover:hover]:group-hover:-translate-y-1"
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          whileHover={reduceMotion ? undefined : { y: -3 }}
          transition={{ duration: 0.2, ease: easeOut }}
        >
          {/* Live dot */}
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50 duration-[2500ms]" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>

          <m.div
            className="shrink-0 text-muted-foreground/50 transition-colors duration-200 group-hover:text-primary"
            whileHover={reduceMotion ? undefined : { rotate: -8 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.25 }}
          >
            <BookOpenText className="size-4" strokeWidth={1.7} />
          </m.div>

          <div className="flex flex-col min-w-0">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/35">
              Reading
            </span>
            <span className="text-[12px] font-medium leading-tight text-muted-foreground/70 transition-colors duration-200 group-hover:text-foreground truncate">
              Designing ML Systems
            </span>
          </div>
        </m.div>
      </m.a>
    </LazyMotion>
  );
}
