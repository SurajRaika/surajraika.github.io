// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import rehypeMermaid from 'rehype-mermaid';

// Get site URL from environment or use default
const site = process.env.SITE_URL || 'https://valerock.com';
// Get base path from URL if it exists
const basePath = new URL(site).pathname !== '/' ? new URL(site).pathname : undefined;

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  site,
  base: basePath,
  vite: {
      plugins: [tailwindcss()]
    },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date(),
    }),
  ], 
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid', 'math', 'pq', '', 'python'],
    },
    rehypePlugins: [rehypeMermaid],
  },
});
