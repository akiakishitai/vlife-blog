// @ts-check
import { join } from 'path'
import { PluginBase } from './pluginBase'

export class PluginClient extends PluginBase {
  /**
   * @param {number} count 1ページあたりの表示件数
   * @param {string} itemsApi AsciiDocファイルの解析結果を返すAPIエンドポイント
   */
  constructor(count, itemsApi) {
    super(
      (filename) => {
        const api = join(itemsApi, filename)
        /** @type {Promise<import('.').AsciidocParsed>} */
        // @ts-ignore
        const ret = fetchAPI(api, '')
        return ret
      },

      (page) => {
        const param = `page=${page}`
        /** @type {Promise<import('.').AsciidocOverview>} */
        // @ts-ignore
        const attrs = fetchAPI(itemsApi, param)
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
  const url = [api, new URLSearchParams(query).toString()]
    .join('?')
    .replace(/$\?/, '')

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
  /** @type {string} */
  const itemsApi = '<%= options.itemsApi %>'

  const count = parseInt('<%= options.count %>', 10)

  ctx.app.$asciidoc = new PluginClient(count, itemsApi)
}
