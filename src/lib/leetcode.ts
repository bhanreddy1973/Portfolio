const LEETCODE_API = "https://alfa-leetcode-api.onrender.com";
const USERNAME = "rbhanu504";

export type LeetCodeProfile = {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
};

export type LeetCodeSolved = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

export type LeetCodeContest = {
  contestRating: number;
  contestGlobalRanking: number;
  contestTopPercentage: number;
  contestAttend: number;
};

export type LeetCodeStats = {
  profile: LeetCodeProfile;
  solved: LeetCodeSolved;
  contest: LeetCodeContest;
};

export async function getLeetCodeStats(): Promise<LeetCodeStats | null> {
  try {
    const [profileRes, solvedRes, contestRes] = await Promise.all([
      fetch(`${LEETCODE_API}/${USERNAME}`, { next: { revalidate: 86400 } }),
      fetch(`${LEETCODE_API}/${USERNAME}/solved`, { next: { revalidate: 86400 } }),
      fetch(`${LEETCODE_API}/${USERNAME}/contest`, { next: { revalidate: 86400 } }),
    ]);

    if (!profileRes.ok || !solvedRes.ok || !contestRes.ok) return null;

    const [profile, solved, contest] = await Promise.all([
      profileRes.json() as Promise<LeetCodeProfile>,
      solvedRes.json() as Promise<LeetCodeSolved>,
      contestRes.json() as Promise<LeetCodeContest>,
    ]);

    return { profile, solved, contest };
  } catch {
    return null;
  }
}
