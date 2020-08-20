/**
 * モジュールのオプション。
 *
 * @param {string} source 直下に AsciiDoc ファイルがあるディレクトリのパス
 * @param {string} target JSONファイルを出力するディレクトリのパス
 * @param {string=} summaryFilename AsciiDocファイル一覧を出力するJSONファイル名。デフォルト `_summary.json`
 */
export interface ModuleOptions {
  source?: string
  target?: string
  summaryFilename?: string
}

/**
 * @param {string} filename ファイル名
 * @param {string} created_at 作成日
 */
export type AsciidocSummary = {
  filename: string // 'target.adoc'
  created_at: string // '2020-08-08 (created_at attribute)'
}

/**
 * AsciiDocファイルを解析し、出力用JSONオブジェクトに変換した型
 *
 * @param {string} dir AsciiDocファイルのあるディレクトリパス
 * @param {AsciidocSummary[]} list ファイル一覧の情報
 */
export interface AsciidocSummaryJson {
  dir: string // '/path/to/asciidoc/dir'
  list: AsciidocSummary[]
}

/**
 * {@link AsciidocSummary} に加えてプロパティを追加。
 *
 * @param {string} filename ファイル名
 * @param {string} created_at 作成日
 * @param {string} rendered レンダリング済みコンテンツ
 * @param {string} title ドキュメントタイトル
 * @param {string[]} tags タグ。コンマ区切りの文字列を分割
 * @param {?string} updated_at 更新日
 * @param {?string} author 著作者
 * @param {?string} description ドキュメントの説明
 * @param {?string} revision 更新バージョン
 * @param {?string} revision_remark 更新内容
 */
export interface AsciidocParsed extends AsciidocSummary {
  rendered: string // '<div>...</div>'
  title: string | import('@asciidoctor/core').Asciidoctor.Document.Title // 'Asciidoc Document Title'
  tags: string[] // '["sample", "test"] (convert from tags attribute)'
  updated_at?: string // '2020-08-10 (revision date)'
  author?: string // 'akiakiS (author attribute)'
  description?: string // 'Sample asciidoc (description attribute)'
  revision?: string // '1.1 (revision number)'
  revision_remark?: string // 'update comment (revision remark)'
}

// context.app にプラグインをInject
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    /**
     * AsciiDocファイルを解析したデータを提供する
     */
    $asciidoc: import('./plugin').AsciidocPlugin
  }
}
