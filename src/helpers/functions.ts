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
