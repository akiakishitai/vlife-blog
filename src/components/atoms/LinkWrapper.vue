<template functional>
  <a
    v-if="props.href.match(/^https?:\/\//) != null"
    v-bind:class="[{link: props.isDefaultStyle},{ disabled: props.disabled }, data.class, data.staticClass]"
    v-bind:href="props.href"
    v-bind:rel="data.attrs.rel"
    v-bind:media="data.attrs.media"
    v-bind:hreflang="data.attrs.hreflang"
    v-bind:type="data.attrs.type"
    v-bind:ping="data.attrs.ping"
    v-bind:download="data.attrs.download"
    target="_blank"
  >
    <slot></slot>
  </a>
  <nuxt-link
    v-else
    v-bind:to="props.href"
    v-bind:class="[{link: props.isDefaultStyle},{ disabled: props.disabled }, data.class, data.staticClass]"
    v-bind:rel="data.attrs.rel"
    v-bind:media="data.attrs.media"
    v-bind:hreflang="data.attrs.hreflang"
    v-bind:type="data.attrs.type"
    v-bind:ping="data.attrs.ping"
    v-bind:download="data.attrs.download"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

/**
 * `slot` で渡されたコンポーネントを `nuxt-link` でラップする。
 */
@Component
export default class LinkWrapper extends Vue {
  /**
   * リンク先のURLを格納。
   */
  @Prop({ required: true }) href!: string

  /**
   * リンク無効化
   */
  @Prop({ required: false, default: false }) disabled?: boolean

  /**
   * リンクのデフォルトCSSを適用するか否か。
   * デフォルトでは `true` となり適用する。
   */
  @Prop({ required: false, default: true }) isDefaultStyle?: boolean
}
</script>

<style lang="scss" scoped>
// リンクのデフォルトスタイル
.link:not(.disabled) {
  @apply text-indigo-500;

  &:visited {
    @apply text-purple-800;
  }

  &:hover {
    @apply underline;
  }
}

.link.disabled {
  /* リンクを無効化 */
  pointer-events: none;
}
</style>
