<template>
  <footer class="footerbar">
    <ul class="flex justify-center">
      <li><nuxt-link class="p-2 block" to="/">Home</nuxt-link></li>
      <li>
        <nuxt-link class="p-2 block" to="/privacy-policy"
          >プライバシーポリシー</nuxt-link
        >
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
