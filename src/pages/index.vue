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
import { Context } from '@nuxt/types'
import { MetaInfo } from 'vue-meta'
import { join } from 'path'
import TopPage from '../components/templates/TopPage.vue'
import { PagingContent, PostFile, TopPageProps } from '@/models'
import { AsciidocParsed } from '~/modules/asciidocPresenter'
import { fullUrl } from '~/helpers/functions'

type PageUrl = { pageUrl: string }

@Component({
  watchQuery: ['page'],
  components: {
    TopPage,
  },
})
export default class Home extends Vue {
  pageIndex = { num: 1, total: 1 }

  get isFirstPage() {
    return this.pageIndex.num === 1
  }

  // クエリパラメータでページネーション
  async asyncData(
    ctx: Context
  ): Promise<
    TopPageProps.ContentsProp & TopPageProps.PaginationProp & PageUrl
  > {
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
      pageUrl: fullUrl(ctx.route.path),
    }
  }

  head(): MetaInfo {
    return {
      title: 'Home',
      meta: [
        {
          name: 'google-site-verification',
          content: 'kvmP84hGKCFAytrygXPyfzJ_V9LGD0N2t4O8UVMBsBw',
          hid: 'google-site-verification',
        },
      ],
      link: [{ rel: 'canonical', href: this.$data.pageUrl ?? 'failed' }],
    }
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
