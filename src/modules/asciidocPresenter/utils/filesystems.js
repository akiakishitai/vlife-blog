// @ts-check

import { promises as fs } from 'fs'
import { extname, join } from 'path'
import equal from 'fast-deep-equal'

/**
 * fs Promises API の {@link fs.mkdir} 関数のラッパー。
 */
export const mkdir = fs.mkdir

/**
 * 指定されたディレクトリ直下のファイル一覧を取得し、そのパスのリストを返す関数。
 *
 * @param {string} dirpath ファイル一覧を取得するディレクトリのパス
 * @param {string[]} extnames 検索対象とするファイル拡張子のリスト
 * @returns {Promise<string[]>} ファイルパスの配列
 */
export async function fileList(dirpath, extnames = ['.adoc', '.asciidoc']) {
  /** @type {import('fs').Dirent[]} */
  const dirent = await fs
    .readdir(dirpath, { withFileTypes: true })
    .catch((err) => {
      console.error(err)
      return []
    })

  return dirent
    .filter((x) => x.isFile())
    .filter((x) => extnames.some((ext) => extname(x.name) === ext))
    .map((x) => {
      return join(dirpath, x.name)
    })
}

/**
 * 出力先ファイルが存在しかつJSONの値が同じであればtrueを返す。
 * それ以外はfalseを返す。
 *
 * @param {string} target 出力先ファイルパス
 * @param {string} value 同一性を判定するJSON
 * @param {BufferEncoding=} encoding 既存ファイルのエンコーディング。デフォルトはutf8
 */
async function equalExistJson(target, value, encoding = 'utf8') {
  const origin = await fs
    .readFile(target, { encoding: encoding })
    .catch(() => '{}')

  return equal(JSON.parse(origin), JSON.parse(value))
}

/**
 * AsciiDoc記事の一覧用JSONファイルを作成。
 *
 * {@link import('./models').AsciidocSummary} から一覧として不要な要素を排除したJSONオブジェクトを生成して出力する。
 *
 * @param {import('..').AsciidocSummary[]} summary 解析済みのオブジェクト
 * @param {string} sourceDir AsciiDocファイルのあるディレクトリパス
 * @param {string} jsonFile 出力先JSONファイルパス
 */
export async function outputSummaryJson(summary, sourceDir, jsonFile) {
  /** @type {import('..').AsciidocSummaryJson} */
  const jsonData = {
    dir: sourceDir,
    list: summary,
  }

  // 既存ファイルの内容と同じ値ならば書き込みしない
  if (await equalExistJson(jsonFile, JSON.stringify(jsonData))) {
    console.log('🌟 Write skip, bcause same value.')
    return
  }

  // 出力先JSONファイルに書き込み（上書き）
  fs.writeFile(jsonFile, JSON.stringify(jsonData))
    .then(() => console.log(`🌟 Write success => ${jsonFile}`))
    .catch((err) => console.error(`⚠️ Write failed. ${err}`))
}
