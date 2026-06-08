"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import { ExternalLink, Info } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { projects } from "@/data/info";
import { Section, SectionHeading, SectionTitle } from "./section";

function ProjectCard({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const reduceMotion = useReducedMotion();
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
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.25, ease: easeOut } }}
      className="group"
    >
      <div
        ref={cardRef}
        className="relative h-full rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 ease-[var(--ease-out)] supports-[hover:hover]:group-hover:border-primary/40 supports-[hover:hover]:group-hover:shadow-lg"
        onMouseMove={handleMouseMove}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image
            src={p.imageUrl}
            height={240}
            width={420}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-700 ease-[var(--ease-out)] supports-[hover:hover]:group-hover:scale-110"
            alt={p.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          {/* Floating action buttons on image */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Link
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 bg-background/90 border border-border text-foreground/70 shadow-sm transition-colors supports-[hover:hover]:hover:text-foreground"
            >
              <IconBrandGithub className="size-3.5" />
            </Link>
            <Link
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 bg-background/90 border border-border text-foreground/70 shadow-sm transition-colors supports-[hover:hover]:hover:text-primary"
            >
              <ExternalLink className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 -mt-8">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-semibold text-foreground text-[15px] leading-tight">
              {p.name}
            </h3>
            <Popover>
              <PopoverTrigger
                className="shrink-0 text-muted-foreground/50 transition-all duration-200 supports-[hover:hover]:hover:text-primary active:scale-90"
                aria-label={`About ${p.name}`}
              >
                <Info className="size-4" />
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 rounded-2xl">
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {p.about}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[10px] font-mono rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <p className="text-xs text-muted-foreground/70 leading-relaxed mt-2 line-clamp-2">
            {p.description}
          </p>
        </div>
      </div>
    </m.div>
  );
}

export function ProjectsSection() {
  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Projects</SectionTitle>
        <span className="text-muted-foreground/60">Things I built (and they actually work)</span>
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((p, index) => (
          <ProjectCard key={p.name} p={p} index={index} />
        ))}
      </div>
    </Section>
  );
}
