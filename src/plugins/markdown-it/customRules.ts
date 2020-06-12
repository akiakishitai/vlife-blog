/**
 * Tailwind CSS を利用したレンダリングルールを実装。
 */
import MarkdownIt from 'markdown-it'
import { RenderRule } from 'markdown-it/lib/renderer'
import Token from 'markdown-it/lib/token'
import '@/helpers/string.extension'

type CallbackToken = (token: Token) => Token

/**
 * `markdown-it` の `utils`
 */
const utils = MarkdownIt().utils

/**
 * [[RenderRule]] を返す関数。
 *
 * @param classes HTMLタグに付与するクラス
 * @param callbackfn [[Token]] に対して特別な処理を行う。
 */
function renderRule(classes: string, callbackfn?: CallbackToken): RenderRule {
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

/**
 * カスタマイズした `markdown-it` のレンダリングルール。
 *
 * @param name ルール名
 * @param rule カスタマイズした [[RenderRule]]
 */
export interface CustomRule {
  name: string
  rule: RenderRule
}

/**
 * 引数として渡された `markdown-it` オブジェクトにカスタムルールを適用して返す。
 *
 * @param md カスタムルールを適用する `markdown-it` オブジェクト。
 */
export function applyCustomRules(md: MarkdownIt): MarkdownIt {
  // render.js rules
  const mdIt = new MarkdownIt()
  const defaultRules = new Map<string, RenderRule | undefined>()
    .set('code_inline', mdIt.renderer.rules.code_inline)
    .set('image', mdIt.renderer.rules.image)
    .set('fence', mdIt.renderer.rules.fence)

  // 適用するカスタムルール
  const customRules: CustomRule[] = [
    // <h1~6>
    {
      name: 'heading_open',
      rule: renderRule('', (token) => {
        const classAttr = new Map<string, string>([
          ['h1', 'text-4xl font-light'],
          ['h2', 'text-3xl font-normal mt-8'],
          ['h3', 'text-2xl font-semibold mt-6'],
          ['h4', 'text-xl font-semibold mt-4'],
          ['h5', 'text-lg font-semibold mt-4'],
          ['h6', 'text-base font-semibold mt-4'],
        ]).get(token.tag)

        if (classAttr != null) {
          token.attrJoin('class', classAttr)
        }

        return token
      }),
    },
    // <p>
    {
      name: 'paragraph_open',
      rule: renderRule('', (token) => {
        token.attrJoin('class', 'mt-4')
        return token
      }),
    },
    // <ul>
    {
      name: 'bullet_list_open',
      rule: renderRule('list-disc', (token) => {
        const attr = token.level === 0 ? 'pl-6 mt-4' : 'pl-4'

        token.attrJoin('class', attr)
        return token
      }),
    },
    // <ol>
    {
      name: 'ordered_list_open',
      rule: renderRule('list-decimal', (token) => {
        const attr = token.level === 0 ? 'pl-6 mt-4' : 'pl-4'

        token.attrJoin('class', attr)
        return token
      }),
    },
    // <table>
    {
      name: 'table_open',
      rule: renderRule('table-auto border-collapse mt-4 ml'),
    },
    {
      name: 'tr_open',
      rule: renderRule(
        'border-b border-black border-opacity-50 even:bg-primary-light even:bg-opacity-15'
      ),
    },
    {
      name: 'th_open',
      rule: renderRule('px-4 py-3'),
    },
    {
      name: 'td_open',
      rule: renderRule('px-4 py-2'),
    },
    // <blockquote>
    {
      name: 'blockquote_open',
      rule: renderRule(
        'border-l-4 border-primary border-opacity-54 text-black text-opacity-75 italic pl-4'
      ),
    },
    // <hr>
    {
      name: 'hr',
      rule: renderRule('mt-6 border-gray-600'),
    },
    // <a>
    {
      name: 'link_open',
      rule: renderRule(
        'text-indigo-500 visited:text-purple-800 hover:underline'
      ),
    },
    // code
    {
      name: 'code_inline',
      rule: (tokens, idx, options, env, self): string => {
        tokens[idx].attrJoin(
          'class',
          'rounded-sm bg-primary bg-opacity-75 px-1'
        )

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
      },
    },
    {
      name: 'fence',
      rule: (tokens, idx, options, env, self): string => {
        const token = tokens[idx]
        const info = token.info ? utils.unescapeAll(token.info).trim() : ''
        const langName = info.split(/\s+/g)[0]
        const highlighted = !!options.highlight
          ? options.highlight(token.content, langName)
          : utils.escapeHtml(token.content)

        // `highlight` が `<pre>` タグから始まる場合は最後に改行コードをつけたものを返す。
        if (highlighted.indexOf('<pre') === 0) {
          return highlighted + '\n'
        }

        // 言語名が設定されている場合
        if (langName.isNotEmpty()) {
          token.attrJoin('class', `${options.langPrefix}${langName}`)
        }

        // <pre> タグに付与する属性トークン
        const preToken = new Token('pre_open', 'pre', 0)
        preToken.attrJoin('class', 'code-note line-numbers')

        // 独自属性 `data-lang` によるメタ情報を<pre>につけ直す
        const dataLang = token.attrGet('data-lang') ?? ''
        if (dataLang.isNotEmpty()) {
          preToken.attrSet('data-lang', dataLang)
        }

        return (
          `<pre${self.renderAttrs(preToken)}><code${self.renderAttrs(token)}>` +
          highlighted +
          '</code></pre>\n'
        )
      },
    },
    // image
    {
      name: 'image',
      rule: (tokens, idx, options, env, self): string => {
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
      },
    },
  ]

  customRules.forEach((rule) => (md.renderer.rules[rule.name] = rule.rule))

  return md
}
