// @ts-check
import { join } from 'path'
import { PluginBase } from './pluginBase'

export class PluginClient extends PluginBase {
  /**
   * @param {number} count 1ページあたりの表示件数
   * @param {import('.').ModuleApi} itemsApi AsciiDocファイルの解析結果を返すAPIエンドポイント
   * @param {string=} publicPath
   */
  constructor(count, itemsApi, publicPath = '_nuxt') {
    super(
      (filename) => {
        const api = join('/', publicPath, itemsApi.contents, `${filename}.json`)
        /** @type {Promise<import('.').AsciidocParsed>} */
        // @ts-ignore
        const ret = fetchAPI(api, '')
        return ret
      },

      (page) => {
        const file = page != null && page > 0 ? `${page}.json` : 'all.json'
        const api = join('/', publicPath, itemsApi.overview, file)
        /** @type {Promise<import('.').AsciidocOverview>} */
        // @ts-ignore
        const attrs = fetchAPI(api, '')
        return attrs
      }
    )
  }
}

/**
 * 指定したAPIからJSONデータを取得して返す。
 *
 * @param {string} api アクセスするAPIパス
 * @param {string | undefined} query クエリパラメータ
 * @throws {Error} エラーメッセージが帰ってきた場合
 * @returns {Promise<import('.').AsciidocParsed | import('.').AsciidocOverview>}
 */
async function fetchAPI(api, query) {
  const param = new URLSearchParams(query).toString()
  const url =
    param === '' ? api : [api, new URLSearchParams(query).toString()].join('?')
  const response = await fetch(url)
  const data = await response.json()

  if (data.error) {
    throw new Error(`Failed api request: ${url}`)
  }

  return data
}

/**
 * @type {import('@nuxt/types').Plugin}
 */
// eslint-disable-next-line no-unused-vars
export default function plugin(ctx, inject) {
  /** @type {import('.').ModuleApi} */
  const itemsApi = JSON.parse(
    String.raw`<%= JSON.stringify(options.itemsApi) %>`
  )

  const count = parseInt('<%= options.count %>', 10)

  ctx.app.$asciidoc = new PluginClient(count, itemsApi)
}
