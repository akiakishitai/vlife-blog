<template>
  <div>
    <HeadingLevel v-bind:value="headingLevel" />
    <div class="mt-4">
      <TagColumn v-bind:tags="tags" v-on:click="onClickTag" />
      <DatesDisplay
        class="flex justify-end"
        v-bind:item="article | dateFormats"
      />
    </div>
    <hr class="mt-2 border-grey-500" />
    <!-- 要素テスト用 -->
    <div v-if="isDebug(article.tags)" class="flex mt-4">
      <ButtonMaterial />
      <ButtonMaterial class="ml-4" v-bind:property="{ label: 'hoge' }" />
      <ButtonMaterial class="ml-4" v-bind:property="{ type: 'outlined' }" />
      <ButtonMaterial
        class="ml-4"
        v-bind:property="{ type: 'raised', icon: 'bookmark' }"
      />
    </div>
    <!-- 要素テスト終了 -->
    <ArticleBody class="mt-6" v-bind:renderd="article.body" />
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop, Vue } from 'nuxt-property-decorator'
import moment from 'moment'
import { Article, ArticleTag, HeadingLevelType } from '@/models'
import { DebugMixin } from '@/mixins/debugMixin'
import { Content } from '*.md'

import ArticleBody from '../organisms/ArticleBody.vue'
import DatesDisplay from '../molecules/DatesDisplay.vue'
import HeadingLevel from '../atoms/HeadingLevel.vue'
import TagColumn from '../molecules/TagColumn.vue'
import ButtonMaterial from '../atoms/ButtonMaterial.vue'

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
    ButtonMaterial,
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
export default class ArticlePosted extends mixins(DebugMixin) {
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

  /**
   * {@link ArticleTag} 型に変換する。
   *
   * `ArticleTag.value` はタグ検索ページとする。
   */
  get tags(): ArticleTag[] {
    return this.article.tags.map((tag) => ({
      name: tag,
      value: `/search/${tag}`,
    }))
  }

  /**
   * タグをクリックしたときに実行する関数。
   *
   * タグ検索のページに移動させる。
   *
   * ToDo
   */
  onClickTag(value: any) {
    //this.$router.push(value)

    console.log('Sorry, not implements.')
  }
}
</script>

<style lang="scss"></style>
