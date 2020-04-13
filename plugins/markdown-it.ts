import { Plugin } from '@nuxt/types'
import MarkdownIt from 'markdown-it'

// markdown-it オブジェクトの作成およびオプション設定
const md = import('markdown-it').then((x) => {
  return x.default({
    // https://markdown-it.github.io/markdown-it/#MarkdownIt.new
    breaks: true,
    typographer: true,
  })
})

// コンテキストにInject
declare module '@nuxt/types' {
  interface Context {
    $markdownIt: MarkdownIt
  }
}
const mdPlugin: Plugin = async (context) => {
  context.$markdownIt = await md
}

export default mdPlugin
