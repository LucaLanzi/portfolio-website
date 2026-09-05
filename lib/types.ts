export type NavLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectRepo = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  org: string;
  summary: string;
  description: string[];
  images: string[];
  tags: string[];
  repos: ProjectRepo[];
  liveUrl?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  school: string;
  tagline: string;
  bio: string[];
  email: string;
  githubUsername: string;
  linkedinUrl: string;
  discordUsername: string;
  resumePath: string;
  skills: SkillGroup[];
  navLinks: NavLink[];
};
