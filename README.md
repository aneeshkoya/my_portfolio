# Aneesh M. Koya Portfolio

Premium static personal portfolio website for Aneesh M. Koya.

This is a website only: no React app, no Next.js runtime, no build step required.

## Overview

The site positions Aneesh as an AI/ML Research Scientist, industrial R&D professional, technical leader and PhD-level engineer.

It is designed for:

- Postdoctoral and industrial R&D applications
- Senior AI/ML and Data Science roles
- Research Scientist and Technical Manager positions
- Universities, research laboratories and technology companies
- Recruiters in Saudi Arabia, UAE, Malaysia and international markets

## Structure

- `index.html` - homepage
- `about.html` - professional positioning
- `experience.html` - timeline
- `projects.html` - project index
- `projects/*.html` - project case studies
- `research.html` - research interests and publications
- `leadership.html` - technical leadership
- `resume.html` - resume placeholder
- `contact.html` - contact details
- `styles.css` - design system and responsive layout
- `script.js` - theme toggle, mobile navigation, publication filters and BibTeX copy
- `public/images/ai-research-hero.png` - hero visual
- `docs/screenshots/` - validation screenshots

## Local Preview

Open `index.html` directly in your browser.

For a local server:

```powershell
python -m http.server 3000
```

Then open `http://localhost:3000`.

## Deployment

### GitHub Pages

This static site is ready for GitHub Pages.

1. Push to GitHub.
2. Open repository settings.
3. Go to `Pages`.
4. Select `Deploy from a branch`.
5. Use branch `main` and folder `/ (root)`.

URL:

```text
https://aneeshkoya.github.io/my_portfolio/
```

### Vercel

Import the GitHub repository into Vercel.

Use:

- Framework preset: Other
- Build command: leave empty
- Output directory: `.`

## Content Updates

Edit the relevant HTML files directly. Placeholders use `[ADD ...]` and should be replaced only with verified public information.

Important placeholders:

- LinkedIn URL
- GitHub URL
- Google Scholar URL
- ORCID
- Scopus
- OpenReview
- Public resume PDF
- Exact publication titles
- DOI links
- Citation counts
- Public project metrics not already supplied

## Resume

Add the public resume PDF at:

```text
public/resume/Aneesh_Koya_CV.pdf
```

The current resume button is disabled to avoid a broken link until the file is added.

## Quality Checks

The site was validated in Chrome at desktop, tablet and mobile widths for:

- Required pages
- Case-study routes
- Internal links
- Horizontal overflow
- Image alt text
- Theme toggle

## Licence

See `LICENSE`.
