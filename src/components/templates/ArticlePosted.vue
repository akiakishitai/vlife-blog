<template>
  <div class="pb-6">
    <HeadingLevel :value="headingLevel" />
    <div class="mt-4">
      <TagColumn :tags="tags" @move-page="movePage" />
      <DatesDisplay class="flex justify-end" :item="article | dateFormats" />
    </div>

    <hr class="mt-2 border-grey-500" />

    <!-- 要素テスト用 -->
    <div v-if="isDebug(article.tags)" class="flex mt-4">
      <ButtonMaterial />
      <ButtonMaterial class="ml-4" :property="{ label: 'hoge' }" />
      <ButtonMaterial class="ml-4" :property="{ type: 'outlined' }" />
      <ButtonMaterial
        class="ml-4"
        :property="{ type: 'raised', icon: 'bookmark' }"
      />
    </div>
    <!-- 要素テスト終了 -->

    <!-- Markdown記事本文 -->
    <ArticleBody class="mt-6" :renderd="article.body" />

    <!-- シェアボタン -->
    <div class="share-buttons mt-8">
      <ShareButtonsBar
        class="items-center justify-center"
        :url="currentFullPath"
        :text="article.title"
      />
    </div>

    <!--
      前後記事へのナビゲーション
      作業途中・草案中の記事では表示しない。
    -->
    <ArticlePagination
      v-if="!isDebug(article.tags)"
      class="mt-6"
      :navigation="navigation"
    />
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop, Vue } from 'nuxt-property-decorator'
import dayjs from 'dayjs'
import {
  Article,
  ArticleNavigation,
  ArticlePageProps,
  ArticleTag,
  HeadingLevelType,
} from '@/models'
import { DebugMixin } from '@/mixins/debugMixin'

import ArticleBody from '../organisms/ArticleBody.vue'
import DatesDisplay from '../molecules/DatesDisplay.vue'
import HeadingLevel from '../atoms/HeadingLevel.vue'
import TagColumn from '../molecules/TagColumn.vue'
import ButtonMaterial from '../atoms/ButtonMaterial.vue'
import ArticlePagination from '../organisms/ArticlePagination.vue'
import ShareButtonsBar from '../organisms/ShareButtonsBar.vue'
import { AsciidocParsed } from '~/modules/asciidocPresenter'
import { LinkToSearchTags } from '~/mixins/linkToSearchTags'

/**
 * _Markdown_ 記事テンプレート。
 *
 * `props`
 *
 * - `markdown` : _Markdown_ ファイルの内容を {@link "Content"} 型で格納する。
 * - `navigation` : 前後記事へのリンク
 */
@Component({
  components: {
    ArticleBody,
    ArticlePagination,
    DatesDisplay,
    HeadingLevel,
    ShareButtonsBar,
    TagColumn,
    ButtonMaterial,
  },
  filters: {
    dateFormats: function (pickDate: Pick<Article, 'createdAt' | 'updatedAt'>) {
      return {
        createdAt: dayjs(pickDate.createdAt).format('YYYY年MM月DD日'),
        updatedAt:
          pickDate.updatedAt != null
            ? dayjs(pickDate.updatedAt).format('YYYY年MM月DD日')
            : '',
      }
    },
  },
})
export default class ArticlePosted
  extends mixins(DebugMixin, LinkToSearchTags)
  implements ArticlePageProps.NavigationProp {
  /**
   * 投稿記事のソースファイルの内容。
   */
  @Prop({ required: true }) posted!: AsciidocParsed

  @Prop({ required: true }) navigation!: ArticleNavigation

  /**
   * 現在ページのフルパス。
   */
  @Prop({ required: true }) currentFullPath!: string

  /**
   * `props` の `posted` を `Article` 型へ変換する。
   */
  get article(): Article {
    return {
      body: this.fixInternalLink,
      title: this.posted.title?.toString() ?? 'undefined',
      tags: this.posted.tags,
      createdAt: new Date(this.posted.created_at),
      updatedAt:
        this.posted.updated_at != null
          ? new Date(this.posted.updated_at)
          : undefined,
      meta: {
        description: this.posted.description,
        author: this.posted.author,
        revision: this.posted.revision,
        revisionRemark: this.posted.revision_remark,
      },
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
      value: tag,
    }))
  }

  /**
   * 記事内の <a> タグの内部リンクをNuxtで動作するように修正する。
   *
   * Nuxtは<base> URLを書き換えるため、`v-html` で設定する<a>の相対パスが期待通りに動作しない。
   * よってこれを修正する。
   */
  get fixInternalLink() {
    const url = this.currentFullPath.split('/')
    const parent = url[0] + '//' + url.slice(2, -1).join('/')

    // ページ内遷移
    const hashPattern = new RegExp('(<a [^>]*href=")(#[^"]*)("[^>]*>)', 'g')
    const ast = this.posted.rendered.map(line => line.replace(
      hashPattern,
      `$1${new URL(this.currentFullPath).pathname}$2$3`
    ))

    // サイト内遷移
    const internal = new RegExp(
      '(<a [^>]*href=")([^/][^:]+/[^"]*)("[^>]*>)',
      'g'
    )
    const body = ast.join('\n').replace(internal, `$1${parent}/$2$3`)

    return body
  }
}
</script>

<style lang="scss"></style>
