<template>
  <div class="flex flex-col justify-center items-center text-center mx-auto">
    <HeadingLevel v-bind:value="{ level: 1, text: 'Top' }" />
    <ul class="overview w-3/4">
      <li
        class="flex-row justify-start hover:bg-lime hover:bg-opacity-25 p-2 mt-6"
        v-for="(item, index) in contents"
        v-bind:key="index"
      >
        <OverviewArticle v-bind:content="item" />
      </li>
    </ul>
    <div class="opacity-75 hover:opacity-100 sticky bottom-0 py-4 mt-6">
      <Pagination v-bind:paging="paging" v-bind:route="route" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import HeadingLevel from '../atoms/HeadingLevel.vue'
import OverviewArticle from '../organisms/OverviewArticle.vue'
import Pagination from '../organisms/Pagination.vue'
import { Paging, PostFile, TopPageProps } from '@/models'

@Component({
  components: {
    HeadingLevel,
    OverviewArticle,
    Pagination,
  },
})
export default class TopPage extends Vue
  implements TopPageProps.ContentsProp, TopPageProps.PaginationProp {
  @Prop({ required: true }) contents!: PostFile[]

  @Prop({ required: true }) paging!: Paging

  @Prop({ required: true }) route!: string
}
</script>

<style lang="scss" scoped>
.pagination {
  @apply fixed bottom-0;
  @apply py-6;
}
</style>
