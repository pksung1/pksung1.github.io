
import type { 
  Code, 
  CompileContext, 
  Construct, 
  Effects, 
  Extension, 
  Handle, 
  HtmlExtension, 
  State, 
  Token, 
  TokenizeContext
} from 'micromark-util-types'
import type { 
  Extension as FromMarkdownExtension,
  CompileContext as MdastCompileContext,
  Handle as MdastHandle
} from 'mdast-util-from-markdown'
import { ofmEmbedTokenTypes } from './embed.js'

interface MdastOptions {
  root: string
}

/**
 * mdast extension: 토큰을 mdast 노드로 변환
 */
export function mdast({ root }: MdastOptions): FromMarkdownExtension {
  return {
    enter: {
      [ofmEmbedTokenTypes.file]: enterFile as MdastHandle,
    },
    exit: {
      [ofmEmbedTokenTypes.file]: exitFile as MdastHandle,
    },
  }

  function enterFile(this: MdastCompileContext, token: Token) {
    this.buffer()
  }

  function exitFile(this: MdastCompileContext, token: Token) {
    const serialized = this.resume()
    
    // 파일명과 옵션 파싱
    const pipeIndex = serialized.indexOf('|')
    const hashIndex = serialized.indexOf('#')
    const separatorIndex = pipeIndex !== -1 && hashIndex !== -1 
      ? Math.min(pipeIndex, hashIndex)
      : pipeIndex !== -1 ? pipeIndex : hashIndex !== -1 ? hashIndex : -1
    
    let filename: string
    let options: string
    
    if (separatorIndex !== -1) {
      filename = serialized.slice(0, separatorIndex)
      options = serialized.slice(separatorIndex)
    } else {
      filename = serialized
      options = ''
    }

    const url = `${root}/${filename}`
    
    // 이미지 확장자 확인
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp']
    const isImage = imageExtensions.some(ext => filename.toLowerCase().endsWith(ext))
    
    // 크기 옵션 파싱
    let width: number | undefined
    let height: number | undefined
    
    if (options.startsWith('|')) {
      const sizePart = options.slice(1)
      const sizeMatch = sizePart.match(/^(\d+)(?:x(\d+))?$/)
      if (sizeMatch) {
        width = parseInt(sizeMatch[1], 10)
        if (sizeMatch[2]) {
          height = parseInt(sizeMatch[2], 10)
        }
      }
    }

    if (isImage) {
      // mdast Image 노드 생성
      this.enter({
        type: 'image',
        url,
        alt: filename,
        ...(width && { width }),
        ...(height && { height }),
      }, token)
      this.exit(token)
    } else {
      // mdast Link 노드 생성
      this.enter({
        type: 'link',
        url,
        children: [{ type: 'text', value: filename }],
      }, token)
      this.exit(token)
    }
  }
}