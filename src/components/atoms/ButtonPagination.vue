<template functional>
  <div
    v-if="props.property.icon == null"
    class="mdc-button pagination-btn"
    v-bind:class="[data.class, data.staticClass, { disabled: props.property.isDisabled }]"
  >
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">{{ props.property.page }}</span>
  </div>
  <div
    v-else
    class="mdc-icon-button material-icons pagination-icon"
    v-bind:class="{ disabled: props.property.isDisabled }"
  >{{ props.property.icon }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

/**
 * ページネーション用に調整したボタンを提供するコンポーネント。
 */
@Component
export default class ButtonPagination extends Vue {
  @Prop() property!: {
    /**
     * `true` の場合に `disabled` 属性をつける。
     */
    isDisabled: boolean

    /**
     * ページ番号
     */
    page?: number

    /**
     * Materialアイコン名。
     * Material Icons(https://material.io/resources/icons) の利用を前提とする。
     */
    icon?: string
  }
}
</script>

<style lang="scss" scoped>
@use 'material_theme.scss' as theme;
@use '@material/button/mdc-button';
@use '@material/button';
@use "@material/icon-button" as icon;

.pagination-btn {
  @include button.ink-color(rgba(black, 0.87));
  @include button.disabled-ink-color(rgba(black, 0.54));
  min-width: 40px;
  --mdc-typography-button-font-size: 1.25rem;

  &.disabled {
    @apply bg-grey-400 bg-opacity-54;
  }
}

.pagination-icon {
  @include icon.icon-size(32px, 32px, 4px);
  @include icon.ink-color(rgba(black, 0.87));
  @include icon.disabled-ink-color(rgba(black, 0.38));

  &.disabled {
    @include icon.ink-color(rgba(theme.$md-grey-600, 0.87));
  }
}
</style>
