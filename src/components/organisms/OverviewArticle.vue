<template>
  <div>
    <nuxt-link v-bind:to="linkToArticle">
      <div class="flex">
        <span class="graphic rounded-full flex items-center justify-center">
          <span class="material-icons text-4xl">article</span>
        </span>
        <div class="description text-left ml-4">
          <div class="text-xl">{{ content.title }}</div>
          <div class="text-black text-opacity-54">{{ createdAt }}</div>
        </div>
      </div>
    </nuxt-link>
    <div class="tags flex mt-2 relative z-10">
      <TagColumn v-bind:tags="propTags(content)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import TagColumn from '../molecules/TagColumn.vue'
import { ArticleTag, PostFile, TopPageProps } from '@/models'
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
  @Prop({ required: true }) content!: PostFile

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
    return (post: PostFile): ArticleTag[] => {
      return post.tags.map((x) => {
        return { name: x, value: x }
      })
    }
  }

  /**
   * 記事ページへのリンク先を返す。
   */
  get linkToArticle() {
    const pageRoute: string = '/posts/'
    // URLエンコード処理を行っておく
    return `${pageRoute}${encodePathURI(this.content.filename_noext)}`
  }
}
</script>

<style lang="scss" scoped>
@use '@material/list';

@include list.core-styles;

.graphic {
  background-color: rgba(0, 0, 0, 0.07);
  width: 56px;
  height: 56px;
}
</style>
