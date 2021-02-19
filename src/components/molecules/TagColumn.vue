<template functional>
  <div class="mdc-chip-set" role="table">
    <nuxt-link
      v-for="(item, index) in $options.methods.skipEmpty(props.tags)"
      :key="[item.value, index].join('-')"
      :to="$options.methods.target({ tags: item.value })"
    >
      <component
        :is="injections.components.TagChip"
        :tag="item.name"
        :value="item.value"
      />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Inject, mixins, Prop } from 'nuxt-property-decorator'
import { Location } from 'vue-router'
import TagChip from '../atoms/TagChip.vue'
import '@/helpers/string.extension'
import { ArticleTag } from '@/models'
import * as search from '~/models/vueProperties/searchPageProps'
import { LinkToSearchTags } from '~/mixins/linkToSearchTags'
import { searchRoute } from '~/helpers/globals'

/**
 * 複数タグの表示を定義。
 *
 * 空白文字のタグは非表示にする。
 *
 * ## props
 *
 * - `tags` : タグ名の配列。
 *
 * ## inject
 *
 * - `components.TagChip` : タグを1つ表示するコンポーネント。
 */
@Component
export default class TagColumn extends mixins(LinkToSearchTags) {
  /**
   * タグの配列。
   */
  @Prop({ required: true })
  tags!: ArticleTag[]

  // 使用するVueコンポーネントを注入
  @Inject({ default: { TagChip } }) components!: any

  /**
   * 値が空白文字である要素を排除した配列を返す。
   */
  skipEmpty(strs: ArticleTag[]): ArticleTag[] {
    return strs.filter((value) => value.name.isNotEmpty())
  }

  /**
   * `<nuxt-link>` のためにリンク先の情報を返す。
   */
  target(query?: Location['query'], params?: Location['params']): Location {
    return {
      // 検索ページへのリンク
      path: searchRoute,
      query,
      params,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@material/chips/mdc-chips";
@use "@material/chips";
@use "material-colors/dist/colors.scss";
@use "../../assets/css/scss/functions" as f;

.mdc-chip {
  @include chips.fill-color(transparent);
  @include chips.outline(2px, solid, var(--mdc-theme-primary-dark));
  @include chips.leading-icon-color(colors.$md-grey-700, 0.87);
}
</style>
