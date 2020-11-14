<template>
  <top-page :contents="contents" :pageIndex="pageIndex" :route="route">
    <template v-slot:preamble>
      <div v-if="isFirstPage" class="mb-6">
        <span>Vtuberさんの感想とかプログラミングのメモとか書くブログ。</span>
      </div>
    </template>
  </top-page>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { join } from 'path'
import TopPage from '../components/templates/TopPage.vue'
import { PagingContent, PostFile, TopPageProps } from '@/models'
import { AsciidocParsed } from '~/modules/asciidocPresenter'

@Component({
  watchQuery: ['page'],
  // クエリパラメータでページネーション
  async asyncData(
    ctx
  ): Promise<TopPageProps.ContentsProp & TopPageProps.PaginationProp> {
    const page = parseInt(ctx.query.page?.toString() ?? '1', 10)
    const contents = await ctx.app.$asciidoc.filesByPage(page)
    const postRoute = join(ctx.route.path, 'posts')

    return {
      contents: contents.overviews,
      pageIndex: {
        num: contents.paging.current,
        total: contents.paging.total,
      },
      route: {
        pagination: postRoute,
        post: postRoute,
      },
    }
  },
  components: {
    TopPage,
  },
  head: () => {
    return {
      title: 'Home',
    }
  },
})
export default class Home extends Vue {
  pageIndex = { num: 1, total: 1 }

  get isFirstPage() {
    return this.pageIndex.num === 1
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS */
/*
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
