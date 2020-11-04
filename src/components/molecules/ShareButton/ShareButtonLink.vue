<template functional src="./ShareButtonIcon.html"></template>

<script lang="ts">
import { Component, mixins, Prop, Inject, Vue } from 'nuxt-property-decorator'
import { shareButtonFactory, ShareButtonInterface } from './ShareButtonFactory'
import { copyClipboardMixin } from '@/mixins/copyClipboardMixin'
import ButtonMaterialIcon from '../../atoms/ButtonMaterialIcon.vue'

// Material design Icon
const SvgIcon = Vue.extend({
  //template: '<span class="material-icons" v-bind:title="title">link</span>',
  props: { title: { type: String, required: false } },
  render: function render(createElement) {
    return createElement(
      'span',
      {
        class: 'material-icons',
        attrs: { title: this.title },
      },
      'link'
    )
  },
})

@Component
export default class ShareButtonLink
  extends mixins(shareButtonFactory('url'), copyClipboardMixin)
  implements ShareButtonInterface {
  /**
   * SVG画像につけるタイトル。
   */
  @Prop({ required: false, default: 'Copy url' }) title?: string

  // 使用するVueコンポーネントを注入
  @Inject({ default: { ButtonMaterialIcon, SvgIcon } })
  components!: any

  shareFullURL(url: string) {
    return ''
  }
}
</script>

<style lang="scss" scoped>
@use "material-colors/dist/colors.scss";

.share-button {
  --mdc-theme-text-primary-on-background: var(--mdc-theme-white);
  background-color: colors.$md-grey-700;
}
</style>
