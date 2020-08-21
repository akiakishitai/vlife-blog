import { basename, extname } from 'path'

/**
 * ファイル名から拡張子を除いたものを返す。
 * @param {string} filename ファイル名
 */
export function withoutExtension(filename) {
  return basename(filename, extname(filename))
}
