"use client";

import { m, useReducedMotion } from "motion/react";
import {
  aiTools,
  databases,
  languages,
  technologies,
  tools,
} from "@/data/info";
import {
  Section,
  SectionHeading,
  SectionTitle,
} from "./section";
import { SkillBadge } from "./skill-badge";

type SkillGroupProps = {
  title: string;
  items: { name: string; icon: React.ReactNode; favourite: boolean }[];
  delay?: number;
};

function SkillGroup({ title, items, delay = 0 }: SkillGroupProps) {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <m.div
      className="space-y-3"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: easeOut, delay }}
    >
      <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/40 pl-1">
        {title}
      </h4>
      <div className="flex gap-2.5 flex-wrap">
        {items.map((s, i) => (
          <m.div
            key={s.name}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={reduceMotion ? undefined : { once: true }}
            transition={{ duration: 0.3, ease: easeOut, delay: delay + i * 0.03 }}
          >
            <SkillBadge favourite={s.favourite}>
              {s.icon}
              {s.name}
            </SkillBadge>
          </m.div>
        ))}
      </div>
    </m.div>
  );
}

export function SkillsSection() {
  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Stack</SectionTitle>
        <span className="text-muted-foreground/60">My go-to arsenal</span>
      </SectionHeading>
      <div className="mt-8 space-y-7">
        <SkillGroup title="Languages" items={languages} delay={0} />
        <SkillGroup title="Frameworks & Libraries" items={technologies} delay={0.05} />
        <SkillGroup title="Databases" items={databases} delay={0.1} />
        <SkillGroup title="DevOps & Tools" items={tools} delay={0.15} />
        <SkillGroup title="AI Tooling" items={aiTools} delay={0.2} />
      </div>
    </Section>
  );
}
