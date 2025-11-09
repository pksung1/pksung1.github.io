import type { TokenTypeMap as BaseTokenTypeMap } from 'micromark-util-types'

declare module 'micromark-util-types' {
  interface TokenTypeMap {
    ofmEmbedFile: "ofmEmbedFile"
    ofmEmbedFileMarker: "ofmEmbedFileMarker"
    ofmEmbedFileString: "ofmEmbedFileString"
    ofmEmbedFileOptions: "ofmEmbedFileOptions"
  }
}
