import { html_beautify } from 'js-beautify'

/**
 * Nuxt hook の `generate:page` で渡される引数の型。
 * ref: https://github.com/nuxt/nuxt.js/blob/d4b9e4b0553bcd617ecbc0b8b76871070b347fcb/packages/generator/src/generator.js#L402
 */
type Page = {
  error: any[]
  /**
   * `true` のとき、ページを生成しない。
   * `generated:page` フックで操作する。
   */
  exclude: boolean
  /** HTML 本文（'\<div\>...'） */
  html: string
  /** HTMLファイルへのルートパス（/about/index.html） */
  path: string
  route: any
}

/**
 * Nuxt Module 型のエイリアス。
 */
type FormatterModule = import('@nuxt/types').Module<
  import('js-beautify').HTMLBeautifyOptions
>

/**
 * 生成されたHTMLページの整形を行う Nuxt hook の登録。
 */
const pageFormatter: FormatterModule = function (options?) {
  // Nuxt hook 登録
  // ページの情報を生成した直後（ファイル作成前）のタイミング
  this.nuxt.hook('generate:page', (page: Page) => {
    page.html = html_beautify(page.html, options) // フォーマット
    // console.debug(`  -> formated html: ${page.path}`)
  })
}

export default pageFormatter
