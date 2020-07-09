import { Component, Prop, Vue } from 'nuxt-property-decorator'

/**
 * SNSでシェアするための共通コンポーネント。
 *
 * ## Props
 *
 * - `url` string
 * - `text` string?
 *
 * ## Methods
 *
 * - `shareFullURL(url, text)`
 *
 */
export interface ShareButtonInterface {
  /**
   * ページタイトルを想定。
   */
  readonly text?: string

  /**
   * そのページURL。
   */
  readonly url: string

  /**
   * SNSのシェア用URL（パラメータを含む）を生成して返す。
   *
   * @param url シェア対象であるページのURL
   * @param text Twitter用の自動挿入する文章。主にページタイトル。
   */
  shareFullURL(url: string, text?: string): string
}

/**
 * シェアするSNSの種類。
 * `url` は `TEXT: PAGE_URL` のフォーマットを返す。
 */
export type ShareType = 'twitter' | 'facebook' | 'pocket' | 'url'

// シェア用の基本URLとクエリパラメータを生成する関数を含む
interface ShareLink {
  base: string
  query(url: string, text?: string): URLSearchParams
}

/**
 * SNSの種類ごとのシェアボタン用の _Vue Mixin_ を生成する関数。
 *
 * @param type 各SNSの種類。
 */
export function shareButtonFactory(type: ShareType) {
  // 各SNSごとのクエリを生成する関数を返す
  const queryCreateMap = new Map<ShareType, ShareLink>([
    [
      'twitter',
      {
        base: 'https://twitter.com/intent/tweet',
        query: (url, text) => new URLSearchParams(`text=${text}&url=${url}`),
      },
    ],
    [
      'facebook',
      {
        base: 'https://www.facebook.com/sharer/sharer.php',
        query: (url) => new URLSearchParams(`u=${url}`),
      },
    ],
    [
      'pocket',
      {
        base: 'https://getpocket.com/edit',
        query: (url) => new URLSearchParams(`url=${url}`),
      },
    ],
    [
      'url',
      {
        base: '',
        query: (url) => new URLSearchParams(),
      },
    ],
  ])

  // {type} SNS のシェア用URL
  const share = queryCreateMap.get(type)

  @Component
  class ShareButton extends Vue implements ShareButtonInterface {
    @Prop({
      required: false,
    })
    text?: string

    @Prop({
      required: true,
    })
    url!: string

    shareFullURL(url: string, text?: string): string {
      if (share == null) {
        throw new Error(`Wrong share type: ${type}`)
      }

      if (type === 'url') {
        return url
      }

      const param = share.query(url, text)
      return `${share.base}?${param.toString()}`
    }
  }

  return ShareButton
}
