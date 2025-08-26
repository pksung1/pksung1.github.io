// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark',
        wrap: true
      },
      remarkPlugins: [],
      rehypePlugins: []
    })
  ],


  markdown: {
    // Shiki 구문 강조 설정
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    
    // 또는 Prism 사용
    // syntaxHighlight: 'prism',
    
    // rehype/remark 플러그인
    remarkPlugins: [],
    rehypePlugins: []
  },

  site: 'https://pksung1.github.io',
});
