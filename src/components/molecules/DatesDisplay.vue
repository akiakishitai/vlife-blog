<template functional>
  <div v-bind:class="[data.class, data.staticClass]">
    <component
      v-bind:is="injections.components.DatePrefixIcon"
      v-if="props.item.createdAt.isNotEmpty()"
      v-bind:item="{ type: 'create', date: props.item.createdAt }"
    ></component>
    <component
      v-bind:is="injections.components.DatePrefixIcon"
      v-if="props.item.updatedAt.isNotEmpty()"
      v-bind:class="{ 'ml-2': props.item.createdAt.isNotEmpty() }"
      v-bind:item="{ type: 'update', date: props.item.updatedAt }"
    ></component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import DatePrefixIcon from '../atoms/DatePrefixIcon.vue'
import { Article } from '../../models'
import '@/helpers/string.extension'

/**
 * 作成日と更新日を並べて表示する関数型コンポーネント。
 *
 * ## props
 *
 * - `item` : フォーマット済みの作成日と更新日を格納
 */
@Component({
  components: {
    DatePrefixIcon,
  },
  inject: {
    components: {
      default: {
        DatePrefixIcon,
      },
    },
  },
})
export default class DatesDisplay extends Vue {
  /**
   * フォーマット済みの作成日と更新日を格納する。
   *
   * 空文字の場合はDOM表示しない。
   */
  @Prop({ required: true }) readonly item!: Record<
    keyof Pick<Article, 'createdAt' | 'updatedAt'>,
    string
  >
}
</script>

<style>
</style>