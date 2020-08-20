// @ts-check

import { basename } from 'path'
import Processor from '@asciidoctor/core'

/**
 * @type {import('@asciidoctor/core').Asciidoctor} Asciidoctor API
 */
const processor = Processor()

/**
 * AsciiDoc を解析して {@link import('./models').AsciidocParsed} に変換した値について、必須の値が設定されているかどうかを検証。
 *
 * @param {import('..').AsciidocParsed} article 検証するオブジェクト
 * @throws {TypeError} Argument article is not null about title and created_at
 */
function validateArticle(article) {
  /** @param {string} name */
  const error = (name) =>
    new TypeError(
      `NoAttribute: Please set value of "${name}" in ${article.filename}`
    )

  if (article.title == null) {
    throw error('title')
  }

  if (article.created_at == null) {
    throw error('created_at')
  }

  if (article.tags.length <= 0) {
    throw error('tags')
  }
}

/**
 * AsciiDocファイルを読み込み、各属性などを解析して {@link import('./models').AsciidocParsed} オブジェクトを返す関数。
 *
 * @param {string} file AsciiDocファイルのローカルパス。
 * @param {import('@asciidoctor/core').Asciidoctor.ProcessorOptions | undefined} options クラスメンバのオプションを上書きする Asciidoctor 解析用オプション。
 *
 * @returns {import('..').AsciidocParsed}  {@link import('./models').AsciidocParsed} オブジェクトを返す
 */
export function parse(file, options) {
  const doc = processor.loadFile(file, options)

  /** @type {import('..').AsciidocParsed} */
  const parsing = {
    filename: basename(file),
    rendered: doc.convert(),
    title: doc.getDocumentTitle(),
    created_at: doc.getAttribute('created_at'),
    tags: (doc.getAttribute('tags') + '')
      .split(',')
      .map((x) => x.trim())
      .filter((x) => x.length > 0),

    updated_at: doc.getRevisionDate(),
    author: doc.getAttribute('author'),
    description: doc.getAttribute('description'),
    revision: doc.getRevisionNumber(),
    revision_remark: doc.getRevisionRemark(),
  }

  validateArticle(parsing)
  return parsing
}

/**
 * 各AsciiDocファイルを読み込み、各属性などを解析して {@link import('./models').AsciidocParsed} オブジェクトの配列を返す関数。
 *
 * 返す配列は `created_at` 属性値から、日付が新しい順にして返す。
 *
 * @param {string[]} files AsciiDocファイルのパスのリスト。
 * @param {import('@asciidoctor/core').Asciidoctor.ProcessorOptions | undefined} options クラスメンバのオプションを上書きする Asciidoctor 解析用オプション。
 *
 * @returns {import('..').AsciidocParsed[]}  {@link import('./models').AsciidocParsed} オブジェクトを返す
 */
export function parseFiles(files, options) {
  return files
    .map((file) => parse(file, options))
    .sort((a, b) => {
      const aTime = new Date(a.created_at).getTime(),
        bTime = new Date(b.created_at).getTime()

      if (aTime === bTime) {
        return a.title.toString().localeCompare(b.title.toString())
      }

      return aTime > bTime ? -1 : 1
    })
}

/**
 * {@link import('../models').AsciidocParsed} から {@link import('../models').AsciidocSummary} へ変換する（不要なプロパティを削除する）。
 *
 * @param {import('..').AsciidocParsed} asciidocParsed
 * @returns {import('..').AsciidocSummary}
 */
export function convertToSummary(asciidocParsed) {
  // eslint-disable-next-line no-unused-vars
  const { filename, created_at, ...remain } = asciidocParsed
  return {
    filename,
    created_at,
  }
}
