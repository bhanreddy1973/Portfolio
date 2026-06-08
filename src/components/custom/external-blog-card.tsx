"use client";

import { ArrowUpRight } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { ExternalBlogPost } from "@/lib/external-blogs";

type ExternalBlogCardProps = {
  post: ExternalBlogPost;
  index: number;
};

export function ExternalBlogCard({ post, index }: ExternalBlogCardProps) {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  const sourceColors = {
    medium: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    substack: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  };

  const sourceLabels = {
    medium: "Medium",
    substack: "Substack",
  };

  return (
    <m.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true }}
      transition={{ duration: 0.5, ease: easeOut, delay: index * 0.06 }}
    >
      <Link
        href={post.url}
        target="_blank"
        rel="noreferrer"
        className="group block rounded-2xl border border-border bg-background p-5 transition-all duration-300 ease-[var(--ease-out)] supports-[hover:hover]:hover:border-primary/30 supports-[hover:hover]:hover:shadow-md supports-[hover:hover]:hover:-translate-y-0.5"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${sourceColors[post.source]}`}>
                {sourceLabels[post.source]}
              </span>
              {post.publishedAt && (
                <span className="text-[11px] text-muted-foreground/50 font-mono">
                  {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
            <h3 className="font-semibold text-foreground text-[15px] leading-snug mb-1.5 transition-colors duration-200 group-hover:text-primary">
              {post.title}
            </h3>
            {post.description && (
              <p className="text-xs text-muted-foreground/60 leading-relaxed line-clamp-2">
                {post.description}
              </p>
            )}
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/40 transition-all duration-200 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </m.div>
  );
}
