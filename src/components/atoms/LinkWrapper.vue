<template functional>
  <a
    v-if="props.href.match(/^https?:\/\//) != null"
    class="link"
    v-bind:href="props.href"
    target="_blank"
    v-bind:disabled="props.disabled"
  >
    <slot></slot>
  </a>
  <nuxt-link
    v-else
    v-bind:to="props.href"
    class="link"
    v-bind:disabled="props.disabled"
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

  @Prop() disabled!: boolean
}
</script>

<style lang="scss" scoped>
.link:not([disabled]) {
  @apply text-indigo-500;

  &:visited {
    @apply text-purple-800;
  }

  &:hover {
    @apply underline;
  }
}

.link[disabled] {
  /* リンクを無効化 */
  pointer-events: none;
}
</style>
