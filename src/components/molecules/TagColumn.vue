<template functional>
  <div class="mdc-chip-set" role="table">
    <button
      v-for="(item, index) in $options.methods.skipEmpty(props.tags)"
      :key="index"
      type="button"
      @click="
        listeners['move-page']('/search', { page: '1', tags: item.value })
      "
    >
      <component
        v-bind:is="injections.components.TagChip"
        v-bind:tag="item.name"
        v-bind:value="item.value"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop, Vue } from 'nuxt-property-decorator'
import TagChip from '../atoms/TagChip.vue'
import '@/helpers/string.extension'
import { ArticleTag } from '@/models'
import * as search from '~/models/vueProperties/searchPageProps'
import { LinkToSearchTags } from '~/mixins/linkToSearchTags'

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
@Component({
  inject: {
    components: {
      default: {
        TagChip,
      },
    },
  },
})
export default class TagColumn extends mixins(LinkToSearchTags) {
  /**
   * タグの配列。
   */
  @Prop({ required: true })
  tags!: ArticleTag[]

  /**
   * 値が空白文字である要素を排除した配列を返す。
   */
  skipEmpty(strs: ArticleTag[]): ArticleTag[] {
    return strs.filter((value) => value.name.isNotEmpty())
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
