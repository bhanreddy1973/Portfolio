"use client";

import { ExternalLink, GitFork, Star, Users, BookOpen } from "lucide-react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { GitHubStats } from "@/lib/github-stats";
import { Section, SectionHeading, SectionTitle } from "./section";

type GitHubStatsSectionProps = {
  stats: GitHubStats;
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

function LanguageBar({ languages }: { languages: { name: string; percentage: number }[] }) {
  const colors: Record<string, string> = {
    Python: "bg-blue-500",
    TypeScript: "bg-sky-500",
    JavaScript: "bg-yellow-500",
    "Jupyter Notebook": "bg-orange-500",
    "C++": "bg-pink-500",
    Java: "bg-red-500",
    Go: "bg-cyan-500",
    Rust: "bg-orange-600",
    HTML: "bg-red-400",
    CSS: "bg-purple-500",
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs font-mono text-muted-foreground/70">
        <span>Top Languages</span>
      </div>
      <div className="h-3 w-full rounded-full bg-muted/40 overflow-hidden flex">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className={`h-full ${colors[lang.name] ?? "bg-gray-500"} opacity-80 transition-all duration-700`}
            style={{ width: `${lang.percentage}%` }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px]">
        {languages.map((lang) => (
          <span key={lang.name} className="flex items-center gap-1.5">
            <span className={`size-2 rounded-full ${colors[lang.name] ?? "bg-gray-500"} opacity-80`} />
            <span className="text-muted-foreground/60">{lang.name}</span>
            <span className="font-mono font-medium text-foreground/80">{lang.percentage}%</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function GitHubStatsSection({ stats }: GitHubStatsSectionProps) {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <LazyMotion features={domAnimation}>
      <Section>
        <SectionHeading>
          <div className="flex items-center justify-between">
            <div>
              <SectionTitle>GitHub</SectionTitle>
              <span className="text-muted-foreground/60">Open source & side projects</span>
            </div>
            <Link
              href={`https://github.com/${stats.username}`}
              target="_blank"
              rel="noreferrer"
              className="glass-subtle inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono text-muted-foreground transition-all duration-200 supports-[hover:hover]:hover:text-primary supports-[hover:hover]:hover:shadow-sm"
            >
              @{stats.username}
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </SectionHeading>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <StatCard
            icon={<BookOpen className="size-4 text-primary" />}
            label="Repos"
            value={stats.publicRepos}
            color="bg-primary/10"
            delay={0}
          />
          <StatCard
            icon={<Star className="size-4 text-amber-500" />}
            label="Stars"
            value={stats.totalStars}
            color="bg-amber-500/10"
            delay={0.05}
          />
          <StatCard
            icon={<Users className="size-4 text-emerald-500" />}
            label="Followers"
            value={stats.followers}
            color="bg-emerald-500/10"
            delay={0.1}
          />
          <StatCard
            icon={<GitFork className="size-4 text-sky-500" />}
            label="Contributions"
            value={stats.totalCommits || "463"}
            color="bg-sky-500/10"
            delay={0.15}
          />
        </div>

        {/* Language breakdown */}
        {stats.topLanguages.length > 0 && (
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={reduceMotion ? undefined : { once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
            className="rounded-2xl border border-border bg-background p-5 mt-4"
          >
            <LanguageBar languages={stats.topLanguages} />
          </m.div>
        )}
      </Section>
    </LazyMotion>
  );
}
