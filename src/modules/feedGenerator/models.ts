/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @nuxt/generator のクラス。
 *
 * ref: https://github.com/nuxt/nuxt.js/blob/v2.14.7/packages/generator/src/generator.js
 */
export interface NuxtGenerator {
  /** nuxt instance */
  nuxt: any
  /** nuxt config */
  options: any
  builder: any

  // Set variables
  isFullStatic: boolean
  /** staticディレクトリへの絶対パス */
  staticRoutes: string
  /**
   * <ビルドディレクトリ>/dist/client への絶対パス。
   * `generate` 時に `this.distNuxtPath` (dist/_nuxt)へとコピーされる。
   *
   * ref: https://github.com/nuxt/nuxt.js/blob/v2.14.7/packages/generator/src/generator.js#L246
   */
  srcBuiltPath: string
  /** generate時の出力ディレクトリパス */
  distPath: string
  /** アセット出力するパス。publicPathがURLのときはdistPathと同じ値。 */
  distNuxtPath: string

  // Payloads for full static
  /** 静的アセットディレクトリへの絶対パス */
  staticAssetsDir: string
  /** 静的アセットのURLルート */
  staticAssetsBase: string
  // Shared payload
  setPayload: typeof Function

  // Routes
  /** 自動生成したルート */
  generatedRoutes: Set<string>
}

/**
 * FeedGenerator用のオプション
 */
export interface FeedGeneratorOptions {
  /** 対象とするルートのパターン */
  includes?: (string | RegExp)[]
  /** 除外するルートの相対パス */
  excludes?: string[]
  /** asciidocディレクトリパス */
  asciidocDir: string

  feedOptions: {
    title: string
    siteUrl: string
    domain: string
    domainDate: string
    author: AtomAuthor
  }
}

/**
 * Atomフィードにおける必須要素
 */
export interface AtomRequired {
  title: string
  url: string
  /** ISO 8601 形式 */
  updated: string
  id: AtomId
}

export interface AtomId {
  /** ドメインまたはe-mailアドレス */
  domain: string
  /** ISO 8601 形式 */
  date: string
  uri: string
}

/**
 * Atomフィードにおけるauthor要素
 */
export interface AtomAuthor {
  /** 作成者名 */
  name: string
  uri?: string
  email?: string
}

/**
 * atom:feed要素
 */
export interface AtomFeed extends AtomRequired {
  author: AtomAuthor
  entries: AtomEntry[]
}

export interface AtomEntry extends AtomRequired {
  author?: AtomAuthor
  summary?: string
  /** ISO 8601 形式 */
  published?: string
}
