<template functional>
  <ul class="list-disc ml-6" v-if="$options.methods.split(props.text).length > 0">
    <li class="mt-8" v-for="(item, index) in $options.methods.split(props.text)" v-bind:key="index">
      <div v-for="(elem, idx) in item.desc" v-bind:key="idx">{{ elem }}</div>
      <pre class="whitespace-pre-wrap bg-gray-300 mt-4">{{ item.body }}</pre>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { splitLicense } from '@/helpers/functions'

@Component
export default class LicenseYarnGenerated extends Vue {
  /**
   * `yarn` から出力されたライセンス文
   */
  @Prop({ required: true }) text!: string

  /**
   * 各ライブラリごとに分割する
   */
  split(text: string) {
    return splitLicense(text)
  }
}
</script>

<style>
</style>