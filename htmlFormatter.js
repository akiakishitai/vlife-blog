const { readdir, readFile, writeFile } = require('fs').promises
const { Dirent } = require('fs')
const { join } = require('path')
const { html_beautify } = require('js-beautify')

/**
 * ファイルパス探索で利用する型。
 * @typedef { Object } Walkent
 * @property { boolean } isFile - 対象がファイルであれば `true` 。
 * @property { string } name - ファイル名。
 * @property { string } path  ファイルパス。
 */

/**
 * フォーマットを実行した結果の成否。
 * @typedef { Object } FormatedStatus
 * @property { import('fs').PathLike } file - フォーマット対象のファイルパス。
 * @property { boolean } isSuccess - フォーマットの成否。
 */

/**
 * 指定されたディレクトリ以下の `Walkent` を返す。
 *
 * @function
 * @param { string } dirpath - 探索するディレクトリパス。
 * @param { Dirent[] } [ walked = [] ] - 探索済みのパス配列。
 * @returns { Promise<Walkent[]> }
 */
async function walking(dirpath) {
  /** @type { Dirent[] } */
  const list = await readdir(dirpath, { withFileTypes: true }).catch((err) => {
    console.log(err)
    throw new Error(`Failed to walk in "${dirpath}"`)
  })

  const ret = await Promise.all(
    list
      .map(
        /** Convert from `Dirent` to `Walkent` . */
        (f) => {
          /** @type { Walkent } */
          const file = {
            isFile: f.isFile(),
            name: f.name,
            path: join(dirpath, f.name),
          }

          return file
        }
      )
      .flatMap(async (file) => {
        if (file.isFile) {
          return file
        } else {
          return await walking(file.path)
        }
      })
  )

  return ret.flat()
}

/**
 * HTMLファイルを `js-beautify` で整形する。
 * 整形した成否とそのファイルパスを返す。
 *
 * @param { string } filepath - 整形したいHTMLファイルのパス。
 * @param { import('js-beautify').HTMLBeautifyOptions } [options] - `js-beautify` のオプション。
 * @returns { Promise<FormatedStatus> }
 */
async function formatter(filepath, options) {
  const body = await readFile(filepath, 'utf-8')
  console.log(`    -> "${filepath}"`)
  return await writeFile(filepath, html_beautify(body, options))
    .catch((err) => {
      console.error(err)
      return { file: filepath, isSuccess: false }
    })
    .then(() => new Object({ file: filepath, isSuccess: true }))
}

/**
 * 指定されたディレクトリ以下からHTMLファイルだけを取得し、整形を行う。
 *
 * @param { string[] } dirpath - 検索するルートディレクトリのパス。
 * @returns
 */
async function main(...dirpath) {
  const pattern = /.*html?$/

  /** htmlファイルのパスのリスト */
  const htmls = dirpath.map((dir) =>
    walking(dir).then((list) =>
      list.filter((f) => f.isFile && pattern.test(f.name)).map((f) => f.path)
    )
  )
  /** 重複を排除したファイルパスの配列 */
  const files = Array.from(new Set((await Promise.all(htmls)).flat()))

  console.log(`🔍 Find ${files.length} HTML files.`)
  console.log('⏳ Formatting...')

  // 各ファイルをフォーマット
  const pending = files.map((path) =>
    formatter(path, { indent_size: 2, end_with_newline: true })
  )
  // フォーマット結果待ち
  const ret = await Promise.all(pending)
  ret.some((stat) => !stat.isSuccess)
    ? console.error('❌ Failed format some files.')
    : console.log('✔️ HTML formatting finish!')
}

// 実行
const args = process.argv.slice(2)
main(...args)
