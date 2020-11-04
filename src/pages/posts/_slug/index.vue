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
import { join } from 'path'

type Property = {
  posted: AsciidocParsed
  navi: ArticleNavigation
  currentPath: string
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

    // base URL
    const baseUrl = process.env.NUXT_ENV_BASEURL ?? 'http://localhost:3000'

    return {
      posted: await asciidoc.content(ctx.params.slug),
      navi: naviFrontBack(
        (await asciidoc.filesByPage()).overviews,
        ctx.route.path
      ),
      currentPath: join(baseUrl, ctx.route.path),
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
