<template functional>
  <div class="flex">
    <component
      v-bind:is="injections.components.TagChip"
      v-for="(item, index) in $options.methods.skipEmpty(props.tags)"
      v-bind:key="index"
      v-bind:class="{'ml-1': index >= 1}"
      v-bind:tag="item"
    ></component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import TagChip from '../atoms/TagChip.vue'
import '@/helpers/string.extension'

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
   * タグ名の配列。
   */
  @Prop({ required: true })
  tags!: string[]

  /**
   * 値が空白文字である要素を排除した配列を返す。
   */
  skipEmpty(strs: string[]): string[] {
    return strs.filter((value) => value.isNotEmpty())
  }
}
</script>

<style>
</style>