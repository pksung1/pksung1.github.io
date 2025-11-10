// @ts-check
import { defineConfig } from 'astro/config';

import { viteStaticCopy } from 'vite-plugin-static-copy';
import tailwindcss from '@tailwindcss/vite';
import { ObsidianRemarkPlugin } from '@pksung1/micromark-extension-ofm';
import mermaid from 'astro-mermaid';

import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      viteStaticCopy({
        targets: [
          {
            src: 'content/obsidian-content/blog/**/attachments/*',
            dest: 'attachments/blog',
            transform: {
              encoding: 'buffer',  // 바이너리 파일로 처리
              handler: (contents, filePath) => {
                // _로 시작하는 폴더 경로를 제외
                const pathParts = filePath.split('/');
                if (pathParts.some(part => part.startsWith('_'))) {
                  return null; // null을 반환하면 파일이 복사되지 않음
                }
                return contents; // Buffer를 그대로 반환
              }
            }
          }
        ]
      })
    ]
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
    remarkPlugins: [
      [ObsidianRemarkPlugin, { root: import.meta.env.PROD ? 'https://pksung1.github.io/attachments/blog' : 'http://localhost:4321/attachments/blog' }]
    ],
    rehypePlugins: []
  },
  integrations: [
    mermaid({
      theme: 'forest',
      autoTheme: true
    }),
    react()
  ],

  site: 'https://pksung1.github.io',
});
