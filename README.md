# Aneesh M. Koya Portfolio

Production-ready personal portfolio for Aneesh M. Koya, positioning him as an AI/ML Research Scientist, industrial R&D professional, technical leader and PhD-level engineer.

## Overview

The site is built with Next.js App Router, TypeScript, Tailwind CSS, restrained Framer Motion animation and structured TypeScript content data. It is prepared for GitHub and Vercel deployment.

## Screenshots

- `docs/screenshots/desktop-home.png`
- `docs/screenshots/tablet-home.png`
- `docs/screenshots/mobile-home.png`
- [ADD SCREENSHOT] Project case-study page after final publication links are added

## Technology Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Structured TypeScript content data
- ESLint
- Prettier

## Local Development

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```powershell
npm run lint
npm run type-check
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` only if optional integrations are enabled.

```text
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_CONTACT_ENDPOINT=
```

Do not commit `.env`, `.env.local`, personal secrets or private service tokens.

## Content Update Guide

Most personal content is separated from UI components:

- `data/profile.ts` - profile, metrics, leadership highlights, skills, links and experience
- `data/projects.ts` - featured projects and case-study pages
- `data/publications.ts` - publication entries, filters and research interests
- `public/resume/` - public resume PDF location
- `public/images/` - public image assets

Placeholders are intentionally visible in the UI using the format `[ADD ...]`. Replace them only with verified public information.

## Resume

Add the public PDF at:

```text
public/resume/Aneesh_Koya_CV.pdf
```

The repository `.gitignore` prevents committing PDFs from `public/resume/` by default to avoid accidentally publishing private documents. Remove or adjust that rule only after confirming the file is intended for public release.

## Deployment on Vercel

1. Push the repository to GitHub.
2. Open Vercel and import `aneeshkoya/my_portfolio`.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: leave default.
6. Add optional environment variables only if analytics or contact integrations are enabled.
7. Deploy.

## GitHub Pages

This project is now a Next.js application. For GitHub Pages, use a static export workflow only if you decide to target GitHub Pages specifically. Vercel is the recommended deployment path for this version.

## Contribution Guidance

This is a personal portfolio. Keep changes scoped, do not invent professional claims and do not add unverified metrics, employers, awards, publication titles or links.

## Licence

See `LICENSE`.
