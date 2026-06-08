"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  children: React.ReactNode;
  favourite?: boolean;
  className?: string;
};

export function SkillBadge({
  children,
  favourite,
  className,
}: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "glass-subtle inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 ease-[var(--ease-out)] cursor-default supports-[hover:hover]:hover:-translate-y-0.5 supports-[hover:hover]:hover:shadow-md supports-[hover:hover]:hover:text-foreground",
        favourite && "ring-1 ring-primary/25 bg-primary/5",
        className,
      )}
    >
      {children}
      {favourite ? (
        <Star className="size-2.5 fill-primary text-primary opacity-80" />
      ) : null}
    </div>
  );
}
