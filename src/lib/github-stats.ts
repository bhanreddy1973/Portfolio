export const GITHUB_USERNAME = "bhanreddy1973";

export type GitHubStats = {
  username: string;
  name: string;
  avatar: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalCommits: number;
  topLanguages: { name: string; percentage: number }[];
};

type GitHubUserResponse = {
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepoResponse = {
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}[];

export async function getGitHubStats(): Promise<GitHubStats> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 86400 },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate: 86400 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      console.error("GitHub API error:", userRes.status, reposRes.status);
      return getFallbackStats();
    }

    const user = (await userRes.json()) as GitHubUserResponse;
    const repos = (await reposRes.json()) as GitHubRepoResponse;

    // Calculate total stars
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    // Calculate language distribution (exclude forks)
    const langCount: Record<string, number> = {};
    let totalLangRepos = 0;
    for (const repo of repos) {
      if (!repo.fork && repo.language) {
        langCount[repo.language] = (langCount[repo.language] ?? 0) + 1;
        totalLangRepos++;
      }
    }

    const topLanguages = Object.entries(langCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / totalLangRepos) * 100),
      }));

    return {
      username: user.login,
      name: user.name ?? user.login,
      avatar: user.avatar_url,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      totalCommits: 463,
      topLanguages,
    };
  } catch (err) {
    console.error("GitHub stats fetch failed:", err);
    return getFallbackStats();
  }
}

function getFallbackStats(): GitHubStats {
  return {
    username: GITHUB_USERNAME,
    name: "Bhanu Reddy",
    avatar: `https://github.com/${GITHUB_USERNAME}.png`,
    publicRepos: 31,
    followers: 10,
    following: 10,
    totalStars: 12,
    totalCommits: 463,
    topLanguages: [
      { name: "Python", percentage: 35 },
      { name: "TypeScript", percentage: 28 },
      { name: "JavaScript", percentage: 18 },
      { name: "Jupyter Notebook", percentage: 12 },
      { name: "C++", percentage: 7 },
    ],
  };
}
