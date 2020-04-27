<template>
  <div>
    <HeadingLevel v-bind:value="headingLevel" />
    <div class="mt-4">
      <TagColumn v-bind:tags="article.tags" />
      <DatesDisplay class="flex justify-end" v-bind:item="article | dateFormats" />
    </div>
    <ArticleBody class="mt-6" v-bind:renderd="article.body" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import moment from 'moment'
import { Article, HeadingLevelType } from '@/models'
import { Content } from '*.md'

import ArticleBody from '../organisms/ArticleBody.vue'
import DatesDisplay from '../molecules/DatesDisplay.vue'
import HeadingLevel from '../atoms/HeadingLevel.vue'
import TagColumn from '../molecules/TagColumn.vue'

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
    DatesDisplay,
    HeadingLevel,
    TagColumn,
  },
  filters: {
    dateFormats: function (pickDate: Pick<Article, 'createdAt' | 'updatedAt'>) {
      return {
        createdAt: moment(pickDate.createdAt).format('YYYY年MM月DD日'),
        updatedAt:
          pickDate.updatedAt != null
            ? moment(pickDate.updatedAt).format('YYYY年MM月DD日')
            : '',
      }
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
