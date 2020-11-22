<template>
  <footer class="footerbar">
    <ul class="flex justify-center items-center">
      <li><nuxt-link class="p-2 block" to="/">Home</nuxt-link></li>
      <li>
        <nuxt-link class="p-2 block" to="/contact">お問い合わせ</nuxt-link>
      </li>
      <li>
        <nuxt-link class="p-2 block" to="/privacy-policy"
          >プライバシーポリシー</nuxt-link
        >
      </li>
      <li class="mx-4 absolute right-0">
        <a class="p-2 block" href="/feeds/atom.xml" title="atom 1.0">
          <span class="material-icons">rss_feed</span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class FooterBar extends Vue {}
</script>

<style lang="scss" scoped>
.footerbar {
  @apply bg-grey-800;
  @apply text-xs;
  @apply py-6;
  @apply w-full;

  color: var(--mdc-theme-text-primary-on-dark);

  li:hover {
    @apply bg-grey-700;
    @apply rounded;
  }
}
</style>
