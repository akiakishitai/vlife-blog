<template>
  <div class="flex items-center">
    <text-field
      label="Search"
      :input-data.sync="message"
      :input-attrs="{ name: '検索タグ' }"
      @keyup.enter.native="start(message)"
    />
    <div class="inline-flex items-center text-2xl w-12 h-12 ml-2">
      <button-material-icon :args="[message]" @click="start">
        search
      </button-material-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { Route, NavigationGuardNext } from 'vue-router'
import TextField from './TextField.vue'
import ButtonMaterialIcon from '../atoms/ButtonMaterialIcon.vue'

@Component({
  components: {
    ButtonMaterialIcon,
    TextField,
  },
})
export default class InputSearch extends Vue {
  /** 入力値 */
  message = ''

  /**
   * URLパス情報
   */
  @Prop({ required: true }) routePath!: string

  /**
   * 検索用のURLクエリパラメータ
   */
  @Prop({ required: true, default: {} }) query!: Record<'tags', string>

  /**
   * `query.tags` プロパティの変更を監視する。
   *
   * 親コンポーネントから `props` が更新された場合、
   * `watch` で監視していないと描画が更新されない。
   */
  @Watch('query.tags', { immediate: true })
  onUpdateQueryTags() {
    this.message = this.query.tags?.toString() ?? ''
  }

  /**
   * 検索開始
   */
  start(tag: string) {
    const url = this.routePath
    const params = new URLSearchParams(this.query)

    // ページは1に固定、タグ情報は更新
    params.set('page', '1')
    params.set('tags', tag)

    // ページ遷移
    this.$router.push({
      path: url,
      query: { tags: params.get('tags'), page: params.get('page') },
    })
  }
}
</script>

<style lang="scss" scoped></style>
