<template functional>
  <div class="policy-section">
    <heading-level
      class="section_title"
      v-bind:value="{ level: props.level, text: props.title }"
    />
    <div class="paragraph ml-4">
      <slot></slot>

      <ul
        class="list-disc ml-8 mt-4"
        v-if="props.items != null && props.items.length > 0"
      >
        <li v-for="(item, idx) in props.items" v-bind:key="idx">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import HeadingLevel from '../atoms/HeadingLevel.vue'

@Component({
  components: {
    HeadingLevel,
  },
})
export default class PolicySection extends Vue {
  /**
   * 見出しタイトル
   */
  @Prop({ required: true }) title!: string

  /**
   * 見出しレベル
   */
  @Prop({ required: false, default: 2 }) level?: number

  /**
   * 項目の箇条書き
   */
  @Prop({ required: false }) items?: string[]
}
</script>

<style lang="scss" scoped></style>
