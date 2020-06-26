<template functional>
  <h1 class="text-4xl font-light" v-if="props.value.level === 1">{{ props.value.text }}</h1>
  <h2 class="text-3xl font-normal mt-8" v-else-if="props.value.level === 2">{{ props.value.text }}</h2>
  <h3 class="text-2xl font-semibold mt-6" v-else-if="props.value.level === 3">{{ props.value.text }}</h3>
  <h4 class="text-xl font-semibold mt-4" v-else-if="props.value.level === 4">{{ props.value.text }}</h4>
  <h5 class="text-lg font-semibold mt-4" v-else-if="props.value.level === 5">{{ props.value.text }}</h5>
  <h6
    class="text-base font-semibold mt-4"
    v-else-if="props.value.level === 6"
  >{{ props.value.text }}</h6>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { HeadingLevelType } from '@/models'

/**
 * 見出し（`<h1>` ～　`<h6>`）についてデザインを定義。
 *
 * `props`
 *
 * - `value` : {@link "HeadingLevelType"} 型の値。
 */
@Component
export default class HeadingLevel extends Vue {
  @Prop({ required: true })
  value!: HeadingLevelType
}
</script>

<style lang="scss">
</style>