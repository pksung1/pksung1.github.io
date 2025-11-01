// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { ObsidianRemarkPlugin } from './src/lib/obsidian-remark-plugin';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    // Shiki 구문 강조 설정
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    
    // 또는 Prism 사용
    // syntaxHighlight: 'prism',
    
    // rehype/remark 플러그인
    remarkPlugins: [ObsidianRemarkPlugin],
    rehypePlugins: []
  },

  site: 'https://pksung1.github.io',
});
