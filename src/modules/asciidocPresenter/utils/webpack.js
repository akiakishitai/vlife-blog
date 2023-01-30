// @ts-check
import { join } from 'path'
import { withoutExtension } from './util'

/**
 * Webpackのプラグインを返す。
 * @param {Readonly<import('..').AsciidocParsed[]>} contents
 * @param {number} count
 * @param {Readonly<import('..').ModuleApi>} api
 * @return {import('webpack').Plugin} Webpack plugin
 */
export function createPlugin(contents, count, api) {
  /** @type {import('..').AsciidocAttribute[]} */
  const attributes = contents.map((x) => {
    // eslint-disable-next-line no-unused-vars
    const { rendered, ...remain } = x
    return remain
  })

  /**
   * @type {import('..').AsciidocOverview[]}
   */
  const overviews = split(attributes, count).map((xs, idx, org) => {
    return {
      paging: {
        current: idx + 1,
        total: org.length,
      },
      overviews: xs,
    }
  })

  /** @type {import('..').AsciidocOverview} */
  const allOverview = {
    paging: { current: 0, total: overviews.length },
    overviews: attributes,
  }

  return {
    apply(compiler) {
      compiler.hooks.emit.tap('Asciidoc', (compilation) => {
        /**
         * オブジェクトデータを新しいファイルとしてアセットに挿入。
         *
         * @param {string} name アセットに登録するファイル名
         * @param {Record<string, any>} obj オブジェクトデータ
         */
        const addAssets = (name, obj) => {
          const data = JSON.stringify(obj, undefined, 2)  // スペース2個のインデント
          compilation.assets[name] = {
            source: () => data,
            size: () => data.length,
          }
        }

        // Asciidoc一覧
        addAssets(join(api.overview, 'all.json'), allOverview)
        overviews.forEach((overview) => {
          addAssets(
            join(api.overview, `${overview.paging.current}.json`),
            overview
          )
        })

        // 各Asciidoc
        contents.forEach((content) => {
          addAssets(
            join(api.contents, `${withoutExtension(content.filename)}.json`),
            content
          )
        })
      })
    },
  }
}

/**
 * @template T
 * @param {Array<T>} array
 * @param {number} n
 */
function split(array, n) {
  /** @type {Array<Array<T>>} */
  let result = []
  for (let idx = 0; idx < array.length; idx = idx + n) {
    result.push(array.slice(idx, idx + n))
  }

  return result
}
