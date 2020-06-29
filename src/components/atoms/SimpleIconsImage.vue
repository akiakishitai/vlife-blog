<template functional>
  <img
    class="simpleicons"
    v-bind:class="[data.class, data.staticClass]"
    v-bind:src="$options.methods.link(props.name)"
    v-bind:alt="props.alt"
    v-bind:title="props.title"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

/**
 * Simple Icons をCDNから利用するコンポーネント。
 */
@Component
export default class SimpleIconsImage extends Vue {
  /**
   * アイコン名。
   */
  @Prop({ required: true }) name!: string

  /**
   * 代替テキスト。
   */
  @Prop({ required: true }) alt!: string

  /**
   * 画像タイトル。
   */
  @Prop({ required: false }) title?: string

  /**
   * アイコン名からCDNへのURLを生成して返す。
   */
  link(name: string): string {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/${name}.svg`
  }
}
</script>

<style lang="scss" scoped>
</style>