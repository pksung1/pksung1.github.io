import type { Root } from 'mdast'
import { extension } from './embed.js'
import { mdast } from './mdast.js'

// unified Processor 타입
interface Processor {
  data(key?: string): any
  data(key: string, value: any): Processor
}

export interface ObsidianRemarkPluginOptions {
  /**
   * 파일 경로의 루트 디렉토리
   * 예: './content' 또는 '/public'
   */
  root?: string
}

/**
 * Obsidian embed 형식 (![[파일명]])을 파싱하는 remark 플러그인
 * 
 * micromark extension과 mdast extension을 설정하여 파싱 단계에서 처리합니다.
 * 
 * @example
 * ```ts
 * import { ObsidianRemarkPlugin } from '@pksung1/micromark-extension-ofm'
 * 
 * // Astro config에서 사용
 * export default defineConfig({
 *   markdown: {
 *     remarkPlugins: [
 *       [ObsidianRemarkPlugin, { root: './content' }]
 *     ]
 *   }
 * })
 * ```
 */
export function ObsidianRemarkPlugin(
  this: Processor,
  options: ObsidianRemarkPluginOptions = {}
) {
  const { root = '' } = options
  const data = this.data()
  
  console.log('ObsidianRemarkPlugin 실행됨', { root, data })
  
  // micromark extensions 추가
  const micromarkExtensions = (data.micromarkExtensions || []) as any[]
  if (!micromarkExtensions.includes(extension)) {
    micromarkExtensions.push(extension)
    data.micromarkExtensions = micromarkExtensions
    console.log('micromarkExtensions 설정됨', data.micromarkExtensions)
  }

  // mdast extensions 추가 (fromMarkdownExtensions로 설정해야 함)
  const fromMarkdownExtensions = (data.fromMarkdownExtensions || []) as any[]
  const mdastExtension = mdast({ root })
  fromMarkdownExtensions.push(mdastExtension)
  data.fromMarkdownExtensions = fromMarkdownExtensions
  console.log('fromMarkdownExtensions 설정됨', data.fromMarkdownExtensions)
}

export default ObsidianRemarkPlugin

