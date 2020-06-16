<template functional>
  <a
    class="text-indigo-500 visited:text-purple-800 hover:underline"
    v-if="props.link.url.match(/^https?:\/\//) != null"
    v-bind:href="props.link.url"
    target="_blank"
  >
    <slot></slot>
  </a>
  <nuxt-link
    class="text-indigo-500 visited:text-purple-800 hover:underline"
    v-else
    v-bind:to="props.link.url"
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
   * 内部リンク先のURLを格納。
   *
   * `:` が混ざると直接 `v-bind` 属性の値として入力できないため、オブジェクトでラップする。
   */
  @Prop({ required: true }) link!: { url: string }
}
</script>

<style>
</style>