// @ts-check
import { join } from 'path'
import { asciidocFiles, withoutExtension, PluginBase } from './pluginBase'
import { parse } from './utils/asciidoc'

export class PluginServer extends PluginBase {
  /**
   *
   * @param {number} count 1ページあたりの表示件数
   * @param {import('.').AsciidocSummaryJson} asciidocs Asciidoc ファイルのリスト
   * @param {import('@asciidoctor/core').Asciidoctor.ProcessorOptions} options
   */
  constructor(count, asciidocs, options) {
    super(
      // AsciiDocファイルを返す
      (filename) => {
        const target = asciidocs.list.find(
          (adoc) =>
            withoutExtension(adoc.filename) === withoutExtension(filename)
        )

        if (target == null) {
          throw new Error(`NotFound: target file "${filename}"`)
        }

        return parse(join(asciidocs.dir, target.filename), options)
      },
      // ページに表示するファイル一覧を返す
      (page) => {
        const maxPage = Math.ceil(asciidocs.list.length / count)
        /** @type {(filename: string) => import('.').AsciidocAttribute} */
        const callback = (filename) => {
          // eslint-disable-next-line no-unused-vars
          const { rendered, ...remain } = parse(
            join(asciidocFiles.dir, filename),
            options
          )
          return remain
        }

        /** @type {() => import('.').AsciidocOverview} */
        const overview = () => {
          if (page == null || page < 1) {
            return {
              paging: { current: 0, total: maxPage },
              overviews: asciidocs.list.map((x) => callback(x.filename)),
            }
          }

          const current = Math.min(page, maxPage)
          const start = (current - 1) * count
          return {
            paging: { current, total: maxPage },
            overviews: asciidocs.list
              .slice(start, start + count)
              .map((x) => callback(x.filename)),
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
  const count = parseInt('<%= options.count %>', 10)

  /** @type {import('@asciidoctor/core').Asciidoctor.ProcessorOptions} */
  const processorOptions = JSON.parse(
    // オブジェクトをJSON文字列化、エスケープ文字をそのまま残す
    String.raw`<%= JSON.stringify(options.processorOptions) %>`
  )

  ctx.app.$asciidoc = new PluginServer(count, asciidocFiles, processorOptions)
}
