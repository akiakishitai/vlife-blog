/**
 * 引数がオブジェクトか否かを判定する。
 *
 * @param x オブジェクト判定対象
 */
export function isObject(x: unknown): x is object {
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
