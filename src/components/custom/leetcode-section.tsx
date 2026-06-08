"use client";

import { ExternalLink, Trophy, Target, Flame, Code2 } from "lucide-react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { LeetCodeStats } from "@/lib/leetcode";
import { Section, SectionHeading, SectionTitle } from "./section";

type LeetCodeSectionProps = {
  stats: LeetCodeStats;
};

function StatCard({
  icon,
  label,
  value,
  color,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <m.div
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.95 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={reduceMotion ? undefined : { once: true }}
      transition={{ duration: 0.5, ease: easeOut, delay }}
      className="rounded-2xl border border-border bg-background p-4 flex flex-col items-center gap-2 text-center transition-all duration-200 supports-[hover:hover]:hover:shadow-md supports-[hover:hover]:hover:-translate-y-1"
    >
      <div className={`${color} rounded-full p-2`}>{icon}</div>
      <p className="text-2xl font-bold font-mono text-foreground">{value}</p>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground/60 font-medium">
        {label}
      </p>
    </m.div>
  );
}

function DifficultyBar({
  easy,
  medium,
  hard,
  total,
}: {
  easy: number;
  medium: number;
  hard: number;
  total: number;
}) {
  const easyPct = (easy / total) * 100;
  const mediumPct = (medium / total) * 100;
  const hardPct = (hard / total) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs font-mono text-muted-foreground/70">
        <span>Problems Solved</span>
        <span className="text-foreground font-semibold">{total}</span>
      </div>
      <div className="h-3 w-full rounded-full bg-muted/40 overflow-hidden flex">
        <div
          className="h-full bg-emerald-500/80 transition-all duration-700"
          style={{ width: `${easyPct}%` }}
        />
        <div
          className="h-full bg-amber-500/80 transition-all duration-700"
          style={{ width: `${mediumPct}%` }}
        />
        <div
          className="h-full bg-red-500/80 transition-all duration-700"
          style={{ width: `${hardPct}%` }}
        />
      </div>
      <div className="flex justify-between text-[11px]">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-500/80" />
          <span className="text-muted-foreground/60">Easy</span>
          <span className="font-mono font-medium text-foreground/80">{easy}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-amber-500/80" />
          <span className="text-muted-foreground/60">Medium</span>
          <span className="font-mono font-medium text-foreground/80">{medium}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-500/80" />
          <span className="text-muted-foreground/60">Hard</span>
          <span className="font-mono font-medium text-foreground/80">{hard}</span>
        </span>
      </div>
    </div>
  );
}

export function LeetCodeSection({ stats }: LeetCodeSectionProps) {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <LazyMotion features={domAnimation}>
      <Section>
        <SectionHeading>
          <div className="flex items-center justify-between">
            <div>
              <SectionTitle>LeetCode</SectionTitle>
              <span className="text-muted-foreground/60">Grinding algorithms daily</span>
            </div>
            <Link
              href="https://leetcode.com/u/rbhanu504/"
              target="_blank"
              rel="noreferrer"
              className="glass-subtle inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono text-muted-foreground transition-all duration-200 supports-[hover:hover]:hover:text-primary supports-[hover:hover]:hover:shadow-sm"
            >
              Profile
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </SectionHeading>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <StatCard
            icon={<Code2 className="size-4 text-primary" />}
            label="Solved"
            value={stats.solved.solvedProblem}
            color="bg-primary/10"
            delay={0}
          />
          <StatCard
            icon={<Trophy className="size-4 text-amber-500" />}
            label="Rating"
            value={Math.round(stats.contest.contestRating)}
            color="bg-amber-500/10"
            delay={0.05}
          />
          <StatCard
            icon={<Target className="size-4 text-emerald-500" />}
            label="Top %"
            value={`${stats.contest.contestTopPercentage}%`}
            color="bg-emerald-500/10"
            delay={0.1}
          />
          <StatCard
            icon={<Flame className="size-4 text-red-500" />}
            label="Contests"
            value={stats.contest.contestAttend}
            color="bg-red-500/10"
            delay={0.15}
          />
        </div>

        {/* Difficulty breakdown */}
        <m.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={reduceMotion ? undefined : { once: true }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
          className="rounded-2xl border border-border bg-background p-5 mt-4"
        >
          <DifficultyBar
            easy={stats.solved.easySolved}
            medium={stats.solved.mediumSolved}
            hard={stats.solved.hardSolved}
            total={stats.solved.solvedProblem}
          />
        </m.div>
      </Section>
    </LazyMotion>
  );
}
