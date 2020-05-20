<template>
  <ArticlePosted v-bind:markdown="prop" />
</template>

<script lang="ts">
import { ComponentOptions } from 'vue'
import fm from 'front-matter'
import { Attribute, Content } from '*.md'
import ArticlePosted from '@/components/templates/ArticlePosted.vue'

type Property = {
  prop: Content
}

const option: ComponentOptions<Vue> = {
  async asyncData(context): Promise<Property> {
    const md = await import('@/assets/markdowns/posts/demo.md')
    const post = fm<Attribute>(md.default)

    return {
      prop: {
        attribute: post.attributes,
        body: context.$markdownIt.render(post.body),
        frontMatter: post.frontmatter,
      },
    }
  },
  components: {
    ArticlePosted,
  },
}
// `export default` を使う必要あり
export default option
</script>

<style lang="scss" scoped>
//@import 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css';
</style>
