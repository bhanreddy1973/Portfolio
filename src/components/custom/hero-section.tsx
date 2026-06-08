"use client";

import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative z-10 min-h-[85vh] flex items-center justify-center overflow-hidden px-6 sm:px-8">
        {/* Radial glow behind hero */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/8 blur-[120px]" />

        <div className="relative z-10 max-w-3xl w-full py-20">
          {/* Status pill */}
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="mb-8"
          >
            <div className="glass-subtle inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-foreground/80">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </div>
          </m.div>

          {/* Main heading */}
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="space-y-4 mb-10"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-doto font-black tracking-tighter leading-[0.9]">
              <span className="gradient-text inline-block">Bhanu</span>
              <br />
              <span className="text-foreground inline-block">Reddy</span>
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-mono">@bhanreddy1973</span>
              <span className="text-border">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3" />
                Bangalore, IN
              </span>
            </div>
          </m.div>

          {/* Bio in a glass card */}
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
            className="mb-10"
          >
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-4 max-w-xl">
              <p className="text-[15px] leading-relaxed text-foreground/80">
                Final-year CS student turned{" "}
                <span className="font-semibold text-foreground">AI & Data Engineering Intern</span>{" "}
                at{" "}
                <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                  Swiggy
                  <Sparkles className="size-3.5 text-primary" />
                </span>
              </p>
              <p className="text-[15px] leading-relaxed text-foreground/70">
                I build <span className="font-medium text-foreground/90">Gen-AI pipelines</span>,
                wrangle LLMs into structured outputs, and process data at warehouse scale.
                Also into{" "}
                <span className="font-medium text-foreground/90">full-stack web</span> &{" "}
                <span className="font-medium text-foreground/90">Graph Neural Networks</span>.
              </p>
              <div className="flex items-center gap-3 pt-2 text-xs font-mono text-muted-foreground/60">
                <span className="glass-subtle rounded-full px-3 py-1">LeetCode 1844</span>
                <span className="glass-subtle rounded-full px-3 py-1">Top 6.4%</span>
                <span className="glass-subtle rounded-full px-3 py-1">IIIT Kottayam</span>
              </div>
            </div>
          </m.div>

          {/* CTA buttons */}
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground shadow-lg transition-all duration-300 ease-[var(--ease-out)] supports-[hover:hover]:hover:shadow-xl supports-[hover:hover]:hover:-translate-y-1 supports-[hover:hover]:hover:scale-[1.02]"
            >
              <Download className="size-4" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group glass-subtle transition-all duration-300 ease-[var(--ease-out)] supports-[hover:hover]:hover:-translate-y-1 supports-[hover:hover]:hover:border-primary/40 supports-[hover:hover]:hover:shadow-md"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
              Let&apos;s connect
            </Button>
          </m.div>
        </div>

        {/* Scroll indicator */}
        <m.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <m.div
            className="flex flex-col items-center gap-2 text-muted-foreground/40"
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown className="size-3.5" />
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
