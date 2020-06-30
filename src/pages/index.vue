<template>
  <TopPage v-bind:contents="contents" v-bind:paging="paging" v-bind:route="route">
    <template v-slot:preamble>
      <div v-if="paging.current === 1" class="mb-6">
        <span>Vtuberさんの感想とかプログラミングのメモとか書くブログ。</span>
      </div>
    </template>
  </TopPage>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopPage from '../components/templates/TopPage.vue'
import { posts } from '@/assets/markdowns/posts/postlist.json'
import { PagingContent, PostFile } from '@/models'

@Component({
  watchQuery: ['page'],
  // クエリパラメータでページネーション
  asyncData(ctx): PagingContent<PostFile> {
    // ページ番号をクエリパラメータ `page` から取得。
    const page = Number.parseInt(ctx.query.page?.toString() ?? 1)
    //console.log(`page query: ${page}`)

    // 1ページあたりの表示件数
    const count = 20
    // 総ページ数
    const size = Math.ceil(posts.length / count)
    // ページに表示するコンテンツの配列の開始番号
    const start = (page - 1) * count

    return {
      contents: posts.slice(start, start + count),
      paging: {
        current: page,
        pages: [...new Array(size)].map((_, i) => i + 1),
      },
      route: ctx.route.path,
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
