<template functional>
  <button
    class="mdc-button"
    v-bind:class="[
      {
        'mdc-button--outlined':
          $options.methods.updateProperty(props).type === 'outlined',
        'button-outlined-color':
          $options.methods.updateProperty(props).type === 'outlined',
        'mdc-button--raised':
          $options.methods.updateProperty(props).type === 'raised',
        'mdc-button--unelevated':
          $options.methods.updateProperty(props).type === 'unelevated',
      },
      data.class,
      data.staticClass,
    ]"
    v-bind="data.attrs"
  >
    <div class="mdc-button__ripple"></div>
    <i
      v-if="props.property.icon != null"
      class="material-icons mdc-button__icon"
      aria-hidden="true"
      >{{ $options.methods.updateProperty(props).icon }}</i
    >
    <span class="mdc-button__label">{{
      $options.methods.updateProperty(props).label
    }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ButtonAttribute } from '@/models'

const createButtonAttribute = (): ButtonAttribute => {
  return {
    label: 'default',
    type: 'raised',
  }
}

/**
 * _Material Design_ のボタン
 */
@Component
export default class ButtonMaterial extends Vue {
  /**
   * ボタンの内容について `Partial<ButtonAttribute>` 型で受け取る。
   */
  @Prop({
    default: createButtonAttribute,
    validator: (x) => {
      if (x instanceof Object) {
        return 'type' in x || 'label' in x
      }

      return false
    },
  })
  readonly property!: Partial<ButtonAttribute>

  /**
   * _props_ から値をアップデートする。
   *
   * @params toUpdate アップデートする _props_
   */
  updateProperty(toUpdate: {
    property: Partial<ButtonAttribute>
  }): ButtonAttribute {
    return { ...createButtonAttribute(), ...toUpdate.property }
  }
}
</script>

<style lang="scss" scoped>
@use '@material/button/mdc-button';
@use '@material/button';

.mdc-button {
  --mdc-theme-on-primary: var(--mdc-theme-text-primary-on-light);

  @apply font-semibold;
}

// ボタンのアウトラインカラー
// --mdc-theme-primary プロパティを変更することで色変更可能。
.button-outlined-color:not(:disabled) {
  //@include button.outline-color(var.$color-primary);
  --mdc-theme-primary: var(--mdc-theme-primary-dark);
  border-color: var(--mdc-theme-primary);

  @apply border-2;
}
</style>
