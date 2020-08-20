<template>
  <ArticlePosted
    v-bind:posted="posted"
    v-bind:navigation="navi"
    v-bind:currentFullPath="currentPath"
  />
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue'
import ArticlePosted from '@/components/templates/ArticlePosted.vue'
import { ArticleNavigation } from '../../../models'
import { naviFrontBack } from './asyncData'
import { AsciidocParsed } from '~/modules/asciidocPresenter'

type Property = {
  posted: AsciidocParsed
  navi: ArticleNavigation
  currentPath: URL
}

export default Vue.extend({
  /**
   * AsciiDocファイル名とパラメータ `slug` を照合。
   */
  async validate(ctx) {
    return ctx.app.$asciidoc.hasFile(ctx.params.slug)
  },
  /**
   * Markdownファイルを読み込んでフロントマターを解析したものを返す。
   *
   * `body` については _markdown-it_ でレンダリングする。
   */
  async asyncData(ctx): Promise<Property> {
    const asciidoc = ctx.app.$asciidoc

    // ドメインホスト
    const host = process.server
      ? ctx.req?.headers?.host ?? process.env.NUXT_ENV_DOMAIN
      : window.location.host

    return {
      posted: await asciidoc.content(ctx.params.slug),
      navi: naviFrontBack(
        (await asciidoc.filesByPage()).overviews,
        ctx.route.path
      ),
      currentPath: new URL(
        ctx.route.path,
        `${process.env.NUXT_ENV_SCHEME}${host}`
      ),
    }
  },
  mounted() {
    this.$prism.highlightAll()
  },
  components: {
    ArticlePosted,
  },
  head() {
    const prop: AsciidocParsed = (this as any).posted
    return {
      title: prop.title.toString(),
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: prop.tags.join(','),
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
