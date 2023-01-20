import { html_beautify } from "js-beautify";

/**
 * HTMLの整形を行うフォーマッタのオプション。
 */
export type pageFormatterOption = import('js-beautify').HTMLBeautifyOptions

type Page = {
    /** HTMLファイルへのルートパス（/about/index.html） */
    path: string,
    /** レンダリングされた HTML 文（'<div>...'） */
    html: string,
}

/**
 * 生成されたHTMLページの整形を行う Nuxt hook の登録。
 *
 * @function
 * @param {import('js-beautify').HTMLBeautifyOptions | undefined} options
 */
const pageFormatter: import('@nuxt/types').Module<pageFormatterOption | undefined> = function(options) {
    // https://github.com/nuxt/nuxt.js/blob/d4b9e4b0553bcd617ecbc0b8b76871070b347fcb/packages/generator/src/generator.js#L402
    this.nuxt.hook('generate:page', async (page: Page) => {
        page.html = html_beautify(page.html, options)
        console.log(`Formated html "${page.path}"`)
    })
}

export default pageFormatter
