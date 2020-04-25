<template functional>
  <div>
    <span>{{ props.tag }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

/**
 * タグのチップ表示を定義。
 */
@Component
export default class TagChip extends Vue {
  /**
   * タグ名
   */
  @Prop() tag!: string
}
</script>

<style></style>
