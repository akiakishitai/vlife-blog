<template functional>
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    <span class="mdc-notched-outline__notch">
      <span
        v-if="props.label.length > 0"
        class="mdc-floating-label bg-surface px-2"
        v-bind:class="{
          'mdc-floating-label--float-above': props.isAdobe,
        }"
        >{{ props.label }}</span
      >
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class TextFieldOutlineLabel extends Vue {
  /**
   * プレースホルダーおよびラベル
   */
  @Prop({ required: false, default: '' }) label!: string

  /**
   * ラベルの退避状態
   */
  @Prop({ required: true, default: false }) isAdobe!: boolean
}
</script>

<style lang="scss" scoped>
.mdc-text-field--focused {
  .mdc-notched-outline__leading + .mdc-notched-outline__notch {
    @apply border-l-0 border-r-0;
  }
}
</style>
