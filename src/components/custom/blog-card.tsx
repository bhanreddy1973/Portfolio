"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";

type BlogCardProps = {
  blog: {
    title: string;
    description?: string | undefined;
    imageUrl?: string | undefined;
  };
  url: string;
};

export function BlogCard({ blog, url }: BlogCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <Link href={url} className="group block">
      <div
        ref={cardRef}
        className="spotlight-card glass relative grid grid-cols-1 sm:grid-cols-4 gap-0 rounded-2xl overflow-hidden transition-all duration-300 ease-[var(--ease-out)] supports-[hover:hover]:group-hover:shadow-xl supports-[hover:hover]:group-hover:-translate-y-1 supports-[hover:hover]:group-hover:scale-[1.01]"
        onMouseMove={handleMouseMove}
      >
        {blog.imageUrl && (
          <div className="sm:col-span-1 overflow-hidden">
            <Image
              src={blog.imageUrl}
              height={400}
              width={400}
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out)] supports-[hover:hover]:group-hover:scale-110"
            />
          </div>
        )}
        <div className="relative z-10 sm:col-span-3 p-6 flex flex-col justify-center gap-3">
          <h3 className="text-lg font-semibold text-foreground leading-snug transition-colors duration-200 group-hover:text-primary">
            {blog.title}
          </h3>
          {blog.description && (
            <p className="text-sm text-muted-foreground/70 leading-relaxed line-clamp-2">
              {blog.description}
            </p>
          )}
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary/70 mt-1 transition-all duration-200 group-hover:gap-2.5 group-hover:text-primary">
            Read article
            <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
