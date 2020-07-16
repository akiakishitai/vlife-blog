import Vue from 'vue'

/**
 * 引数をクリップボードにコピーする関数。
 * 引数で `null | undefined` が渡されると `Error` を投げる。
 *
 * @param copyText コピーする文字列
 */
export function onClick(copyText: any) {
  if (copyText == null) {
    console.error('Undefined copy text!')
    throw new Error('Argument is null.')
  }

  navigator.clipboard
    ?.writeText(copyText.toString())
    .then((_) => console.log(`Copied ${copyText}`))
}

/**
 * 引数の文字列をクリップボードにコピーする関数 `onClick(copyText)` をメソッドとして提供する。
 *
 * クリックイベント用。
 */
export const copyClipboardMixin = Vue.extend({
  methods: {
    onClick,
  },
})
