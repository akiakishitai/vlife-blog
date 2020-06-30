import Vue from 'vue'

/**
 * デバッグ用関数を提供する _Vue mixin_
 *
 * ## Methods
 *
 * - `isDebug` : 記事ページにおけるデバッグ判定
 */
export const DebugMixin = Vue.extend({
  methods: {
    /**
     * 記事に付与されているタグ情報からデバッグ状態を判定する。
     *
     * `WIP` または `draft` タグが含まれていればデバックであると判断する。
     *
     * @param tags 記事のタグ
     */
    isDebug(tags: string[]) {
      return ['WIP', 'draft'].some((x) => tags.includes(x))
    },
  },
})
