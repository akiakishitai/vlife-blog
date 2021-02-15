<template functional>
  <ul class="flex items-center">
    <li class="flex" data-action="first">
      <component
        v-bind:is="injections.components.LinkButtonPagination"
        v-bind:disabled="props.paging.current === 1"
        v-bind:href="$options.methods.pager(props.route, 1)"
        mode="first"
      />
    </li>
    <li class="flex" data-action="prev">
      <component
        v-bind:is="injections.components.LinkButtonPagination"
        v-bind:disabled="props.paging.current === 1"
        v-bind:href="$options.methods.pager(props.route, props.paging.prev)"
        mode="prev"
      />
    </li>
    <li
      v-for="(item, index) in props.paging.pages"
      v-bind:key="index"
      class="ml-2"
      v-bind:data-action="`move-${item}`"
    >
      <component
        v-bind:is="injections.components.LinkButtonPagination"
        v-bind:disabled="props.paging.current === item"
        v-bind:href="$options.methods.pager(props.route, item)"
        v-bind:mode="{ page: item }"
      />
    </li>
    <li class="flex ml-2" data-action="next">
      <component
        v-bind:is="injections.components.LinkButtonPagination"
        v-bind:disabled="props.paging.current === props.paging.pages.length"
        v-bind:href="$options.methods.pager(props.route, props.paging.next)"
        mode="next"
      />
    </li>
    <li class="flex" data-action="last">
      <component
        v-bind:is="injections.components.LinkButtonPagination"
        v-bind:disabled="props.paging.current === props.paging.pages.length"
        v-bind:href="
          $options.methods.pager(props.route, props.paging.pages.length)
        "
        mode="last"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'nuxt-property-decorator'
import { Paging } from '@/models'
import LinkButtonPagination from '../molecules/LinkButtonPagination.vue'
import { encodePathURI } from '~/helpers/functions'
import '~/helpers/string.extension'

@Component
export default class Pagination extends Vue {
  /**
   * 現在ページおよびすべてのページ番号を格納。
   */
  @Prop({ required: true }) paging!: Paging

  /**
   * 表示ページのルートパス。
   */
  @Prop({ required: true }) route!: string

  /**
   * 参照するコンポーネント
   */
  @Inject({ default: { LinkButtonPagination } }) components!: {
    default: Object
  }

  /**
   * ページ移動先URLを返す。
   */
  pager(route: string, page: number): string {
    if (/^\/search/.test(route)) {
      // クエリパラメータを考慮する
      const spliting = route.split('?')
      const path = spliting[0]
      const query = spliting[1]?.replace(/\s+/, '+')

      const params = new URLSearchParams(query)
      // 既存の page クエリは削除して置き換える
      if (params.has('page')) {
        params.delete('page')
      }
      params.append('page', page.toString())

      return `${path}?${params.toString()}`
    } else {
      return [route.replace(/\/?\?.*$/, ''), page.toString()].join('/')
    }
  }
}
</script>

<style></style>
