"use client";

import { m, useReducedMotion } from "motion/react";

type AnimatedBlogCardProps = {
  children: React.ReactNode;
};

export function AnimatedBlogCard({ children }: AnimatedBlogCardProps) {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <m.div
      className="mt-6"
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      {children}
    </m.div>
  );
}
