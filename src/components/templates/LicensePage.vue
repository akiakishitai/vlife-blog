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
      <LicenseYarnGenerated v-bind:text="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import HeadingLevel from '../atoms/HeadingLevel.vue'
import LicenseYarnGenerated from '../atoms/LicenseYarnGenerated.vue'

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
}
</script>

<style></style>
