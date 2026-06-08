"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { workExperience } from "@/data/info";
import { Section, SectionHeading, SectionTitle } from "./section";

type WorkExperienceItemProps = {
  open: boolean;
  onToggle: () => void;
  xp: (typeof workExperience)[number];
  index: number;
};

function WorkExperienceItem({
  open,
  onToggle,
  xp,
  index,
}: WorkExperienceItemProps) {
  const detailsId = `work-details-${index}`;
  const easeOut = [0.23, 1, 0.32, 1] as const;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <m.div
      ref={cardRef}
      className="spotlight-card glass group rounded-2xl p-6 transition-all duration-300 ease-[var(--ease-out)] supports-[hover:hover]:hover:scale-[1.01] supports-[hover:hover]:hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: easeOut, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                className="rounded-xl shadow-sm ring-2 ring-white/20 dark:ring-white/10"
                src={xp.iconUrl}
                height={48}
                width={48}
                alt={xp.company}
              />
              {index === 0 && (
                <span className="absolute -top-1 -right-1 flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex size-3 rounded-full bg-emerald-500 ring-2 ring-background" />
                </span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <p className="font-semibold text-foreground">{xp.company}</p>
                <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-medium rounded-full px-2.5">
                  {xp.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{xp.role}</p>
            </div>
          </div>
          <div className="flex flex-col sm:items-end text-xs">
            <p className="font-mono text-muted-foreground/80">{xp.period}</p>
            <p className="text-muted-foreground/50">{xp.location}</p>
          </div>
        </div>

        {/* Toggle */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={detailsId}
            className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-all duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground supports-[hover:hover]:hover:shadow-sm active:scale-[0.97]"
          >
            {open ? "Hide details" : "What I built"}
            <m.span
              className="flex"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25, ease: easeOut }}
            >
              <ChevronDown className="size-3" />
            </m.span>
          </button>
        </div>

        {/* Expandable */}
        <AnimatePresence initial={false}>
          {open ? (
            <m.div
              id={detailsId}
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <ul className="relative mt-6 space-y-3.5 border-l-2 border-primary/25 pl-5">
                {xp.points.map((p, i) => (
                  <m.li
                    key={p}
                    className="relative text-[13px] text-muted-foreground/80 leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: easeOut }}
                  >
                    <span className="absolute -left-[23px] top-[9px] size-2 rounded-full bg-primary/70 ring-2 ring-background" />
                    {p}
                  </m.li>
                ))}
              </ul>
            </m.div>
          ) : null}
        </AnimatePresence>
      </div>
    </m.div>
  );
}

export function WorkExperienceSection() {
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    workExperience.map((_, index) => index === 0),
  );

  function toggleOpen(index: number) {
    setOpenStates((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  }

  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Experience</SectionTitle>
        <span className="text-muted-foreground/60">Where I&apos;ve shipped real things</span>
      </SectionHeading>
      <div className="flex flex-col gap-5 mt-8">
        {workExperience.map((xp, index) => (
          <WorkExperienceItem
            key={xp.company}
            xp={xp}
            index={index}
            open={openStates[index] ?? false}
            onToggle={() => toggleOpen(index)}
          />
        ))}
      </div>
    </Section>
  );
}
