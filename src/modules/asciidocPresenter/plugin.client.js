// @ts-check
import { join } from 'path'
import { PluginBase } from './pluginBase'

export class PluginClient extends PluginBase {
  /**
   * @param {string} itemsApi AsciiDocファイルの解析結果を返すAPIエンドポイント
   */
  constructor(itemsApi) {
    super(
      // @ts-ignore
      (filename) => {
        const api = join(itemsApi, filename)
        return fetchAPI(api, '')
      },
      // @ts-ignore
      (count, page) => {
        const param = `page=${page}`
        return fetchAPI(itemsApi, param)
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
 * @returns {Promise<import('.').AsciidocParsed | Omit<import('.').AsciidocParsed, 'rendered'>[]>}
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

  ctx.app.$asciidoc = new PluginClient(itemsApi)
}
