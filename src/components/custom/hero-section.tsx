"use client";

import { Download } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Section } from "./section";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <Section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div>
          <m.h1
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.34,
              delay: 0.04,
              ease: easeOut,
            }}
            className="text-3xl text-black dark:text-white font-doto font-extrabold uppercase"
          >
            Bhanu Reddy
          </m.h1>
          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.08,
              ease: easeOut,
            }}
            className="text-muted-foreground"
          >
            @bhanreddy1973
          </m.p>
        </div>
      </div>
      <div className="py-6 [&_p]:py-2 leading-relaxed tracking-tight [&_span]:text-foreground [&_span]:font-mono [&_p]:text-muted-foreground">
        <m.p
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.12, ease: easeOut }}
        >
          Hi I am <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">Bhanu Reddy</span>, a final-year CS student (AI & Data Science) from{" "}
          <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">IIIT Kottayam</span> working as an{" "}
          <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">AI / Data Engineering Intern</span> at{" "}
          <span className="tracking-tighter transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">Swiggy, Bangalore</span>. I build things and try not to break production.
        </m.p>
        <m.p
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.18, ease: easeOut }}
        >
          I specialize in <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">Gen-AI pipelines</span> and{" "}
          <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">LLM engineering</span> — prompt engineering, structured output parsing, and large-scale data processing at warehouse scale.
        </m.p>
        <m.div
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.24, ease: easeOut }}
        >
          <p>
            Also into <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">full-stack web dev</span> and{" "}
            <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">Graph Neural Networks</span> — LeetCode rating 1844, top 6.4% globally.
          </p>
        </m.div>
      </div>
      <m.div
        className="flex flex-col sm:flex-row gap-3 sm:items-center"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3, ease: easeOut }}
      >
        <Button variant="secondary" className="shadow-sm">
          <span className="relative flex size-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Available for new opportunities
        </Button>
        <Button
          variant="secondary"
          className="shadow-sm supports-[hover:hover]:hover:-translate-y-0.5"
        >
          <Download />
          Download CV
        </Button>
      </m.div>
    </Section>
  );
}
