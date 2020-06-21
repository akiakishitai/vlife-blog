<template functional>
  <a
    class="text-indigo-500 visited:text-purple-800 hover:underline"
    v-if="props.href.match(/^https?:\/\//) != null"
    v-bind:href="props.href"
    target="_blank"
  >
    <slot></slot>
  </a>
  <nuxt-link
    class="text-indigo-500 visited:text-purple-800 hover:underline"
    v-else
    v-bind:to="props.href"
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
}
</script>

<style></style>
