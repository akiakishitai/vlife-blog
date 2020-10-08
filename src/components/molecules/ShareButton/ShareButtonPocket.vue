<template functional src="./ShareButtonIcon.html"></template>

<script lang="ts">
import { Component, mixins, Prop, Inject } from 'nuxt-property-decorator'
import { shareButtonFactory, ShareButtonInterface } from './ShareButtonFactory'
import { SvgImagePocket as SvgIcon } from '../../atoms/SvgImageConcretes'
import ButtonMaterialIcon from '../../atoms/ButtonMaterialIcon.vue'

@Component
export default class ShareButtonPocket
  extends mixins(shareButtonFactory('pocket'))
  implements ShareButtonInterface {
  /**
   * SVG画像につけるタイトル。
   */
  @Prop({ required: false, default: 'Save' }) title?: string

  // 使用するVueコンポーネントを注入
  @Inject({ default: { ButtonMaterialIcon, SvgIcon } })
  components!: any
}
</script>

<style lang="scss" scoped>
.share-button {
  --mdc-theme-text-primary-on-background: var(--mdc-theme-white);
  background-color: #ef3f56;
}
</style>
