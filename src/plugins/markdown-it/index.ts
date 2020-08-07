import { Plugin } from '@nuxt/types'
import MarkdownIt from 'markdown-it'
import { makeMarkdownItObject } from './makeObject'
import { applyCustomRules } from './customRules'

// VueインスタンスにInject
declare module 'vue/types/vue' {
  interface Vue {
    /**
     * 初期設定済みの `markdown-it` オブジェクト。
     */
    $markdownIt: MarkdownIt
  }
}

// コンテキストにInject
declare module '@nuxt/types' {
  interface Context {
    /**
     * 初期設定済みの `markdown-it` オブジェクト。
     */
    $markdownIt: MarkdownIt
  }
}

/**
 * カスタムルール適用済み `markdown-it` オブジェクト。
 */
export const mdIt = makeMarkdownItObject()
// applyCustomRules(makeMarkdownItObject())

// プラグイン実装
const mdPlugin: Plugin = (context) => {
  context.$markdownIt = mdIt
}

export default mdPlugin
