<template>
  <div>
    <transition appear v-cloak name="postbody">
      <div class="post-body line-numbers" v-html="body"></div
    ></transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import '@/helpers/string.extension'

@Component({})
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

<style lang="scss">
@use '../../assets/css/scss/animations' as anim;

.post-body {
  @import '../../assets/css/post/_post-body.scss';

  @media screen and (min-width: 48rem) {
    $toc-w: 10rem;
    $gap-w: 1rem;

    @apply grid;
    grid-template-columns: $toc-w calc(100% - #{$toc-w} - #{$gap-w});
    column-gap: $gap-w;
  }
}

// transition
.postbody-enter {
  @apply opacity-0;
}
.postbody-enter-active {
  @apply opacity-0;
  @include anim.fadeinFromRight(600ms, 300ms);
}
</style>
