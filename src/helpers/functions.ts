/**
 * 引数の関数が存在すれば実行する。
 *
 * @param func 実行する関数。
 * @param args `func` にわたす引数。
 */
export function maybeDo(func?: Function, ...args: any[]) {
  if (func == null) {
    return
  }

  return func(...args)
}

/**
 * `yarn licenses generate-disclaimer --ignore-platform` で出力されたライセンス文を各ライブラリごとに分割する。
 *
 * @param generated `yarn licenses generate-disclaimer --ignore-platform` の標準出力
 */
export function splitLicense(generated: string) {
  // 1行目は除外
  const contents = generated.split('\n\n-----\n\n').slice(1)

  const pattern = /^The following software.*?\n\n/
  return contents.map((content) => {
    const descs = (content.match(pattern) ?? [])[0].split('. ')
    const body = content.split(pattern)[1]

    return {
      desc: {
        lib: `${descs[0]}.`,
        source: `${descs[1]}`,
        notice: `${descs[2]}`,
      },
      body: body,
    }
  })
}

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
