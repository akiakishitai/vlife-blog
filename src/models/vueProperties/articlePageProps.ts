/**
 * 記事ページに関わるプロパティを定義するインタフェース。
 */

import { ArticleNavigation } from '../article'

/**
 * ナビゲーションについてのインタフェース。
 */
export interface NavigationProp {
  /**
   * 前後記事へのナビゲーションリンク。
   */
  readonly navigation: ArticleNavigation
}
