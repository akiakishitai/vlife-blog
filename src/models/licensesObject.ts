/**
 * ライセンス情報
 */
export interface LicenseContent {
  /**
   * ライブラリの説明
   */
  desc: {
    lib: string
    source: string
    notice: string
  }

  /**
   * ライセンス文
   */
  body: string
}
