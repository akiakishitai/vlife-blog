<template functional>
  <nuxt-link
    v-bind:class="[data.class, data.staticClass]"
    v-bind:to="props.href"
    v-bind:exact="$options.methods.isRootExact(props.href, props.route)"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { LinkProps } from '@/models'

@Component
export default class LinkItemOnAppBar extends Vue
  implements LinkProps.ToLinkProp, LinkProps.RouteProp {
  @Prop({ required: true }) href!: string

  @Prop({ required: true }) route!: string

  /**
   * アクティブリンクの `exact` 属性の付与判定に用いる。
   *
   * リンク先が `/` かつ現在のルートパスが '/' でない場合に 'true' を返す。
   * これにより、パラメータがついている場合も許容する。
   */
  isRootExact(href: string, route: string): boolean {
    return href === '/' && route !== '/'
  }
}
</script>

<style lang="scss" scoped>
// アクティブリンク
.nuxt-link-active {
  @apply border-b-2 border-white border-opacity-54;
}
</style>