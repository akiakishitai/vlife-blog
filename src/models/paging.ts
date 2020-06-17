/**
 * ページで表示するコンテンツとページングの状態を格納する。
 */
export interface PagingContent<T> {
  contents: T[]
  paging: Paging
  route: string
}

/**
 * ページング用の型。
 *
 * 現在ページと総ページ数を格納する。
 */
export interface Paging {
  current: number
  pages: number[]
}

/**
 * ページング操作の種類。
 *
 * - `first` : 最初に戻る
 * - `prev` : 1つ前に戻る
 * - `next` : 1つ先に進む
 * - `last` : 最後に進む
 */
export type PagingMode = 'first' | 'prev' | 'next' | 'last' | { page: string }
