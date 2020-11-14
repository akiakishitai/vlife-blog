<template>
  <header class="mdc-top-app-bar relative">
    <div class="mdc-top-app-bar__row">
      <div
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      >
        <nuxt-link class="mdc-top-app-bar__title" to="/">Vがいる日々</nuxt-link>
      </div>
      <nav class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <ul class="flex">
          <li>
            <LinkItemOnAppBar
              class="mdc-top-app-bar__action-item p-2 rounded-t hover:bg-grey-500 hover:bg-opacity-15"
              href="/"
              v-bind:route="routePath"
              >Home</LinkItemOnAppBar
            >
          </li>
          <li class="ml-2">
            <LinkItemOnAppBar
              class="mdc-top-app-bar__action-item p-2 rounded-t hover:bg-grey-500 hover:bg-opacity-15"
              href="/license"
              v-bind:route="routePath"
              >License</LinkItemOnAppBar
            >
          </li>
        </ul>
        <ul class="flex ml-4">
          <li class="flex items-center">
            <a
              class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              href="https://twitter.com/akiakiS101"
              target="_blank"
            >
              <SvgImageTwitter title="Twitter account" />
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              href="https://github.com/akiakishitai/vlife-blog"
              target="_blank"
            >
              <SvgImageGithub title="Github source" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import LinkItemOnAppBar from '../atoms/LinkItemOnAppBar.vue'
import LinkWrapper from '../atoms/LinkWrapper.vue'
import { SvgImageGithub, SvgImageTwitter } from '../atoms/SvgImageConcretes'

@Component({
  components: {
    LinkWrapper,
    LinkItemOnAppBar,
    SvgImageTwitter,
    SvgImageGithub,
  },
})
export default class TopAppBar extends Vue {
  get routePath() {
    //console.log(`route path: ${this.$nuxt.$route.path}`)

    return this.$route.path
  }
}
</script>

<style lang="scss" scoped>
@use "@material/icon-button";
@use "@material/top-app-bar/mdc-top-app-bar";
@use "material-colors/dist/colors.scss";

@include icon-button.core-styles;

.mdc-top-app-bar.relative {
  position: relative;
  --mdc-theme-primary: #{colors.$md-grey-800};
  --mdc-theme-on-primary: var(--mdc-theme-text-primary-on-dark);
}
</style>
