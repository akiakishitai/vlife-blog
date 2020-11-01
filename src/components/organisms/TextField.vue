<template>
  <validation-provider
    class="validation-provider w-3/4 max-w-4xl"
    v-bind:rules="rules"
    v-slot="{ errors, valid, invalid, touched, failed, required }"
  >
    <label
      class="mdc-text-field mdc-text-field--outlined mdc-text-field--label-floating w-full"
      v-bind:class="{
        'mdc-text-field--focused': isFocus,
        'mdc-text-field--invalid': invalid && touched,
        'mdc-text-field--textarea': isTextArea,
      }"
    >
      <!-- 入力欄 -->
      <span v-if="isTextArea" class="mdc-text-field__resizer w-full">
        <textarea
          class="mdc-text-field__input"
          v-bind:name="inputAttrs.name"
          v-bind:placeholder="inputAttrs.placeholder || false"
          v-bind:value="inputData"
          v-on:input="$emit('update:inputData', $event.target.value)"
          v-on:focus="isFocus = true"
          v-on:blur="isFocus = false"
          rows="6"
        >
        </textarea>
      </span>
      <input
        v-else
        type="text"
        class="mdc-text-field__input"
        v-bind:name="inputAttrs.name"
        v-bind:placeholder="inputAttrs.placeholder || false"
        v-bind:value="inputData"
        v-on:input="$emit('update:inputData', $event.target.value)"
        v-on:focus="isFocus = true"
        v-on:blur="isFocus = false"
      />

      <text-field-outline-label
        v-bind:label="label + (label.length > 0 && required ? ' *' : '')"
        v-bind:isAdobe="isFocus || valid"
      />
    </label>

    <div v-if="failed" class="flex text-red-800 mt-2">
      <span class="material-icons inline-flex items-center text-lg px-1"
        >error_outline</span
      >
      <span class="inline-flex items-center text-sm">{{ errors[0] }}</span>
    </div>
  </validation-provider>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'
import TextFieldOutlineLabel from '../atoms/TextFieldOutlineLabel.vue'
import { InputAttribute } from '../../models'

@Component({
  components: {
    ValidationProvider,
    TextFieldOutlineLabel,
  },
  data: () => {
    return {
      // 入力欄へのフォーカス状態
      isFocus: false,
    }
  },
})
export default class TextField extends Vue {
  /**
   * HTMLの<input> タグの属性値
   */
  @Prop({ required: true }) inputAttrs!: InputAttribute

  /**
   * ラベル
   */
  @Prop({ required: false, default: '' }) label!: string

  /**
   * ValidationProvider のルール
   */
  @Prop({ required: true }) rules!: string

  /**
   * 入力値
   */
  @Prop({ required: false, default: '' }) inputData!: string

  /** テキストエリアかどうかのフラグ */
  @Prop({ required: false, default: false }) isTextArea!: boolean
}
</script>

<style lang="scss">
@use "@material/floating-label/mdc-floating-label";
@use "@material/line-ripple/mdc-line-ripple";
@use "@material/notched-outline/mdc-notched-outline";
@use "@material/textfield";

@include textfield.core-styles;
@include textfield.floating-label-float-transition(2000);

.mdc-text-field--outlined {
  @include textfield.hover-outline-color(var(--mdc-theme-secondary));
}

.mdc-text-field--textarea.w-full {
  @apply w-full;
}

.is-required {
  .mdc-floating-label::after {
    content: '*';
  }
}
</style>
