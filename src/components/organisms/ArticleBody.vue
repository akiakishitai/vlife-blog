<template>
  <div>
    <div class="markdown-body" v-html="body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import '@/helpers/string.extension'

@Component
export default class ArticleBody extends Vue {
  /**
   * HTMLレンダリングされた _Markdown_ ソース。
   */
  @Prop({ required: true }) renderd!: string

  /**
   * HTMLの `H1` 要素（タイトル）があれば削除。
   */
  get body(): string {
    return this.renderd.without(/<h1.+?<\/h1>/)
  }
}
</script>

<style lang="scss" scoped></style>
