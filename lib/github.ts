import type { Repo, RepoWithReadme } from "@/lib/github-types";

const GITHUB_API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

function authHeaders(accept: string): HeadersInit {
  const headers: Record<string, string> = {
    Accept: accept,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

type GithubRepoResponse = {
  id: number;
  name: string;
  full_name: string;
  owner: { login: string };
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  default_branch: string;
  pushed_at: string;
};

function mapRepo(repo: GithubRepoResponse): Repo {
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    owner: repo.owner.login,
    description: repo.description,
    htmlUrl: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
    topics: repo.topics ?? [],
    stargazersCount: repo.stargazers_count,
    forksCount: repo.forks_count,
    fork: repo.fork,
    defaultBranch: repo.default_branch,
    pushedAt: repo.pushed_at,
  };
}

/** Fetches a single repo's metadata, regardless of owner (personal or org). */
export async function getRepo(owner: string, name: string): Promise<Repo | null> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${owner}/${name}`, {
      headers: authHeaders("application/vnd.github+json"),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error(`GitHub repo fetch failed for ${owner}/${name}: ${res.status}`);
      return null;
    }

    return mapRepo((await res.json()) as GithubRepoResponse);
  } catch (error) {
    console.error(`GitHub repo request failed for ${owner}/${name}`, error);
    return null;
  }
}

/** Fetches a repo's raw README markdown, falling back to null if none exists. */
export async function getRepoReadme(
  owner: string,
  repo: string
): Promise<string | null> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/readme`, {
      headers: authHeaders("application/vnd.github.raw+json"),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return null;
    }

    return await res.text();
  } catch (error) {
    console.error(`GitHub README fetch failed for ${owner}/${repo}`, error);
    return null;
  }
}

/** Fetches a curated list of repos (any owner) with their READMEs, in parallel. */
export async function getFeaturedRepos(
  slugs: { owner: string; name: string }[]
): Promise<RepoWithReadme[]> {
  const repos = await Promise.all(
    slugs.map(async ({ owner, name }) => {
      const repo = await getRepo(owner, name);
      if (!repo) return null;
      const readme = await getRepoReadme(owner, name);
      return { ...repo, readme };
    })
  );

  return repos.filter((repo): repo is RepoWithReadme => repo !== null);
}
