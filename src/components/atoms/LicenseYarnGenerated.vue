<template functional>
  <ul class="list-disc ml-6" v-if="props.licenses.length > 0">
    <li class="mt-8" v-for="(item, index) in props.licenses" v-bind:key="index">
      <div v-for="(elem, idx) in item.desc" v-bind:key="idx">{{ elem }}</div>
      <pre class="whitespace-pre-wrap bg-grey-300 p-4 mt-4">{{
        item.body
      }}</pre>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { LicenseContent } from '@/models'

@Component
export default class LicenseYarnGenerated extends Vue {
  /**
   * `yarn` から出力されたライセンス文を各ライブラリごとに分割したもの
   */
  @Prop({ required: true }) licenses!: LicenseContent[]
}
</script>

<style></style>
