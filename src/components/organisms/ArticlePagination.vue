<template functional>
  <ul
    class="grid grid-cols-2 gap-12 border-t border-b border-grey-500 py-2"
    v-bind:class="[data.class, data.staticClass]"
  >
    <!-- 次の記事 -->
    <li
      class="flex items-center justify-end"
      v-bind:class="{'text-grey-500 text-opacity-87': props.navigation.next.path.isEmpty()}"
    >
      <component
        class="inline-flex justify-center px-4"
        v-bind:is="injections.components.LinkWrapper"
        v-bind:href="props.navigation.next.path"
        v-bind:disabled="props.navigation.next.path.isEmpty()"
      >
        <template v-slot:default>
          <span>{{ props.navigation.next.title }}</span>
        </template>
      </component>
      <span class="material-icons transform rotate-180">double_arrow</span>
    </li>
    <!-- 前の記事 -->
    <li
      class="flex items-center fustify-start"
      v-bind:class="{'text-grey-500 text-opacity-87': props.navigation.prev.path.isEmpty()}"
    >
      <span class="material-icons">double_arrow</span>
      <component
        class="inline-flex justify-center px-4"
        v-bind:is="injections.components.LinkWrapper"
        v-bind:href="props.navigation.prev.path"
        v-bind:disabled="props.navigation.prev.path.isEmpty()"
      >
        <template v-slot:default>
          <span>{{ props.navigation.prev.title }}</span>
        </template>
      </component>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'nuxt-property-decorator'
import { ArticlePageProps, ArticleNavigation } from '../../models'
import '../../helpers/string.extension'
import LinkWrapper from '../atoms/LinkWrapper.vue'

@Component({})
export default class ArticlePagination extends Vue
  implements ArticlePageProps.NavigationProp {
  @Prop({ required: true }) navigation!: ArticleNavigation

  @Inject({ default: { LinkWrapper } }) components!: {
    [key: string]: typeof Vue
  }
}
</script>

<style lang="scss">
</style>