<template functional>
  <div
    class="mdc-chip"
    v-bind:class="[data.class, data.staticClass]"
    role="row"
    v-on:click="$options.methods.maybeDo(listeners.click, props.value)"
  >
    <div class="mdc-chip__ripple"></div>
    <i class="material-icons mdc-chip__icon mdc-chip__icon--leading">local_offer</i>
    <span role="gridcell">
      <span role="button" tabindex="0" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">{{ props.tag }}</span>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import * as funcs from '@/helpers/functions'

/**
 * タグのチップ表示を定義。
 *
 * ## event
 *
 * - クリック時イベント（`click`）
 *
 *  - タグの `value` を引数に発火。
 */
@Component
export default class TagChip extends Vue {
  /**
   * タグ名
   */
  @Prop() tag!: string

  /**
   * タグをクリック時に発火させるイベントへ渡す値。
   */
  @Prop() value: any

  /**
   * 引数の関数が存在すれば実行する。
   */
  maybeDo(func: Function, ...args: any[]) {
    funcs.maybeDo(func, ...args)
  }
}
</script>

<style lang="scss" scoped>
@use "@material/chips/mdc-chips";
</style>
