<template>
  <client-only>
    <top-page :contents="contentsByPage" :page-index="pageIndex" :route="route">
      <template v-slot:preamble>
        <div class="mt-6 w-7/12">
          <input-search
            :route-path="currentPath.path"
            :query="currentPath.query"
          />
        </div>
        <div v-if="matchPages.length === 0" class="not-found text-lg bold mt-6">
          検索条件に一致する記事が見つかりませんでした。
        </div>
      </template>
    </top-page>
  </client-only>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Route } from 'vue-router'
import { AsciidocOverview } from '~/modules/asciidocPresenter'
import * as search from '~/models/vueProperties/searchPageProps'
import { pagePostCount, postRoute } from '~/helpers/globals'
import '~/helpers/string.extension'
import TopPage from './TopPage.vue'
import InputSearch from '../organisms/InputSearch.vue'

@Component({
  components: {
    InputSearch,
    TopPage,
  },
})
export default class SearchPage extends Vue implements search.SearchProp {
  @Prop() contents!: AsciidocOverview

  /** 記事ページのルート相対パス */
  @Prop({ required: false, default: postRoute }) postPath!: string

  /** 現在ページの相対パス */
  @Prop({ required: true, validator: (value) => 'path' in value })
  currentPath!: Pick<Route, 'fullPath' | 'path' | 'params' | 'query'>

  get route() {
    return {
      pagination: this.currentPath.fullPath,
      post: this.postPath,
    }
  }

  /** 検索条件に一致した概要ページを返す */
  get matchPages() {
    const tags = this.tagSpliter().filter((x) => x.trim().isNotEmpty())
    // 空の場合はすべてのページを返す
    if (tags.length === 0) {
      return this.contents.overviews
    }

    // AND条件として考える
    return this.contents.overviews.filter((view) =>
      tags.every((tag) => view.tags.includes(tag))
    )
  }

  /** 検索に一致したコンテンツの内、当該ページ分のコンテンツを返す */
  get contentsByPage() {
    const count = pagePostCount
    const start =
      (pageNumber(this.currentPath.query.page?.toString()) - 1) * count
    return this.matchPages.slice(start, start + count)
  }

  get pageIndex(): { num: number; total: number } {
    const total = Math.ceil(Math.max(this.matchPages.length, 1) / pagePostCount)

    return {
      num: Math.min(pageNumber(this.currentPath.query.page?.toString()), total),
      total,
    }
  }

  /**
   * `tags` クエリパラメータを文字列配列に変換
   *
   * 区切り文字は空白または `+` （`%20` はNuxtが空白に置換してくれるみたい）
   */
  tagSpliter() {
    return (this.currentPath.query.tags?.toString() ?? '').split(/[\s\+]+/)
  }
}

// pageクエリ文字列を数値に変換。`undefined` ならば 1 とする。
function pageNumber(num?: string) {
  return parseInt(num?.toString() ?? '1', 10)
}
</script>

<style lang="scss" scoped></style>
