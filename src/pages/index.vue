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
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { MetaInfo } from 'vue-meta'
import TopPage from '../components/templates/TopPage.vue'
import { PostFile, TopPageProps } from '@/models'
import { AsciidocParsed } from '~/modules/asciidocPresenter'
import { noindex, postRoute } from '~/helpers/globals'

type PageUrl = { pageUrl: string }

@Component({
  watchQuery: ['page'],
  components: {
    TopPage,
  },
})
export default class Home extends Vue {
  pageIndex = { num: 1, total: 1 }

  /** `noindex` メタタグの有無を判定するフラグ。 */
  @Prop({ required: false, default: false }) noindex?: boolean

  get isFirstPage() {
    return this.pageIndex.num === 1
  }

  // ルートパラメータでページネーション
  async asyncData(
    ctx: Context
  ): Promise<(TopPageProps.ContentsProp & TopPageProps.PaginationProp) | void> {
    const id = ctx.route.params.id
    if (id === '1') {
      return ctx.redirect('/')
    }

    const page = parseInt(id ?? '1', 10)
    const contents = await ctx.app.$asciidoc.filesByPage(page)

    return {
      contents: contents.overviews,
      pageIndex: {
        num: contents.paging.current,
        total: contents.paging.total,
      },
      route: {
        pagination: '/page',
        post: postRoute,
      },
    }
  }

  head(): MetaInfo {
    const metaProperties: MetaInfo['meta'] = [
      {
        name: 'google-site-verification',
        content: 'kvmP84hGKCFAytrygXPyfzJ_V9LGD0N2t4O8UVMBsBw',
        hid: 'google-site-verification',
      },
    ]

    if (this.noindex) {
      metaProperties.push(noindex)
    }

    return {
      title: 'Home',
      meta: metaProperties,
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
