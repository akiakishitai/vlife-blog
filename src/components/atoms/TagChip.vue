<template functional>
  <div class="flex items-center" v-bind:class="[data.class, data.staticClass]">
    <span class="material-icons text-lg opacity-87">local_offer</span>
    <div class="pl-1">{{ props.tag }}</div>
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
