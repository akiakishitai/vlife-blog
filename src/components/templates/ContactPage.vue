<template>
  <div>
    <heading-level
      :value="{ level: 1, text: 'お問い合わせフォーム' }"
    ></heading-level>
    <contact-form
      class="mt-12"
      :type="option.type"
      :action="option.destination"
    ></contact-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ContactForm from '../organisms/ContactForm.vue'
import HeadingLevel from '../atoms/HeadingLevel.vue'

@Component({
  components: {
    ContactForm,
    HeadingLevel,
  },
})
export default class ContactPage extends Vue {
  /** 問い合わせフォーム用のプロパティ */
  @Prop({ required: true }) option!: {
    /** 問い合わせの種類 */
    type: import('../../../gas').ContactForm.ContactType
    /** 問い合わせデータの送り先(URL) */
    destination: string
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @apply text-center;
}
</style>
