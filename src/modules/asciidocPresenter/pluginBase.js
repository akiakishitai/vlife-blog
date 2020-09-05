import { basename, extname } from 'path'

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
 *     const files = ctx.app.$asciidoc.filesByPage(20, 1);
 *     const content = await ctx.app.$asciidoc.content(ctx.params.slug);
 *     return { files, content };
 *   }
 * };
 * </script>
 * ```
 */
export class PluginBase {
  /** @typedef {(filename: string) => import('.').AsciidocParsed | Promise<import('.').AsciidocParsed>} Content*/
  /** @typedef {(count: number, page: number) => Omit<import('.').AsciidocParsed, 'rendered'>[] | Promise<Omit<import('.').AsciidocParsed, 'rendered'>[]>} FileList */

  /**
   *
   * @param {Content} content
   * @param {FileList} filesByPage
   */
  constructor(content, filesByPage) {
    /**
     * AsciiDocファイルの解析結果を返す。
     * ファイルが存在しない場合は `Error` を投げる。
     *
     * @type {Content}
     * @param {string} filename AsciiDocファイル名
     * @throws {Error} Not found filename
     */
    this.content = content

    /**
     * あるページにおけるAsciiDocファイルの概要一覧を返す。
     *
     * `pageNum` が未指定または `1` 以下の場合はすべての一覧を返す。
     *
     * @type {FileList}
     * @param {number} count ページあたりの表示件数
     * @param {number | undefined} page `1` から始まるページ番号
     * @returns {Omit<import('.').AsciidocParsed, 'rendered'>[]}
     */
    this.filesByPage = filesByPage
  }

  /**
   * AsciiDocファイル一覧から指定されたファイル名を散策し、存在すれば `true` を返す。
   * @param {string} filename ファイル名
   * @returns {boolean | Promise<boolean>} 指定されたファイル名が一覧にあれば `true`
   */
  hasFile(filename) {
    try {
      this.content(filename)
      return true
    } catch (_) {
      return false
    }
  }
}

/**
 * ファイル名から拡張子を除いたものを返す。
 * @param {string} filename ファイル名
 */
export function withoutExtension(filename) {
  return basename(filename, extname(filename))
}
