<template>
  <div class="contact">
    <contact-page
      :option="{ type: 'regular', destination: sendUrl }"
    ></contact-page>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ContactPage from '../../components/templates/ContactPage.vue'

@Component({
  components: {
    ContactPage,
  },
  head: () => {
    return {
      title: 'お問い合わせ',
    }
  },
})
export default class Contact extends Vue {
  // フォームの送信先URL
  // 一応のいたずら防止にエンコード
  get sendUrl() {
    const url =
      'aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5MVpvaU1Hd3ZwZlpIeVd3MVNsRlRrTzd2ZHhKZEh3OVQ2NWp5RHJfZTZZVjZtWXVaRy9leGVj'
    return Buffer.from(url, 'base64').toString()
  }
}
</script>

<style lang="scss" scoped></style>
