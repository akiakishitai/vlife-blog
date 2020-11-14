<template>
  <div class="relative text-left">
    <nuxt-link class="link-article" v-bind:to="linkToArticle">
      <div class="flex">
        <!-- 画像 -->
        <span
          class="graphic rounded-full flex items-center justify-center bg-grey-400 bg-opacity-38"
        >
          <span class="material-icons text-4xl">article</span>
        </span>

        <!-- テキスト情報 -->
        <div class="description text-left ml-4">
          <div class="text-xl">{{ content.title }}</div>
          <div class="text-black text-opacity-54">{{ createdAt }}</div>
        </div>
      </div>
    </nuxt-link>

    <!-- タグ一覧 -->
    <div class="inline-flex relative z-10 mt-4">
      <tag-column v-bind:tags="propTags(content)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { basename, extname, join } from 'path'
import TagColumn from '../molecules/TagColumn.vue'
import { ArticleTag, TopPageProps } from '@/models'
import { encodePathURI } from '@/helpers/functions'

@Component({
  components: {
    TagColumn,
  },
})
export default class OverviewArticle extends Vue {
  /**
   * 表示する概要としてMarkdownファイルの情報を用いる。
   */
  @Prop({ required: true }) content!: TopPageProps.PostOverview

  /**
   * 記事ページのルートのパス。
   */
  @Prop({ required: true }) route!: string

  /**
   * 作成日を yyyy/mm/dd フォーマットにして返す。
   */
  get createdAt() {
    return this.content.created_at.replace(/-/g, '/')
  }

  /**
   * タグからTagColumnsのプロパティを生成する。
   */
  get propTags() {
    return (post: TopPageProps.PostOverview): ArticleTag[] => {
      return post.tags.map((x) => {
        return { name: x, value: x }
      })
    }
  }

  /**
   * 記事ページへのリンク先を返す。
   */
  get linkToArticle() {
    const filenameNoExt = basename(
      this.content.filename,
      extname(this.content.filename)
    )
    // URLエンコード処理を行っておく
    return join(this.route, encodePathURI(filenameNoExt))
  }
}
</script>

<style lang="scss" scoped>
@use '@material/list';

@include list.core-styles;

.graphic {
  width: 56px;
  height: 56px;
}

// クリック反応範囲の拡大
.link-article::before {
  @apply block;
  @apply absolute left-0 top-0;
  @apply pointer-events-auto;
  @apply bg-transparent;
  @apply w-full h-full;

  content: '';
}
</style>
