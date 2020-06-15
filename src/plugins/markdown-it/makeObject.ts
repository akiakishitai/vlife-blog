import MarkdownIt from 'markdown-it'
import MarkdownItAttrs from 'markdown-it-attrs'
import '@/helpers/string.extension'

/**
 * オプションおよびプラグイン設定済みの `markdown-it` オブジェクトを返す関数。
 *
 * ## Options
 *
 * - `breaks`: true
 * - `typographer`: true
 *
 * ## Plugins
 *
 * - `markdown-it-attrs`
 */
export function makeMarkdownItObject(): MarkdownIt {
  return new MarkdownIt({
    // https://markdown-it.github.io/markdown-it/#MarkdownIt.new
    breaks: true,
    typographer: true,
  }) // プラグイン
    .use(MarkdownItAttrs, {
      // WARN: 正規表現での指定がうまく働かない
      allowedAttributes: ['id', 'class', 'data-lang'],
    })
}
