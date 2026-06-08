export const siteConfig = {
  name: "Bhanu Reddy Portfolio",
  shortName: "Bhanu Portfolio",
  description:
    "Bhanu Reddy Cholapalli — AI/Data Engineering Intern at Swiggy building production LLM pipelines, MCP tool servers, and real-time CDC streaming. Previously: medical AI research (90.5% accuracy), backend microservices, and open-source projects.",
  url: "https://bhanreddy1973.github.io",
  locale: "en_US",
  creator: "Bhanu Reddy Cholapalli",
  twitterHandle: "",
  keywords: [
    "Bhanu Reddy",
    "Bhanu Reddy Cholapalli",
    "portfolio",
    "AI engineer",
    "Gen-AI pipeline",
    "LLM engineering",
    "data engineering",
    "MCP tool server",
    "full stack developer",
    "Python developer",
    "Swiggy intern",
    "Apache Kafka",
    "Apache Flink",
    "CDC streaming",
  ],
  sameAs: [
    "https://github.com/bhanreddy1973",
    "https://www.linkedin.com/in/bhanu-reddy-a30882288/",
  ],
  defaultOgImage: "/opengraph-image",
  defaultOgImageAlt: "Bhanu Reddy portfolio preview",
};

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, siteConfig.url).toString();
}

export function toValidDate(value: unknown): Date | undefined {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? undefined : value;
  }

  if (typeof value === "number" || typeof value === "string") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
  }

  return undefined;
}

export function toIsoDate(value: unknown): string | undefined {
  return toValidDate(value)?.toISOString();
}

export function toJsonLd(value: object): string {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}
