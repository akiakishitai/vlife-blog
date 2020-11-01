<template>
  <validation-observer tag="div" v-slot="{ invalid }">
    <form class="flex flex-col items-center" @submit.prevent="onSubmit(now)">
      <text-field
        label="お名前（ニックネーム）"
        rules="required|max:127"
        :inputData.sync="contactData.name"
        :inputAttrs="{ name: 'お名前', placeholder: 'Nick Name' }"
      ></text-field>

      <text-field
        class="mt-6"
        label="e-mail（送信用）"
        rules="required|email|max:255"
        :inputData.sync="contactData.email"
        :inputAttrs="{ name: 'e-mail', placeholder: 'example@mail.com' }"
      ></text-field>

      <text-field
        class="mt-6"
        label="メッセージ"
        rules="required|max:8000"
        :isTextArea="true"
        :inputData.sync="contactData.message"
        :inputAttrs="{ name: 'メッセージ', placeholder: 'Please write here.' }"
      >
      </text-field>
      <span class="w-3/4 max-w-4xl text-grey-600">
        {{ contactData.message.length }} / 8000
      </span>

      <div class="flex items-center mt-8">
        <button-material
          type="submit"
          :property="{ label: 'Submit' }"
          :disabled="invalid || isSubmited"
        ></button-material>

        <div
          v-if="isSubmited"
          class="flex ml-4"
          :class="{
            'text-green-500': submitStatus,
            'text-red-500': !submitStatus,
          }"
        >
          <span class="material-icons inline-flex items-center text-xl px-1">
            {{ submitStatus ? 'check_circle' : 'cancel' }}
          </span>
          <span class="inline-flex items-center text-lg">{{
            submitResult
          }}</span>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
import TextField from './TextField.vue'
import ButtonMaterial from '../atoms/ButtonMaterial.vue'
import { defaultContactData } from '@/helpers/contact'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

@Component({
  components: {
    ValidationObserver,
    TextField,
    ButtonMaterial,
  },
  data() {
    return {
      contactData: defaultContactData(),
      submitStatus: false,
      isSubmited: false,
    }
  },
})
export default class ContactForm extends Vue {
  /**
   * 問い合わせの種類
   */
  @Prop({ required: false, default: 'regular' })
  type!: import('../../../gas').ContactForm.ContactType

  /**
   * 問い合わせデータの送り先
   */
  @Prop({ required: false, default: '' }) action!: string

  /**
   * フォーム送信の成否を文字列で返す。
   */
  get submitResult() {
    return this.$data.submitStatus ? 'success' : 'failed'
  }

  /**
   * 現在年月日時刻をISO形式の文字列で返す。
   */
  get now() {
    return dayjs().format()
  }

  /**
   * フォーム送信時に行う処理。
   *
   * フォームに入力されたデータをContactData型に変換し、送信先URLへ送信する。
   *
   * @param date 日付時刻
   */
  async onSubmit(date: string) {
    const data: import('../../../gas/index').ContactForm.ContactData = {
      ...this.$data.contactData,
      type: this.type,
      date,
    }

    // データ送信およびその成否を返す
    const status = await this.$http
      .post(this.action, JSON.stringify(data), {
        //headers: { 'content-type': 'application/json' },
        mode: 'cors',
      })
      .then((res) => res.json())
      .then((x) => x.success == true)
      .catch((err) => {
        console.error(`ERROR: ${err}`)
        return false
      })

    this.$data.submitStatus = status
    this.$data.isSubmited = true
  }
}
</script>

<style lang="scss" scoped></style>
