<template>
  <ul class="flex">
    <li class="share-button ml-4 first:ml-0" v-for="item of components" v-bind:key="item.id">
      <component
        v-bind:is="item.component"
        class="rounded-md w-10 h-10 p-2"
        v-bind:url="url"
        v-bind:text="text"
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

@Component
export default class ShareButtonsBar extends Vue
  implements Omit<ShareButtonInterface, 'shareFullURL'> {
  @Prop({ required: true }) url!: string
  @Prop({ required: false }) text?: string

  /**
   * 利用するシェアボタンのコンポーネント連想配列を返す。
   */
  get components(): { id: number; component: typeof Vue; selector: string }[] {
    return [
      { id: 0, component: ShareButtonTwitter, selector: '' },
      { id: 1, component: ShareButtonFacebook, selector: '' },
      { id: 2, component: ShareButtonPocket, selector: '' },
      { id: 3, component: ShareButtonLink, selector: '' },
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