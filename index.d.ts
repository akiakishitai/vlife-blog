export namespace ContactForm {
  /**
   * 問い合わせの種類
   */
  export type ContactType = 'privacy' | 'regular'

  /**
   * 問い合わせ情報
   */
  export interface ContactData {
    /**
     * ユーザー名
     */
    name: string
    /**
     * ユーザーのメールアドレス
     */
    email: string
    /**
     * 問い合わせの種類
     */
    type: ContactType
    /**
     * 問い合わせ本文
     */
    message: string
    /**
     * 問い合わせ日
     * ISO形式（yyyy-mm-dd）
     */
    date: string
  }
}
