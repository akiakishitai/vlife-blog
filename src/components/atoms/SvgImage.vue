<template functional>
  <svg
    class="fill-current"
    v-bind:class="[data.staticClass, data.class]"
    role="img"
    viewBox="0 0 24 24"
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
}
</script>

<style lang="scss" scoped>
</style>