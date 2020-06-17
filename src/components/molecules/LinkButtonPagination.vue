<template functional>
  <component
    v-bind:is="injections.components.LinkWrapper"
    v-bind:href="props.href"
    v-bind:disabled="props.disabled"
  >
    <component
      v-bind:is="injections.components.ButtonPagination"
      v-bind:property="{isDisabled: props.disabled, ...$options.methods.propByPaging(props.mode)}"
    />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ButtonPagination from '../atoms/ButtonPagination.vue'
import LinkWrapper from '../atoms/LinkWrapper.vue'
import { PagingMode } from '../../models'
import { isObject } from '../../helpers/functions'

@Component({
  inject: {
    components: {
      default: {
        ButtonPagination,
        LinkWrapper,
      },
    },
  },
})
export default class LinkButtonPagination extends Vue {
  /**
   * リンク先URL。
   */
  @Prop({ required: true }) href!: string

  /**
   * ページング操作の種類。
   */
  @Prop({ required: true }) mode!: PagingMode

  /**
   * `true` の場合に `disabled` 属性をつける。
   */
  @Prop() disabled?: boolean

  /**
   * ページング操作ごとのページ番号もしくはMaterialアイコン名を返す。
   */
  propByPaging(mode: PagingMode) {
    if (isObject(mode)) {
      return mode
    }

    const iconDict = new Map<PagingMode, string>([
      ['first', 'first_page'],
      ['prev', 'chevron_left'],
      ['next', 'chevron_right'],
      ['last', 'last_page'],
    ])

    return { icon: iconDict.get(mode) ?? 'error' }
  }
}
</script>

<style>
</style>