<template functional>
  <div class="flex items-center" v-bind:class="[data.class, data.staticClass]">
    <span class="material-icons text-xl">{{ $options.methods.dateIcon(props.item) }}</span>
    <div class="pl-1">{{ props.item.date }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

export type DatePrefixIconType = {
  type: 'create' | 'update'
  date: string
}

/**
 * 日付とアイコンの表示。
 *
 * 日付の頭にアイコンを付けて表示する。
 *
 * ## props
 *
 * - `value` : 日付とその種類（作成日か更新日か）を格納
 */
@Component
export default class DatePrefixIcon extends Vue {
  /**
   * 日付とその種類（作成日か更新日か）を格納。
   *
   * ```ts
   * {
   *  type: 'create',
   *  date: '2020-04-25'
   * }
   * ```
   */
  @Prop() readonly item!: DatePrefixIconType

  /**
   * [[value.type]] から _GoogleMaterialDesign_ のアイコン名を返す。
   */
  dateIcon(prop: DatePrefixIconType): string {
    return prop.type === 'create' ? 'create' : 'update'
  }
}
</script>

<style>
</style>