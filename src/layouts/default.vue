<template>
  <div class="min-h-screen flex flex-col items-center mx-auto bg-background">
    <TopAppBar />
    <main class="container flex-grow text-black text-opacity-87 px-4">
      <nuxt class="mt-6" />
    </main>
    <footer-bar class="mt-8" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { redirectFromTailSlash } from '../middleware/redirect'
import FooterBar from '../components/organisms/FooterBar.vue'
import TopAppBar from '../components/organisms/TopAppBar.vue'

export default Vue.extend({
  components: {
    FooterBar,
    TopAppBar,
  },
  middleware: [redirectFromTailSlash],
})
</script>

<style lang="scss">
html {
  font-family: 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
}
</style>
