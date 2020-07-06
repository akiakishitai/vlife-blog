/**
 * 投稿記事を表す。
 *
 * タイトル、本文、作成日などを格納する。
 *
 * `update` は関数のためスプレッド展開した場合に継承されない。
 */
export interface Article {
  /**
   * 記事本文
   */
  readonly body: string
  /**
   * 記事タイトル
   */
  readonly title: string
  /**
   * タグ
   */
  readonly tags: string[]
  /**
   * 作成日
   */
  readonly createdAt: Date
  /**
   * 更新日
   */
  readonly updatedAt?: Date
  /**
   * その他情報
   */
  readonly meta?: { [key: string]: any }
}

/**
 * 前の記事・次の記事へのリンクと記事タイトルを格納する。
 *
 * @property next - 次の記事
 * @property prev - 前の記事
 */
export interface ArticleNavigation {
  /**
   * 次の記事のリンク先 `path` と記事のタイトル `title` を持つ。
   */
  readonly next: {
    path: string
    title: string
  }

  /**
   * 前の記事のリンク先 `path` と記事のタイトル `title` を持つ。
   */
  readonly prev: {
    path: string
    title: string
  }
}
