/**
 * モジュールのオプション。
 *
 * @param {string} source 直下に AsciiDoc ファイルがあるディレクトリのパス
 * @param {ModuleApi=} apiPath 解析したAsciiDocファイルをJSONでAPI提供するパスのルート。デフォルト `/api/asciidoc`
 * @param {string=} number AsciiDocファイル一覧を出力するJSONファイル名。デフォルト `20`
 */
export interface ModuleOptions {
  source?: string
  apiPath?: Partial<ModuleApi>
  count?: number
}

export type ModuleApi = {
  overview: string
  contents: string
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

/**
 * Asciidocのコンテンツを含まない情報
 */
export type AsciidocAttribute = Omit<AsciidocParsed, 'rendered'>

/**
 * Asciidocの一覧表示用JSONオブジェクト。
 *
 * @param {{current: number, total: number}} paging ページ番号
 * @param {AsciidocAttribute[]} overviews Asciidocの概要一覧
 */
export interface AsciidocOverview {
  paging: {
    /** 全要素表示時には `0` を取る。 */
    current: number
    total: number
  }
  overviews: AsciidocAttribute[]
}

// context.app にプラグインをInject
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    /**
     * AsciiDocファイルを解析したデータを提供する
     */
    $asciidoc: import('./pluginBase').PluginBase
  }
}
