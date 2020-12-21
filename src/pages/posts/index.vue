<template>
  <div>redirect to home.</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {
  async asyncData(ctx: Context) {
    return ctx.redirect('/')
  }
}
</script>
