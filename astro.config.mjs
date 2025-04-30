import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import rehypeMermaid from 'rehype-mermaid';
import expressiveCode from "astro-expressive-code";




// https://astro.build/config
export default defineConfig({
  site: "https://astro-micro.vercel.app",
  integrations: [sitemap(), expressiveCode(),mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid', 'math', 'pq', '', 'python'],
    },
    rehypePlugins: [rehypeMermaid],  },
});
