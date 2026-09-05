# Luca Lanzillotta — Portfolio

Space-themed personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding your real content

Everything visitor-specific lives in a few files — no component code needs to change:

| What | File |
|---|---|
| Name, bio, GitHub username, LinkedIn URL, Discord, email, skills | `content/site-config.ts` |
| Curated portfolio projects (image, title, writeup, tags) | `content/projects.ts` + images in `public/portfolio/` |
| Gallery photos | `content/gallery.ts` + images in `public/gallery/` |
| Resume | Replace `public/resume/resume.pdf` with your real PDF |

Every placeholder value is marked `// TODO` in `content/site-config.ts` and `content/projects.ts`.

### GitHub token

The GitHub Repositories section fetches your repos + READMEs live from the GitHub REST API. Unauthenticated requests are capped at 60/hour/IP, which isn't reliable, so:

1. Create a fine-grained Personal Access Token at [github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens), scoped to **Public Repositories (read-only)** only.
2. Copy `.env.local.example` to `.env.local` and paste the token into `GITHUB_TOKEN`.
3. Restart `npm run dev`.

When deploying, add `GITHUB_TOKEN` as an environment variable in your host (e.g. Vercel Project Settings → Environment Variables) — never commit it.

## Deploying

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new) — it auto-detects Next.js.
3. Add the `GITHUB_TOKEN` environment variable (Production + Preview).
4. Optionally set `NEXT_PUBLIC_SITE_URL` to your final domain for correct SEO metadata.

## Project structure

- `app/` — pages, layout, global styles
- `components/` — one folder per section (hero, about, github, portfolio, resume, gallery, contact) plus shared `ui/` and `layout/` primitives
- `content/` — all editable, visitor-facing data
- `lib/` — GitHub API client, markdown pipeline, theme colors, shared types
