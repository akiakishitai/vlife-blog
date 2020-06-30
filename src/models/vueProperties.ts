import { Paging } from './paging'
import { PostFile } from './postFile'

/**
 * トップページに関わるプロパティをもつインタフェースを定義。
 */
export namespace TopPageProps {
  /**
   * ページに表示するコンテンツのプロパティをもつインタフェース。
   */
  export interface ContentsProp {
    /**
     * ページに表示する _Markdown_ 記事の情報。
     */
    contents: PostFile[]
  }

  /**
   * ページネーションに利用するプロパティをもつインタフェース。
   */
  export interface PaginationProp {
    /**
     * 現在ページとすべてのページ番号を格納。
     */
    paging: Paging

    /**
     * ページのルートパス。
     */
    route: string
  }
}

/**
 * リンクに関わるプロパティを定義するインタフェース。
 */
export namespace LinkProps {
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
}
