<template>
  <privacy-policy />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import PrivacyPolicy from '../../components/templates/PrivacyPolicy.vue'

@Component({
  components: {
    PrivacyPolicy,
  },
  head: () => {
    return {
      title: 'プライバシーポリシー',
    }
  },
})
export default class index extends Vue {}
</script>

<style lang="scss" scoped></style>
