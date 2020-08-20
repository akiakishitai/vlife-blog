// @ts-check
import { basename, extname, join } from 'path'
import { parse } from './utils/asciidoc'
// @ts-ignore
import jsonData from '<%= options.jsonFile %>'

/**
 * AsciiDocファイルを解析したデータを提供するNuxtプラグインの処理をまとめたクラス。
 */
export class AsciidocPlugin {
  /**
   *
   * @param {import('.').AsciidocSummaryJson} summaryJson ファイル一覧データを含むオブジェクト
   */
  constructor(summaryJson) {
    /** ファイル一覧を含むJSONオブジェクト */
    this.summaryJson = summaryJson
  }

  /**
   * AsciiDocファイル一覧から指定されたファイル名を検索し、一致したファイルのパスを返す。
   *
   * @private
   * @param {string} filename ファイル名
   * @throws {Error} ファイル名が一覧になかった場合にエラーメッセージを投げる
   * @returns {string} ファイル名が一致したファイルのパス
   */
  __findSummaryFromList(filename) {
    const target = this.summaryJson.list.find(
      (summary) =>
        basename(summary.filename, extname(summary.filename)) ===
        basename(filename, extname(filename))
    )

    if (target == null) {
      throw new Error(`NotFound: target file "${filename}"`)
    }

    return join(this.summaryJson.dir, target.filename)
  }

  /**
   * ファイル名からAsciidocファイルを取得し、解析して返す。
   *
   * @param {string} filename AsciiDocソースファイル名
   * @throws {Error} Not found filename in summary path lists
   * @returns {Promise<import('.').AsciidocParsed>} AsciiDocの解析データを返す。
   */
  async loadFile(filename) {
    const filepath = this.__findSummaryFromList(filename)

    return parse(join(filepath), {
      safe: 'secure',
    })
  }

  /**
   * AsciiDocファイル一覧から指定されたファイル名を散策し、存在すれば `true` を返す。
   * @param {string} filename ファイル名
   * @returns {boolean} 指定されたファイル名が一覧にあれば `true`
   */
  hasFile(filename) {
    try {
      this.__findSummaryFromList(filename)
      return true
    } catch {
      return false
    }
  }
}

/**
 * AsciiDocを解析して得られた {@link import('./models').AsciidocParsed} データやファイル一覧データを提供する {@link AsciidocPlugin} を context.app に注入する。
 *
 * ## Example
 *
 * ```markup
 * <template>
 *   <div class="asciidoc-main">
 *     <h1>{{ content.title }}</h1>
 *     <div class="asciidoc-body" v-html="content.rendered"></div>
 *   </div>
 * </template>
 *
 * <script>
 * export default {
 *   async validate(ctx) {
 *     return ctx.app.$asciidoc.hasFile(ctx.params.slug)
 *   },
 *   async asyncData(ctx) {
 *     const json = ctx.app.$asciidoc.summaryJson;
 *     const content = await ctx.app.$asciidoc.loadFile(ctx.params.slug);
 *     return { json: json, content };
 *   }
 * };
 * </script>
 * ```
 *
 * @type {import('@nuxt/types').Plugin}
 */
// eslint-disable-next-line no-unused-vars
export default function plugin(ctx, inject) {
  ctx.app.$asciidoc = new AsciidocPlugin(jsonData)
}
