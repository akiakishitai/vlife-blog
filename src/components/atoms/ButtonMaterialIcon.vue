<template functional>
  <div>
    <div
      v-bind:is="props.href.isEmpty() ? 'button' : 'a'"
      class="material-icons mdc-icon-button"
      v-bind:class="[{ disabled: props.isDisabled }, data.class, data.staticClass]"
      v-bind:href="props.href.isNotEmpty() ? props.href : false"
      v-bind:target="props.href.isNotEmpty() ? '_blank' : false"
      v-on:click="props.href.isEmpty() ? listeners.click(...props.args) : () => ''"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import '@/helpers/string.extension'

/**
 * アイコンカラーは `--mdc-theme-text-primary-on-background` に準じる。
 */
@Component
export default class ButtonMaterialIcon extends Vue {
  /**
   * URLリンクを格納するプロパティで、この値が空文字でなければアイコンボタンを `<a>` タグとして機能させる。
   */
  @Prop({ required: false, default: '' }) href?: string

  /**
   * ボタン機能の無効化。デフォルトでは `false` 。
   */
  @Prop({ required: false, default: false }) isDisabled?: boolean

  /**
   * clickイベントに渡す引数
   */
  @Prop({ required: false }) args?: any[]
}
</script>

<style lang="scss" scoped>
@use "@material/icon-button";

@include icon-button.core-styles;

// 親要素のサイズに合わせる。
// カラーは `--mdc-theme-text-primary-on-background` を参照。
.mdc-icon-button {
  font-size: 1em;
  width: 100%;
  height: 100%;
  padding: min(0px, calc((100% - #{icon-button.$icon-size}) / 2));

  color: var(--mdc-theme-text-primary-on-background);

  &.disabled {
    --mdc-theme-text-primary-on-background: var(
      --mdc-theme-text-disabled-on-light
    );

    pointer-events: none;
  }
}
</style>
