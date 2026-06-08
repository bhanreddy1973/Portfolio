import { Heart } from "lucide-react";
import Link from "next/link";
import { Section } from "./section";

export function Footer() {
  return (
    <Section>
      <footer className="glass-subtle rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-muted-foreground/50">
        <div className="flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="size-3 fill-primary/60 text-primary/60 animate-pulse" />
          <span>and strong coffee</span>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-mono text-xs">
            &copy; {new Date().getFullYear()} Bhanu Reddy
          </p>
          <Link
            href="https://github.com/bhanreddy1973/portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs underline underline-offset-4 decoration-border transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary supports-[hover:hover]:hover:decoration-primary/40"
          >
            source
          </Link>
        </div>
      </footer>
    </Section>
  );
}
