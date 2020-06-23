<template>
  <div>
    <HeadingLevel v-bind:value="{ level: 1, text: 'License' }" />
    <HeadingLevel v-bind:value="{ level: 2, text: 'Third-Party Licenses' }" />
    <div class="font-license mt-8">
      Using fonts:
      <slot name="font"></slot>
    </div>
    <div class="js-library">
      <div class="mt-8">{{ description }}</div>
      <LicenseYarnGenerated v-bind:licenses="splitLicense" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import HeadingLevel from '../atoms/HeadingLevel.vue'
import LicenseYarnGenerated from '../atoms/LicenseYarnGenerated.vue'
import { LicenseContent } from '@/models'

@Component({
  components: {
    HeadingLevel,
    LicenseYarnGenerated,
  },
})
export default class LicensePage extends Vue {
  /**
   * `yarn` から出力されたライセンス文。
   */
  @Prop() content!: string

  /**
   * 1行目の説明文を抽出。
   */
  get description() {
    return this.content.split('\n\n-----\n\n')[0]
  }

  /**
   * `yarn licenses generate-disclaimer --ignore-platform` で出力されたライセンス文を各ライブラリごとに分割する。
   */
  get splitLicense(): LicenseContent[] {
    // 1行目は除外する
    const contents = this.content.split('\n\n-----\n\n').slice(1)
    const pattern = /^The following software.*?\n\n/

    return contents.map((x) => {
      const descs = (x.match(pattern) ?? [''])[0].split('. ')
      const body = x.split(pattern)[1]

      return {
        desc: {
          lib: `${descs[0]}.`,
          source: `${descs[1]}`,
          notice: `${descs[2]}`,
        },
        body: body,
      }
    })
  }
}
</script>

<style></style>
