export type ExternalBlogPost = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: "medium" | "substack";
};

const MEDIUM_RSS_URL = "https://medium.com/feed/@rbhanu504";
const SUBSTACK_RSS_URL = "https://bhanureddy3.substack.com/feed";

function parseRSSItems(xml: string): { title: string; link: string; description: string; pubDate: string }[] {
  const items: { title: string; link: string; description: string; pubDate: string }[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match = itemRegex.exec(xml);

  while (match) {
    const itemXml = match[1];
    const title = extractCDATA(itemXml, "title") || extractTag(itemXml, "title");
    const link = extractTag(itemXml, "link");
    const description = extractCDATA(itemXml, "description") || extractTag(itemXml, "description");
    const pubDate = extractTag(itemXml, "pubDate");

    if (title && link) {
      items.push({
        title,
        link,
        description: stripHtml(description).slice(0, 200),
        pubDate,
      });
    }

    match = itemRegex.exec(xml);
  }

  return items;
}

function extractCDATA(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tag}>`);
  const match = regex.exec(xml);
  return match ? match[1].trim() : "";
}

function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}>([^<]*)</${tag}>`);
  const match = regex.exec(xml);
  return match ? match[1].trim() : "";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
}

async function fetchRSS(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } }); // revalidate every hour
    if (!res.ok) return null;
    return res.text();
  } catch {
    return null;
  }
}

export async function getExternalBlogs(): Promise<ExternalBlogPost[]> {
  const [mediumXml, substackXml] = await Promise.all([
    fetchRSS(MEDIUM_RSS_URL),
    fetchRSS(SUBSTACK_RSS_URL),
  ]);

  const posts: ExternalBlogPost[] = [];

  if (mediumXml) {
    const items = parseRSSItems(mediumXml);
    for (const item of items) {
      posts.push({
        title: item.title,
        description: item.description,
        url: item.link,
        publishedAt: item.pubDate,
        source: "medium",
      });
    }
  }

  if (substackXml) {
    const items = parseRSSItems(substackXml);
    for (const item of items) {
      posts.push({
        title: item.title,
        description: item.description,
        url: item.link,
        publishedAt: item.pubDate,
        source: "substack",
      });
    }
  }

  // Sort by date, newest first
  posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime() || 0;
    const dateB = new Date(b.publishedAt).getTime() || 0;
    return dateB - dateA;
  });

  return posts;
}
