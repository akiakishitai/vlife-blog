<template>
  <div>
    <HeadingLevel v-bind:value="headingLevel" />
    <div>
      <div class="flex">
        <TagChip v-for="(item, index) in article.tags" v-bind:key="index" v-bind:tag="item" />
      </div>
      <div class="flex justify-end">
        <div v-if="article.updatedAt != null">更新日：{{ article.updatedAt | moment }}</div>
        <div>作成日：{{ article.createdAt | moment }}</div>
      </div>
    </div>
    <ArticleBody class="mt-5" v-bind:renderd="article.body" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import moment from 'moment'
import { Article, HeadingLevelType } from '@/models'
import { Content } from '*.md'

import ArticleBody from '../organisms/ArticleBody.vue'
import HeadingLevel from '../atoms/HeadingLevel.vue'
import TagChip from '../atoms/TagChip.vue'

/**
 * _Markdown_ 記事テンプレート。
 *
 * `props`
 *
 * - `markdown` : _Markdown_ ファイルの内容を {@link "Content"} 型で格納する。
 */
@Component({
  components: {
    ArticleBody,
    HeadingLevel,
    TagChip,
  },
  filters: {
    moment: function (date: Date) {
      return moment(date).format('YYYY年MM月DD日')
    },
  },
})
export default class ArticlePosted extends Vue {
  /**
   * _Front Matter_ つきの _Markdown_ ファイルの内容。
   */
  @Prop({
    required: true,
    validator: function (x: Content) {
      return x.attribute != null && x.frontMatter != null
    },
  })
  markdown!: Content

  /**
   * `props` の `markdown` を `Article` 型へ変換する。
   */
  get article(): Article {
    return {
      body: this.markdown.body,
      title: this.markdown.attribute?.title,
      tags: this.markdown.attribute?.tags,
      createdAt: new Date(this.markdown.attribute?.date),
      updatedAt:
        this.markdown.attribute?.updatedAt != null
          ? new Date(this.markdown.attribute?.updatedAt)
          : undefined,
      meta: { description: this.markdown.attribute?.description },
    }
  }

  /**
   * タイトルを {@link HeadingLevel} へ渡す値に変換
   */
  get headingLevel(): HeadingLevelType {
    return {
      text: this.article.title,
      level: 1,
    }
  }
}
</script>

<style lang="scss"></style>
