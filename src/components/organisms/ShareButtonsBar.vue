<template>
  <ul class="flex">
    <li
      class="share-button ml-4 first:ml-0"
      v-for="item of components"
      v-bind:key="item.id"
    >
      <component
        v-bind:is="item.component"
        class="rounded-md w-10 h-10 p-2"
        v-bind:url="url"
        v-bind:text="text"
        v-bind:title="item.title"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'nuxt-property-decorator'
import {
  ShareButtonInterface,
  ShareButtonFacebook,
  ShareButtonLink,
  ShareButtonPocket,
  ShareButtonTwitter,
} from '../molecules/ShareButton'

/** シェアボタン用のプロパティ */
interface ShareProperties {
  id: number
  component: typeof Vue
  title: string
}

@Component
export default class ShareButtonsBar
  extends Vue
  implements Omit<ShareButtonInterface, 'shareFullURL'> {
  @Prop({ required: true }) url!: string
  @Prop({ required: false }) text?: string

  /**
   * 利用するシェアボタンのコンポーネント連想配列を返す。
   */
  get components(): ShareProperties[] {
    return [
      { id: 0, component: ShareButtonTwitter, title: 'Twitter' },
      { id: 1, component: ShareButtonFacebook, title: 'Facebook' },
      { id: 2, component: ShareButtonPocket, title: 'Pocket' },
      { id: 3, component: ShareButtonLink, title: 'Copy URL' },
    ]
  }
}
</script>

<style lang="scss" scoped>
.share-button {
  &:hover {
    filter: brightness(1.2);
    transition: all 100ms 0s ease-in;
  }
}
</style>
