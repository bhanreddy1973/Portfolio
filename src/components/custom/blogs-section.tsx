import { BlogCard } from "@/components/custom/blog-card";
import { ExternalBlogCard } from "@/components/custom/external-blog-card";
import type { ExternalBlogPost } from "@/lib/external-blogs";
import { toValidDate } from "@/lib/seo";
import { source as blog } from "@/lib/source";
import { Section, SectionHeading, SectionTitle } from "./section";
import { AnimatedBlogCard } from "./animated-blog-card";

type BlogsSectionProps = {
  externalPosts: ExternalBlogPost[];
};

export function BlogsSection({ externalPosts }: BlogsSectionProps) {
  const posts = blog.getPages();
  const latestPost = posts.reduce<(typeof posts)[number] | undefined>((latest, curr) => {
    if (!latest) return curr;

    const currDate = toValidDate(curr.data.lastModified);
    const latestDate = toValidDate(latest.data.lastModified);

    if (!currDate) return latest;
    if (!latestDate) return curr;

    return currDate > latestDate ? curr : latest;
  }, undefined);

  const hasContent = latestPost || (externalPosts && externalPosts.length > 0);
  if (!hasContent) return null;

  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Writing</SectionTitle>
        <span className="text-muted-foreground/60">Thoughts, deep dives, and war stories</span>
      </SectionHeading>

      {/* Local blog (latest) */}
      {latestPost && (
        <AnimatedBlogCard>
          <BlogCard
            blog={{
              title: latestPost.data.title,
              description: latestPost.data.description,
              imageUrl: latestPost.data.imageUrl,
            }}
            url={latestPost.url}
          />
        </AnimatedBlogCard>
      )}

      {/* External posts from Medium & Substack */}
      {externalPosts && externalPosts.length > 0 && (
        <div className="mt-6 space-y-3">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/40 pl-1">
            From Medium & Substack
          </p>
          <div className="space-y-3">
            {externalPosts.map((post, i) => (
              <ExternalBlogCard key={post.url} post={post} index={i} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
