import Vue from 'vue'

/**
 * SVGコンポーネントの設定プロパティ。
 */
export interface SvgOption {
  /**
   * SVG画像のタイトル
   */
  readonly title: string

  /**
   * SVG要素の `path`。図形のパス
   */
  readonly svgPath: string
}

/**
 * 特定のSVGアイコンを表すコンポーネントのインタフェース。
 */
export interface SvgSpecificComponent extends Omit<SvgOption, 'svgPath'> {
  /**
   * SVG要素の `path` を生成して返す。
   */
  svgPath(): string
}
