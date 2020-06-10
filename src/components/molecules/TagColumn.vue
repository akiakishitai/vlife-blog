<template functional>
  <div class="mdc-chip-set">
    <component
      v-bind:is="injections.components.TagChip"
      v-for="(item, index) in $options.methods.skipEmpty(props.tags)"
      v-bind:key="index"
      v-bind:tag="item.name"
      v-bind:value="item.value"
      v-on:click="listeners.click"
    ></component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import TagChip from '../atoms/TagChip.vue'
import '@/helpers/string.extension'
import { ArticleTag } from '@/models'

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
export default class TagColumn extends Vue {
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

<style lang-"scss" scoped>
@use "@material/chips/mdc-chips";
</style>