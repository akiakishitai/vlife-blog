// @ts-check
import { withoutExtension, PluginBase } from './pluginBase'

export class PluginServer extends PluginBase {
  /**
   *
   * @param {import('.').AsciidocParsed[]} asciidocs
   */
  constructor(asciidocs) {
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
      (count, page) => {
        const maxPage = Math.ceil(asciidocs.length / count)
        /** @type {(adoc: import('.').AsciidocParsed) => Omit<import('.').AsciidocParsed, 'rendered'>} */
        const callback = (adoc) => {
          // eslint-disable-next-line no-unused-vars
          const { rendered, ...remain } = adoc
          return remain
        }

        const ret =
          // page 指定
          page == null || page < 1
            ? asciidocs.map(callback)
            : asciidocs
                .slice(Math.min(page, maxPage) - 1 * count, count)
                .map(callback)

        return ret
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

  ctx.app.$asciidoc = new PluginServer(items)
}
