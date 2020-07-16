<template>
  <ArticlePosted
    v-bind:markdown="prop"
    v-bind:navigation="navi"
    v-bind:currentFullPath="currentPath"
  />
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue'
import fm from 'front-matter'
import { Attribute, Content } from '*.md'
import { posts } from '@/assets/markdowns/posts/postlist.json'
import ArticlePosted from '@/components/templates/ArticlePosted.vue'
import { naviArticleFrontBack } from '@/helpers/functions'
import { ArticleNavigation } from '../../../models'
import { DebugMixinMethod } from '@/mixins/debugMixin'

type Property = {
  prop: Content
  navi: ArticleNavigation
  currentPath: string
}

export default Vue.extend({
  /**
   * Markdownファイル名とパラメータ `slug` を照合。
   */
  async validate(ctx) {
    return posts.some((x) => x.filename_noext === ctx.params.slug)
  },
  /**
   * Markdownファイルを読み込んでフロントマターを解析したものを返す。
   *
   * `body` については _markdown-it_ でレンダリングする。
   */
  async asyncData(context): Promise<Property> {
    const md: typeof import('*.md') = await import(
      `@/assets/markdowns/posts/${context.params.slug}.md`
    )
    const post = fm<Attribute>(md.default)

    const navi = naviArticleFrontBack(
      context.route.path,
      posts
        .filter((x) => !DebugMixinMethod.isDebug(x.tags))
        .map((x) => {
          return { filename: x.filename_noext, title: x.title }
        })
    )

    //console.log(`navi: { prev: ${navi.prev}, next: ${navi.next} }`)

    return {
      prop: {
        attribute: post.attributes,
        body: context.$markdownIt.render(post.body),
        frontMatter: post.frontmatter,
      },
      navi: navi,
      currentPath: context.route.fullPath,
    }
  },
  mounted() {
    this.$prism.highlightAll()
  },
  components: {
    ArticlePosted,
  },
  head() {
    const prop = ((this as any) as Property).prop
    return {
      title: prop.attribute.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: prop.attribute.tags.join(','),
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
