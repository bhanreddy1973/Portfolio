"use client";

import {
  domAnimation,
  type HTMLMotionProps,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLMotionProps<"section">;

function Section({ className, ...props }: SectionProps) {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className={cn(className)}
        {...props}
      />
    </LazyMotion>
  );
}

function SectionHeading({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-1", className)} {...props} />;
}

function SectionTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-3xl sm:text-4xl font-doto font-black tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function SectionDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground/60 mt-1", className)} {...props} />
  );
}

export { Section, SectionHeading, SectionTitle, SectionDescription };
