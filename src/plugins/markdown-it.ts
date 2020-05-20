import { Plugin } from '@nuxt/types'
import MarkdownIt from 'markdown-it'
import { RenderRule } from 'markdown-it/lib/renderer'
import Token from 'markdown-it/lib/token'
import '../helpers/string.extension'

// markdown-it オブジェクトの作成およびオプション設定
export const md = import('markdown-it').then((x) => {
  const m = x.default({
    // https://markdown-it.github.io/markdown-it/#MarkdownIt.new
    breaks: true,
    typographer: true,
    /**
     * fense（```name）を変換する関数。
     *
     * @param content 表示するソースコード文
     * @param lang コードの言語名
     */
    highlight: function (content: string, lang: string): string {
      /**
       *
       * @param langClass <code>の言語を指定
       * @param context ファイル名など表示したい文字列を入力。空文字の場合はスキップ。
       */
      const dom = (langClass: string, context: string = ''): string => {
        const preClass =
          'relative rounded-lg bg-green-500 mt-4 ' +
          (context.isNotEmpty() ? 'pt-10 pb-4' : 'py-4')

        const block = `<div class="code-note">${context}</div>`

        return (
          `<pre class="${preClass}">` +
          (context.isNotEmpty() ? block : '') +
          `<code class="px-6` +
          `${langClass.isNotEmpty() ? ` ${langClass}"` : '"'}>` +
          `${m.utils.escapeHtml(content)}</code>` +
          `</pre>`
        )
      }

      // Add div tag if a meta info exists in language
      const info = /:(\S+?)/
      if (lang && info.test(lang)) {
        const xs = lang.split(':')

        return dom(this.langPrefix + xs[0], xs[1])
      }

      const langClass = lang.isNotEmpty() ? this.langPrefix + lang : ''
      return dom(langClass)
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
  const mdIt = await md

  /* Adds classes */
  /**
   * [[RenderRule]] を返す関数。
   *
   * @param classes HTMLタグに付与するクラス
   * @param callbackfn [[Token]] に対して特別な処理を行う。
   */
  const renderRule = (
    classes: string,
    callbackfn?: (token: Token) => Token
  ): RenderRule => {
    return (tokens, idx, options, env, self): string => {
      if (classes.isNotEmpty()) {
        tokens[idx].attrJoin('class', classes)
      }

      if (callbackfn != null) {
        tokens[idx] = callbackfn(tokens[idx])
      }

      return self.renderToken(tokens, idx, options)
    }
  }
  // <h1~6>
  mdIt.renderer.rules['heading_open'] = renderRule('', (token) => {
    const classAttr = new Map<string, string>([
      ['h1', 'text-3xl font-semibold'],
      ['h2', 'text-2xl font-semibold mt-8'],
      ['h3', 'text-xl font-semibold mt-6'],
      ['h4', 'text-lg font-semibold mt-4'],
      ['h5', 'text-base font-semibold mt-4'],
      ['h6', 'text-base font-semibold mt-4'],
    ]).get(token.tag)

    if (classAttr != null) {
      token.attrJoin('class', classAttr)
    }

    return token
  })
  // <p>
  mdIt.renderer.rules['paragraph_open'] = renderRule('', (token) => {
    token.attrJoin('class', 'mt-4')
    return token
  })
  // <ul>
  mdIt.renderer.rules['bullet_list_open'] = renderRule('list-disc', (token) => {
    const attr = token.level === 0 ? 'pl-6 mt-4' : 'pl-4'

    token.attrJoin('class', attr)
    return token
  })
  // <ol>
  mdIt.renderer.rules['ordered_list_open'] = renderRule(
    'list-decimal',
    (token) => {
      const attr = token.level === 0 ? 'pl-6 mt-4' : 'pl-4'

      token.attrJoin('class', attr)
      return token
    }
  )
  // <table>
  mdIt.renderer.rules['table_open'] = renderRule(
    'table-auto border-collapse mt-4 ml'
  )
  mdIt.renderer.rules['tr_open'] = renderRule('even:bg-gray-200')
  mdIt.renderer.rules['th_open'] = renderRule('border border-b-4 px-4 py-2')
  mdIt.renderer.rules['td_open'] = renderRule('border px-4 py-2')
  // <blockquote>
  mdIt.renderer.rules['blockquote_open'] = renderRule('border-l-4 pl-4')
  // <hr>
  mdIt.renderer.rules['hr'] = renderRule('mt-6')
  // <a>
  mdIt.renderer.rules['link_open'] = renderRule(
    'text-indigo-500 visited:text-purple-600 hover:underline'
  )

  /* render.js rules */
  const defaultRules = new Map<string, RenderRule | undefined>()
  defaultRules.set('code_inline', mdIt.renderer.rules.code_inline)
  defaultRules.set('image', mdIt.renderer.rules.image)
  // <code>
  const codeInline: RenderRule = (tokens, idx, options, env, self): string => {
    tokens[idx].attrJoin('class', 'rounded-sm bg-green-500 px-1')

    const defaultRule = defaultRules.get('code_inline')
    if (defaultRule != null) {
      return defaultRule(tokens, idx, options, env, self)
    } else {
      return (
        '<code' +
        self.renderAttrs(tokens[idx]) +
        '>' +
        mdIt.utils.escapeHtml(tokens[idx].content) +
        '</code>'
      )
    }
  }
  // code_inline
  mdIt.renderer.rules.code_inline = codeInline
  // image
  mdIt.renderer.rules.image = (tokens, idx, options, env, self): string => {
    const defaultRule = defaultRules.get('image')
    if (defaultRule != null) {
      return defaultRule(tokens, idx, options, env, self)
    } else {
      const token = tokens[idx]
      token.attrSet(
        'alt',
        self.renderInlineAsText(token.children ?? [], options, env)
      )

      return self.renderToken(tokens, idx, options)
    }
  }

  // implements
  context.$markdownIt = mdIt
}

export default mdPlugin
