/**
 * リンクに関わるプロパティを定義するインタフェース。
 */

export interface ToLinkProp {
  /**
   * リンク先URL。
   */
  href: string
}

export interface RouteProp {
  /**
   * 表示ページのルートパス。
   */
  route: string
}
