/**
 * [[HeadingLevel]] の値の型。
 *
 * `text` : 表示するテキスト。
 * `level` : 見出しレベル（1～6）。
 */
export type HeadingLevelType = {
  /**
   * 表示するテキスト。
   */
  text: string
  /**
   * 見出しレベル（1～6）。
   */
  level: 1 | 2 | 3 | 4 | 5 | 6
}
