// @ts-check
/**
 * Server Middleware
 */
import { createHash } from 'crypto'
import { deflateSync, gzipSync, brotliCompressSync } from 'zlib'
import { withoutExtension } from './utils/util'

/**
 * `name` クエリパラメータの値をファイル名とするAsciiDocファイルの解析結果を返すServerMiddlewareを返す。
 * 本スクリプトにおいて最初に実行（登録）する。
 *
 * 一致するAsciiDocファイルが見つからなかった場合は `404` ステータスコードでエラーメッセージを返す。
 *
 * @param {import('.').AsciidocParsed[]} asciidocs
 * @returns {import('@nuxt/types').ServerMiddleware} ServerMiddlewareの関数
 *
 * ## URL エンドポイント
 *
 * `https://~~/items/:filename`
 */
export function findByName(asciidocs) {
  return (req, res, next) => {
    const url = new URL(req.url || '', 'http://hoge.com')
    const filename = url.pathname.replace(/^\//, '')

    // ファイル名がなかったり別のパスが含まれる場合は次の処理へ移行する
    if (filename.length === 0 || filename.includes('/')) {
      next()
      return
    }

    const target = asciidocs.find(
      (adoc) =>
        filename != null &&
        withoutExtension(adoc.filename) === withoutExtension(filename)
    )

    // レスポンスの文字化け対策
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.setHeader('Cache-Control', 'max-age=300')
    if (target == null) {
      // エラー
      res.statusCode = 404
      res.write(
        JSON.stringify({
          error: true,
          message: `Not found 'name' parameter: ${filename}`,
        }),
        'utf8'
      )
    } else {
      const msg = JSON.stringify(target)
      res.setHeader('ETag', etagToken(msg))
      res.write(msg, 'utf8')
    }

    res.end()

    //next()
  }
}

/**
 * `page` クエリパラメータの数値によって、そのページで表示するAsciiDocファイルの一覧 {@link import('.').AsciidocOverview} を返すServerMiddlewareを返す。
 *
 * @param {import('.').AsciidocParsed[]} asciidocs
 * @param {number} count
 * @returns {import('@nuxt/types').ServerMiddleware} ServerMiddlewareの関数
 *
 * ## URL エンドポイント
 *
 * クエリパラメータ `page=:number` を用いる。
 *
 * `https://~~/items?page=7`
 */
export function splitByPage(asciidocs, count) {
  /** @type {import('.').AsciidocAttribute[]} */
  const summaries = asciidocs.map((adoc) => {
    // eslint-disable-next-line no-unused-vars
    const { rendered, ...remain } = adoc
    return remain
  })
  const maxPage = Math.ceil(summaries.length / count)

  return (req, res, next) => {
    const url = new URL(req.url || '', 'http://hoge.com')
    if (url.pathname !== '/') {
      next()
    }

    // 共通レスポンスヘッダー
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.setHeader('Cache-Control', 'max-age=300')

    /** @type {(url: URL) => import('.').AsciidocOverview} */
    const overview = (url) => {
      // 数値が範囲外の場合は全要素を返す。
      const page = parseInt(url.searchParams.get('page') || '', 10)

      // 範囲外（上方以外）の場合は全要素を返す。
      if (isNaN(page) || page < 1) {
        return { paging: { current: 0, total: maxPage }, overviews: summaries }
      }

      const current = Math.min(page, maxPage)
      const start = (current - 1) * count

      return {
        paging: { current, total: maxPage },
        overviews: summaries.slice(start, start + count),
      }
    }

    const data = JSON.stringify(overview(url))
    res.setHeader('ETag', etagToken(data))

    const cmp = compress(data, req.headers['accept-encoding'])
    if (cmp.encoding != null) {
      res.setHeader('content-encoding', cmp.encoding)
    }

    res.write(cmp.data, 'utf8')
    res.end()
  }
}

/**
 * HTTPレスポンスヘッダーでリソースのバージョン識別子を表す `ETag` 用の値を返す。
 * <https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/ETag>
 *
 * `md5` アルゴリズムで生成したハッシュ値を `base64` でエンコードして返す。
 *
 * @param {string} data リソースを識別するために使われる文字列データ。`utf8` エンコーディング。
 *
 * ## Example
 *
 * ```js
 * const data = JSON.stringify(obj)
 * res.setHeader('ETag', etagToken(data))
 * ```
 */
function etagToken(data) {
  const token = createHash('md5').update(data, 'utf8').digest('base64')
  // ダブルクォーテーションで囲む必要がある
  return `"${token}"`
}

/**
 * Accept-Encoding リクエストヘッダーにしたがってコンテンツを圧縮もしくは無圧縮。
 *
 * @param {string} data レスポンス本文
 * @param {string | string[] | undefined} acceptEncoding Accept-Encoding
 * @returns {{data: Buffer, encoding: 'gzip' | 'deflate' | 'br' | undefined}} 圧縮したデータとその圧縮方式を返す。データは `utf8` エンコーディング。
 *
 * ## Example
 *
 * ```js
 *  const cmp = compress(data, req.headers['accept-encoding'])
 *  if (cmp.encoding != null) {
 *    res.setHeader('content-encoding', cmp.encoding)
 *  }
 * ```
 */
function compress(data, acceptEncoding) {
  const init = {
    data: Buffer.from(data, 'utf8'),
    encoding: undefined,
  }

  if (acceptEncoding == null) {
    return init
  }

  if (acceptEncoding.includes('br')) {
    return { data: brotliCompressSync(init.data), encoding: 'br' }
  } else if (acceptEncoding.includes('gzip')) {
    return { data: gzipSync(init.data), encoding: 'gzip' }
  } else if (acceptEncoding.includes('deflate')) {
    return { data: deflateSync(init.data), encoding: 'deflate' }
  }

  return init
}
