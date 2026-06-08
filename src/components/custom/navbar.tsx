"use client";

import { IconBook } from "@tabler/icons-react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.05 }}
        className="sticky top-0 z-50"
      >
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 sm:px-8 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <Link
            href="/"
            className="font-doto font-black text-xl tracking-tight text-foreground transition-opacity duration-200 supports-[hover:hover]:hover:opacity-80"
          >
            BR.
          </Link>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/blogs"
                  aria-label="Read blog posts"
                  className="inline-flex items-center justify-center rounded-full size-9 text-muted-foreground transition-all duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground supports-[hover:hover]:hover:bg-accent active:scale-[0.92]"
                >
                  <IconBook className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Blog</TooltipContent>
            </Tooltip>
            <ModeToggle />
          </div>
        </nav>
      </m.header>
    </LazyMotion>
  );
}
