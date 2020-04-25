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
  readonly meta?: object
}
