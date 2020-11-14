import { AsciidocParsed } from '~/modules/asciidocPresenter'

/**
 * トップページに関わるプロパティをもつインタフェースを定義。
 */

/**
 * 概要表示に使う記事の情報
 */
export type PostOverview = Pick<
  AsciidocParsed,
  'filename' | 'title' | 'description' | 'tags' | 'created_at' | 'updated_at'
>

/**
 * ページに表示するコンテンツのプロパティをもつインタフェース。
 */
export interface ContentsProp {
  /**
   * ページに表示する記事の情報。
   */
  contents: PostOverview[]
}

/**
 * ページネーションに利用するプロパティをもつインタフェース。
 */
export interface PaginationProp {
  /**
   * 現在ページと全ページ総数を格納。
   */
  pageIndex: { num: number; total: number }

  /** URLパス */
  route: {
    /** ページネーション用のbase相対パス */
    pagination: string
    /** 記事ページのbase相対パス */
    post: string
  }
}
