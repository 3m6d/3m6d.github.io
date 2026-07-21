import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// This repo deploys as a GitHub user site (3m6d.github.io), so it serves
// from the domain root — no `base` path needed. If this project is ever
// moved to a project repo instead, set `base: '/<repo-name>/'` here.
export default defineConfig({
  site: 'https://3m6d.github.io',
  integrations: [sitemap()],
});
