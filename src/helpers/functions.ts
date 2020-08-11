import { ArticleNavigation } from '../models'

/**
 * 引数がオブジェクトか否かを判定する。
 *
 * @param x オブジェクト判定対象
 */
export function isObject(x: unknown): x is Record<string, unknown> {
  return x != null && (typeof x === 'object' || typeof x === 'function')
}

/**
 * パスに対してURIエンコード処理を行った結果を返す。
 * 完全なURIに対してのエンコード処理は未対応。
 *
 * @param path URIエンコード処理を行う対象文字列。完全なURIには未対応。
 */
export function encodePathURI(path: string): string {
  let uri = new URLSearchParams(path).toString()

  // クエリパラメータとしてエンコードするので末尾についた `=` は取り除く
  if (uri.slice(-1, uri.length) === '=' && path.slice(-1, uri.length) !== '=') {
    uri = uri.slice(0, -1)
  }

  return uri
}

/**
 * 前の記事と次の記事へのリンクパスを返す。
 *
 * 現在ページのパスおよび記事ファイル名からリンクパスを生成する。
 *
 * @param routePath 現在のページのパス。
 * @param files すべての記事ファイル名とタイトル。昇順ソート済みであること。
 * @return `next` 次のリンク `prev`: 前のリンク
 */
export function naviArticleFrontBack(
  routePath: string,
  files: { filename: string; title: string }[]
): ArticleNavigation {
  const parentPath = routePath.split('/').slice(0, -1).join('/')
  const currentFileName = routePath.split('/').slice(-1)[0]
  const index = files.findIndex((x) => x.filename === currentFileName)

  return {
    next:
      index - 1 < 0
        ? { path: '', title: '' }
        : {
            path: [parentPath, files[index - 1]?.filename].join('/'),
            title: files[index - 1].title,
          },
    prev:
      index + 1 >= files.length
        ? { path: '', title: '' }
        : {
            path: [parentPath, files[index + 1]?.filename].join('/'),
            title: files[index + 1].title,
          },
  }
}
