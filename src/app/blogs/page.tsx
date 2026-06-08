import type { Metadata } from "next";
import Script from "next/script";
import { BlogCard } from "@/components/custom/blog-card";
import { absoluteUrl, siteConfig, toJsonLd } from "@/lib/seo";
import { source as blog } from "@/lib/source";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Technical blog posts by Bhanu Reddy on backend engineering, web performance, and AI development.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: `Blogs | ${siteConfig.shortName}`,
    description:
      "Technical blog posts on backend engineering, web performance, and AI development.",
    url: absoluteUrl("/blogs"),
    type: "website",
    images: [siteConfig.defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blogs | ${siteConfig.shortName}`,
    description:
      "Technical blog posts on backend engineering, web performance, and AI development.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function BlogsPage() {
  const posts = blog.getPages();
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog posts",
    url: absoluteUrl("/blogs"),
    description:
      "Technical blog posts by Bhanu Reddy on backend engineering, web performance, and AI development.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(post.url),
        name: post.data.title,
      })),
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
      <Script id="blogs-collection-json-ld" type="application/ld+json">
        {toJsonLd(collectionJsonLd)}
      </Script>
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-doto font-black tracking-tight gradient-text">
          Blog
        </h1>
        <p className="text-muted-foreground/60 mt-2">
          Real thoughts. No ChatGPT ghostwriting here.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <BlogCard
            key={post.url}
            blog={{
              title: post.data.title,
              description: post.data.description,
              imageUrl: post.data.imageUrl,
            }}
            url={post.url}
          />
        ))}
      </div>
    </main>
  );
}
