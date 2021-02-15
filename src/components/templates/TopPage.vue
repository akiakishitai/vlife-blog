<template>
  <div class="flex flex-col justify-center items-center text-center mx-auto">
    <!-- 前置き -->
    <slot name="preamble"></slot>
    <!-- slot end. -->
    <ul class="overview w-3/4">
      <li
        class="flex-row justify-start hover:bg-primary hover:bg-opacity-15 p-2 mt-6"
        v-for="(item, index) in notDebugContents"
        v-bind:key="index"
      >
        <OverviewArticle v-bind:content="item" v-bind:route="route.post" />
      </li>
    </ul>
    <div class="opacity-75 hover:opacity-100 sticky bottom-0 py-4 mt-6">
      <Pagination v-bind:paging="pager" v-bind:route="route.pagination" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop, Vue } from 'nuxt-property-decorator'
import HeadingLevel from '../atoms/HeadingLevel.vue'
import OverviewArticle from '../organisms/OverviewArticle.vue'
import Pagination from '../organisms/Pagination.vue'
import { Paging, TopPageProps } from '@/models'
import { DebugMixin } from '@/mixins/debugMixin'

type PostOverview = TopPageProps.PostOverview

@Component({
  components: {
    HeadingLevel,
    OverviewArticle,
    Pagination,
  },
})
export default class TopPage
  extends mixins(DebugMixin)
  implements TopPageProps.ContentsProp, TopPageProps.PaginationProp {
  @Prop({ required: true }) contents!: PostOverview[]

  @Prop({ required: true }) pageIndex!: { num: number; total: number }

  @Prop({ required: true }) route!: { pagination: string; post: string }

  /**
   * デバッグ用以外の `contents` を返す。
   */
  get notDebugContents(): PostOverview[] {
    return this.contents.filter((x) => !this.isDebug(x.tags))
  }

  get pager(): Paging {
    // 1 以上 total 以下の数値
    const current = Math.min(
      Math.max(this.pageIndex.num, 1),
      this.pageIndex.total
    )
    const pages = [...new Array(this.pageIndex.total)].map((_, i) => i + 1)
    return {
      next: Math.min(current + 1, this.pageIndex.total),
      prev: Math.max(current - 1, 1),
      current,
      pages,
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  @apply fixed bottom-0;
  @apply py-6;
}
</style>
