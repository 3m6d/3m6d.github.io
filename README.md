# Dipawoli Malla — Portfolio

Personal portfolio site for Dipawoli Malla, Machine Learning Engineer
(Computer Vision & Edge AI). Built with [Astro](https://astro.build), deployed
as a static site to GitHub Pages.

Live site: https://3m6d.github.io

## Status

This is a scaffold pass: structure, layout, and content wiring are done.
Experience and publication content is pulled from the CV. **Project
write-ups are placeholders** pending real details, and the color/type
choices are a first-pass default (dark, neutral, monospace accents) —
see "Next steps" below.

## Stack

- [Astro](https://astro.build) (static output, ~zero client JS)
- Content collections for `experience`, `projects`, and `publications`
- Hand-written CSS (no framework) using CSS custom properties for theming
- GitHub Actions → GitHub Pages deploy on push to `main`

## Local development

Requires Node 20+.

```bash
npm install
npm run dev       # http://localhost:4321
```

Other scripts:

```bash
npm run build      # type-check + build to dist/
npm run preview    # preview the production build locally
```

## Editing content

Nothing below requires touching layout or component code.

### Experience

Add/edit files in `src/content/experience/*.md`. Frontmatter fields:
`role`, `org`, `location`, `startDate`, `endDate`, `bullets` (array of
strings), `order` (lower = shown first).

### Projects

Add a new file to `src/content/projects/` — it will automatically appear
as a card on the homepage and get its own detail page at `/projects/<slug>/`.
Frontmatter fields: `title`, `summary`, `stack` (array), `period`, `role`,
`repoUrl`, `demoUrl`, `image`, `imageAlt`, `featured`, `draft` (set `true`
to hide without deleting), `order`. The markdown body becomes the project's
detail page content.

### Publications

Add files to `src/content/publications/`. Fields: `title`, `venue`,
`location`, `date`, `doi`, `doiUrl`, `summary`, `order`.

### Skills, awards, and site copy (name, tagline, contact links)

Plain TypeScript data files, edited directly:

- `src/data/site.ts` — name, title, tagline, bio paragraphs, contact links
- `src/data/skills.ts` — skill categories and items
- `src/data/awards.ts` — awards/leadership entries

### Styling

Colors, fonts, and spacing are all CSS custom properties defined at the top
of `src/styles/global.css` (`:root { --bg, --text, --accent, --font-sans,
--font-mono, ... }`). Changing the site's look is a matter of editing those
values — no component changes needed.

## Deploying to GitHub Pages

Deployment is automatic via `.github/workflows/deploy.yml`: every push to
`main` builds the site and publishes it with GitHub's official
`actions/deploy-pages` action.

**One-time setup** (already applies to this repo, but note for reference):

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically. Check
   progress under the **Actions** tab.

Because this repo is named `3m6d.github.io` (a GitHub user-site repo), it
deploys to the domain root (`https://3m6d.github.io/`) with no `base` path
configuration needed. If you ever fork this into a project repo instead,
set `base: '/<repo-name>/'` in `astro.config.mjs`.

## Next steps

- [ ] Real write-ups for each project in `src/content/projects/` (problem,
      approach, architecture, results, links to repo/demo)
- [ ] Project images (screenshots, diagrams, or demo GIFs)
- [ ] Confirm or adjust the color palette and fonts in `src/styles/global.css`
- [ ] Optional: swap the generated OG image / favicon for a personal design
