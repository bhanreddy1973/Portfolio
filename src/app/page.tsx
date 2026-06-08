import type { Metadata } from "next";
import Script from "next/script";
import { ContactSection } from "@/components/custom/contact-section";
import { Footer } from "@/components/custom/footer";
import { GitHubContributionsSection } from "@/components/custom/github-contributions-section";
import { GitHubStatsSection } from "@/components/custom/github-stats-section";
import { HeroSection } from "@/components/custom/hero-section";
import { LeetCodeSection } from "@/components/custom/leetcode-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { SkillsSection } from "@/components/custom/skills-section";
import { BlogsSection } from "@/components/custom/blogs-section";
import { WorkExperienceSection } from "@/components/custom/work-experience-section";
import { getExternalBlogs } from "@/lib/external-blogs";
import { getGitHubStats } from "@/lib/github-stats";
import { getLeetCodeStats } from "@/lib/leetcode";
import { absoluteUrl, siteConfig, toJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const leetcodeStats = await getLeetCodeStats();
  const githubStats = await getGitHubStats();
  const externalPosts = await getExternalBlogs();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.creator,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: siteConfig.sameAs,
    image: absoluteUrl("/photo.jpg"),
    jobTitle: "Full Stack Developer and AI Engineer",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <>
      <Script id="person-json-ld" type="application/ld+json">
        {toJsonLd(personJsonLd)}
      </Script>
      <Script id="website-json-ld" type="application/ld+json">
        {toJsonLd(websiteJsonLd)}
      </Script>

      {/* Full-width hero */}
      <HeroSection />

      {/* Content sections */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pb-24 space-y-28">
        <ContactSection />
        <BlogsSection externalPosts={externalPosts} />
        <GitHubStatsSection stats={githubStats} />
        <GitHubContributionsSection />
        {leetcodeStats && <LeetCodeSection stats={leetcodeStats} />}
        <WorkExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  );
}
