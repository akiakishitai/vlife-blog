// @ts-check
import { withoutExtension, PluginBase } from './pluginBase'

export class PluginServer extends PluginBase {
  /**
   *
   * @param {number} count 1ページあたりの表示件数
   * @param {import('.').AsciidocParsed[]} asciidocs 解析済み Asciidoc のリスト
   */
  constructor(count, asciidocs) {
    super(
      // AsciiDocファイルを返す
      (filename) => {
        const target = asciidocs.find(
          (adoc) =>
            withoutExtension(adoc.filename) === withoutExtension(filename)
        )

        if (target == null) {
          throw new Error(`NotFound: target file "${filename}"`)
        }

        return target
      },
      // ページに表示するファイル一覧を返す
      (page) => {
        const maxPage = Math.ceil(asciidocs.length / count)
        /** @type {(adoc: import('.').AsciidocParsed) => import('.').AsciidocAttribute} */
        const callback = (adoc) => {
          // eslint-disable-next-line no-unused-vars
          const { rendered, ...remain } = adoc
          return remain
        }

        /** @type {() => import('.').AsciidocOverview} */
        const overview = () => {
          if (page == null || page < 1) {
            return {
              paging: { current: 0, total: maxPage },
              overviews: asciidocs.map(callback),
            }
          }

          const current = Math.min(page, maxPage)
          const start = (current - 1) * count
          return {
            paging: { current, total: maxPage },
            overviews: asciidocs.slice(start, start + count).map(callback),
          }
        }

        return overview()
      }
    )
  }
}

/**
 *
 * @type {import('@nuxt/types').Plugin}
 */
// eslint-disable-next-line no-unused-vars
export default function plugin(ctx, inject) {
  // オブジェクトをJSON文字列化、エスケープ文字をそのまま残す
  const contents = String.raw`<%= JSON.stringify(options.contents) %>`
  /** @type {import('.').AsciidocParsed[]} */
  const items = JSON.parse(contents)

  const count = parseInt('<%= options.count %>', 10)

  ctx.app.$asciidoc = new PluginServer(count, items)
}
