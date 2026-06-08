"use client";

import { m, useReducedMotion } from "motion/react";
import Link from "next/link";
import { socials } from "@/data/info";
import { Section, SectionHeading, SectionTitle } from "./section";

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <Section id="contact">
      <SectionHeading>
        <SectionTitle>Say hello</SectionTitle>
        <span className="text-muted-foreground/60">I don&apos;t bite. Mostly.</span>
      </SectionHeading>
      <div className="flex gap-3 flex-wrap mt-6">
        {socials.map((s, i) => (
          <m.div
            key={s.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.95 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={reduceMotion ? undefined : { once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: easeOut, delay: i * 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            <Link
              href={s.href}
              target="_blank"
              className="glass group inline-flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground supports-[hover:hover]:hover:shadow-lg"
            >
              <span className="text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                {s.icon}
              </span>
              {s.name}
            </Link>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
