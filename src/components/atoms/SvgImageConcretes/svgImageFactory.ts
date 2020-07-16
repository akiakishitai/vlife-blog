import { Component, Vue, Prop, Inject } from 'nuxt-property-decorator'
import { SimpleIcon } from 'simple-icons'
import { SvgSpecificComponent } from '~/models'
import SvgImage from '../SvgImage.vue'

/**
 * 引数に渡された `SimpleIcons` のアイコンごとに _Vue_ コンポーネントを生成して返す。
 *
 * 引数オブジェクトに必要なプロパティは、`path` 要素と16進数表記カラー `hex` 。
 *
 * ## Props
 *
 * - `title` SVG画像のタイトル名。
 *
 * @param icon `simple-icons` からのインポート
 */
export const SvgImageFactory = (
  icon: Pick<SimpleIcon, 'path' | 'hex'>
): typeof Vue => {
  @Component
  class Factory extends Vue implements SvgSpecificComponent {
    @Prop({ required: true }) title!: string

    svgPath() {
      return icon.path
    }

    /**
     * 関数型コンポーネント用に `inject` で子コンポーネントを注入。
     */
    @Inject({ default: { SvgImage } }) components!: typeof Vue
  }

  return Factory
}
