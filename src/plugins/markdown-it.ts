import { Plugin } from '@nuxt/types'
import MarkdownIt from 'markdown-it'
import '../helpers/string.extension'

// markdown-it オブジェクトの作成およびオプション設定
export const md = import('markdown-it').then((x) => {
  const m = x.default({
    // https://markdown-it.github.io/markdown-it/#MarkdownIt.new
    breaks: true,
    typographer: true,
    highlight: function (str: string, lang: string): string {
      // Add div tag if a meta info exists in language
      const info = /:(\S+?)/
      if (lang && info.test(lang)) {
        const xs = lang.split(':')
        return (
          `<pre>` +
          `<div class="codeblock_header">${xs[1]}</div>` +
          `<code class="${this.langPrefix}${xs[0]}">${m.utils.escapeHtml}</code>` +
          `</pre>`
        )
      }

      return ''
    },
  })

  return m
})

// VueインスタンスにInject
declare module 'vue/types/vue' {
  interface Vue {
    /**
     * 初期設定済みの `markdown-it` オブジェクト。
     */
    $markdownIt: MarkdownIt
  }
}

// コンテキストにInject
declare module '@nuxt/types' {
  interface Context {
    /**
     * 初期設定済みの `markdown-it` オブジェクト。
     */
    $markdownIt: MarkdownIt
  }
}
const mdPlugin: Plugin = async (context) => {
  context.$markdownIt = await md
}

export default mdPlugin
