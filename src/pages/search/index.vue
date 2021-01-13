<template>
  <search-page :contents="contents"></search-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { SearchProp } from '~/models/vueProperties/searchPageProps'
import SearchPage from '../../components/templates/SearchPage.vue'
import { fullUrl } from '~/helpers/functions'

@Component({
  components: {
    SearchPage,
  },
  watchQuery: ['page', 'tags'],
  async asyncData(ctx): Promise<Pick<SearchProp, 'contents'>> {
    // 全ての概要ページ
    const contents = await ctx.app.$asciidoc.filesByPage(0)

    /*
     * console.log(`isServer: ${process.server}`)
     * console.log(`Query: ${JSON.stringify(ctx.query)}`)
     * console.log(`ctx.route.path: ${ctx.route.fullPath}`)
     */

    return {
      contents,
    }
  },
  head() {
    return {
      title: '検索',
      link: [
        {
          rel: 'canonical',
          href: fullUrl(this.$route.path).replace(/\/$/, ''),
        },
      ],
    }
  },
})
export default class Search extends Vue {}
</script>

<style lang="scss" scoped></style>
