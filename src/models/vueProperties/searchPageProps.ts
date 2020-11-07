import { AsciidocOverview } from '~/modules/asciidocPresenter'

export interface RoutePath {
  /** ページネーション用のbase相対パス */
  pagination: string
  /** 記事ページのbase相対パス */
  post: string
}

/** SearchPage用のprops */
export interface SearchProp {
  /** 全ての概要ページ一覧 */
  contents: AsciidocOverview

  /** base相対パス */
  route: RoutePath
}
