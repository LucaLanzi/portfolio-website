export type Repo = {
  id: number;
  name: string;
  fullName: string;
  owner: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazersCount: number;
  forksCount: number;
  fork: boolean;
  defaultBranch: string;
  pushedAt: string;
};

export type RepoWithReadme = Repo & {
  readme: string | null;
};
