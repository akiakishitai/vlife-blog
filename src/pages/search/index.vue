<template>
  <search-page :contents="contents"></search-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { MetaInfo } from 'vue-meta'
import { SearchProp } from '~/models/vueProperties/searchPageProps'
import SearchPage from '../../components/templates/SearchPage.vue'
import { fullUrl } from '~/helpers/functions'
import { noindex } from '~/helpers/globals'

type PageUrl = { pageUrl: string }

@Component({
  components: {
    SearchPage,
  },
  watchQuery: ['page', 'tags'],
})
export default class Search extends Vue {
  async asyncData(
    ctx: Context
  ): Promise<Pick<SearchProp, 'contents'> & PageUrl> {
    // 全ての概要ページ
    const contents = await ctx.app.$asciidoc.filesByPage(0)

    /*
     * console.log(`isServer: ${process.server}`)
     * console.log(`Query: ${JSON.stringify(ctx.query)}`)
     * console.log(`ctx.route.path: ${ctx.route.fullPath}`)
     */

    return {
      contents,
      pageUrl: fullUrl(ctx.route.path),
    }
  }

  head(): MetaInfo {
    return {
      title: '検索',
      link: [
        {
          rel: 'canonical',
          href: this.$data.pageUrl,
        },
      ],
      meta: [
        // canonical 属性がGoogleで期待通りの動作をしてくれないので
        // 検索ページ自体の登録をブロック
        noindex,
      ],
    }
  }
}
</script>

<style lang="scss" scoped></style>
