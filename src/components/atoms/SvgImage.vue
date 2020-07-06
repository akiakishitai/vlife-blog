<template functional>
  <svg
    class="fill-current"
    v-bind:class="[data.staticClass, data.class]"
    role="img"
    v-bind:viewBox="$options.methods.viewBox(props.size)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{{ props.title }}</title>
    <path v-bind:d="props.svgPath" />
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { SvgOption } from '../../models'

/**
 * SVG画像要素を提供するコンポーネント。
 *
 * SVGの塗りつぶし色は現在使用している文字色を参照する。
 */
@Component
export default class SvgImage extends Vue implements SvgOption {
  @Prop({ required: true }) title!: string

  @Prop({ required: true }) svgPath!: string

  @Prop({ required: false, default: 24 }) size?: number

  /**
   * `viewBox` の値を返す。`
   */
  viewBox(size: number) {
    return `0 0 ${size} ${size}`
  }
}
</script>

<style lang="scss" scoped>
</style>