<template>
  <TopPage
    v-bind:contents="contents"
    v-bind:paging="paging"
    v-bind:postRoute="route"
  >
    <template v-slot:preamble>
      <div v-if="paging.current === 1" class="mb-6">
        <span>Vtuberさんの感想とかプログラミングのメモとか書くブログ。</span>
      </div>
    </template>
  </TopPage>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { join } from 'path'
import TopPage from '../components/templates/TopPage.vue'
import { PagingContent, PostFile } from '@/models'
import { AsciidocParsed } from '~/modules/asciidocPresenter'

@Component({
  watchQuery: ['page'],
  // クエリパラメータでページネーション
  async asyncData(
    ctx
  ): Promise<PagingContent<Omit<AsciidocParsed, 'rendered'>>> {
    // 1ページあたりの表示件数
    const count = 20

    const page = ctx.query.page?.toString() ?? '1'
    const contents = await ctx.app.$asciidoc.filesByPage(parseInt(page, 10))

    return {
      contents: contents.overviews,
      paging: {
        current: contents.paging.current,
        pages: [...new Array(contents.paging.total)].map((_, i) => i + 1),
      },
      route: join(ctx.route.path, 'posts'),
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
export default class Home extends Vue {}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS */
/*
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
