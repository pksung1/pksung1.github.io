import {codes} from 'micromark-util-symbol'
import type {Code, CompileContext, Construct, Effects, Extension, Handle, HtmlExtension, State, Token, TokenizeContext} from 'micromark-util-types'

export const ofmEmbedTokenTypes = {
  file: "ofmEmbedFile",
  marker: "ofmEmbedFileMarker",
  string: "ofmEmbedFileString",
  options: "ofmEmbedFileOptions",
} as const

const construct: Construct = {name: 'ofmEmbed', tokenize: tokenize}

// ! 를 만나면 construct 의 tokenize 함수를 실행합니다
export const extension: Extension = {text: {[codes.exclamationMark]: construct}}


function tokenize(this: TokenizeContext, effects: Effects, ok: State, nok: State): State {
  return start

  // ! 문자 처리
  function start(code: Code): ReturnType<State> {
    effects.consume(code)
    effects.enter(ofmEmbedTokenTypes.file)
    effects.enter(ofmEmbedTokenTypes.marker)
    return firstLeftSquareBracket
  }

  // 첫 번째 [ 확인
  function firstLeftSquareBracket(code: Code): ReturnType<State> {
    if (code !== codes.leftSquareBracket) {
      return nok
    }
    effects.consume(code)
    return secondLeftSquareBracket
  }

  // 두 번째 [ 확인
  function secondLeftSquareBracket(code: Code): ReturnType<State> {
    if (code !== codes.leftSquareBracket) {
      return nok
    }
    effects.consume(code)
    effects.exit(ofmEmbedTokenTypes.marker)
    effects.enter(ofmEmbedTokenTypes.string, { contentType: 'string' })
    return inside
  }

  // 파일명 내부 파싱
  function inside(code: Code): ReturnType<State> {
    // 줄바꿈이나 EOF는 허용하지 않음
    if (code === codes.carriageReturn || code === codes.lineFeed || code === codes.carriageReturnLineFeed || code === null) {
      return nok(code)
    }

    // ] 를 만나면 종료 체크
    if (code === codes.rightSquareBracket) {
      effects.exit(ofmEmbedTokenTypes.string)
      effects.enter(ofmEmbedTokenTypes.marker)
      effects.consume(code)
      return firstRightSquareBracket
    }

    // | 를 만나면 옵션 시작 (크기 지정: |100x145 또는 |100)
    if (code === codes.verticalBar) {
      effects.exit(ofmEmbedTokenTypes.string)
      effects.enter(ofmEmbedTokenTypes.options, { contentType: 'string' })
      effects.consume(code)
      return insideOptions
    }

    // # 를 만나면 옵션 시작 (PDF 옵션: #page=3 또는 #height=400)
    if (code === codes.numberSign) {
      effects.exit(ofmEmbedTokenTypes.string)
      effects.enter(ofmEmbedTokenTypes.options, { contentType: 'string' })
      effects.consume(code)
      return insideOptions
    }

    effects.consume(code)
    return inside
  }

  // 옵션 내부 파싱
  function insideOptions(code: Code): ReturnType<State> {
    // 줄바꿈이나 EOF는 허용하지 않음
    if (code === codes.carriageReturn || code === codes.lineFeed || code === codes.carriageReturnLineFeed || code === null) {
      return nok(code)
    }

    // ] 를 만나면 종료 체크
    if (code === codes.rightSquareBracket) {
      effects.exit(ofmEmbedTokenTypes.options)
      effects.enter(ofmEmbedTokenTypes.marker)
      effects.consume(code)
      return firstRightSquareBracket
    }

    effects.consume(code)
    return insideOptions
  }

  // 첫 번째 ] 처리
  function firstRightSquareBracket(code: Code): ReturnType<State> {
    if (code !== codes.rightSquareBracket) {
      return nok
    }
    effects.consume(code)
    effects.exit(ofmEmbedTokenTypes.file)
    effects.exit(ofmEmbedTokenTypes.marker)
    return ok
  }
}



/**
 * root: 루트 디렉토리
 */
interface HtmlOptions {
  root: string
}

export function html({ root }: HtmlOptions): HtmlExtension {
  let filename = ''
  let options = ''

  return {
    enter: {
      [ofmEmbedTokenTypes.file]: enterFile,
    },
    exit: {
      [ofmEmbedTokenTypes.file]: exitFile,
    },
  }

  function enterFile(this: CompileContext, token: Token): ReturnType<Handle> {
    // 파일 토큰 시작 시 버퍼링하여 자식 토큰들의 출력을 막음
    this.buffer()
  }

  function exitFile(this: CompileContext, token: Token): ReturnType<Handle> {
    // 버퍼된 전체 내용을 가져옴 (자식 토큰들의 내용만 포함, ![[와 ]]는 제외)
    const serialized = this.resume()
    
    // serialized는 파일명과 옵션만 포함 (예: "test.md" 또는 "image.png|100x145")
    // | 또는 # 로 분리
    const pipeIndex = serialized.indexOf('|')
    const hashIndex = serialized.indexOf('#')
    const separatorIndex = pipeIndex !== -1 && hashIndex !== -1 
      ? Math.min(pipeIndex, hashIndex)
      : pipeIndex !== -1 ? pipeIndex : hashIndex !== -1 ? hashIndex : -1
    
    if (separatorIndex !== -1) {
      filename = serialized.slice(0, separatorIndex)
      options = serialized.slice(separatorIndex)
    } else {
      filename = serialized
      options = ''
    }

    if (!filename) {
      // 파일명을 찾을 수 없으면 원본 출력
      this.raw(this.encode(serialized))
      return
    }

    const url = `${root}/${filename}`
    
    // 파일 확장자로 이미지인지 판단
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp']
    const isImage = imageExtensions.some(ext => filename.toLowerCase().endsWith(ext))
    
    // 옵션 파싱
    let width: string | undefined
    let height: string | undefined
    
    if (options) {
      // 크기 옵션 파싱: |100x145 또는 |100
      if (options.startsWith('|')) {
        const sizePart = options.slice(1) // | 제거
        const sizeMatch = sizePart.match(/^(\d+)(?:x(\d+))?$/)
        if (sizeMatch) {
          width = sizeMatch[1]
          if (sizeMatch[2]) {
            height = sizeMatch[2]
          }
        }
      }
      // PDF 옵션은 나중에 처리할 수 있음
    }

    if (isImage) {
      // 이미지 태그로 출력
      this.tag('<img src="')
      this.tag(this.encode(url))
      this.tag('" alt="')
      this.raw(this.encode(filename))
      this.tag('"')
      
      if (width) {
        this.tag(' width="')
        this.tag(this.encode(width))
        this.tag('"')
      }
      
      if (height) {
        this.tag(' height="')
        this.tag(this.encode(height))
        this.tag('"')
      }
      
      this.tag(' />')
    } else {
      // 이미지가 아니면 링크로 출력
      this.tag('<a href="')
      this.tag(this.encode(url))
      this.tag('">')
      this.raw(this.encode(filename))
      this.tag('</a>')
    }
  }
}