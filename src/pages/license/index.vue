<template>
  <div>
    <LicensePage v-bind:content="license.library">
      <template v-slot:font>
        <ul class="list-disc ml-6">
          <li class="mt-8">
            Material Design icons: Licensed under
            <LinkWrapper href="https://www.apache.org/licenses/LICENSE-2.0"
              >Apache license version 2.0</LinkWrapper
            >.
          </li>
        </ul>
      </template>
      <template v-slot:icon>
        <ul class="list-disc ml-6">
          <li class="mt-8">
            Simple Icons: Licensed under
            <LinkWrapper
              href="https://creativecommons.org/publicdomain/zero/1.0/"
              >CC0 1.0 Universal</LinkWrapper
            >.
          </li>
        </ul>
      </template>
    </LicensePage>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { MetaInfo } from 'vue-meta'
import LicensePage from '@/components/templates/LicensePage.vue'
import LinkWrapper from '@/components/atoms/LinkWrapper.vue'
import { noindex } from '~/helpers/globals'

@Component({
  components: {
    LicensePage,
    LinkWrapper,
  },
})
export default class License extends Vue {
  async asyncData(ctx: Context) {
    const $http: import('@nuxt/http').NuxtHTTPInstance = ctx.$http
    const res = await $http.get('/txt/thirdparty_license.txt')
    const license = await res.text()

    return {
      license: {
        library: license,
      },
    }
  }

  head(): MetaInfo {
    return {
      title: 'License',
      meta: [noindex],
    }
  }
}
</script>

<style></style>
